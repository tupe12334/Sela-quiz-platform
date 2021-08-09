import React from "react";
import MyRouter from "../Router";

const Body = () => {
  return (
    <div
      style={{
        marginBottom: 0,
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1600,
        padding: "3rem",
      }}
    >
      <MyRouter />
    </div>
  );
};

export default Body;
