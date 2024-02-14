import * as React from "react";
import { useState } from "react";
import SideNavBar from "../SideNavBar";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function ListsandKeys() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice Coding" },
    { id: 2, checked: false, item: "Play Cricket" },
    { id: 3, checked: false, item: "Read About AI" },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {

    const listItems = items.filter((item) => item.id !== id);
    
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  // const numbers = [-2,-1,0,1,2]
  // const numitems = numbers.filter(n => n>=0).map(n => ({number:n}))
  // console.log(numitems);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="mainsection">
            <h1>4. Lists & Keys</h1>
            <h4>To do Lists</h4>
            <div className="todolist">
              {items.length ? (
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  {items.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        key={value}
                        secondaryAction={
                          <IconButton edge="end" aria-label="comments">
                            <DeleteOutlineIcon
                              role="button"
                              tabIndex="0"
                              onClick={() => handleDelete(value.id,value.checked)}
                            />
                          </IconButton>
                        }
                        disablePadding
                      >
                        <ListItemButton role={undefined} key={value.id}>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={value.checked}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                              onChange={() => handleCheck(value.id)}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={`${value.item}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <p>Your Lists is Empty!</p>
              )}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default ListsandKeys;
