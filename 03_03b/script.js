// Set existing property value or create a new property - either JS-defined name or CSS specific property name

const styleSheet = document.styleSheets[0];
// print 70vw
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));

// Set max-inline-size to 65rem instead of 70vw
// Method 1 - JS-defined
styleSheet.cssRules[2].style.maxInlineSize = "65rem";
// Get a value of non-existing property for a certain declaration
// Print...nothing
// console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));
// set a bg colour of .masthead declaration to skyblue
styleSheet.cssRules[2].style.setProperty("background-color", "skyblue");
// get skyblue as a value , print skyblue
console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));
