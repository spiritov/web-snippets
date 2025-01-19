import htm from "https://unpkg.com/htm?module"
import vhtml from "https://unpkg.com/vhtml?module"
const html = htm.bind(vhtml);

const add_player = document.getElementById("add_player")
const add_map = document.getElementById("add_map")

const clear_selectfields = document.getElementById("clear_selectfields")
const clear_inputfields = document.getElementById("clear_inputfields")

const player_to_add = document.getElementById("player_to_add")
const map_to_add = document.getElementById("map_to_add")

//URL parameters
const player_left = document.getElementById("player_left")
const player_right = document.getElementById("player_right")
const flag_left = document.getElementById("flag_left")
const flag_right = document.getElementById("flag_right")
const pr_left = document.getElementById("pr_left")
const pr_right = document.getElementById("pr_right")
const score_left = document.getElementById("score_left")
const score_right = document.getElementById("score_right")
const best_of = document.getElementById("best_of")
const map_name = document.getElementById("map_name")
const tournament_stage = document.getElementById("tournament_stage")

const copy_overlay = document.getElementById("copy_overlay")

add_player.addEventListener("mousedown", function () {
    if (player_to_add.value !== "") {
        player_left.insertAdjacentHTML("beforeend", html`
        <option>${player_to_add.value}</option>`)
        player_right.insertAdjacentHTML("beforeend", html`
        <option>${player_to_add.value}</option>`)
        player_to_add.value = ""
    }
});

add_map.addEventListener("mousedown", function () {
    if (map_to_add.value !== "") {
        map_name.insertAdjacentHTML("beforeend", html`
        <option>${map_to_add.value}</option>`)
        map_to_add.value = ""
    }
})

clear_selectfields.addEventListener("mousedown", function () {
    player_left.innerHTML = ""
    player_right.innerHTML = ""
    map_name.innerHTML = ""
})

clear_inputfields.addEventListener("mousedown", function () {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
})

copy_overlay.addEventListener("mousedown", function () {
    navigator.clipboard.writeText(`https://spiritov.github.io/web-snippets/tournament-overlay-helper/overlay.html
    lplayer=${player_left.value}&
    lflag=${flag_left.value}&
    lpr=${pr_left.value}&
    lscore=${score_left.value}&
    rplayer=${player_right.value}&
    rflag=${flag_right.value}&
    rpr=${pr_right.value}&
    rscore=${score_right.value}&
    bestof=${best_of.value}&
    map=${map_name.value}&
    stage=${tournament_stage.value}`);
})