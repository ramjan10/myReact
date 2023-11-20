import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <div>Count 1- {count}</div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment By count 1
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement By count 2
        </button>
      </div>
      <div>
        <div>Count 2- {count2}</div>
        <button
          type="button"
          onClick={() =>
            dispatch2({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment By count 1
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch2({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement By count 2
        </button>
      </div>
    </div>
  );
}
