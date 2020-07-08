import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div>
      <AppBar>
        <Toolbar className={styles.content}>
          <Typography variant="h5">
            Covid-19 Tracker App by Talha Ahmed
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
