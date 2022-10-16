// Set initial transition/transform/rotate properties in CSS itself
// Change properties by injecting inline CSS via JS

const box = document.querySelector(".box");
const control = document.querySelector("#degrees");

control.addEventListener("change", () => {
	// Grab a .box , use 'style' interface to set a transform to a new value
	// within rotate I grab a control value to whatever is changed
	box.style.transform = `rotate(${control.value}deg)`;
});

// console.log(styleSheet.cssRules[7].styleMap.get("transition", rotate));
