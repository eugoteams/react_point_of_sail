/** @format */

import React, { Fragment } from "react";
import style from "./Flex.module.css";

const Flex = ({ children, direction, justify, align, flex = false }) => {
  return (
    <Fragment>
      <div
        className={`${style.container} ${style[direction]} ${style[justify]} ${
          style[align]
        }${style[flex && "flex"]}}`}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Flex;
