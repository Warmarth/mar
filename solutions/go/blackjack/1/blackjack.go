package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	var result int
	switch card{
	case "ace":
		result = 11
	case "king", "queen", "jack", "ten":
		result =10
	case "nine":
		result =9
	case "eight":
		result =8
	case "seven":
		result =7
	case "six":
		result =6
	case "five":
		result =5
	case "four":
		result =4
	case "three":
		result =3
	case "two":
		result =2
	default:
		result =0
	}
	return  result
}
// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	card1Score:= ParseCard(card1)
	card2Score:= ParseCard(card2)
	dealerCardScore:= ParseCard(dealerCard)
	totalCardScore := card1Score + card2Score
    if totalCardScore == 21 {
        if dealerCard == "ace" || dealerCardScore == 10 {
            return "S"
        }
        return "W"
    }
	if card1 == "ace" && card2 == "ace"{
		return  "P"
	}
	if totalCardScore >= 17 && totalCardScore <= 20{
		return  "S"
	}
	if totalCardScore >= 12 && totalCardScore <= 16{
		if dealerCardScore >= 7{
			return  "H"
		}
		return   "S"
	}
	
	return  "H"
}

