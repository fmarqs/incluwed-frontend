import React from "react";
import Header from "./components/Header"
import Feed from "./components/Feed"
import Ranking from "./components/Ranking"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root:  {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header/>
      <main className={classes.main}>
        <Feed/>
        <Ranking/>
      </main>
    </div>
  );
}

export default Home;
