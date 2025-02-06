const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const matrixChars = "01".split("");
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lime";
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
    });
}

setInterval(drawMatrix, 50);

// intrest Calc functions 

document.getElementById("calculate").addEventListener("click", function() {
    document.getElementById("beepSound").play();
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100; 
    let years = parseFloat(document.getElementById("years").value);
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Enter valid numbers");
        return;
    }
    let amount = principal * Math.pow(1 + rate, years);
    document.getElementById("result").innerText = `Result:$${amount.toFixed(2)}`;
});

document.getElementById("hackModeBtn").addEventListener("click", function() {
    document.getElementById("glitchSound").play();
    document.getElementById("hackMode").classList.remove("hidden");
    startHackerText();
});

function startHackerText() {
let textElement = document.getElementById("hackerText");
textElement.innerHTML = "";
let hackerText = ["ACCESS GRANTED...", "FIREWALL BYPASSED...", "DECRYPTING FILES...","CRACKING CODE SEQUENCE..."];
let i = 0;
let interval = setInterval(() => {
    if (i < hackerText.length) {
        textElement.innerHTML += `<p>${hackerText[i]}</p>`;
        i++;
    }
}, 1000);
}
document.getElementById("terminalInput").addEventListener("keyup", function() {
    document.getElementById("typingSound").play();
});
