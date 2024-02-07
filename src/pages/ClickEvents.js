import * as React from "react";
import SideNavBar from "../SideNavBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ClickEvents() {
  const handleClick= () => {
    alert("Thanks for Clicking!")
  }
  const handleClick1= (name) => {
    alert(`Thanks for Clicking ${name} !`)
  }
  const handleClick2= (e) => {
    alert(e.target.innerText)
  }
  const handleClick3= (name) => {
    alert(`Thanks for Clicking ${name} !`)
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="mainsection">
            <h1>2. Click Events</h1>
            <h4>(A) Normal Click Event</h4>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleClick}>Click Here!</Button>
            </Stack>
            <h4>(B) Click Event with Parameter</h4>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={() =>handleClick1("Prakash")}>Click Here!</Button>
            </Stack>
            <h4>(C) Click Event to be Identify the object details</h4>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={(e) => handleClick2(e)}>Click Here !</Button>
            </Stack>
            <h4>(D) Double Click Event with Parameter</h4>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onDoubleClick={() => handleClick3("Prakash")}>Double Click Here!</Button>
            </Stack>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default ClickEvents;
