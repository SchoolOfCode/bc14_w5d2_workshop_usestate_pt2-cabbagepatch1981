// 1. Import React into the file.🍏

// 3. Export that function as a default export.

import React from "react";

// 2. Create a new functional component called `Input` that will return JSX (we'll come back to the specifics of this in the next part).

// Step 2: Create the Input functional component

const Item = ({ text, font }) => {
  return <li style={{ fontFamily: `${font}` }}>{text}</li>;
};

// Step 3: Export the Input function as a default export
export default Item;

// Now repeat those steps again (making a new component called `Item` 🍏  in the Item folder under index.js and then steps one to three in task 1.3) but this time for a new component called `Item` that returns a list item (`<li>`) element in JSX instead of an input element.🍏
