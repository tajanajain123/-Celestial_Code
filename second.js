let audio = new Audio('tum.mp3'); 

function checkLove(response) {
    if (response === 'yes') {
        sessionStorage.setItem("playMusic", "true"); // Store the flag
        window.location.href = 'second.html';
    } else {
        // Make "Yes" button bigger on clicking "No"
        let yesButton = document.getElementById("yesBtn");
        let currentSize = window.getComputedStyle(yesButton).fontSize;
        let newSize = parseFloat(currentSize) * 1.2; // Increase size by 20%
        yesButton.style.fontSize = newSize + "px";
    }
}

// Play music when `second.html` loads
window.onload = function () {
    if (sessionStorage.getItem("playMusic") === "true") {
        audio.play();
        sessionStorage.removeItem("playMusic"); // Remove flag to prevent looping
    }
};
