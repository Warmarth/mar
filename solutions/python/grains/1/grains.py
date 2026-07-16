def square(number):
    if number < 1 or number > 64:
         raise ValueError("square must be between 1 and 64")
    return  1 <<(number - 1)


def total():
    value = 0
    for i in range(1, 65):
        value += square(i)
    return value
