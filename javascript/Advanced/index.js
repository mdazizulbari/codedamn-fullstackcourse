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