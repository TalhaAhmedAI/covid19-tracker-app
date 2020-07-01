import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import styles from "./cards.css";

const Cards = () => {
  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography>Infected</Typography>
          <Typography variant="h5" component="h2">
            Real Data
          </Typography>
          <Typography>Date</Typography>
          <Typography>Number of active cases of COVID-19</Typography>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <Typography>Infected</Typography>
          <Typography variant="h5" component="h2">
            Real Data
          </Typography>
          <Typography>Date</Typography>
          <Typography>Number of active cases of COVID-19</Typography>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <Typography>Infected</Typography>
          <Typography variant="h5" component="h2">
            Real Data
          </Typography>
          <Typography>Date</Typography>
          <Typography>Number of active cases of COVID-19</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
