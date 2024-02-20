import {Routes, Route, BrowserRouter} from "react-router-dom";
import Introduction from './Introduction';
import NameChange from './NameChange';
import ClickEvents from './ClickEvents';
import ReactHooks from './ReactHooks';
import ListsandKeys from './ListsandKeys';
import AddinputsDynamically from './AddinputsDynamically';

function MenuRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Introduction/>}></Route>
          <Route path="/namechange" exact element={<NameChange/>}></Route>
          <Route path="/clickevents" exact element={<ClickEvents/>}></Route>
          <Route path="/reacthooks" exact element={<ReactHooks/>}></Route>
          <Route path="/listsandkeys" exact element={<ListsandKeys/>}></Route>
          <Route path="/addinputsdynamically" exact element={<AddinputsDynamically/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MenuRouting;
