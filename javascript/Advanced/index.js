//setInterval and setTimeout
setTimeout(() => {
    document.getElementById(`name`).innerText = `Do you remember the name?`
}, 2000);

let i=0;
setInterval(() => {
    document.getElementById(`sec-counter`).innerText = i++
}, 1000);