const friends = [22, true, "Bari"]
const bigIntNumber = 11111111111111111111111111n
let someValue = null
// saying that this value dosen't exist
let undefinedValue
// value can be defined later
console.log(friends)



const myAge = 19
let sum = 200
let totalCount = 5
function addsToMyAge(incrementBy, multiplyBy) {
    return (myAge + incrementBy) * multiplyBy
}
const myNewAge = addsToMyAge(5,2)
console.log(myAge, myNewAge)



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


for(let number = 0; number < 5; number++){
    console.log(number)
}


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
        } if(i % 2 === 1){
            continue
        } evenNumbers4.push(i)
    } return evenNumbers4
}
console.log(breakNumber(10))