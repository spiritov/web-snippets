var scoreBoxes = document.getElementsByClassName("score-box");
console.log(scoreBoxes);

//actually, this isn't needed but may find use on the index page instead
for (let i = 0; i < scoreBoxes.length; i++) {
    scoreBoxes[i].addEventListener("click", function () {
        console.log('a');
        scoreBoxes[i].classList.toggle("bg-orange-300");
    });
}

