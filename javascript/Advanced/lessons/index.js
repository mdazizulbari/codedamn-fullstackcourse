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


// Blocking the Page interactivity
const btn = document.querySelector(`.blocking`)
btn.addEventListener(`click`, blockEventLoop, false)
function blockEventLoop(){
    while(true);
}


// Callstacks
const callstack = document.querySelector(`.callstack`)
callstack.addEventListener(`click`, callingCallstack, false)
function callingCallstack(i){
    console.log(i)
    callingCallstack(i++)
}


// setting timeouts with and without requesting annimation frame
let stBtn = document.querySelector(`.stBtn`)
let st = document.querySelector(`.st`)
let rafBtn = document.querySelector(`.rafBtn`)
let raf = document.querySelector(`.raf`)
function stCounter(i){
    st.innerText = i
    setTimeout(() => stCounter(i + 1), 0)
}
function rafCounter(i){
    raf.innerText = i
    requestAnimationFrame(() => {
        rafCounter(i + 1)
    })
}
stBtn.addEventListener(`click`, () => stCounter(0), false)
rafBtn.addEventListener(`click`, () => rafCounter(0), false)