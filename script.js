const body = document.body;
const numberElem = document.querySelector(".number");
const button = document.querySelector("button");

function randomNumber() {
	return Math.floor(Math.random() * 256);
}

button.addEventListener("click", function() {
	let rgbColorCode = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
	numberElem.textContent = rgbColorCode;
	body.style.backgroundColor = rgbColorCode;
});