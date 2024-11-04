const quizData = [
    {
        question: "Who is the Fire-type starter in Generation I?",
        options: ["Squirtle", "Bulbasaur", "Charmander", "Pikachu"],
        correct: "Charmander"
    },
    {
        question: "Which Pokémon evolves into Raichu?",
        options: ["Pikachu", "Eevee", "Jigglypuff", "Psyduck"],
        correct: "Pikachu"
    },
    {
        question: "Who is known as the 'Eon Pokémon'?",
        options: ["Latios", "Lugia", "Ho-Oh", "Mew"],
        correct: "Latios"
    },
    {
        question: "Which Pokémon is the mascot of the Pokémon franchise?",
        options: ["Charmander", "Squirtle", "Pikachu", "Eevee"],
        correct: "Pikachu"
    },
    {
        question: "Who is the Fire-type starter in Generation I?",
        options: ["Squirtle", "Bulbasaur", "Charmander", "Pikachu"],
        correct: "Charmander"
    },
    {
        question: "Which Pokémon evolves into Raichu?",
        options: ["Pikachu", "Eevee", "Jigglypuff", "Psyduck"],
        correct: "Pikachu"
    },
    {
        question: "Who is known as the 'Eon Pokémon'?",
        options: ["Latios", "Lugia", "Ho-Oh", "Mew"],
        correct: "Latios"
    },
    {
        question: "Which Pokémon is the mascot of the Pokémon franchise?",
        options: ["Charmander", "Squirtle", "Pikachu", "Eevee"],
        correct: "Pikachu"
    },
    {
        question: "In which region can you find the Legendary Pokémon Groudon?",
        options: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
        correct: "Hoenn"
    },
    {
        question: "What type is Gyarados primarily?",
        options: ["Water/Flying", "Water/Dragon", "Water/Fighting", "Dragon/Flying"],
        correct: "Water/Flying"
    },
    {
        question: "Which Pokémon has the National Dex number #001?",
        options: ["Charmander", "Bulbasaur", "Squirtle", "Pikachu"],
        correct: "Bulbasaur"
    },
    {
        question: "Which Pokémon is known as the 'Seed Pokémon'?",
        options: ["Venusaur", "Bulbasaur", "Oddish", "Chikorita"],
        correct: "Bulbasaur"
    },
    {
        question: "Which of the following Pokémon evolves using a Thunder Stone?",
        options: ["Vulpix", "Pikachu", "Eevee", "Growlithe"],
        correct: "Pikachu"
    },
    {
        question: "Which Legendary Pokémon is the mascot for Pokémon Gold?",
        options: ["Ho-Oh", "Lugia", "Mewtwo", "Zapdos"],
        correct: "Ho-Oh"
    }
    // Add more questions here
];


window.onload = function () {
    const quizForm = document.getElementById('quiz_form');
    const questionElement = document.getElementById('quiz_question');
    const optionsElement = document.getElementById('quiz_options');
    const resultMessage = document.getElementById('result');

    // Get the current day of the year
    const currentDay = new Date().getDate();

    // Choose a quiz question based on the day
    const quizIndex = currentDay % quizData.length;
    const todayQuiz = quizData[quizIndex];

    // Display the question
    questionElement.textContent = todayQuiz.question;

    // Display the options
    optionsElement.innerHTML = '';  // Clear previous options
    todayQuiz.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `
            <input type="radio" name="answer" value="${option}"> ${option}
        `;
        optionsElement.appendChild(optionLabel);
        optionsElement.appendChild(document.createElement('br'));
    });

    // Submit button event listener
    document.getElementById('submit_btn').onclick = function () {
        const selectedAnswer = quizForm.answer.value;
        if (selectedAnswer === todayQuiz.correct) {
            resultMessage.textContent = "Correct!";
            resultMessage.style.color = "#28a745";
        } else {
            resultMessage.textContent = `Incorrect. The correct answer is ${todayQuiz.correct}.`;
            resultMessage.style.color = "#dc3545";
        }
    };
};
