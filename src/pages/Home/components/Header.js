import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/styles"
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      position="fixed"
      color="inherit"
      style={{
        background: "#F6F2E6",
      }}
    >
    <Toolbar className="toolbar">  
        <div>
          <span className="titleHeader"> INCLUWED</span>
        </div>
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
