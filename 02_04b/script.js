// Access inline CSS styles example
const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";

// Grab all stykes for an element assigned to listItem variable
console.log(listItem.style);
// Grab just bg color
console.log(listItem.style.backgroundColor);
