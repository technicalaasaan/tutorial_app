import * as React from "react";
import SideNavBar from "../SideNavBar";
import Box from "@mui/material/Box";


function NameChange() {
  function handleNameChange() {
    const names = ["More","Grow","Earn"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="mainsection">
            <h1>Name Change</h1>
            <p>Let's {handleNameChange()} Money!</p>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default NameChange;
