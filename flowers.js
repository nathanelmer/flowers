const flowers = [

]

const addFlower = (newColor, newSpecies, newPrice) => {
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
    const newId = flowers.length + 1
    const newFlowerObject = {
        id: newId,
        color: newColor,
        species: newSpecies,
        price: newPrice
    }
    flowers.push(newFlowerObject)
}

addFlower("White", "Rose", 0.90)
addFlower("Red", "Tulip", 1.10)
addFlower("Blue", "Daisy", 4.30)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
    for (flower of flowers)
     if (flower.price >= 1.00)
    expensiveFlowers.push(flower)
    return expensiveFlowers  // Do not change this code
}

console.log(findExpensiveFlowers())


// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

