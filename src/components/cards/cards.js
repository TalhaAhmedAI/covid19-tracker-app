import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import styles from "./cards.module.css";

const Cards = (props) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography>Number or Active cases of Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
