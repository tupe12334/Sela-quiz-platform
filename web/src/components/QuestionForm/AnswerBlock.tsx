import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Radio,
} from "@material-ui/core";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import DeleteIcon from "@material-ui/icons/Delete";

const AnswerBlock = ({ value, onChange, index, type }) => {
  return (
    <div style={{}}>
      <IconButton edge="start" color="inherit">
        <DeleteIcon />
      </IconButton>
      <Editor
        editorState={value}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onChange}
        placeholder={`Answer number ${index + 1}`}
      />
      {type === "single" ? (
        <FormControlLabel value={index} control={<Radio />} label="Female" />
      ) : (
        <Checkbox
          // checked={checked}
          // onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      )}
    </div>
  );
};

export default AnswerBlock;
