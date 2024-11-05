const btnRandom = document.querySelector("#random-btn")

function moverAletoriamente(btn) {
    btn.style.fontWeight = "bolder";
    btn.style.position = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 +5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 +5) + "%";
}

btnRandom.addEventListener("mouseenter", function (e) {
    moverAletoriamente(e.target)
})