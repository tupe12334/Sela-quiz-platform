import { decode } from "jsonwebtoken";
import React from "react";
import { useSelector } from "react-redux";
import QuestionTable from "../components/admin/management/question/QuestionTable";
import { useGetUserQuery } from "../store/api";

const QuestionManagementPage = () => {
  //@ts-ignore
  const { jwt } = useSelector((state) => state.auth);
  //@ts-ignore
  const { data } = useGetUserQuery({ jwt: jwt, id: decode(jwt)?.id });
  const { questions } = data;
  return (
    <div>
      <QuestionTable questions={questions} />
    </div>
  );
};

export default QuestionManagementPage;
