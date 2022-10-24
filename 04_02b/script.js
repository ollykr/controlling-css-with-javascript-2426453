const listItem = document.querySelector(".animals li:nth-child(6) a");
// .cssText gives a verbose version of CSS declaration as it appears either inline or in a stylesheet

console.log(listItem.style.cssText);
// Change an existing custom property aka CSS var
// Set a skyblue color as a custom property for a text
listItem.style.setProperty("--color", "skyblue");
// Print --color: skyblue;
console.log(listItem.style.cssText);

const styleSheet = document.styleSheets[0];

// Print
// --color: hsl(312, 100 %, 50 %);
// --bg - color: hsl(132, 100 %, 50 %);
// --max-width: 70vw; --whitespace: 2rem;
console.log(styleSheet.cssRules[0].style.cssText);

// Set a new custom property
styleSheet.cssRules[0].style.setProperty("--border-color", "hsl(53 100% 50%)");
// Print --border-color:hsl(53 100% 50%);
console.log(styleSheet.cssRules[0].style.cssText);
