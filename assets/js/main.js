let Hallo = document.getElementById("element");
let Head = document.getElementById("text");

function Small() {
    console.log("testSmall");
    Hallo.classList.remove("medium");
    Hallo.classList.remove("big");
    Head.classList.remove("textColor");
    Hallo.classList.add("small");
}

function Medium() {
    console.log("testMedium");
    Hallo.classList.remove("big");
    Head.classList.remove("textColor");
    Hallo.classList.add("medium");
}

function Big() {
    console.log("testBig");
    Hallo.classList.remove("medium");
    Hallo.classList.toggle("big");
    Head.classList.toggle("textColor");
    Head.classList.add("smallColor");
}