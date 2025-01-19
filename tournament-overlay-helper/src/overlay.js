const player_left = document.getElementById("player_left")
const player_right = document.getElementById("player_right")
const flag_left = document.getElementById("flag_left")
const flag_right = document.getElementById("flag_right")
const pr_left = document.getElementById("pr_left")
const pr_right = document.getElementById("pr_right")
const score_left = document.getElementById("score_left")
const score_right = document.getElementById("score_right")
//best_of
const map_name = document.getElementById("map_name")
const tournament_stage = document.getElementById("tournament_stage")

//https://countryflagsapi.netlify.app/flag/US.svg

var scoreBoxes = document.getElementsByClassName("score-box");
console.log(scoreBoxes);

//actually, this isn't needed but may find use on the index page instead
for (let i = 0; i < scoreBoxes.length; i++) {
    scoreBoxes[i].addEventListener("click", function () {
        scoreBoxes[i].classList.toggle("bg-orange-300");
    });
}

const params = new URL(document.location.toString()).searchParams;
player_left.innerText = params.get("lplayer")
flag_left.src = `https://countryflagsapi.netlify.app/flag/${params.get("lflag")}.svg`
pr_left.innerText = params.get("lpr");
score_left.innerText = params.get("lscore")
player_right.innerText = params.get("rplayer")
flag_right.src = `https://countryflagsapi.netlify.app/flag/${params.get("rflag")}.svg`
pr_right.innerText = params.get("rpr");
score_right.innerText = params.get("rscore")
const best_of = params.get("bestof")
map_name = params.get("map")
tournament_stage = params.get("stage")