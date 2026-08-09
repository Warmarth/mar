"""Functions used in preparing Guido's gorgeous lasagna.
Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""
SECONDS = 2
"""preparation_time_in_minutes"""
MINUTES = 40
# TODO: define the 'EXPECTED_BAKE_TIME' constant
EXPECTED_BAKE_TIME = 40
# TODO: consider defining the 'PREPARATION_TIME' constant

def preparation_time_in_minutes(p_tym):
    """preparation_time_in_minutes"""
    number_of_layers = p_tym * SECONDS
    return number_of_layers
#       equal to the time it takes to prepare a single layer
# TODO: define the 'bake_time_remaining()' function

def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.
    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.
    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    if elapsed_bake_time == MINUTES:
        return "Done"
    if elapsed_bake_time < MINUTES:
        remaining_bake_time = MINUTES - elapsed_bake_time
        return remaining_bake_time
 
# TODO: define the 'preparation_time_in_minutes()' function
#       and consider using 'PREPARATION_TIME' here
# TODO: define the 'elapsed_time_in_minutes()' function
def elapsed_time_in_minutes(preparation,bake_time):
    """elapsed_time_in_minutes"""
    elapsed = SECONDS * preparation + bake_time
    return elapsed
