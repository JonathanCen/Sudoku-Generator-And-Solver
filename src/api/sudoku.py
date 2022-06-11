from json import loads


def find_all_candidates(board) -> dict:
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


def solveSudokuHelper(board, all_candidates, empty_cells, empty_cell_index) -> bool:
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
    candidates = all_candidates[0][row] & all_candidates[1][col] & all_candidates[2][(
        sub_box_row, sub_box_col)]

    # Iterate through all possibilities for this cell
    for candidate in candidates:
        # Mark the current entry with one of the possible candidates
        board[row][col] = candidate

        # Remove the candidate from all_candidates row's, col's, and subBox's
        removeCandidate(all_candidates, row, col, candidate)

        # Recurisvely call the next empty cell index and fill up the board with all possibilities
        if solveSudokuHelper(board, all_candidates, empty_cells, empty_cell_index + 1):
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


def sudoku_generator():
    pass


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
