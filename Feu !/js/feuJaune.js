

// Jaune

let jaune = document.getElementById("jaune");
jaune.addEventListener("mouseover", mouseOver);
jaune.addEventListener("mouseout", mouseOut);
function mouseOver() {
    jaune.style.backgroundColor = "yellow";
}
function mouseOut() {
    jaune.style.backgroundColor = "";
}