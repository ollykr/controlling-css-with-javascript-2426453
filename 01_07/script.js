// Morten's solution
const styleSheets = document.styleSheets;
const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");

const styleSheetsArray = Array.from(styleSheets);
// Find grid.css stylesheet
const targetSheet = styleSheetsArray.find((styleSheet) => {
	if (styleSheet?.href) {
		const pathName = new URL(styleSheet.href).pathname.split("/").pop();
		if (pathName === "grid.css") {
			return styleSheet;
		}
	}
});
// Disable grid.css once found
targetSheet.disabled = true;
// make List View button highlighted by adding "current" CSS class to it
listButton.classList.add("current");
// Set a switcher to toggles buttons toggling "current" CSS class
// targetID is #id list/grid applied to buttons
const highlightSelected = (targetID) => {
	// if id="grid"
	if (targetID === "grid") {
		listButton.classList.remove("current");
		gridButton.classList.add("current");
	} else {
		gridButton.classList.remove("current");
		listButton.classList.add("current");
	}
};
// Listen to List View button click events
listButton.addEventListener("click", (e) => {
	highlightSelected(e.target.id);
	// disable grid.css on clicking List View button which displays items as a list
	targetSheet.disabled = true;
});
// Listen to Grid View button click events
gridButton.addEventListener("click", (e) => {
	highlightSelected(e.target.id);
	// grid.css is in effect displaying items as a grid
	targetSheet.disabled = false;
});
