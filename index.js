// let user = {
//     name: "John",
//     age: 24,
//     job: "reporter"
// }

// user = {}

// const myArray = [34, 'Jojo', 54, 23, 'Kevin', {name:'Eren', age:'20'}]
// const slicedArray = myArray.slice(2);
// myArray.push('Shin')

// console.log(slicedArray)

// for (let i = 0; i <= 5; i++) {
//     console.log(i)
//     console.log("next")
// }

// const myArray = [34, 54, 876, 78, 90, 48]

// for (index = 0; index <= myArray.length; index = index + 1) {
//     console.log("Printing element with index: ", index)
//     console.log("Here is the element: ", myArray[index])
//     if (myArray[index] === 78) {
//         break
//     }
// }

/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
const myArray = [54, 64, 87, 32, 98]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const me = {
    name: "Davronbek",
    surname: "Orifjonov",
    email: "davronbek@gmail.com",
    address: "Uzbekistan",
    age: 21
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
me.drivingLicense = true

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete me.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
const obj2 = {
    name: "Shin",
    surname: "Ri",
    age: 24,
    email: "rishin@gmail.com",
}

if (obj2.email === me.email) {
    // console.log(true)
}else {
    // console.log(false)
}

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = Math.round(Math.random()) * 10

if(totalShoppingCart > 50) {
    // console.log("totalCost: ", totalShoppingCart)
} else {
    // console.log("totalCost: ", totalShoppingCart + 10)
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
// console.log(totalShoppingCart)
totalShoppingCart = totalShoppingCart + (totalShoppingCart * 0.2)
// console.log(totalShoppingCart)

if(totalShoppingCart > 50) {
    // console.log("totalCost: ", totalShoppingCart)
} else {
    // console.log("totalCost: ", totalShoppingCart + 10)
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car = {
    brand: "audi",
    model: "audi rsQ5",
    licencePlate: "uz85454"
}

let cloneCar = {}

Object.assign(cloneCar, car)
cloneCar.licencePlate = "uz54434"

let newCar = {}
Object.assign(newCar, car)
newCar.model = "audia r5"

// console.log(cloneCar)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
const carsForRent = [car, cloneCar, newCar]
// console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
// delete carsForRent[0]
// carsForRent.pop()

const carForRent = carsForRent.slice(1, 2)

// console.log(carForRent)

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT */