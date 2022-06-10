from django.db import models


def blank_board():
    num_rows, num_cols = 9, 9
    return f'{[[-1]*num_cols for _ in range(num_rows)]}'

# Create your models here.


class Sudoku(models.Model):
    user_session = models.CharField(max_length=50, unique=True)
    unsolved_sudoku_board = models.CharField(
        max_length=262, default=blank_board)
    solved_sudoku_board = models.CharField(max_length=262, default=blank_board)
    # Maybe store the session id and so when we generate a board, we already have a solved board at hand?
