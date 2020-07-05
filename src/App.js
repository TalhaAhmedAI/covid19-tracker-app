import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setData(data);
    }
    getData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="Corona logo" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
