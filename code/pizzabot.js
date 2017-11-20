const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
const X = vegetarian
const Y = hawaiian
const Z = pepperoni

alert("Hey! Happy to serve your pizza. On our menu we have " + X + ", " + Y +" and " + Z)

const orderName = prompt("Enter the name of the pizza you want to order today.")

// checkOrderName() which should take the orderName variable as an argument and return true or false if the pizza is on the menu or not.
const checkOrderName=(name)=> {
  if (orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") {
    return true
  } else {
    alert("We dont have that pizza")
    exit()
  }
}

const orderNameChecked=checkOrderName(orderName)

const orderQuantity = prompt("How many of " + orderName + " do you want?")

// totalCost() which takes orderQuantity as an argument and returns the total cost for the order.
// const orderTotal = pizzaPrice * orderQuantity
const totalCost=(quant)=> {
  return quant*pizzaPrice
}
const orderTotal=totalCost(orderQuantity)

// cookingTime() which takes orderQuantity and returns the number of minutes it will take to finish the order.
const cookingTime= (quant) => {
  if (quant < 3) {
    return 10
  } else if (2 < quant && quant < 6) {
    return 15
  } else if (6 < quant) {
    return 20
  }
}

const Time=cookingTime(orderQuantity)

alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " + Time + " minutes")

// const wiki =
//
// alert(wiki.length)
