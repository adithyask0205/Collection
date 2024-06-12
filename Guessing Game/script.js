let submit = document.getElementById("submit");
let result = document.getElementById("result");
let random = Math.floor(Math.random() * 100) + 1;
let body = document.querySelector("body");
let attempts = 1;
console.log(random);

submit.onclick = function() {
    let guess = document.getElementById("guess");
    let x = Number(guess.value);
    if(x === random) {
        result.textContent = `You Won! It too you ${attempts} attempts to guess it right`;
        body.style.backgroundColor = "blue";
    } else if(x > random){
        attempts++;
        result.textContent = "Too High! Try Again!";
        guess.value = "";
    } else if(x < random){
        attempts++;
        result.textContent = "Too Low! Try Again!";
        guess.value = "";
    }
}
