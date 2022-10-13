// Working with computed styles (under "computed" tab in Dev Tool Inspector)

// Grab a heading h1
const heading = document.querySelector(".masthead h1");
// Grab heading's computed style via browser's getComputedStyle property
const computedStyles = window.getComputedStyle(heading);
// Grab a value for fontSize
console.log(computedStyles.fontSize);
