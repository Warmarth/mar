package birdwatcher

// TotalBirdCount return the total bird count by summing
// the individual day's counts.
func TotalBirdCount(birdsPerDay []int) int {
    var value int = 0
	for _,i := range birdsPerDay{
        value += i
    }
    return value
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
    return TotalBirdCount(birdsPerDay[((week - 1)*7):(week * 7)]) 
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	for i:= 0; i < len(birdsPerDay); i++ {
        if i&1 != 0{
            continue
        }
        birdsPerDay[i]+=1
    }
    return birdsPerDay
}
