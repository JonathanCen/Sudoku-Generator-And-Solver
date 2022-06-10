from django.shortcuts import render
from rest_framework import generics, status
from .serializers import SudokuSeralizer, SolveSudokuRequestSerializer, SolveSudokuResponseSerializer, GenerateSudokuResponseSerializer
from .models import Sudoku
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class SolveSudoku(APIView):
    request_serializer_class, response_serializer_class = SolveSudokuRequestSerializer, SolveSudokuResponseSerializer

    def solve_sudoku(self, board):
        """
        Returns a solved sudoku board
        """
        return board

    # Allows the user to retrieve the solved sudoku
    def post(self, request, format=None):
        # Possibly use a session key and store the solved sudoku
        # Whenever we generate a new board (we need to solve it first, so we can check if it's solved, if so then we can simply just return it)
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.request_serializer_class(data=request.data)
        print("REQUEST_DATA: ", request.data)
        if serializer.is_valid():
            unsolved_sudoku_board = serializer.data.get(
                'unsolved_sudoku_board')
            user_session_key = self.request.session.session_key
            query_set = Sudoku.objects.filter(user_session=user_session_key)

            # If the user exists in the database, then retrieve the solved board board or update the database
            if query_set.exists():
                print("User Exists!")
                # Get the sudoku query and the possible solved board
                sudoku_query = query_set[0]
                solved_sudoku_board = sudoku_query.solved_sudoku_board

                # If the stored unsolved board is not the same as the incoming unsolved board,
                # then solve the current board and store the solved and unsolved board back into the database
                if sudoku_query.unsolved_sudoku_board != unsolved_sudoku_board:
                    print("User Exists & board editted!")
                    print("new board: ", unsolved_sudoku_board)
                    print("old board: ", sudoku_query.unsolved_sudoku_board)
                    solved_sudoku_board = self.solve_sudoku(
                        unsolved_sudoku_board)
                    sudoku_query.unsolved_sudoku_board = unsolved_sudoku_board
                    sudoku_query.solved_sudoku_board = solved_sudoku_board
                    sudoku_query.save(
                        update_fields=['unsolved_sudoku_board', 'solved_sudoku_board'])

                response = {"solved_sudoku_board": solved_sudoku_board}
                # Return a serialized response back to the user
                return Response(self.response_serializer_class(response).data, status=status.HTTP_200_OK)

            # Else the user doesn't exist in the database, then create an entry in the database for the user
            else:
                print("User does not Exists!")
                solved_sudoku_board = self.solve_sudoku(unsolved_sudoku_board)
                sudoku_model = Sudoku(
                    user_session=user_session_key,
                    unsolved_sudoku_board=unsolved_sudoku_board,
                    solved_sudoku_board=solved_sudoku_board)
                sudoku_model.save()

                response = {"solved_sudoku_board": unsolved_sudoku_board}
                return Response(self.response_serializer_class(response).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class GenerateSudoku(APIView):
    response_serializer_class = GenerateSudokuResponseSerializer

    def convert_sudoku_grid_to_string(self, board):
        return str(board).replace(" ", "")

    def generate_sudoku(self):
        """
        Generates a new sudoku and returns a new board and solution to it
        """
        new_board = [
            [5, 3, -1, -1, 7, -1, -1, -1, -1],
            [6, -1, -1, 1, 9, 5, -1, -1, -1],
            [-1, 9, 8, -1, -1, -1, -1, 6, -1],
            [8, -1, -1, -1, 6, -1, -1, -1, 3],
            [4, -1, -1, 8, -1, 3, -1, -1, 1],
            [7, -1, -1, -1, 2, -1, -1, -1, 6],
            [-1, 6, -1, -1, -1, -1, 2, 8, -1],
            [-1, -1, -1, 4, 1, 9, -1, -1, 5],
            [-1, -1, -1, -1, 8, -1, -1, 7, 9]
        ]
        solved_board = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]
        return self.convert_sudoku_grid_to_string(new_board), self.convert_sudoku_grid_to_string(solved_board)

    # this will return back a new sudoku
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        user_session_key = self.request.session.session_key
        query_set = Sudoku.objects.filter(user_session=user_session_key)
        unsolved_sudoku_board, solved_sudoku_board = self.generate_sudoku()
        response = {"unsolved_sudoku_board": unsolved_sudoku_board}

        # if the user exists, then update the unsolved_sudoku_board
        if query_set.exists():
            sudoku_query = query_set[0]
            sudoku_query.unsolved_sudoku_board = unsolved_sudoku_board
            sudoku_query.solved_sudoku_board = solved_sudoku_board
            sudoku_query.save(
                update_fields=['unsolved_sudoku_board', 'solved_sudoku_board'])
            return Response(GenerateSudokuResponseSerializer(response).data, status=status.HTTP_200_OK)
        # If the user doesnt exist, then create a new entry
        else:
            sudoku_model = Sudoku(
                user_session=user_session_key,
                unsolved_sudoku_board=unsolved_sudoku_board,
                solved_sudoku_board=solved_sudoku_board)
            sudoku_model.save()
            return Response(GenerateSudokuResponseSerializer(response).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Cannot generate data...'}, status=status.HTTP_400_BAD_REQUEST)
