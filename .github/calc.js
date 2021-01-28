let numdisplay = document.querySelector('.calc-display')
console.log(numdisplay);
numdisplay.innerHTML = ""

// Getting the math to work
let numbers = document.querySelectorAll('.buttons')
for (let key of numbers) {
    key.addEventListener('click', event => {
        console.log(event.target)
        if (event.target.innerHTML === '=') {
            console.log(numdisplay)
            numdisplay.innerHTML = eval(numdisplay.innerHTML);
        }
    })
}