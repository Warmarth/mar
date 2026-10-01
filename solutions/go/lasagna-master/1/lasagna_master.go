package lasagnamaster

// TODO: define the 'PreparationTime()' function
func PreparationTime(layer []string,param int) int{
    length_layer := len(layer)
    if param == 0 {
        return length_layer * 2
    }
    return length_layer * param
}

// TODO: define the 'Quantities()' function
func Quantities(items []string)(int, float64) {
    var sauce float64 = 0.0
    var noddles int = 0
    for _ ,content := range items{
        if content == "sauce"{
            sauce += 0.2
        }
        if content == "noodles"{
            noddles += 50
        }
    }
    return noddles,sauce
}
// TODO: define the 'AddSecretIngredient()' function
func AddSecretIngredient(item1 []string,item2 []string) []string{
    last_item := item1[len(item1) - 1]
    item2[len(item2) - 1] = last_item
    return item2
}

// TODO: define the 'ScaleRecipe()' function
func ScaleRecipe(list []float64, num int ) []float64{
    new_list := make([]float64,len(list))
    for i,value := range list {
        new_list[i] = value * (float64(num) / 2.0)
    }
    return new_list
}
// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
