import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import React from "react";

const Header = () => {
  //   const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        {/* <Typography variant="h6">{location.pathname}</Typography> */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
