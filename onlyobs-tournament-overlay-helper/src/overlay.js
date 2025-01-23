import htm from "https://unpkg.com/htm?module"
import vhtml from "https://unpkg.com/vhtml?module"
const html = htm.bind(vhtml);

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

function getScoreBoxesHTML(score, best_of) {
    let currentScore = score;
    let returnHTML = []
    const numScoreBoxes = (parseInt(best_of) / 2) + 0.5
    for (let i = 0; i < numScoreBoxes; i++) {
        returnHTML.push(html`<div class=${currentScore > 0
            ? "score-box bg-orange-300"
            : "score-box"
            }></div>`)
        currentScore--;
    }
    return returnHTML
}

window.addEventListener("storage", function (event) { //listen for localStorage changes
    if (event.storageArea === localStorage) {
        player_left.innerText = localStorage.getItem("player_left")
        flag_left.src = `https://countryflagsapi.netlify.app/flag/${localStorage.getItem("flag_left")}.svg`
        pr_left.innerText = localStorage.getItem("pr_left")
        score_left.innerText = ""
        score_left.insertAdjacentHTML("afterbegin", html`
        <div class="player-score flex-row-reverse">
            ${getScoreBoxesHTML(localStorage.getItem("score_left"), localStorage.getItem("bestof"))}
        </div>`)

        player_right.innerText = localStorage.getItem("player_right")
        flag_right.src = `https://countryflagsapi.netlify.app/flag/${localStorage.getItem("flag_right")}.svg`
        pr_right.innerText = localStorage.getItem("pr_right")
        score_right.innerText = ""
        score_right.insertAdjacentHTML("afterbegin", html`
        <div class="player-score">
            ${getScoreBoxesHTML(localStorage.getItem("score_right"), localStorage.getItem("bestof"))}
        </div>`)

        map_name.innerText = localStorage.getItem("map")
        tournament_stage.innerText = localStorage.getItem("stage")

        var scoreBoxes = document.getElementsByClassName("score-box");

        for (let i = 0; i < scoreBoxes.length; i++) {
            scoreBoxes[i].addEventListener("click", function () {
                scoreBoxes[i].classList.toggle("bg-orange-300")
            })
        }
    }
})