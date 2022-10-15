// Access the declaration of a specific CSS rule

// Grab first stylesheet on a page
const styleSheet = document.styleSheets[0];
console.log(styleSheet); /* print style.css */
// Grab .masthead which is third declaration of a cssRule for style.css
console.log(styleSheet.cssRules[2]); /* print  selectorText .masthead , etc*/
