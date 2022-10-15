// The CSS Typed Object Model , or CSSOM

const styleSheet = document.styleSheets[0];

// Query CSS "opacity" property
let headingOpacity = styleSheet.cssRules[2].style.opacity;
// Print a value 0.7 - it is a string, not a number . Whatever CSS we query using JS gives us a string
console.log(headingOpacity);
// The issue is that we need to convert strings into numbers , it makes it more complex if we have to convert a string like 400% or 70vw as there is no straightforward way to split them into numbers, we have to write a function just to split them

// Hence enter CSSOM - warning, doesn't work in all browsers yet, some of it works in Chrome
// We want to get 0.9 to do math on this
headingOpacity = headingOpacity + 0.2;
// Print 0.70.2 - a string
console.log(headingOpacity);
// Get a second rule , look for styleMap and value size:8
// size: 8 corresponds to a number from the properties list defined for the rule
// it means that there is a map-like object sitting inside the rule, then we can use map-like stuff like "get", "set" on the rule's properties/values
console.log(styleSheet.cssRules[2]);

// let's use map-like interface
let typedHeadingOpacity = styleSheet.cssRules[2].styleMap.get("opacity").value;
// print 0.7 in blue color (not black) - meaning it is a number, not a string
console.log(typedHeadingOpacity);
// print "number"
console.log(typeof typedHeadingOpacity);
typedHeadingOpacity = typedHeadingOpacity + 0.2;
// print 0.8999999999999999 in blue color (not black) - meaning it is a number, not a string
console.log(typedHeadingOpacity);
