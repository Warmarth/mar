
def is_armstrong_number(number):
    clone_number  = number
    string_number = str(number)
    lenght_of_number = len(string_number)
    value = 0
    for index in range(lenght_of_number):
        index_number = string_number[index]
        index_number = int(index_number)
        value += index_number ** lenght_of_number
        
    if value != clone_number:
        return False
    return True