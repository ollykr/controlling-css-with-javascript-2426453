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
