let answers = [
    "D. A",
    "A. B",
    "You assume there needs to be a point"
]
const form = document.querySelector("#quiz-form");
const results = document.querySelector("#results");

function checkAnswers(e) {
    let html = "";

    let questions = form.querySelectorAll(".question");
    let questionNumber = 0;

    questions.forEach(question =>{
        let selected = question.querySelector("input:checked");
        let answer = answers[questionNumber];
        let label = document.querySelector(`label[for=${selected.id}]`);
        questionNumber++;
        if (selected.value === answer){
            html += `<div class="correct">${questionNumber}. Correct!</div>`;
            label.style.color = "lime";
        }
        else {
            html += `<div class="incorrect">${questionNumber}. Incorrect!</div>`;
            label.style.color = "red";
        }
        
    });    
    results.innerHTML = html;
}

document.querySelector("#quiz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    checkAnswers(e);
})
