
// QUESTION 1
// What is the average price of all items?

const totalNumberOfItems = items.length

let total = 0

// items.forEach(function(item){
    // const itemPrice = item.Price
    // console.log(total, itemPrice)
    // total = total + itemPrice
// })

items.forEach (function (item) {
})

const avgPrice = total/totalNumberOfItems
// console.log(avgPrice)

document.querySelector("#answer1").innerHTML = `${totalNumberOfItems}`

// QUESTION 2
// Show me an array of items that cost between $14.00 and $18.00 USD?
// 3 parts!


// Logic Part 1
// Have a variable called priceOfItems - 
// filtering through all the items to find which ones are priced between $14-$18. 
// Returns all the items that are priced from $14-$18. Which is 3 items
const priceOfItems = items.filter (function(item){
     return item.price > 14 && item.price < 18
    })

// By this point priceOfItems will be 3


// Logic Part 2
// We have to map through priceOfItems (which has 3 items) and now we want to
// display them in a list in our HTML

// Created a new variable called priceOfItemsTitle to hold all of the item titles
const priceOfItemsTitle = priceOfItems.map(function (item) {
    return `<li>${item.title}</li>`
}).join("")

// this should give us the list of item TITLES that are priced between $14-$18


// Now we have the item titles (there's 3 of them) now we have to actually display them
// in our HTML
// Displays the titles using querySelectors

// Now we use the priceOfItemsTitle variable in our innerHTML
document.querySelector("#answer2").innerHTML = `${priceOfItemsTitle}`




// QUESTION 3
// Which item has a "GBP" currency code? Display it's name and price.

 const gbp = items.filter(function(item) {
   return item.currency_code == "GBP" 
 })

// const gbpItem = 


   const gbpItem = gbp.map(function(item) {
      return `<li>${item.title} ${item.price}</li>`
 })

 document.querySelector("#answer3").innerHTML = `${gbpItem}`


// if code is gbp (item.currency_code == "GBP")
// return title and price in a <li>{item.title} {item.price}</li>
// .join("")

//display the answer 



// QUESTION 4
// Display a list of all items who are made of wood.

 const woodItem = items.filter(function(item){
      return item.materials.includes ("wood")
 }) 

const woody = woodItem.map(function(item){
    return `<li> ${item.title} ${"is made of wood"} </li>`
}).join("") 
 
document.querySelector("#answer4").innerHTML = `${woody}`




// QUESTION 5
// Which items are made of eight or more materials? 
// Display the name, number of items and the items it is made of.

const numOfMaterials = items.filter (function(item){
     return item.materials.length >= 8 
   })
    // console.log(numOfMaterials)

    const materials = numOfMaterials.map (function(item){
        return `<li> ${item.title} ${item.materials.length} ${item.materials}  </li>`

    }).join("") 
 document.querySelector("#answer5").innerHTML = `${materials}`




//  QUESTION 6
//  How many items were made by their sellers?

 const sellers = items.filter(function(item){
    return item.who_made.includes("i_did")
     })

const sellersNum = sellers.length

document.querySelector("#answer6").innerHTML = `${sellersNum}`

































