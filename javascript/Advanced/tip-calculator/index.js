const button = document.querySelector(`button`)
const output = document.querySelector(`.output`)
console.log(button)
button.addEventListener(`click`, function() {
    const cost = document.querySelector(`input`)
    console.log(cost.value * 0.15)
    let tip = (cost.value * 0.15).toFixed(2)
    let temp = `<h2>You shoud tip $${tip} on the cost of $${cost.value}`
    output.innerHTML = temp
})