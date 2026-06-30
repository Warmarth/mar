package pangram
import (
	"strings"
	"unicode"
)
func IsPangram(input string) bool {
	input = strings.ToLower(input)
	seen := make(map[rune]bool)
	for _, char := range input {
		if unicode.IsLetter(char) {
			seen[char] = true
		}
	}
	return len(seen) == 26
}
