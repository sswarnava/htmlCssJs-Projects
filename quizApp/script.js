const questions = [
    {
        question: "1. Which of the following is NOT a Social Media Platform?",
        options: ["Facebook", "Twitter", "Instagram", "Google"],
        correctAnswer: "Google",
    },
    {
        question: "2. How many Social Media Classification tools are there?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
    },
    {
        question: "3. Which of the following is a Social Media Classification tool?",
        options: ["Publishing", "Networking", "All of this", "None"],
        correctAnswer: "All of this",
    },
    {
        question: "4. SMM helps improve -",
        options: ["Brand Awareness", "Product Visibilit", "A and B", "None"],
        correctAnswer: "A and B",
    },
    {
        question: "5. Marketers who are successful focus primarily on ____ the value of their products.",
        options: ["Depreciating", "Enhancing", "Demonizing", "None"],
        correctAnswer: "Enhancing",
    }
];

let count = 0

function questionShow(qnCount) {
    if (qnCount < questions.length) {
        document.querySelector('#question').innerHTML = questions[qnCount].question

        for (let y = 0; y < questions[qnCount].options.length; y++) {
            document.querySelector(`#btn${y}`).innerHTML = questions[qnCount].options[y]
        }
    }
}
questionShow(count)

function clickBtn(buttontext, btnId) {
    let buttons = document.getElementsByClassName('ansBtn')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add("disabledButton");
    }

    correctAnswerIs = questions[count].correctAnswer
    if (correctAnswerIs == buttontext) {
        document.querySelector(`#${btnId}`).classList.add('correctAnswar')
        countScore(10)
    }
    else {
        document.querySelector(`#${btnId}`).classList.add('wrongAnswar')
        findCorrectAns(correctAnswerIs)
        countScore(0)
    }
    document.getElementById('nextbtn').disabled = false
}

function findCorrectAns(ans) {
    let buttons = document.getElementsByClassName('ansBtn')
    for (let i = 0; i < buttons.length; i++) {
        const btnInnerHTML = buttons[i].innerHTML;
        if (btnInnerHTML == ans) {
            buttons[i].classList.add('correctAnswar');
        }
    }
}

function nextQnShow() {
    document.getElementById('nextbtn').disabled = true
    count++
    if (count < questions.length) {
        questionShow(count)
        let buttons = document.getElementsByClassName('ansBtn')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].classList.remove("disabledButton");
            buttons[i].classList.remove("correctAnswar");
            buttons[i].classList.remove("wrongAnswar");
        }
    }
}

const scoreArray = [0]
function countScore(score) {
    scoreArray.push(score)
    const total = scoreArray.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
    if (count + 1 == questions.length) {

        setTimeout(() => {
            document.getElementById('qnestionForm').style.display = "none";
            document.getElementById('nextbtn').style.display = "none";
            document.getElementById('quizDiv').innerHTML += `<h3> Score: ${total} </h3>`
        }, 2000)
    }
}