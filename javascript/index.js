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



// Creating Element, Manipulating attributes, CSS manipulation
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
                if(counter % 2 ===0){
                    li.style.background = "yellow"
                    li.style.textAlign = "center"
                    // li.setAttribute('class', 'yellow')
                } else {
                    li.style.background = "cyan"
                    // li.setAttribute('class', 'cyan')
                }
            li.innerHTML = "<b>Sentence</b> " + counter
            ulElement.appendChild(li)
}
console.log(increaseCounter)
function decreaseCounter(){
    const li = ulElement.querySelector('[data-counter="'+counter+'"]')
    const number = parseInt(li.getAttribute("data-counter"), 10)
    if(number % 2 === 0){
      li.remove()}
    counter--
    counterElement.innerText = counter
}
increaseBtn.addEventListener("click", increaseCounter)
decreaseBtn.addEventListener("click", decreaseCounter)

// es6 destructuring
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [...array1, ...array2]
const array4 = [array1, ...array2]
console.log(array3, array4)

const keyname = "cool"
const obj1 = {
    name: "Bari",
    age: 19,
    keyname,
    someOtherKey: 100,
}
const obj2 = {
    name: "Rana",
    age: "36",
}
const obj3 = {
    ...obj1, ...obj2,
}
    // obj1 overwrote obj2
console.log(obj3)



// es6 arrow functions
const increaseBtn2 = document.getElementById("increase")
increaseBtn2.addEventListener('click', () => {
    console.log("Increase Button is clicked!")
})
function oldfunction(arrgument){
    return arrgument ** 2
}
const old = oldfunction(100)
console.log(old)

const es6function = arrgument => arrgument ** 2
const es6 = es6function(100)
console.log(es6)
const es6function2 = (arrgument1, arrgument2) => {
    return arrgument1 * arrgument2
}
console.log(es6function2(200, 300))





// Array Functions
const array5 = [1,2,3,4,5,6,7,8]
const newMappedArray_old = []
for(let i=0; i>array5.length; i++){
    const currentelement = array5[i]
    newMappedArray_old.push(currentelement ** 2)
}

// const newMappedArray = array5.map(function(element) {
//     console.log(element);
//     return element ** 2;
// })
const newMappedArray = array5.map(element => element ** 2)
console.log(array5, newMappedArray)

const friends1 = [
    {
        name: "x",
        age: 17,
        college: "BN"
    },
    {
        name: "y",
        age: 21,
    },
    {
        name: "z",
        age: 22,
    }
]
const filteredArray = friends1.filter(element => element.age > 18)
console.log(friends1, filteredArray)

const findX = friends1.find(element => element.name === "x")
console.log(findX)

friends1.forEach(friends1 => {
    console.log(friends1)
})




// Template Literals (es6 quotes)
const person = {
    name: "Bari",
    age: 19,
}
const aboutMeOld = "My name is "+person.name+" and I am "+person.age+" years old."
const aboutMeNew = `My name is ${person.name} and I am ${person.age} years old.`
console.log(aboutMeOld)
console.log(aboutMeNew)