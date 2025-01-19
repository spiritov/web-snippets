import htm from "https://unpkg.com/htm?module"
import vhtml from "https://unpkg.com/vhtml?module"
const html = htm.bind(vhtml);

const add_player = document.getElementById("add_player")
const add_map = document.getElementById("add_map")

const clear_selectfields = document.getElementById("clear_selectfields")
const clear_inputfields = document.getElementById("clear_inputfields")

const player_to_add = document.getElementById("player_to_add")
const map_to_add = document.getElementById("map_to_add")

const player_left = document.getElementById("player_left")
const player_right = document.getElementById("player_right")
const map_name = document.getElementById("map_name")

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
    navigator.clipboard.writeText("https://spiritov.github.io/web-snippets/speedrun tournament overlay helper/overlay.html");
})