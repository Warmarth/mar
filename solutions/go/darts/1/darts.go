package darts
import "math"

func Score(x, y float64) int {
	z:= math.Sqrt(x*x + y*y)

    if z > 10 {
        return 0
    }
    if z > 5 {
        return 1
    }
    if z > 1 {
        return 5
    }  
    return 10
}
