package grains
import "fmt"

 func Square(number int) (uint64, error) {
     if (number < 1 || number > 64){
         return 0, fmt.Errorf("Value out of range ")
     }
    return 1 <<(number - 1) , nil
}

func Total() uint64 {
	var total uint64
    for i := 1 ; i <= 64 ; i++ {
        n,_ := Square(i)
        total += n
    }
 return total 
}
