import React from "react";
import Header from "./components/Header"
import Feed from "./components/Feed"
import Ranking from "./components/Ranking"
import { makeStyles } from "@mui/base"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1280px',
    margin: '0 auto',
  },
  toolbar: {
    minHeight: '64px',
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header/>
        <div className={classes.toolbar}> </div>
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
