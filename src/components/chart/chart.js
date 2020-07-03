import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchURL = async () => {
      setDailyData(await fetchDailyData());
    };

    console.log(dailyData);

    fetchURL();
  }, []);

  const LineChart = dailyData[0] ? (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;
  return <h1> Chart</h1>;
};

export default Chart;
