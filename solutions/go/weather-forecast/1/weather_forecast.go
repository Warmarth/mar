//Package weather provides function for solving weather forcast problems.
package weather
var (
// CurrentCondition stores the weather conditon.
	CurrentCondition string
// CurrentLocation stores the location where the weather experienced.
	CurrentLocation  string
)

// Forecast returns the location and weather of the location in string format.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
