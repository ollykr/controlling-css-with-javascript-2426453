const styleSheet = document.styleSheets[0];
// Grab a value of a specificc CSS declaration - e.g max-inline-size
// use case - we can check if a particular value matches whatever requirements we have, if it doesn't , I can change grabbed value to something else
// print 70vw;
// console.log(styleSheet.cssRules[2].style.maxInlineSize);

// Sometimes you need to query CSS name like "max-inline-size", instead of JS defined name, then use .getPropertyValue method
// Print 70vw;
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
