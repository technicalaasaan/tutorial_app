import {Routes, Route, BrowserRouter} from "react-router-dom";
import NameChange from './NameChange';
import ClickEvents from './ClickEvents';
import ReactHooks from './ReactHooks';
import ListsandKeys from './ListsandKeys';

function MenuRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<NameChange/>}></Route>
          <Route path="/clickevents" exact element={<ClickEvents/>}></Route>
          <Route path="/reacthooks" exact element={<ReactHooks/>}></Route>
          <Route path="/listsandkeys" exact element={<ListsandKeys/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MenuRouting;
