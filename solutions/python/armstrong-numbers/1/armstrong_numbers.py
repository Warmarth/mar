def is_armstrong_number(number):
    original = number
    con_num = str(number)
    lenght_of_num = len(con_num)
    value = 0
    for i in range(lenght_of_num):
        num = con_num[i]
        num = int(num)
        value += num ** lenght_of_num
        
    if value != original:
        return False
    return True