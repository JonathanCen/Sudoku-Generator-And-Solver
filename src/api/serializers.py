from rest_framework import serializers
from .models import Sudoku

# Serializes incoming post request for solving sudokus


class SudokuSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Sudoku
        fields = ("user_session", "unsolved_sudoku_board",
                  "solved_sudoku_board")


class SolveSudokuRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sudoku
        fields = ("unsolved_sudoku_board", )


class SolveSudokuResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sudoku
        fields = ("solved_sudoku_board", )

# Serializes incoming post request for generating sudokus


class GenerateSudokuResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sudoku
        fields = ("unsolved_sudoku_board", )

# Serializes incoming get request for validating board


class ValidateSudokuResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sudoku
        fields = ("solved_sudoku_board", )
