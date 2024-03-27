const decreaseLB = document.getElementById("decrease");
const resetLB = document.getElementById("reset");
const increaseLB = document.getElementById("increase");

const countLB = document.getElementById("count");

let count = 0;

increaseLB.onclick = function() {
    count++;
    countLB.textContent = count;
}
decreaseLB.onclick = function() {
    count--;
    countLB.textContent = count;
}
resetLB.onclick = function() {
    count = 0;
    countLB.textContent = count;
}