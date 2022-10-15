// The CSS Typed Object Model , or CSSOM

const styleSheet = document.styleSheets[0];

// Query CSS "opacity" property
let headingOpacity = styleSheet.cssRules[2].style.opacity;
// Print a value 0.7 - it is a string, not a number . Whatever CSS we query using JS gives us a string
console.log(headingOpacity);
// The issue is that we need to convert strings into numbers , it makes it more complex if we have to convert a string like 400% or 70vw as there is no straightforward way to split them into numbers, we have to write a function just to split them

// Hence enter CSSOM
