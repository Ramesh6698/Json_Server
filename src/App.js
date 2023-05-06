import React, { useState, useEffect } from "react";
import Shop from "./Component/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const [data, setdata] = useState([]);

  const logJSONData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    console.log("-jsonData", response, jsonData);
    setdata(jsonData);
  };

  useEffect(() => {
    logJSONData();
  }, []);

  return (
    <div>
      <h1> Online Shopping </h1>

      <Shop data={data} />
    </div>
  );
}

export default App;
