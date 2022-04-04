import React from "react";
import "./components/style.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { makeStyles } from "@material-ui/styles";
import { Toolbar } from "@material-ui/core";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: 24,
  },
  toolbar: {
    minHeight: "64px",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Toolbar className="toolbar" />
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box display="flex">
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;
