// Create/access inline element styles with attributeStyleMap

const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";
console.log(listItem.style.backgroundColor);

// Add a font-size using styleMap
listItem.attributeStyleMap.set("font-size", "4rem");
// Since I have now access to the new attribute, I can get its value
// Print "4"
console.log(listItem.attributeStyleMap.get("font-size").value);
// Print "rem"
console.log(listItem.attributeStyleMap.get("font-size").unit);
// Print "undefined" - whaaat?!
console.log(listItem.attributeStyleMap.get("background-color").value);
// Print CSSStyleValue  - whaaat?!
console.log(listItem.attributeStyleMap.get("background-color"));
// The 2 above logs are due to the fact that CSSOM works with values which are numbers , and background-color will never be a number.
// Although we can set background-color , we won't be able to get its value through CSSOM.
