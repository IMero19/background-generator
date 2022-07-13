var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3");

document.querySelectorAll("input").forEach(function(elm) {
	elm.addEventListener("input", function() {
		document.body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
		h3.textContent = document.body.style.background + ";";
	});
});