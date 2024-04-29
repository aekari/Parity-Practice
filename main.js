'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const equations = {
        "Even + Even =": "Even",
        "Even + Odd =": "Odd",
        "Odd + Odd =": "Even",
        "Even - Even =": "Even",
        "Even - Odd =": "Odd",
        "Odd - Even =": "Odd",
        "Odd - Odd =": "Even",
        "Even x Even =": "Even",
        "Even x Odd =": "Even",
        "Odd x Odd =": "Odd"
    };

    let correctCount = 0;
    let incorrectCount = 0;

    function updateCounter() {
        document.getElementById('counter').textContent = `${correctCount} Correct, ${incorrectCount} Incorrect`;
    }

    function populateEquation() {
        const equationEntries = Object.entries(equations);
        const randomEntry = equationEntries[Math.floor(Math.random() * equationEntries.length)];
        document.querySelector('.equation').textContent = randomEntry[0];
        return randomEntry[1];
    }

    let correctAnswer = populateEquation();

    function checkAnswer(userAnswer) {
        if (userAnswer === correctAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
        updateCounter();
        setTimeout(function () {
            correctAnswer = populateEquation();
        }, 500);
    }

    document.getElementById('evenButton').addEventListener('click', function () {
        checkAnswer("Even");
    });

    document.getElementById('oddButton').addEventListener('click', function () {
        checkAnswer("Odd");
    });
});
