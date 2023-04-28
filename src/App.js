import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [inputval, setinputval] = useState("");
  const [inputArr, setinputArr] = useState([]);

  const addItems = () => {
    if (!inputval) {
      alert("Please give some Data");
    } else {
      setinputArr([...inputArr, inputval]);
      setinputval("");
    }
  };
  const DeleteItem = (id) => {
    const newArr = inputArr.filter((val, ind) => {
      return id !== ind;
    });
    setinputArr(newArr);
  };
  return (
    <div className="App">
      <div>
        <h2>Todo Task</h2> <br></br>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={inputval}
          onChange={(e) => {
            console.log(e.target.value);

            setinputval(e.target.value);
          }}
        ></input>
        <button className="btn btn-primary" onClick={addItems}>
          {" "}
          Add Task
        </button>
      </div>

      <div className="flex-wrapper">
        {inputArr.map((val, ind) => {
          return (
            <div className="card1" key={ind}>
              <div className="text-wrapper">{val} </div>
              <button
                className="btn btn-danger"
                onClick={() => DeleteItem(ind)}
              >
                {" "}
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;