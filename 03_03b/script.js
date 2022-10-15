// Set existing property value or create a new property - either JS-defined name or CSS specific property name

const styleSheet = document.styleSheets[0];
// print 70vw
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));

// Set max-inline-size to 65rem instead of 70vw
// Method 1 - JS-defined
styleSheet.cssRules[2].style.maxInlineSize = "65rem";
// print 65rem
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
// Method 2 - target CSS specific property name
styleSheet.cssRules[2].style.setProperty("max-inline-size", "65rem");
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
