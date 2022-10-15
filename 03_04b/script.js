// This JS interface of stylesheets is CRUD interface. we can Create, Read, Update andd Delete property values within rules whenever we want using JS

const styleSheet = document.styleSheets[0];
// Print and see "margin-inline" property exists
console.log(styleSheet.cssRules[2].cssText);
styleSheet.cssRules[2].style.setProperty("background-color", "skyblue");
console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));
styleSheet.cssRules[2].style.setProperty("max-inline-size", "65rem");
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));

// e.g let's get rid of margin-inline property of .masthead class
styleSheet.cssRules[2].style.removeProperty("margin-inline");
// Print and see "margin-inline" property removed
// .cssText is how browser sees this css rule in real time, it is live, gets updated automatically, it is dynamic manipulated by JS, and you can see what is currently happening
// when we request anything within cssRules , a browser gives us what it holds in a memory right now
console.log(styleSheet.cssRules[2].cssText);
