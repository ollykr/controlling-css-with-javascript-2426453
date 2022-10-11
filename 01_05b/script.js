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
//  inject a new CSS rule via JS
// it is placed above the same rule but only with a black border
// targetSheet.insertRule(".animals li a {border-color: green}");
// to placev it below black border rule, add index position 1 as a paramether
targetSheet.insertRule(".animals li a {border-color: green}", 1);
