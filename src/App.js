import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    const category = e.target[0].value;
    const title = e.target[1].value;
    const author = e.target[2].value;
    const taskData = [
      ...data,
      {
        category: category,
        title: title,
        author: author,
        id: new Date().getUTCMilliseconds(),
      },
    ];
    console.log("taskData", taskData);
    setData(taskData);
    document.getElementById("create-task-form").reset();
  };

  const handleRemove = (id) => {
    setData((prev) => prev.filter((i) => i.id != id));
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Bookstore CMS</h1>
        </div>
        <a href="/" aria-current="page">
          BOOKS
        </a>
        <a href="/categories">CATEGORIES</a>
      </nav>
      <div className="container">
        <ul>
          {data.map((i, n) => (
            <li key={n}>
              <div className="card">
                <div className="flex-wraper">
                  <div>
                    <div className="top">
                      <b>{i.category} </b>
                      <div className="titles">{i.title}</div>
                      <div className="author">{i.author}</div>
                    </div>
                    <div class="myBtn">
                      <p class="comment">Comments</p>
                      <p class="removeBtn" onClick={() => handleRemove(i.id)}>
                        Remove Book
                      </p>
                      <p class="edit">Edit</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-center">
                      <div class="circular-progress">
                        <div role="progressbar"></div>
                      </div>

                      <div className="progress-stat">
                        <p class="percent-complete">25%</p>
                        <p class="completed">Completed</p>
                      </div>
                    </div>

                    <div class="current-page-container">
                      <div>
                        <p class="current-page-label">CURRENT PAGE</p>
                        <p class="current-page">page 11</p>
                      </div>
                      <button class="btn btn-primary" type="button">
                        UPDATE PROGRESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="title"> ADD NEW BOOK</div>
        <form
          class=" d-flex justify-content-center flex-column"
          onSubmit={submitForm}
          id="create-task-form"
        >
          <div className="input-wrapper">
            <input
              type="text"
              class="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Category"
              name="category"
              required
            />
            <input
              type="text"
              class="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Book Title"
              name="title"
              required
            />
            <input
              type="text"
              class="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Author"
              name="author"
              required
            />

            <button class="btn btn-primary submit" type="submit">
              Add book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
