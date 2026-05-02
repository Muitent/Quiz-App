 import { data } from "./data.js"; 
 

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
console.log(startBtn);
// Quiz Screens
const quizScreen = document.getElementById("quiz-screen");
const quizQuestion = document.getElementById("quiz-question");
const currentQuestion = document.getElementById("current-question");
const totalQuestion = document.getElementById("total-question");
const score = document.getElementById("question-score");
const questionList = document.getElementById("question-list");
const questionName = document.getElementById("question-name");
// progress
const progress = document.getElementById("progress");



// Result Screen
const resultScreen = document.getElementById("result-screen");
const totalScore = document.getElementById("total-score");
const restartBtn = document.getElementById("restart-btn");




const totalQuestions = data.length;
let scores = 0;
totalQuestion.innerText = totalQuestions;

let questionIndex = 0;

function dataChange() {
  data[questionIndex]?.answer?.forEach((el) => {
    questionName.innerText = (data[questionIndex].question).toWellFormed();
    currentQuestion.innerHTML = questionIndex + 1;
    const questionOption = document.createElement("li");
    questionOption.classList.add("answer-btn");
    questionOption.innerText = el.text;
    questionList.appendChild(questionOption);
    questionOption.addEventListener("click", optionCheck);
  });
}

function optionCheck(element) {

  const correctOption = data[questionIndex]?.answer?.filter(
    (ele) => ele.correct == true,
  );
  console.log(correctOption)
  if (element.target.innerText === correctOption[0]?.text) {
    element.target.classList.add("correct");

    setTimeout(() => {
      questionList.replaceChildren();
      scores++;
      score.innerText = scores;
      dataChange();
    }, 100);
    questionIndex++;
  } else {
    element.target.classList.add("incorrect");
    console.log(questionList.children.item(1))
    setTimeout(() => {
      questionList.replaceChildren();
      dataChange();
    }, 200);
   
    questionIndex++;
    if (questionIndex === totalQuestions) {
      result();
    }
  }

  let progressWidth = Math.ceil((questionIndex / totalQuestions )*100).toString().concat("%");
progress.style.width = progressWidth; 
}

function startQuiz() {
  questionIndex = 0;
  scores = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
}

function result() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  totalScore.innerText = scores;
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", function( ){
  location.reload();
} );
dataChange();
