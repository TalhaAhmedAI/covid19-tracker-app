import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setData(data);
    }
    getData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart />
    </div>
  );
}

export default App;
