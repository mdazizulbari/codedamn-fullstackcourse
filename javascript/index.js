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