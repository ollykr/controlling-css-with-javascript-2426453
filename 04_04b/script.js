// Defining registered custom properties
// we need --font-size property changed from 4rem to 6rem on transition on hover
// syntax is <length> since we work with 4rem-->6rem
window.CSS.registerProperty({
	name: "--font-size",
	syntax: "<length>",
	inherits: false,
	// it is a value set by a browser before CSS is loaded
	// we can't use any relative units - i.e 4rem doesn't work but 16px does
	initialValue: "16px",
});
// syntax is <integer> since it is an intereger even though representing part of a color
window.CSS.registerProperty({
	name: "--hue",
	syntax: "<integer>",
	inherits: false,
	// it is a value set by a browser before CSS is loaded
	// we basically cycling through colors on transition , moving a color wheel
	initialValue: "20",
});

// CSS Typed Object Model
// Since we declared units in custom properties we should be able to query Typed Object Model propertiess -e.g use styleMap to get a value? Not so fast :)
// We should be able to get a value - 4rem but the value is not Typed

const styleSheet = document.styleSheets[0];
// Print 4rem
console.log(styleSheet.cssRules[4].style.getPropertyValue("--font-size"));

console.log(styleSheet.cssRules[4].styleMap.get("--font-size").value);
console.log(styleSheet.cssRules[4].styleMap.get("--font-size").unit);
