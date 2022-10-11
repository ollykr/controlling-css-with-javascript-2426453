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
// just show CSSrules in the DOM [number] indicating index number for the rule
// .cssText gives me html output of the rule - aka an actual css rules
console.log(targetSheet.cssRules[0].cssText);
