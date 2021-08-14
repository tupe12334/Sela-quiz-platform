import { Button } from "@material-ui/core";
import { decode } from "jsonwebtoken";
import React from "react";
import { useSelector } from "react-redux";
import QuestionTable from "../components/admin/management/question/QuestionTable";
import { useGetUserQuery } from "../store/api";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import { Link, useLocation, useParams } from "react-router-dom";

const QuestionManagementPage = () => {
  //@ts-ignore
  const { jwt } = useSelector((state) => state.auth);
  //@ts-ignore
  const { data } = useGetUserQuery({ jwt: jwt, id: decode(jwt)?.id });
  console.log(data);
  let search = useLocation().search;
  const field = new URLSearchParams(search).get("field");
  return (
    <div>
      <QuestionTable questions={data?.questions} field={field} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" startIcon={<ArrowBackIcon />}>
          Go back
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          component={Link}
          to={{ pathname: `/Question/new`, search: search }}
        >
          Create new
        </Button>
      </div>
    </div>
  );
};

export default QuestionManagementPage;
