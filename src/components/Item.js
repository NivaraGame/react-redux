import React, { useState } from "react";
import store from "../.store/store";

function Item(props) {
  const [counter, setCounter] = useState(0);
  let cats = [];
  // example use redux
  store.dispatch({
    type: "CREATE_CAT",
    name: "CAT",
    value: "that cat say meow",
  });

  cats = store.getState();
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Cat say meow {counter} times</h1>
      <button onClick={decrement}>
        <h1>-</h1>
      </button>
      <button onClick={increment}>
        <h1>+</h1>
      </button>
      {cats.map((cat) => (
        <p key={cat.name}>
          {cat.name} {cat.value}
        </p>
      ))}
    </div>
  );
}

export default Item;
