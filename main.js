let currentQuestionIndex = -1;
let score = 0;
let Container = document.getElementById("container");
let answerContainer = document.getElementById("answers-container")
let startContainer = document.getElementById("start-container");
let startButton = document.getElementById("start-btn");
let nextContainer = document.getElementById("next-container");


Container.classList.add('hide');
startContainer.classList.remove('hide');

function startquiz() {
    console.log('started')
    Container.classList.remove('hide');
    startContainer.classList.add('hide');
    setNextQuestion();
    
}

let questions = [
    "When was javascript created?",
    "Which of the following is the correct syntax for creating a function in JavaScript?",
    "What does the Array.isArray() method do?",
    "Which of the following is the correct way to declare a variable in JavaScript?",
    "Which operator is used to compare equality in JavaScript?"
];

let answers_a = [
    "1976",
    "function myFunction() { }",
    "Sorts an array in ascending order",
    "variable x = 10;",
    "==="
];

let answers_b = [
    "1995",
    "def myFunction() { }",
    "Creates a new array",
    "declare x = 10;",
    "="
];

let answers_c = [
    "2001",
    "function: myFunction() { }",
    "Checks if a variable is an array",
    "int x = 10;", 
    "=="
];

let answers_d = [
    "1987",
    "create function myFunction() { }",
    "Converts an array to a string",
    "var x = 10;",
    "!="
];

let answers_correct = [
    1,
    0,
    2,
    3,
    2
];

let answers_user = [
    -1,
    -1,
    -1,
    -1,
    -1
];

function set_input_values(input_id, label_id, input_value, input_text){
    let input_obj = document.getElementById(input_id);
    let label_obj = document.getElementById(label_id);
    input_obj.value = input_value;
    input_obj.checked = false;

    label_obj.innerHTML = input_text;
}


function setNextQuestion() {
    console.log('sssss');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        set_values();
    } 
    else
    {
        showScore();
    }
    
}



function set_values(){
    let questionsElement = document.getElementById("questions");
    questionsElement.innerHTML = questions[currentQuestionIndex];
    set_input_values("choices-op1", "lbl-choices-op1",1,answers_a[currentQuestionIndex]);
    set_input_values("choices-op2", "lbl-choices-op2",2,answers_b[currentQuestionIndex]);
    set_input_values("choices-op3", "lbl-choices-op3",3,answers_c[currentQuestionIndex]);
    set_input_values("choices-op4", "lbl-choices-op4",4,answers_d[currentQuestionIndex]);
}

function read_selected_color(){
     let input_obj = document.querySelector( 'input[name="option"]:checked');   
    if(input_obj != null) 
    {   
        answers_user[currentQuestionIndex] =  input_obj.value;
        if(input_obj.value == answers_correct[currentQuestionIndex]){ 
           console.log('scored');
           score++;
        }
   } 
}

function showScore() {
    let questionsElement = document.getElementById("questions");    
    questionsElement.innerHTML = ` Your score is ${score} out of ${questions.length}.`;
    nextContainer.classList.add('hide');
    answerContainer.style.display = "none";
    return;

}

window.onload = function(){
    let nextButton = document.getElementById("next-btn");
    nextButton.addEventListener('click', setNextQuestion);
}

