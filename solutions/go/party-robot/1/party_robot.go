package partyrobot
import "fmt"

// Welcome greets a person by name.
func Welcome(name string) string {
	return "Welcome to my party, "+ name +"!"  
}

// HappyBirthday wishes happy birthday to the birthday person and exclaims their age.
func HappyBirthday(name string, age int) string {
	return "Happy birthday " + name + "! You are now " + fmt.Sprintf("%d",age)+" years old!"
}

// AssignTable assigns a table to each guest.
func AssignTable(name string, table int, neighbor, direction string, distance float64) string {
	introduction := fmt.Sprintf("Welcome to my party, %s!", name)
	side := fmt.Sprintf("You have been assigned to table %03d.", table)
	way := fmt.Sprintf(" Your table is %s, ", direction)
	far := fmt.Sprintf("exactly %0.1f meters from here.", distance)
	friend := fmt.Sprintf("You will be sitting next to %s.", neighbor)
	return introduction +"\n" + side + way + far + "\n" + friend
    
}
