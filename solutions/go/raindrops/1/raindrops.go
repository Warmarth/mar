package raindrops
import "strconv"

func Convert(n int) string {
	droplets:= ""
    if n % 3 == 0 {
    droplets+="Pling"
   }
   if n % 5 == 0 {
      droplets+= "Plang"
   }
   if n % 7 == 0 {
      droplets +="Plong"
    }
  if droplets == "" {
     return strconv.Itoa(n)
   }else{
    return droplets
  }
}
