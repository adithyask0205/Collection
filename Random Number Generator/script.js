document.getElementById("generate").onclick = function() {
    let random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("h1").textContent = random;
}