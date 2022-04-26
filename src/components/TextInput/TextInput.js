import { React } from "react";
import TextField from "@mui/material/TextField";
import "./TextInput.css";
const TextInput = (props) => {
  return (
    <div className="input-text-container2">
      <h1 style={{ marginLeft: 12,marginTop:20, fontSize: 12,fontWeight:'normal'}}>اسم الطالب </h1>
      <TextField
        className="text"
        label="الأسم"
        onChange={props.onchange1}
        inputRef={props.inputRef333}
      />
    </div>
  );
};
export default TextInput;
