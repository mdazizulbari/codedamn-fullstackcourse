//setInterval and setTimeout
setTimeout(() => {
    document.getElementById(`name`).innerText = `Do you remember the name?`
}, 2000);

let i=0;
let intervalId = setInterval(() => {
    document.getElementById(`sec-counter`).innerText = i++
    if(i == 100){
        clearInterval(intervalId)
    }
}, 1000);


// try catch... trying to catch an error
let i2 = 100;
let j2 = 0;
try{
    if(j2 == 0){
        throw `I can't be zero`
    }
} catch(err){
    console.log(err)
} // using this without try catch will breake the code

try{
    document.getElementById(`abc`).innerText = `100`
} catch(err){
    console.log(err)
}