let images = ["img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png"
];
let dice = document.querySelectorAll("img");

function preload(url) {
    img = new Image()
    img.src = url
}

$(document).ready(function() {
    for (var i = 1; i <= 6; i++) {
        preload('img/' + num + ".png")
    }
});

function toggle_info() {
    Array.from(document.querySelectorAll('.infobox')).forEach(function(el) {
        el.classList.toggle("hidden");
    });
}

function flip(el) {
    el.classList.toggle("flipped")
}

function reset() {
    Array.from(document.querySelectorAll('.number')).forEach(function(el) {
        el.classList.remove('flipped');
    });
}

function roll() {
    document.querySelector("#die-1").classList.add("shake");
    document.querySelector("#die-2").classList.add("shake");
    setTimeout(function() {
        document.querySelector("#die-1").classList.remove("shake");
        document.querySelector("#die-2").classList.remove("shake");
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue + 1, dieTwoValue + 1);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    }, 500);
}
roll();