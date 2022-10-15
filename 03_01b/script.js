// Access the declaration of a specific CSS rule

// Grab first stylesheet on a page
const styleSheet = document.styleSheets[0];
/* print  actual CSS rule text for .masthead {...etc}*/
console.log(styleSheet.cssRules[2].cssText);
