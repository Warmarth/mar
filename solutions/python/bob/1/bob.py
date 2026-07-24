def response(hey_bob):
    # hey_bob.trim()
    quesstion = hey_bob.strip().endswith("?")
    yelling = hey_bob.isupper()
    if quesstion and yelling:
        return "Calm down, I know what I'm doing!"
    elif quesstion:
        return "Sure."
    elif yelling:
        return "Whoa, chill out!"
    elif hey_bob.strip() == "":
        return "Fine. Be that way!"
    else:
        return "Whatever."
