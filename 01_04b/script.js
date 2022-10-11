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
// .style gives you whole list of css properties for an element
// but to specify which property you are trying to acess is more useful , e.g .transition gives me transition property only, rather it gives a value of the property
console.log(targetSheet.cssRules[0].style.transition);
