import { Button } from "@material-ui/core";
import { decode } from "jsonwebtoken";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../store/api";

const UserPage = () => {
  //@ts-ignore
  const { jwt } = useSelector((state) => state.auth);
  //@ts-ignore
  const { data } = useGetUserQuery({ jwt: jwt, id: decode(jwt)?.id });
  return (
    <div>
      Welcome {data?.user?.name ? data?.user?.name : data?.user?.userName}
      <br />
      {
        //@ts-ignore
        decode(jwt).role === "Admin" && (
          <Button
            component={Link}
            //@ts-ignore
            to={`/admin/${decode(jwt)?.id}`}
            variant="contained"
          >
            Admin dashboard
          </Button>
        )
      }
    </div>
  );
};

export default UserPage;
