import React from "react";
import "./style.css"
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

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
            <span className="titleHeader"> INCLUWED - LOGIN </span>
          </div>
          {/* <div className={classes.grow}/>
          <div>
          </div> */}
          
      </Toolbar>  
    </AppBar>
  );
}

export default Header;
