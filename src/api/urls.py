from django.urls import path
from .views import SolveSudoku, GenerateSudoku

urlpatterns = [
    path('solve-sudoku', SolveSudoku.as_view()),
    path('generate-sudoku', GenerateSudoku.as_view())
]
