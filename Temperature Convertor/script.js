let input = document.getElementById("temp");
let convert = document.getElementById("convert");
let result = document.getElementById("result");
let toF = document.getElementById("c1");
let toC = document.getElementById("c2");


convert.onclick = function() {
    let x = Number(input.value);
    if(toF.checked) {
        let y = (x*9)/5 + 32;
        result.textContent = y + "°F";
    } else if(toC.checked) {
        let y = (x-32)*5/9;
        result.textContent = y + "°C";
    }
}