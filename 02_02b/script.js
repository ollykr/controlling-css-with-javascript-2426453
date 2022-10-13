// Working with computed styles (under "computed" tab in Dev Tool Inspector)

// Grab a heading h1
const heading = document.querySelector(".masthead h1");
// Grab heading's computed style via browser's getComputedStyle property
const computedStyles = window.getComputedStyle(heading);
// Grab a value for fontSize
console.log(computedStyles.fontSize);
// Get computed property value (for a font-size) - it gives the same result as the line above it
console.log(computedStyles.getPropertyValue("font-size"));
