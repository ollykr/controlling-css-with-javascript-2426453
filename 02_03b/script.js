// Inject inline CSS via JS example
// Apply a bg colour to a fifth li element's anchor link
const listItem = document.querySelector(".animals li:nth-child(5) a");

// Inject some CSS into this element - btw, .style property here is the same as CSS style="" inline property
listItem.style.backgroundColor = "orange";
