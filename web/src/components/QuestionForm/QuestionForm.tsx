import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { fromDraftToHTML } from "../../utils";
import AnswerBlock from "./AnswerBlock";

const QuestionForm = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState("single");
  const [correctAnswerFlags, setCorrectAnswerFlags] = useState<number>(1);
  const SubmitHandler = (data) => {
    if (data?.text) {
      data.text = fromDraftToHTML(data.text);
    }
    if (data?.text_below) {
      data.text_below = fromDraftToHTML(data.text_below);
    }

    if (data?.tags) {
      data.tags = data.tags.split(",");
    }
    console.log(data);
  };
  const onError = (errors, e) => console.log(errors, e);
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);

  let search = useLocation().search;
  //@ts-ignore
  const field = new URLSearchParams(search).get("field");
  register("type", { value: type, required: true });
  register("field", { value: field, required: true });
  return (
    <form onSubmit={handleSubmit(SubmitHandler, onError)}>
      <TextField
        disabled
        label="Field"
        variant="outlined"
        defaultValue={field}
        className="form-input"
      />
      <FormControl style={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          defaultValue={type}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={(e) => {
            //@ts-ignore
            setType(e.target.value);
            e.preventDefault();
          }}
        >
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="multi">Multi</MenuItem>
        </Select>
      </FormControl>
      <h2>Question text</h2>
      <Controller
        control={control}
        name="text"
        render={({ field, fieldState, formState }) => (
          <Editor
            editorState={field.value}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={field.onChange}
            placeholder="Enter text here"
          />
        )}
      />
      <h2>Text below</h2>
      <Controller
        control={control}
        name="text_below"
        render={({ field, fieldState, formState }) => (
          <Editor
            editorState={field.value}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={field.onChange}
            placeholder="Enter text here"
          />
        )}
      />
      <h2>Possible answers</h2>
      <RadioGroup name="gender1">
        {possibleAnswers.map((answer, i) => (
          <Controller
            control={control}
            name={`answer_${i}`}
            render={({ field: { value, onChange }, fieldState, formState }) => (
              <AnswerBlock
                key={i}
                value={value}
                onChange={onChange}
                index={i}
                type={type}
              />
            )}
          />
        ))}
      </RadioGroup>
      <h2>Tags (csv) Comma-separated values</h2>
      <TextField
        label="Tags"
        variant="outlined"
        {...register("tags", {
          required: false,
        })}
        className="form-input"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default QuestionForm;
