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