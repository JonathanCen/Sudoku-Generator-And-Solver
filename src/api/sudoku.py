from json import loads
from random import shuffle, randint, seed
from copy import deepcopy

"""
Solve Sudoku
"""


def find_all_candidates(board) -> []:
    """
    Find all the candidates of each row, column, and box
    """
    perfect_set = set([i for i in range(1, 10)])
    m, n = len(board), len(board[0])

    # find all candidates for each row
    row_candidates = {row: perfect_set - set(board[row]) for row in range(m)}

    # find all candidates for each column
    col_candidates = {col: perfect_set -
                      set([board[row][col] for row in range(m)]) for col in range(n)}

    # find all candidates for each sub-boxes
    sub_box_candidates = {}
    sub_box_rows, sub_box_cols = m//3, n//3
    for row in range(sub_box_rows):
        for col in range(sub_box_cols):
            sub_box = []
            for sub_box_row in range(3):
                sub_box.extend(board[(row*3)+sub_box_row][col*3: (col+1)*3])
            sub_box_candidates[(row, col)] = perfect_set - set(sub_box)

    return [row_candidates, col_candidates, sub_box_candidates]


def find_empty_cells(board) -> [int]:
    m, n = len(board), len(board[0])
    empty_cells = [(row, col) for row in range(m)
                   for col in range(n) if board[row][col] == -1]
    return empty_cells


def subBoxIndices(row, col) -> (int, int):
    return (row // 3, col // 3)


def removeCandidate(all_candidates, row, col, candidate) -> None:
    sub_box_row, sub_box_col = subBoxIndices(row, col)
    all_candidates[0][row].remove(candidate)
    all_candidates[1][col].remove(candidate)
    all_candidates[2][(sub_box_row, sub_box_col)].remove(candidate)


def addCandidate(all_candidates, row, col, candidate) -> None:
    sub_box_row, sub_box_col = subBoxIndices(row, col)
    all_candidates[0][row].add(candidate)
    all_candidates[1][col].add(candidate)
    all_candidates[2][(sub_box_row, sub_box_col)].add(candidate)


def solveSudokuHelper(board, all_candidates, empty_cells, empty_cell_index, shuffle_candidates=False) -> bool:
    """
    Recursive function that does all the backtracking
    """
    # Check if there are any empty cells left to fill up, otherwise return True
    if empty_cell_index == len(empty_cells):
        return True

    # Get the row, col, sub_box_row, sub_box_col of current cell
    row, col = empty_cells[empty_cell_index]
    sub_box_row, sub_box_col = subBoxIndices(row, col)

    # Generate all the candidates for this cell
    candidates = list(all_candidates[0][row] & all_candidates[1][col] & all_candidates[2][(
        sub_box_row, sub_box_col)])

    if shuffle_candidates:
        shuffle(candidates)

    # Iterate through all possibilities for this cell
    for candidate in candidates:
        # Mark the current entry with one of the possible candidates
        board[row][col] = candidate

        # Remove the candidate from all_candidates row's, col's, and subBox's
        removeCandidate(all_candidates, row, col, candidate)

        # Recurisvely call the next empty cell index and fill up the board with all possibilities
        if solveSudokuHelper(board, all_candidates, empty_cells, empty_cell_index + 1, shuffle_candidates):
            return True

        # If the next empty cell return False, then there is a contradiction somewhere ahead, so this
        # cell might be the problem, thus the current candidate must not be the correct candidate possibly
        # (or the incorrect candidate is before this recursive call) * Possible optimizibility

        # Add the candidate back to all_candidates row's, col's and subBox's
        addCandidate(all_candidates, row, col, candidate)

    # If none of the candidates could work mark this cell as empty and return False
    board[row][col] = -1
    return False


def sudoku_solver(board: [[int]]) -> [[int]]:
    # generate all the sets that are not seen yet for each row, column, and box
    all_candidates = find_all_candidates(board)

    # get all the coordinates with empty cells
    empty_cells = find_empty_cells(board)

    # backtracking to solve the board
    solveSudokuHelper(board, all_candidates, empty_cells, 0)

    return board


"""
Generate Board button
"""
num_solutions = 0


def check_pure_sudoku(board, all_candidates, empty_cells, empty_cell_index):
    if empty_cell_index == len(empty_cells):
        global num_solutions
        num_solutions += 1
        return

    row, col = empty_cells[empty_cell_index]
    sub_box_row, sub_box_col = subBoxIndices(row, col)

    candidates = list(all_candidates[0][row] & all_candidates[1][col] & all_candidates[2][(
        sub_box_row, sub_box_col)])

    for candidate in candidates:
        # Mark the current cell
        board[row][col] = candidate

        # Remove candidate from all_candidates
        removeCandidate(all_candidates, row, col, candidate)

        # Backtracking
        check_pure_sudoku(board, all_candidates,
                          empty_cells, empty_cell_index + 1)

        # Add the candidate back
        addCandidate(all_candidates, row, col, candidate)

    board[row][col] = -1


def randomly_remove_cells(board, num_attempts):
    """ Randomly remove cells from the board until we run out of attempts. Modifies the board inplace.
    board        - is the sudoku board
    num_attempts - is the number of tries we will try to remove a random number from the sudoku w/o collision
    """
    global num_solutions

    # init
    m, n = 9, 9

    # Creates random coordinates
    marked_cells = [(row, col) for row in range(m) for col in range(n)]
    shuffle(marked_cells)

    # Generate candidates
    row_candidates = {row: set() for row in range(m)}
    col_candidates = {col: set() for col in range(n)}
    sub_box_candidates = {(row, col): set()
                          for row in range(m) for col in range(n)}
    all_candidates = [row_candidates, col_candidates, sub_box_candidates]

    # Empty cells
    empty_cells = []

    # Keep on removing random cells until we run out of tries
    while num_attempts > -1:

        # Get a random_row and random_col
        random_row, random_col = marked_cells.pop()

        # Save the value and remove it from the board
        cell_value = board[random_row][random_col]
        board[random_row][random_col] = -1
        empty_cells.append((random_row, random_col))

        # Add the cell's value to the candidates
        row_candidates[random_row].add(cell_value)
        col_candidates[random_col].add(cell_value)
        sub_box_row, sub_box_col = subBoxIndices(random_row, random_col)
        sub_box_candidates[(sub_box_row, sub_box_col)].add(cell_value)

        # Create a deep copy of the board
        deep_copy_board = deepcopy(board)

        # Check if the sudoku is still a pure sudoku
        check_pure_sudoku(deep_copy_board, all_candidates, empty_cells, 0)

        # If there are more than 1 solution, then it's not a pure sudoku, so we will need to place back this value and try again
        if num_solutions > 1:
            board[random_row][random_col] = cell_value
            num_attempts -= 1

        # reset the global counter
        num_solutions = 0


def sudoku_generator():
    m, n = 9, 9
    inital_board = [[-1]*n for _ in range(m)]

    # Solve a blank sudoku
    all_candidates = find_all_candidates(inital_board)
    empty_cells = [(row, col) for row in range(m) for col in range(n)]
    solveSudokuHelper(inital_board, all_candidates, empty_cells, 0, True)
    solved_board, unsolved_board = deepcopy(
        inital_board), deepcopy(inital_board)

    # Randomly remove an element in the grid that is not removed, and check if there is still a pure solution
    # This is the number of tries we will try to remove a random number from the sudoku w/o collision
    randomly_remove_cells(unsolved_board, 5)

    return unsolved_board, solved_board


"""
Edit Board button
"""


def filter_entries(entries):
    return list(filter(lambda num: num != -1, entries))


def is_valid_sudoku(board):
    m, n = len(board), len(board[0])
    # Check each row ensuring no repeats
    for row_entries in board:
        filtered_row = filter_entries(row_entries)
        if len(filtered_row) != len(set(filtered_row)):
            return False

    # Check each col ensuring no repeats
    for col in range(n):
        filtered_col = filter_entries([board[row][col] for row in range(m)])
        if len(filtered_col) != len(set(filtered_col)):
            return False

    # Check each subbox ensuring no repeats
    for subbox_index in range(m):
        start_row, end_row = (subbox_index//3)*3, ((subbox_index//3)+1)*3
        start_col, end_col = (subbox_index % 3)*3, ((subbox_index % 3)+1)*3
        subbox_entries = [board[row][col] for row in range(
            start_row, end_row) for col in range(start_col, end_col)]
        filtered_subbox_entries = filter_entries(subbox_entries)
        if len(filtered_subbox_entries) != len(set(filtered_subbox_entries)):
            return False

    return True


def is_sudoku_solvable(board_str):
    board = loads(board_str)
    m, n = len(board), len(board[0])

    # Check if the board is a valid board
    if not (is_valid_sudoku(board)):
        return False, None

    # Check if the board has at least one solution, then it is solvable
    return True, sudoku_solver(board)


"""
Validate Sudoku button
"""


def check_if_violates_sudoku_rule(board_subset, m):
    return -1 in board_subset or len(board_subset) < m


def sudoku_validator(board_str: str) -> bool:
    """
    Validates whether the input board is a correctly solved sudoku
    """
    board = loads(board_str)
    m, n = len(board), len(board[0])

    # Validate the rows
    for row in board:
        row_set = set(row)
        if check_if_violates_sudoku_rule(row_set, m):
            return False

    # Validate the columns
    for col in range(n):
        col_set = set([board[row][col] for row in range(m)])
        if check_if_violates_sudoku_rule(col_set, m):
            return False

    # Validate the subboxes
    for subbox_index in range(m):
        start_row, end_row = (subbox_index // 3) * \
            3, ((subbox_index // 3) + 1) * 3
        start_col, end_col = (subbox_index % 3) * \
            3, ((subbox_index % 3) + 1) * 3
        subbox_set = set([board[r][c] for r in range(
            start_row, end_row) for c in range(start_col, end_col)])
        if check_if_violates_sudoku_rule(set(subbox_set), m):
            return False

    return True
