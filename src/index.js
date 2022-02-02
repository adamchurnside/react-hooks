import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import { FaStar } from "react-icons/fa";
//const [,,third] = ["Adam", "Bertil", "Cecil", "David"];

//console.log(people[2]);
//console.log(third);
//const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? "red" : "gray"}
//   onClick={onSelect}/>;
// }

// function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <>
//     {createArray(totalStars).map((n, i) =>
//     <Star key={i} selected={selectedStars > i}
//       onSelect={() => setSelectedStars(i+1) }
//     />
//     )}
//     <p>{selectedStars} of {totalStars}</p>
//     </>
//   )

// }

const initialState = {
  message: "hi",
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}!`,
      };
    case "whisper":
      return {
        message: `excuse me I just said ${state.message}`,
      };
    default:
      return {
        message: "No message sent",
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <p>Message: {state.message}</p>
    <button onClick={() => dispatch({type: "yell"})}>YELL</button>
    <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
    </>
  )

  // const [number, setNumber] = useReducer(
  //   (number, newNumber) => number + newNumber, 0
  // );
  // console.log(number);
  // return <h1 onClick={() => setNumber(1)}>{number}</h1>;
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []); // [] means run only once
  // if (data) {
  //   return (
  //     <div>
  //     <ul>
  //       {data.map((user) => (
  //         <li key={user.id}>{user.login}</li>
  //       ))}
  //     </ul>
  //     <button onClick={() => setData([])}>Remove Data</button>
  //     </div>
  //   );
  // }
  // return <p>No users</p>;
  // const [name, setName] = useState("Jan");
  // const [admin, setAdmin] = useState(false);
  // useEffect(() => {
  //   document.title = `Celebrate ${name}`;
  //   console.log(`Celebrate ${name}`);
  // }, [name]);
  // useEffect(() => {
  //   console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  // }, [admin]);
  // return (
  //   <section>
  //     <p>Contratulations {name}!</p>
  //     <button onClick={() => setName("Adam")}>Change winner </button>
  //     <p>{admin ? "Logged in" : "not logged in"}</p>
  //     <button onClick={() => setAdmin(true)}>Logged in</button>
  //   </section>
  //)
  // return <StarRating totalStars={5} />;
  // const [status, setStatus] = useState("Not Delivered");
  // const [checked, setChecked] = useState(false);
  // return (
  //   <div>
  //     {/* <h1>The package is: {status}</h1>
  //     <button onClick={() => setStatus("Delivered")}>Deliver</button> */}
  //     <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
  //     <p>{checked ? "checked" : "not checked"}</p>
  //   </div>
  // );
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
