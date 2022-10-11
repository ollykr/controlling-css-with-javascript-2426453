const styleSheets = document.styleSheets;
console.log(styleSheets);

// how to find an index# or extra.css?
// convert stylesheets into an array
const styleSheetsArray = Array.from(styleSheets);
// assign the array to a constant to use find() method on it
// find() grabs each item of the array to see if it matches set condition
// once this condition is met, we run a callback function and just display the item that matches set condition
// "styleSheet" is an individual item of styleSheets array
const targetSheet = styleSheetsArray.find((styleSheet) => {
	// to see if href property has a value other than 0
	if (styleSheet?.href) {
		// 'pathname' is everything after the first slah in an URL
		// 'split' splits pathname into components by forward slashes
		// use pop() just to get a filename, and nothing else
		const pathName = new URL(styleSheet.href).pathname.split("/").pop();
		if (pathName === "extra.css") {
			return styleSheet;
		}
	}
});

console.log(targetSheet);
