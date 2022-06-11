from django.urls import path
from .views import SolveSudoku, GenerateSudoku, ValidateSudoku

urlpatterns = [
    path('solve-sudoku', SolveSudoku.as_view()),
    path('generate-sudoku', GenerateSudoku.as_view()),
    path('validate-sudoku', ValidateSudoku.as_view())
]
