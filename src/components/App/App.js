import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import Item from "../Item/index";

function App() {
  const [text, setText] = useState("");
  const font = "Arial";

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // 👺 I need to look at all of this - check readme
  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input onChange={handleChange} text={text} />
      <Item text={text} font={font} />
      <Item text={text} font="Times New Roman" />
      <Item text={text} font="Courier New" />
    </div>
  );
}

export default App;

// Now return both of those components within the JSX in `App` and load your app up in your browser. (Don't forget what you need to do in order to see a local version of your React app in the browser - it's different from loading a normal HTML file.) 🍏

// On the page in your browser, you should see your input field and an empty bullet point. 🍏

// Still in `App.js`, create a piece of state called `text`. Don't forget to use the 'set' convention when you're making the functionality that will eventually change the state! Set the initial state to be an empty string (so that the value of the state is an empty string when the page is first loaded).🍏

// For the function you'll use to change this state, create a new function within your `App` component's function underneath where you defined your state called `handleChange`, similar to how you did the `handleClick` function from this morning's activity. This function needs to change the state of `text` to whatever value the user inputs into the input field.🍏

//     (Don't forget what we learned in JavaScript to get the value that the user enters in an input field! If you have forgotten though, you can Google for a reminder of the onChange attribute.🍏
