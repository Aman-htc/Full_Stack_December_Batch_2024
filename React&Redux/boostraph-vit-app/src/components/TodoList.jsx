import React, { useReducer, useState } from 'react';

function TodoList() {
  // Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        if (action.payload.trim() === "") return state;
        return [...state, { text: action.payload, completed: false }];

      case "REMOVE_TODO":
        return state.filter((_, index) => index !== action.payload);

      case "TOGGLE_TODO":
        return state.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );

      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, [
    { text: "Run HTML CSS and JavaScript", completed: true},
    { text: "Learn React", completed: false},
    { text: "Creat profile", completed: false},
    { text: "Creat website", completed: false},
    { text: "Creat Resume", completed: false},
    
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  return (
    <div className="card" style={{ width: "40rem" }}>
      <div className="card-body">
        <h5 className="card-title">Todo List</h5>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter list item name"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleAdd}
          >
            Add todo item
          </button>
        </div>

        <div className="row">
          {todos.map((todo, index) => (
            <React.Fragment key={index}>
              <div className="col-6 text-start">
                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  <img
                    src={
                      todo.completed
                        ? "https://img.icons8.com/?size=32&id=cL95UuXTO0nU&format=png"
                        : "https://img.icons8.com/?size=60&id=78597&format=png" 
                    }
                    className="imagesize"
                    alt="status"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: index })
                    }
                  />{" "}
                  {todo.text}
                </p>
              </div>
              <div className="col-6 text-end">
                <div
                  className="btn btn-outline-danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE_TODO", payload: index })
                  }
                >
                  Remove
                </div>
              </div>
              <hr className="mt-3" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
