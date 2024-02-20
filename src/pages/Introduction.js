import * as React from "react";
import SideNavBar from "../SideNavBar";
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";


function Introduction() {

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="mainsection">
            <h1>Introduction</h1>
            <Divider />
            <h2>What is React?</h2>
            <ul className="listsec">
              <li>
                <a>- JavaScript Library for building UI</a>
              </li>
              <li>
                <a>- It is used to build Single Page applications</a>
              </li>
              <li>
                <a>- It Allows us to create reusable UI components</a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>Using React in HTML?</h2>
            <ul className="listsec">
              <li>
                <a>- HTML, CSS, JavaScript </a>
              </li>
              <li>
                <a>- DOM</a>
              </li>
              <li>
                <a>- ES6 Syntax and features</a>
              </li>
              <li>
                <a>- Install Node.js and NPM</a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>Creating React App</h2>
            <ul className="listsec">
              <li>
                <a>
                  - Install <i>Node.js</i>{" "}
                </a>
              </li>
              <li>
                <a>
                  - CLI for Node version check : <i>node –v</i>
                </a>
              </li>
              <li>
                <a>
                  - Check npm software version : <i>npm –v</i>
                </a>
              </li>
              <li>
                <a>
                  - Create React app : <i>npx create-react-app myreactapp</i>
                </a>
              </li>
              <li>
                <a>
                  - Project directory : <i>cd myreactapp</i>
                </a>
              </li>
              <li>
                <a>
                  - Open Project in VS code : <i>code .</i>{" "}
                </a>
              </li>
              <li>
                <a>
                  - Open terminal in VS code : <i>Ctrl + `</i>
                </a>
              </li>
              <li>
                <a>
                  - Run React app : <i>npm start</i>
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is JSX?</h2>
            <ul className="listsec">
              <li>
                <a>- JSX stands for JavaScript XML.</a>
              </li>
              <li>
                <a>- JSX allows us to write HTML in React.</a>
              </li>
              <li>
                <a>- JSX makes it easier to write and add HTML in React.</a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is ES6?</h2>
            <ul className="listsec">
              <li>
                <a>- ES6 stands for ECMA script 6 version</a>
              </li>
              <li>
                <a>
                  - ECMAScript is the standardization of JS programming language
                </a>
              </li>
              <li>
                <a>
                  - Features: Classses, Arrow Functions, Variables(let, const,
                  var)
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is Components?</h2>
            <ul className="listsec">
              <li>
                <a>- Components are independent and reusable bits of code.</a>
              </li>
              <li>
                <a>
                  - They serve the same purpose as JavaScript functions, but
                  work in isolation and return HTML.
                </a>
              </li>
              <li>
                <a>
                  - Components come in two types, Class components and Function
                  components.
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is Class Component?</h2>
            <ul className="listsec">
              <li>
                <a>
                  - A class component must include the extends React. Component
                  statement. This statement creates an inheritance to React.
                  Component, and gives your component access to React.
                  Component’s functions.
                </a>
              </li>
              <li>
                <a>
                  - The component also requires a render () method, this method
                  returns HTML.
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is Functional Component?</h2>
            <ul className="listsec">
              <li>
                <a>
                  - Here is the same example as above, but created using a
                  Function component instead.
                </a>
              </li>
              <li>
                <a>
                  - A Function component also returns HTML and behaves much the
                  same way as a Class component, but Function components can be
                  written using much less code, are easier to understand
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is Props?</h2>
            <ul className="listsec">
              <li>
                <a>
                  - Props is short for properties and they are used to pass data
                  between React components. React’s data flow between components
                  is uni-directional (from parent to child only)
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is State?</h2>
            <ul className="listsec">
              <li>
                <a>- React components has a built-in state object.</a>
              </li>
              <li>
                <a>
                  - The state object is where you store property values that
                  belongs to the component.
                </a>
              </li>
              <li>
                <a>
                  - When the state object changes, the component re-renders.
                </a>
              </li>
            </ul>
            <br />
            <Divider />
            <h2>What is React Events?</h2>
            <ul className="listsec">
              <li>
                <a>- Just like HTML DOM events, React can perform actions based on user events.</a>
              </li>
              <li>
                <a>
                  - React has the same events as HTML: click, change, mouseover etc.
                </a>
              </li>
            </ul>
            <br />
            <Divider />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Introduction;
