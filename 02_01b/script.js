const styleSheets = document.styleSheets;

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
	if (styleSheet?.href) {
		const pathName = new URL(styleSheet.href).pathname.split("/").pop();
		if (pathName === "extra.css") {
			return styleSheet;
		}
	}
});

console.log(targetSheet);

// Define BG colour for an element (extra.css)
// Target a property cssRules and grab a first rule of the target property
// Then target background-color property to change a bg colour to be green
// We injected a new property into a stylesheet
targetSheet.cssRules[0].style.backgroundColor = "hsl(120, 57%, 20%)";
// We overidden existing property in a stylesheet
targetSheet.cssRules[0].style.borderRadius = "100vmin";
