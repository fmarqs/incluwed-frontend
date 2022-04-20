import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1
  }
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      position="fixed"
      color="inherit"
    >
    <Toolbar>  
        <div>
          <span className="titleHeader"> INCLUWED</span>
        </div>
        <div className={classes.grow}/>
        <div>
          <Button>
            <Avatar alt="Fernando Marques" src="/" />
          </Button>
        </div>
    </Toolbar>  
    </AppBar>
  );
}

export default Header;
