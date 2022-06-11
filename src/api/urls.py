from django.urls import path
from .views import SolveSudoku, GenerateSudoku, ValidateSudoku, CheckIfValidSudoku

urlpatterns = [
    path("solve-sudoku", SolveSudoku.as_view()),
    path("generate-sudoku", GenerateSudoku.as_view()),
    path("validate-sudoku", ValidateSudoku.as_view()),
    path("check-if-valid-sudoku", CheckIfValidSudoku.as_view())
]
