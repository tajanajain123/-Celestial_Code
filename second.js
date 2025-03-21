
// Function to start the quiz
function startQuiz() {
    sessionStorage.setItem("score", 0);
    sessionStorage.setItem("currentQuestionIndex", 0);
    sessionStorage.setItem("playMusic", "true"); // Play music when redirected
    window.location.href = "second.html";
}

// Play music when second.html loads
window.onload = function () {
    let audio = document.getElementById("loveSong");
    if (sessionStorage.getItem("playMusic") === "true") {
        audio.play();
        sessionStorage.removeItem("playMusic"); // Prevent replay on refresh
    }
    
    if (document.getElementById("question")) {
        loadQuestion();
    }
};

const questions = [
    { question: "What is my favorite color?", options: ["Blue", "Red", "Black", "Pink"], answer: "Blue" },
    { question: "What’s my birth month?", options: ["January", "March", "September", "November"], answer: "September" },
    { question: "Do I prefer traveling or staying at home?", options: ["Traveling", "Home", "Both", "Depends"], answer: "Home" },
    { question: "What is my favorite food?", options: ["Palav", "Bisibele Bath", "Chappati", "Lemon Rice"], answer: "Bisibele Bath" },
    { question: "What is my favorite dessert?", options: ["Cake", "Pastries", "Ice Cream", "Chocolate"], answer: "Ice Cream" },
    { question: "What is my favorite place to visit?", options: ["Bellavi", "Hornadu", "Dharmasthala", "goa"], answer: "Hornadu" },
    { question: "Do I prefer ?", options: ["Tea", "Coffee", "Milk", "Juice"], answer: "Coffee" },
    { question: "What is my favorite hobby?", options: ["Dancing", "Painting", "Singing", "Photography"], answer: "Painting" },
    { question: "Do I prefer watching movies at the theater or at home?", options: ["Theater", "Home", "Both", "None"], answer: "Home" },
    { question: "Am I an introvert or an extrovert?", options: ["Introvert", "Extrovert", "Ambivert", "Depends"], answer: "Extrovert" },
    { question: "Am I a morning person or a night owl?", options: ["Morning Person", "Night Owl", "Both", "Neither"], answer: "Morning Person" },
    { question: "What is my biggest fear?", options: ["Heights", "Darkness", "Water", "Snakes"], answer: "Snakes" },
    { question: "What kind of weather do I like?", options: ["Sunny", "Rainy", "Cloudy", "Snowy"], answer: "Cloudy" },
    { question: "What is my favorite ice cream flavor?", options: ["Vanilla", "Chocolate", "Black Currant", "Strawberry"], answer: "Black Currant" },
    { question: "Which social media platform do I use the most?", options: ["Instagram", "Facebook", "Twitter", "Snapchat"], answer: "Instagram" },
    { question: "Do I prefer reading books or listening to music?", options: ["Reading Books", "Listening to Music", "Both", "Neither"], answer: "Listening to Music" },
    { question: "What is my favorite Lays flavor?", options: ["Yellow Lays", "Orange Lays", "Blue Lays", "Green Lays"], answer: "Orange Lays" },
    { question: "What is my favorite fast food?", options: ["Pizza", "Burgers", "Golgappa", "Fries"], answer: "Golgappa" },
    { question: "What is my favorite type of pen?", options: ["Ball Pen", "Gel Pen", "Fountain Pen", "Marker"], answer: "Gel Pen" },
    { question: "What is my favorite indoor game?", options: ["Carrom", "Ludo", "Chess", "Cards"], answer: "Chess" },
    { question: "What is my lucky number?", options: ["3", "7", "9", "11"], answer: "3" },
    { question: "What is my favorite accessory to wear?", options: ["Ring", "Necklace", "Earrings", "Watch"], answer: "Earrings" },
    { question: "What is my ideal way to relax?", options: ["Reading", "Netflix and Chill", "Sleeping", "Cooking"], answer: "Netflix and Chill" },
    { question: "What is my most used emoji?", options: ["😂", "❤️", "🔥", "😊"], answer: "😂" },
    { question: "What is my favorite soft drink?", options: ["Coke", "Pepsi", "Sprite", "Fanta"], answer: "Sprite" },
    { question: "Do I prefer sweet or spicy food?", options: ["Sweet", "Spicy", "Both", "Mild"], answer: "Spicy" },
    { question: "What is my favorite season?", options: ["Winter", "Summer", "Spring", "Monsoon"], answer: "Summer" },
    { question: "If I could meet any celebrity, who would it be?", options: ["Dhruva Sarja", "Naveen Polishetty", "Yash", "Ranveer Singh"], answer: "Dhruva Sarja" },
    { question: "Do I like beaches or mountains?", options: ["Beaches", "Mountains", "Both", "None"], answer: "Beaches" },
    { question: "What is one thing that always makes me happy?", options: ["Music", "Being with You", "Food", "Movies"], answer: "Being with You" }
];

// Load question dynamically
function loadQuestion() {
    let currentQuestionIndex = parseInt(sessionStorage.getItem("currentQuestionIndex")) || 0;
    let score = parseInt(sessionStorage.getItem("score")) || 0;

    if (currentQuestionIndex >= questions.length) {
        sessionStorage.setItem("score", score);
        window.location.href = "score.html";
        return;
    }

    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;

    let optionsHTML = "";
    questionData.options.forEach(option => {
        optionsHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

// Check answer and update score
function checkAnswer(selectedOption) {
    let currentQuestionIndex = parseInt(sessionStorage.getItem("currentQuestionIndex")) || 0;
    let score = parseInt(sessionStorage.getItem("score")) || 0;

    if (selectedOption === questions[currentQuestionIndex].answer) {
        score += 5; // Increase score for correct answer
    }

    sessionStorage.setItem("score", score);
    sessionStorage.setItem("currentQuestionIndex", currentQuestionIndex + 1);
    
    loadQuestion();
}
