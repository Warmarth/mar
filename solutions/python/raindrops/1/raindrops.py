

def convert(number):
    pling,plang, plong = number%3 == 0 , number%5 == 0,number%7 == 0
    droplet = ""
    if pling:
        droplet += "Pling"
    if plang:
        droplet += "Plang"
    if plong:
        droplet += "Plong"
    if droplet == "":
        return str(number)
    return droplet
        
