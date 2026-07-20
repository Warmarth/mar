def equilateral(sides):
    a,b,c = sides
    if a == 0 or b == 0 or c == 0:
        return False
    else:
        return a == b == c

def isValid(a,b,c):
    return  a + b >= c and b + c >= a and c + a >= b and (a > 0 and b > 0 and c > 0)

def isosceles(sides):
    a,b,c = sides
    if not isValid(a,b,c):
        return False
    if a == b or b == c or a == c:
        return True
    else:
        return False
    

def scalene(sides):
    a,b,c = sides
    if not isValid(a,b,c):
        return False
    if a != b and b != c and a != c:
        return True
    else:
        return False
