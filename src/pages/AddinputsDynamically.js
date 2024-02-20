import * as React from "react";
import { useState } from "react";
import SideNavBar from "../SideNavBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const DynamicInputFields = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleAddFields = () => {
    setInputFields([...inputFields, { value: "" }]);
  };
  
  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="mainsection">
            <h1>
              5. To dynamically add and delete input fields in a React
              functional component
            </h1>
            <Stack spacing={2} direction="row">
              {inputFields.map((inputField, index) => (
                <div key={index}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    value={inputField.value}
                    onChange={(event) => handleChange(index, event)}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Type your name"
                      variant="outlined"
                    />
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => handleRemoveFields(index)}
                    >
                      Remove
                    </Button>
                  </Box>
                </div>
              ))}
              <Box>
                <Button variant="contained" onClick={handleAddFields}>
                  Add Field
                </Button>
              </Box>
            </Stack>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DynamicInputFields;
