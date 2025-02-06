//Intrest breakdown of calculation

document.getElementById("calculate").addEventListener("click", function() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    let years = parseFloat(document.getElementById("years").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Enter valid numbers!");
        return;
    }
    let amount = principal * Math.pow(1 + rate, years);
    document.getElementById("result").innerText = `Result: ${amount.toFixed(2)} (ZAR)`;
});

// HAcker MOde
document.getElementById("hackModeBtn").addEventListener("click", function() {
    document.getElementById("hackMode").classList.remove("hidden");
    startHackerText();
});

//hacker text effects
let hackerText = [
    "ACCESS GRANTED...",
    "LOADING SECURE SYSTEM...",
    "FIREWALL BYPASSED...",
    "DECRYPTING FILES...",
    "CRACKING CODE SEQUENCE...",
];

function startHackerText() {
    let textElement = document.getElementById("hackerText");
    textElement.innerHTML = "";
    let i = 0;

    let interval = setInterval(() => {
        if (i < hackerText.length) {
            textElement.innerHTML += `<p>${hackerText[i]}</p>`;
            i++;
        } else {
            clearInterval(interval);
            document.getElementById("terminalInput").focus();
        }
    }, 1000);
}

document.getElementById("terminalInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let command = event.target.value.toLowerCase();
        let output = document.getElementById("hackerText"); 

        if (command == "decrypt") {
            output.innerHTML += `<p>🟢 SYSTEM DECYPTED! Intrest rate doubled!</p>`;
            event.target.value = "";
        } else if (command === "shutdown") {
            output.innerHTML += `<p>🔴 SYSTEM SHUTDOWN INITIATED...</p>`;
            setTimeout(() => location.reload(), 2000);
        } else {
            output.innerHTML += `<p>⚠️ UNKNOWN COMMAND!</p>`;
        }
    }
});