import { Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import React from "react";
import QuestionHeaders from "./QuestionHeaders";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ questions }) => {
  console.log(questions);

  if (questions) {
    return (
      <TableContainer component={Paper}>
        <Table>
          <QuestionHeaders />
          <TableBody>
            {questions.map((question) => (
              <QuestionRow question={question} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <></>;
  }
};

export default QuestionTable;
