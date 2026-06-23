package techpalace
import "strings"

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	var person string = strings.ToUpper(customer)
	return "Welcome to the Tech Palace, "  + person
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
    border := strings.Repeat("*",numStarsPerLine)
    return  border + "\n" + welcomeMsg + "\n" + border
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	oldMsg= strings.ReplaceAll(oldMsg, "*", "")
	msg:= strings.TrimSpace(oldMsg)
	return  msg
}
