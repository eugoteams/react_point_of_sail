/** @format */

import React, { Fragment, useEffect, useRef, useState } from "react";
import style from "./ItemCounter.module.css";
import Flex from "../Flex/Flex";
import { Minus, Plus } from "lucide-react";

const ItemCounter = ({ onChange = () => {} }) => {
  const [count, setCount] = useState(1);
  let debounceRef = useRef();

  const onClickListener = (event) => {
    let actionType = event.target.getAttribute("name");
    if (actionType === "minus" && count > 0) {
      setCount((prevState) => prevState - 1);
      return;
    }
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    debounceRef.current = setTimeout(() => {
      onChange(count);
    }, 1000);
    return () => {
      clearTimeout(debounceRef.current);
    };
  }, [count]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex justify={"space_between"} align={"alignCenter"}>
          <div className={`${style.button}`}>
            <div
              className={`${style.overlay}`}
              name="minus"
              onClick={onClickListener}
            ></div>
            <Minus size={9} absoluteStrokeWidth />
          </div>

          <div>{count}</div>
          <div className={`${style.button} ${style.color_plus}`}>
            <div
              className={`${style.overlay}`}
              name="plus"
              onClick={onClickListener}
            ></div>
            <Plus size={9} absoluteStrokeWidth />
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default ItemCounter;
