// Vert 

let vert = document.getElementById("vert");
vert.addEventListener("mouseover", mouseOver);
vert.addEventListener("mouseout", mouseOut);
function mouseOver() {
    vert.style.backgroundColor = "green";
}
function mouseOut() {
    vert.style.backgroundColor = "";
}