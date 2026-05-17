package collatzconjecture
import "errors"
func CollatzConjecture(n int) (int, error) {
	num := n
    var count int
    if n <= 0 {
       return 0, errors.New("n is a negative value")
    }
    if num > 1{
      i:= 0
      for num != 1 {
        if num & 1 == 0{
          num = num / 2
        }else{
          num = (3 * num)+1
        }
        i++
      }
      count = i
    }
    return count,nil
}
