import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

const QuestionRow = ({ question }) => {
  return (
    <TableRow key={question.name}>
      <TableCell component="th" scope="row">
        {question.id}
      </TableCell>
      <TableCell>{question.text}</TableCell>
      <TableCell>{question.updatedAt}</TableCell>
      <TableCell>{question.type}</TableCell>
      {JSON.stringify(question)}
    </TableRow>
  );
};

export default QuestionRow;
