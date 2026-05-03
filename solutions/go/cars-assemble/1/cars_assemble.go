package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	success := successRate / 100
    result := float64(productionRate) * success 
    return result 
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	pC := productionRate/ 60
    sR := successRate /100
    cMin := float64(pC) * sR
    return int(cMin)
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	groupCount :=(carsCount / 10) * 95000
    singleCount := (carsCount % 10) * 10000
    result:=  groupCount + singleCount
    return uint(result)
}
