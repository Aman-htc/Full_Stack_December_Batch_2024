import React, { useReducer } from "react";
const initialState = {
  current: "",
  previous: "",
  operation: ""
};

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, current: state.current + action.payload };

    case "CHOOSE_OPERATION":
      if (state.current === "") return state;
      return {
        previous: state.current,
        operation: action.payload,
        current: ""
      };

    case "CLEAR":
      return initialState;

    case "DELETE":
      return { ...state, current: state.current.slice(0, -1) };

    case "EVALUATE":
      if (state.operation === "" || state.current === "" || state.previous === "") {
        return state;
      }

      let result = "";
      const prev = parseFloat(state.previous);
      const curr = parseFloat(state.current);

      switch (state.operation) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "*":
          result = prev * curr;
          break;
        case "/":
          result = prev / curr;
          break;
        default:
          break;
      }

      return {
        current: result.toString(),
        previous: "",
        operation: ""
      };

    default:
      return state;
  }
}


  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <h2>Calculator</h2>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
          minHeight: "40px",
          textAlign: "right",
          fontSize: "20px"
        }}
      >
        {state.current || state.previous || "0"}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
        
        <button onClick={() => dispatch({ type: "CLEAR" })}>AC</button>
        <button onClick={() => dispatch({ type: "DELETE" })}>DEL</button>

        <button onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "/" })}>/</button>
        <button onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "*" })}>*</button>

        {[1,2,3,4,5,6,7,8,9].map(num => (
          <button
            key={num}
            onClick={() => dispatch({ type: "ADD_NUMBER", payload: num.toString() })}
          >
            {num}
          </button>
        ))}

        <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "0" })}>0</button>
        <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "." })}>.</button>

        <button onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "-" })}>-</button>
        <button onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "+" })}>+</button>

        <button style={{ gridColumn: "span 4" }} onClick={() => dispatch({ type: "EVALUATE" })}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
