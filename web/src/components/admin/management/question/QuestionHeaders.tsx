import { TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const QuestionHeaders = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Text and tags</TableCell>
        <TableCell>Last update</TableCell>
        <TableCell>Type</TableCell>
        <TableCell># of tests</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default QuestionHeaders;
