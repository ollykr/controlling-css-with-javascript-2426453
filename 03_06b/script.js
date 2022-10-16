// Create and access style rules with the styleMap property
const styleSheet = document.styleSheets[0];

console.log(styleSheet.cssRules[2]);
// We need to work with 70vw
// get the property's value (70)
let maxInlineValue =
	styleSheet.cssRules[2].styleMap.get("max-inline-size").value;
// get the property's unit (vw)
let maxInlineUnit = styleSheet.cssRules[2].styleMap.get("max-inline-size").unit;
// Print maxInlineValue = 70, maxInlineUnit = vw
console.log(
	`maxInlineValue = ${maxInlineValue}, maxInlineUnit = ${maxInlineUnit}`
);

// Setting a new value for max-inline-size using styleMap
styleSheet.cssRules[2].styleMap.set(
	"max-inline-size",
	`${maxInlineValue * 2}${maxInlineUnit}`
);
console.log(styleSheet.cssRules[2].style.maxInlineSize);
