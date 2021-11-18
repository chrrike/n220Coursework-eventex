//add event listeners to each question
let questionOne = document.getElementById("questionOne");
questionOne.addEventListener("click", isClicked);

let questionTwo = document.getElementById("questionTwo");
questionTwo.addEventListener("click", isClicked);

let questionThree = document.getElementById("questionThree");
questionThree.addEventListener("click", isClicked);

//get id of the answer display
let answerDiv = document.getElementById("answerDiv");

function isClicked(event){
    //when the button is clicked, get the answer from the data attribute
    let answer = event.target.getAttribute("data-answer");
    //display the innerHTML of the answer div as that attribute
    answerDiv.innerHTML = answer;
}