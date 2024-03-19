javascript
function checkAnswers() {
    let correctAnswers = ["Paris", "New Delhi", "Seoul", "Ankara", "Pretoria", "Damascus"];
    let userAnswers = [];
    
    for (let i = 1; i <= 6; i++) {
        let selectedAnswer = document.querySelector(`input[name=question${i}]:checked`);
        if (selectedAnswer) {
            userAnswers.push(selectedAnswer.value);
        }
    }
    
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === userAnswers[i]) {
            score++;
        }
    }
    
    alert(`Вы набрали ${score} из 6 баллов.`);
}
