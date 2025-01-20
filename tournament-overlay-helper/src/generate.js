import htm from "https://unpkg.com/htm?module"
import vhtml from "https://unpkg.com/vhtml?module"
const html = htm.bind(vhtml);

const add_player = document.getElementById("add_player")
const add_map = document.getElementById("add_map")
const add_stage = document.getElementById("add_stage")

const clear_players = document.getElementById("clear_players")
const clear_maps = document.getElementById("clear_maps")
const clear_stages = document.getElementById("clear_stages")
const clear_inputfields = document.getElementById("clear_inputfields")

const player_to_add = document.getElementById("player_to_add")
const map_to_add = document.getElementById("map_to_add")
const stage_to_add = document.getElementById("stage_to_add")

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

player_to_add.addEventListener("keydown", function (pressed) {
    console.log("a");
    if (pressed.key === "Enter" && player_to_add.value !== "") {
        player_left.insertAdjacentHTML("beforeend", html`
        <option>${player_to_add.value}</option>`)
        player_right.insertAdjacentHTML("beforeend", html`
        <option>${player_to_add.value}</option>`)
        player_to_add.value = ""
    }
})

map_to_add.addEventListener("keydown", function (pressed) {
    if (pressed.key === "Enter" && map_to_add.value !== "") {
        map_name.insertAdjacentHTML("beforeend", html`
        <option>${map_to_add.value}</option>`)
        map_to_add.value = ""
    }
})

stage_to_add.addEventListener("keydown", function (pressed) {
    if (pressed.key === "Enter" && stage_to_add.value !== "") {
        tournament_stage.insertAdjacentHTML("beforeend", html`
        <option>${stage_to_add.value}</option>`)
        stage_to_add.value = ""
    }
})

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

add_stage.addEventListener("mousedown", function () {
    if (stage_to_add.value !== "") {
        tournament_stage.insertAdjacentHTML("beforeend", html`
        <option>${stage_to_add.value}</option>`)
        stage_to_add.value = ""
    }
})

clear_players.addEventListener("mousedown", function () {
    player_left.innerHTML = ""
    player_right.innerHTML = ""
})

clear_maps.addEventListener("mousedown", function () {
    map_name.innerHTML = ""
})

clear_stages.addEventListener("mousedown", function () {
    tournament_stage.innerHTML = ""
    tournament_stage.insertAdjacentHTML("beforeend", html`
        <option>Round 1</option>
        <option>Round 2</option>
        <option>Round 3</option>
        <option>Quarterfinals</option>
        <option>Semifinals</option>
        <option>Finals</option>`)
})

clear_inputfields.addEventListener("mousedown", function () {
    const inputs = document.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
})

copy_overlay.addEventListener("mousedown", function () {
    navigator.clipboard.writeText
        (`https://spiritov.github.io/web-snippets/tournament-overlay-helper/src/overlay.html?lplayer=${player_left.value}&lflag=${flag_left.value}&lpr=${pr_left.value}&lscore=${score_left.value}&rplayer=${player_right.value}&rflag=${flag_right.value}&rpr=${pr_right.value}&rscore=${score_right.value}&bestof=${best_of.value}&map=${map_name.value}&stage=${tournament_stage.value}`);
})