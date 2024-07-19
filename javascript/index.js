const friends = [22, true, "Bari"]
const bigIntNumber = 11111111111111111111111111n
let someValue = null
// saying that this value dosen't exist
let undefinedValue
// value can be defined later
console.log(friends)


// Function basics
const myAge = 19
let sum = 200
let totalCount = 5
function addsToMyAge(incrementBy, multiplyBy) {
    return (myAge + incrementBy) * multiplyBy
}
const myNewAge = addsToMyAge(5,2)
console.log(myAge, myNewAge)


// Intermidiate Function
function canIGetLicence(age, bribe, whitelisted){
    if(!whitelisted){
        console.log("You are not in the whitelist to get the licence.")
    }
    if((age >= 18 && bribe >=100) || bribe > 500){
        console.log("You can get Licence.")
    }
    else if(age >= 18){
        console.log("Son, you need to give more money.")
    }
    else{
        console.log("Get older, son.")
    }
}
canIGetLicence(13, 830, true)
console.log(canIGetLicence)



// Editing Function
let myFriends = ["Rafin"]
function addToMyFriends(friend){
    myFriends.push(friend)
    // myFriends.unshift(friend)
    console.log(myFriends)
}
addToMyFriends("Sufiyan")
addToMyFriends("Rami")
addToMyFriends("Rohan")
myFriends.pop()
console.log(myFriends)
myFriends.pop()
console.log(myFriends)
myFriends[0] = "Rafinnnnnn"
console.log(myFriends)


// For Loops
for(let number = 0; number < 5; number++){
    console.log(number)
}


// Break and continume in Loops
let evenNumbers = []
let oddNumbers = []
for(let i=0; i<20; i++){
    if(i % 2 === 0){
        evenNumbers.push(i)
    } else {
        oddNumbers.push(i)
    }
}
console.log(evenNumbers)
console.log(oddNumbers)
console.log(evenNumbers, oddNumbers)

function skipNumber(number){
    let evenNumbers2 = []
    for(let i=0; i<20; i++){
        if(i % 2 === 0 && i !== number){
            evenNumbers2.push(i)
        }
    } return evenNumbers2
}
console.log(skipNumber(2))

function skipNumber2(number){
    let evenNumbers3 = []
    for(let i=0; i<20; i++){
        if(i % 2 === 1){
            continue
        } if(i === number){
            continue
        } evenNumbers3.push(i)
    } return evenNumbers3
}
console.log(skipNumber2(2))

function breakNumber(number){
    let evenNumbers4 = []
    for(let i=0; i<20; i++){
        if(i === number){
            break
        } if(i % 2 === 0){
            evenNumbers4.push(i)
        } 
    } return evenNumbers4
}
console.log(breakNumber(10))

function breakNumber(number){
    let evenNumbers4 = []
    for(let i=0; i<20; i++){
        if(i === number){
            return evenNumbers4
        } if(i % 2 === 0){
            evenNumbers4.push(i)
        } 
    } 
}
console.log(breakNumber(10))



// Objects
const myObject = {
    keyname : {
        keyname3 : "value3"
    },
    keyname2 : "value2"
}
console.log(myObject["keyname"])
console.log(myObject.keyname)
console.log(myObject)



// Call by Referance
const myProfile = {
    name : "Bari",
    age : 19,
}
const secondProfile = {
    name : "Rana",
    age : 34,
}
function mutate(obj){
    obj.age++
    console.log(obj.age)
}
mutate(secondProfile)
console.log(secondProfile.age)
// the number gets increased for the object

function primitiveMutate(primitive){
    primitive ++
    console.log(primitive)
}
const num = 100
primitiveMutate(num)
console.log(num)
// the number is only increased inside of the function for variable



// Querey Selector
const heading = document.querySelector("#hello")
heading.innerText = "Hello Bari"
console.log(heading)


// Querey Selector All
const allListItems = document.querySelectorAll("ul li")
for(i=0; i<allListItems.length; i++){
    const listItems = allListItems[i]
    listItems.innerText = "Power of All"
}
console.log|(allListItems)


// Get Element By ID
const para = document.querySelector("#para")
const para2 = document.getElementById("para")
console.log(para, para2)


// Event Listeners (Counter)

// const increaseBtn = document.querySelector("#increase")
// let counter = 0
// function increaseCounter(){
//     const counterElement = document.getElementById("counter")
//     counter++
//     counterElement.innerText = counter
// }
// increaseBtn.addEventListener("click", increaseCounter)

// const decreaseBtn = document.querySelector("#decrease")
// function decreaseCounter(){
//     const counterElement = document.getElementById("counter")
//     counter--
//     counterElement.innerText = counter
// }
// decreaseBtn.addEventListener("click", decreaseCounter)

// const increaseBtn = document.querySelector("#increase")
// const decreaseBtn = document.querySelector("#decrease")
// const counterElement = document.getElementById("counter")
// let counter = 0
// function increaseCounter(){
//     counter++
//     counterElement.innerText = counter}
// function decreaseCounter(){
//     counter--
//     counterElement.innerText = counter}
// increaseBtn.addEventListener("click", increaseCounter)
// decreaseBtn.addEventListener("click", decreaseCounter)



// Creating Element and Manipulating attributes
const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.getElementById("decrease")
const counterElement = document.getElementById("counter")
const ulElement = document.getElementById("listItems")
let counter = 0
function increaseCounter(){
    counter++
    counterElement.innerText = counter
    // // Create an Element
    // const li = document.createElement("li")
    // const textNode = document.createTextNode("Sentence " + counter)
    // li.appendChild(textNode)
    // // Append an Element
    // ulElement.appendChild(li)
            // const li = document.createElement("li")
            // const b = document.createElement("b")
            // const textNode = document.createTextNode("Sentence ")
            // const textNode2 = document.createTextNode(counter)
            // b.appendChild(textNode)
            // li.appendChild(b)
            // li.appendChild(textNode2)
            const li = document.createElement("li")
            li.setAttribute("data-counter", counter)
            li.innerHTML = "<b>Sentence</b> " + counter
            ulElement.appendChild(li)
}
console.log(increaseCounter)
function decreaseCounter(){
    const li = ulElement.querySelector('[data-counter="'+counter+'"]')
    const number = parseInt(li.getAttribute("data-counter"), 10)
    li.remove()
    counter--
    counterElement.innerText = counter}
increaseBtn.addEventListener("click", increaseCounter)
decreaseBtn.addEventListener("click", decreaseCounter)