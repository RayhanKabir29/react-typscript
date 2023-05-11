import { useReducer } from "react";

type CounterState = {
  count: number;
};
type CounterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increament":
      return { count: state.count + action.payload };
    case "decreament":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increament", payload: 10 })}>
        Increament 10
      </button>
      <button onClick={() => dispatch({ type: "decreament", payload: 10 })}>
        Decreament 10
      </button>
    </>
  );
};

export default Counter;
