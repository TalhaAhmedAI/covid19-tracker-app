import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetchData();
      setData({ data: response });
    }
    getData();
  });

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
