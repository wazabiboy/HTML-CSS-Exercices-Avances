// Rouge 
let rouge = document.getElementById("rouge");
rouge.addEventListener("mouseover", mouseOver);
rouge.addEventListener("mouseout", mouseOut);
function mouseOver() {
    rouge.style.backgroundColor = "red";
}
function mouseOut() {
    rouge.style.backgroundColor = "";
}



