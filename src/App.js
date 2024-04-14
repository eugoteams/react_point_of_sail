/** @format */

import "./App.css";
import { Fragment, useCallback, useState } from "react";
import Card from "./Component/Card/Card";
import { menus } from "./model/menu";
import PopUp from "./Component/UI/PopUp/PopUp";

function App() {
  const [state, setState] = useState(false);

  const onMenuClikcListener = (e) => {
    e.preventDefault();
    let data = JSON.parse(e.target.getAttribute("name"));

    console.log(data);
    setState((prevState) => !prevState);
  };

  return (
    <Fragment>
      <PopUp />
      {menus.map((menu) => {
        return (
          <Card
            key={menu.id}
            name={menu.dishname}
            tag={menu.tag}
            price={menu.price}
            onClick={onMenuClikcListener}
          />
        );
      })}
    </Fragment>
  );
}

export default App;
