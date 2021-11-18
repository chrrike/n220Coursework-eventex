//create values to hold the red green and blue values
let redVal = 0;
let greenVal = 0;
let blueVal = 0;

//create input values for the div
let divColor = document.querySelector("#divColor");
let colorDisplay = document.querySelector("#colorDisplay");

//set the html text of the display
colorDisplay.innerHTML = "(" + redVal + " , " + greenVal + " , " + blueVal + ")";

//set color
divColor.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")"; 

//select all buttons and use a for loop to add an event listener to all of them
let allButtons = document.querySelectorAll('button');
for(x of allButtons){
    x.addEventListener("click", changeColor);
}

function changeColor(event){
    //get the color that is changed and store in variable
    let targetColor = event.target.getAttribute("data-color");
    //get data from the data attribute that holds the number
    let toAddStr = event.target.getAttribute("data-attribute");
    //convert it to integer
    let toAdd = parseInt(toAddStr);
    //if the target color is red
    if(targetColor == "red"){
        //add it to red
        redVal = redVal + toAdd;
    //repeat this for both green and blue
    }else if(targetColor == "green"){
        greenVal = greenVal + toAdd;
    }else if(targetColor == "blue"){
        blueVal = blueVal + toAdd; 
    }

    //update the inner html
    colorDisplay.innerHTML = "(" + redVal + " , " + greenVal + " , " + blueVal + ")";

    //update the color
    divColor.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")"; 

}