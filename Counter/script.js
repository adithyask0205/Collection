let display = document.getElementById("display");
let val = Number(display.textContent);

function actOn(input) {
    if(input == "Dec") {
        val--;
        display.textContent = val;
    } else if(input == "Reset") {
        val = 0;
        display.textContent = val;
    } else if(input == "Inc") {
        val++;
        display.textContent = val;
    }
}