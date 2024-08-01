const quizData = [
    {
        question:"What is the full form of CSS?",
        options:["Cascade style sheets","Color and style sheets","Cascading style sheets","None of the above"],
        answer:"Cascading style sheets"
    },
    {
        question:"What is the program that translates source code into object code called",
        options:["Executor","Compiler","Translator","Interpreter"],
        answer:"Compiler"
    },
    {
        question:"C language in computers is",
        options:["A third generation high level language","A machine language","A assembly language","All of the above"],
        answer:"A third generation high level language"
    },
    {
        question:"Web pages are written using",
        options:["FTP","HTTP","HTML","URL"],
        answer:"HTML"
    },
    {
        question:"Which one of the following ways will be adopted to store the program counter contents?",
        options:["Last-In First-Out(LIFO)","First-In First-Out(FIFO)","Last-In Last-Out(LIlO)","First-In Last-Out(FIFO)"],
        answer:"Last-In First-Out(LIFO)"
    }
];

const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const optionEl = document.querySelectorAll(".option");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");


let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;
let answerSelected = false;

function loadQuestion(){
    const {question, options } =quizData[currentQuestion];
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    questionEl.textContent = question;
    optionEl.forEach((option, index) => {
        option.textContent = options[index];
        option.classList.remove("correct","incorrent");
        option.onclick =() => selectoption(option);
    });
    answerSelected = false;
    nextBtn.disabled = true;
    starttimer();
}

function selectoption(option){
    if(!answerSelected) {
        answerSelected = true;
        const selectedAnswer = option.textContent;
        const correctAnswer = quizData[currentQuestion].answer;
        if(selectedAnswer === correctAnswer) {
            score++;
            option.classList.add("correct");
        } else {
            option.classList.add("incorrect");
            optionEl.forEach(opt => {
                if(opt.textContent === correctAnswer){
                    opt.classList.add("correct");
                }
            });
        }
        nextBtn.disabled = false;
    }
}

function loadNextQuestion(){
    clearInterval(timer);
    if(currentQuestion <quizData.length -1){
        currentQuestion++;
        loadQuestion();
    } else{
        showResult();
    }
}
nextBtn.addEventListener("click",() =>{
    loadNextQuestion();
});

function starttimer(){
    clearInterval(timer);
    timeLeft = 10;
    timerEl.textContent = `Time Left: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time Left: ${timeLeft}`;
        if(timeLeft<=0){
            clearInterval(timer);
            if(!answerSelected){
                loadNextQuestion();
            }
        }
    }, 1000)
}

function showResult(){
    const quizEl = document.getElementById("quiz");
    quizEl.classList.add("hide");
    resultEl.classList.remove("hide");
    scoreEl.textContent = `${score} out of ${quizData.length}`
}
//Initialise quiz
loadQuestion();
