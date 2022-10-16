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
