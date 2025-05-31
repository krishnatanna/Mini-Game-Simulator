const form = document.querySelector("form")
const number = (Math.random()*100+1).toFixed(0)
const arrGuess = []
let remGuess = 10
this.document.querySelector(".rem-guess").innerHTML = `Remaining Guesses :${remGuess}`
console.log(number);
addEventListener('submit',function(e){
    e.preventDefault()
    const guess = this.document.querySelector(".guess").value
    console.log(guess);
    if (guess === "" || guess<0 || guess>100 || isNaN(guess) ){
        this.document.querySelector(".error").innerHTML = "Please enter a valid number"
    }else if( number < guess){
        this.document.querySelector(".error").innerHTML = "The guess is higher than the number"
    }else if( number > guess){
        this.document.querySelector(".error").innerHTML = "The guess is lower than the number"
    }else{
        this.document.querySelector(".error").innerHTML = `You won the number is ${number}`
    }
    arrGuess.push(guess)
    this.document.querySelector(".prev-guess").innerHTML = `Previous Guesses :${arrGuess}`
    remGuess = remGuess-1;
    this.document.querySelector(".rem-guess").innerHTML = `Remaining Guesses :${remGuess}`
    if (remGuess==0){
        this.alert("Game Over")
    }
})


