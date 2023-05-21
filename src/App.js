import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DogImage from "./Dog";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState([]);
  const [showForm, setshowForm] = useState(true);
  const submitForm = (e) => {
    e.preventDefault();

    const task = e.target[0].value;
    const date = e.target[1].value;
    const taskData = [...data, { task: task, date: date }];

    localStorage.setItem("taskValue", JSON.stringify(taskData));
    setData(taskData);
    document.getElementById("create-task-form").reset();
  };

  const remove = (item) => {
    const task = data.filter(
      (val) => val.task !== item.task && val.date !== item.date
    );
    setData(task);

    localStorage.setItem("taskValue", JSON.stringify(task));
  };

  useEffect(() => {
    if (localStorage.getItem("taskValue")?.length) {
      setData(JSON.parse(localStorage.getItem("taskValue")));
    }
  }, []);

  return (
    <div className="App">
      <div class="container">
        <div>
          <div style={{ display: "flex" }}>
            <DogImage></DogImage>
            <h1>TASK TRACKER</h1>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            style={{
              background: "rgb(30, 89, 89)",
              color: "white",
              textAlign: "center",
              border: "none",
              marginTop: "1.2rem",
              width: "100%",
            }}
            onClick={() => {
              setshowForm(!showForm); 
            }}
          >
             {showForm? "Show Task Bar" :"Hide Task Bar"}
          </button>


          {showForm && (
            <div>
              <form
                class=" d-flex justify-content-center flex-column"
                onSubmit={submitForm}
                id="create-task-form"
              >
                <div class="mb-1">
                  <label class="form-label" for="formBasicEmail">
                    Task
                  </label>

                  <input
                    placeholder="Enter task"
                    required="true"
                    type="text"
                    id="formBasicEmail"
                    class="form-control"
                  />
                </div>
                <div class="mb-1 ">
                  <label class="form-label" for="formBasicPassword">
                    Date
                  </label>

                  <input
                    required="true"
                    type="datetime-local"
                    id="formBasicPassword"
                    class="text-muted  form-control"
                  />
                </div>
                <button
                  type="submit"
                  class="m-auto btn btn- btn-lg"
                  style={{
                    backgroundColor: "rgb(163, 163, 72)",
                    color: "white",
                    width: "30%",
                    textAlign: "center",
                  }}
                >
                  Save
                </button>
              </form>
            </div>
          )}

          {data.map((item, key) => {
            return (
              <div key={key}>
                <div class="tasklist mt-2 d-flex justify-content-between p-2 rounded-2">
                  <div>
                    <h4>{item.task}</h4>
                    <p>{item.date}</p>
                  </div>
                  <div
                    class="ti d-flex align-items-center"
                    onClick={() => remove(item)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: "rgb(30, 89, 89)",
                        cursor: "pointer",
                        marginRight: "2px",
                        fontSize: "3rem",
                        boxShadow: "rgba(30, 10, 90, 0.95) 2px 2px 2px 2px",
                      }}
                    >
                      <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
