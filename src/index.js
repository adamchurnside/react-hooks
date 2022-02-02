import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { FaStar } from "react-icons/fa";

function App() {
  const sound = useRef(null);
  const color = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" ref={sound} placeholder="Sound..." />
      <input type="color" ref={color} />
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
