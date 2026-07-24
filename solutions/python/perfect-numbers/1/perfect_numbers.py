def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if number < 1:
        raise ValueError("Classification is only possible for positive integers.")
    num = 0
    number_type = ""
    for i in range(1,(number//2)+1):
        if number%i == 0:
            num+=i
    if num == number:
       number_type = "perfect"
    elif num > number:
        number_type = "abundant"
    else:
        number_type = "deficient"
    return number_type
