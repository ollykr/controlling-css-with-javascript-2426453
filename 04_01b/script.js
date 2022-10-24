const listItem = document.querySelector(".animals li:nth-child(6) a");
// Use .getPropertyValue for "--.." values, otherwise, doesn't work in JS
// We can't do traversing with custom properties
console.log(listItem.style.getPropertyValue("--color"));

const styleSheet = document.styleSheets[0];
// Get a value of a property (--max-width) of a first rule (:root) of a first stylesheet
//  Print 70vw
console.log(styleSheet.cssRules[0].style.getPropertyValue("--max-width"));
