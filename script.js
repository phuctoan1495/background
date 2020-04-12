var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var colorHex = document.querySelector("h3");


console.log(body);

function setGradientBackground() {
	console.log(color1.value);
	console.log(color2.value);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	colorHex.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradientBackground);
color2.addEventListener("input", setGradientBackground);