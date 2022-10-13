// Treating styles as element attributes

const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";
listItem.style.fontStyle = "italic";

// Add a different attribute to a style
// print in console - font-style: italic
// the original styles were removed, we use italic now, no orange bg color
// a word of caution, that's why we don't want to use attribute method as it replaces whatever styles were there
// instead of replacing one property I am replacing all properties - USE .style property instead
// listItem.setAttribute("style", "font-style: italic");

// Use attribute method to grab a style
// print in console - background-color: orange
console.log(listItem.getAttribute("style"));
