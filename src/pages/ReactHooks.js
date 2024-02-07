import * as React from "react";
import { useState } from "react";
import SideNavBar from "../SideNavBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ReactHooks() {
  const [count, setCount] = useState(100);

  function incrementFunction() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrementFunction() {
    setCount((prevCount) => prevCount - 1);
  }

  const [name, setName] = useState("");

  function handleNameChangeUsestate(){
    const names = ["Earn","Grow","More"];
    const int = Math.floor(Math.random()*3);
    setName(names[int])
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="mainsection">
            <h1>3. React Hooks</h1>
            <h4>(A) React Hooks USESTATE Increament & Decreament the values</h4>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={decrementFunction}>
                -
              </Button>
              <span>{count}</span>
              <Button variant="contained" onClick={incrementFunction}>
                +
              </Button>
            </Stack>
            <h4>(B) React Hooks USESTATE Name Change</h4>
            <p>Let's {name} Money!</p>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleNameChangeUsestate}>Click Here!</Button>
            </Stack>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default ReactHooks;
