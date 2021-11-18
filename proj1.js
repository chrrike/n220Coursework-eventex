//add listeners to each div
let dvOne = document.getElementById("dvOne");
dvOne.addEventListener("click", isClicked);

let dvTwo = document.getElementById("dvTwo");
dvTwo.addEventListener("click", isClicked);

let dvThree = document.getElementById("dvThree");
dvThree.addEventListener("click", isClicked);

//when the div is clicked
function isClicked(event){
    //retrieve the color stored in data-attribute in the variable changedColor of the event target
    let changedColor = event.target.getAttribute("data-attribute");
    //change the event target's color to changedColor
    event.target.style.backgroundColor = changedColor;
}