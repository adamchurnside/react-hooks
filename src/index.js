import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useInput } from "./useinput";

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        {...titleProps}
        placeholder="Sound..."
      />
      <input
        type="color"
        {...colorProps}
      />
      <button>ADD</button>
    </form>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
