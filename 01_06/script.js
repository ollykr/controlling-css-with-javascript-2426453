// Morten's solution in lesson 1-07

// My solution
// grab all stylesheets in the document
const styleSheets = document.styleSheets;
// grab List View button
const listButton = document.getElementById("list");
// grab Grid View button
const gridButton = document.getElementById("grid");

gridButton.classList.add("current");

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
	if (styleSheet?.href) {
		const pathName = new URL(styleSheet.href).pathname.split("/").pop();
		if (pathName === "grid.css") {
			return styleSheet;
		}
	}
	listButton.addEventListener("click", () => {
		if (!targetSheet) {
			targetSheet.disabled = false;
		}
		targetSheet.disabled = true;
		listButton.classList.add("current");
		gridButton.classList.remove("current");
	});
	gridButton.addEventListener("click", () => {
		if (!targetSheet) {
			targetSheet.disabled = true;
		}
		gridButton.classList.add("current");
		listButton.classList.remove("current");

		targetSheet.disabled = false;
	});
});
// console.log(targetSheet);

// if ( !== "grid.css") {
// 	targetSheet.disabled = false;
// } else {
// 	targetSheet.disabled = true;
// }

// targetSheet.insertRule(".animals li a {border-color: green}", 1);
// targetSheet.deleteRule(0);
