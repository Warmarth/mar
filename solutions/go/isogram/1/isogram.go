package isogram

func IsIsogram(word string) bool {
	var word_map = make(map[byte]bool)
	var our_word string
	if word == "" {
		return true
	}
	var w string
	for i := 0; i < len(word); i++ {
		l:= word[i]
		if l == ' ' || l == '-' {
			continue
		}
		w += string(l)
	}
	for i := 0; i < len(w); i++ {
		letter := w[i]

		if letter >= 'A' && letter <= 'Z' {
			letter += 32
		}

		if !word_map[letter] {
			word_map[letter] = true
			our_word += string(letter)
		} else {
			return false
		}
	}
	return  true
}