import { React, useRef, useState, useEffect } from "react";
import "./AddStudentScreen.css";
import TextField from "../../components/TextInput/TextInput";
import Card from "../../components/card/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const AddStudentScreen = (props) => {
  const [name, setName] = useState([]);
  const textValue = useRef("");

  const textHandler = () => {
    console.log(textValue.current.value);
    console.log("==>", textValue);
    
  };

  const addNames = () => {
    const obj = {
      id: name.length + 1,
      name: textValue.current.value,
    };
    const temp_names = [...name, obj];

    setName(temp_names);
    console.log("namesObj==>", name);
  };

  const deleteItem = (id) => {
    const temp = name.filter((e,i)=>i!=id);;
    
    setName(temp);
    console.log(name);

  };

  const RenderItem = () => {
    return (
        
      <Grid container style={{margin:10}} spacing={5} className="item3">
        {name.map((e, i) => {
          return (
            <Grid item >
              <Card
                onClick={deleteItem.bind(this, i)}
                name={e.name}
                key={e.id}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  };
  return (
    <div className="s-container">
      <div className="input-text-container">
        <TextField onchange1={textHandler} inputRef333={textValue} />
        <Button
          onClick={addNames}
          variant="contained"
          style={{ width: "30%", marginRight: 40 }}
        >
          Add
        </Button>
        <button
          onClick={() => {
            console.log("check==>", name);
          }}
        >
          print
        </button>
      </div>
      <Container className="n-list">
        <RenderItem />
      </Container>
    </div>
  );
};

export default AddStudentScreen;
