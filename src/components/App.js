import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [display,setDisplay] = useState(false);

  return (
    <div className="App" id="main">
      <h2>Button Action</h2>
      <button id="click" onClick={() => setDisplay(!display)}>
        {display ? "Hide" : "Show"} Content
      </button>
      <p className={display?"show":"hide"} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
