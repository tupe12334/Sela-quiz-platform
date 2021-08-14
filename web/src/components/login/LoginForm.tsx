import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { tryAuthAsync } from "../../store/auth";

const LoginForm = () => {
  //@ts-ignore
  const { jwt } = useSelector((state) => state.auth);
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const SubmitHandler = (data) => {
    dispatch(tryAuthAsync(data));
  };
  useEffect(() => {
    if (jwt) {
      history.push("/");
    }
  }, [jwt]);
  return (
    <form
      onSubmit={handleSubmit(SubmitHandler)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        className="form-input"
        id="outlined-basic"
        label="User"
        variant="outlined"
        {...register("user", {
          required: true,
          maxLength: 20,
          minLength: 2,
          pattern: new RegExp("^[a-zA-Z]+$", "gi"),
        })}
        helperText={errors.user ? "Please enter valid user name" : null}
        error={errors.user}
        style={{ margin: " 1rem 0 1rem" }}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        {...register("password", { minLength: 2 })}
        style={{ margin: " 1rem 0 1rem" }}
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
