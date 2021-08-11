import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminMenu = ({ fields }) => {
  const [filed, setFiled] = useState(fields[0].title);
  useEffect(() => {
    console.log(fields);
  }, [fields]);
  return (
    <div>
      <h2>Main Menu</h2>
      <div>
        <Typography> Choose filed of study:</Typography>
        <select
          onChange={(e) => {
            setFiled(String(e.target.value));
          }}
        >
          {fields?.map(
            (filed, i) =>
              filed.title && (
                <option key={i} value={filed.title}>
                  {filed.title}
                </option>
              )
          )}
        </select>
        <Link to="/Question-management">Manage Questions</Link>
        <Link to="/Quiz-management">Manage Tests</Link>
        <Link to="/">Reports</Link>
      </div>
    </div>
  );
};

export default AdminMenu;
