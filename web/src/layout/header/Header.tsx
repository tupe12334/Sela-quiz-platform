import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { decode } from "jsonwebtoken";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { jwt } = useSelector((state) => state.auth);
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-around" }}>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6">{JSON.stringify(decode(jwt))}</Typography>
        <div style={{ marginLeft: "auto" }}>
          {jwt ? (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </Button>
              <IconButton
                edge="start"
                color="inherit"
                component={Link}
                //@ts-ignore
                to={`/user/${decode(jwt).id}`}
              >
                <AccountCircleIcon />
              </IconButton>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
