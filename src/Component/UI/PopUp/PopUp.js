/** @format */

import React, { Fragment } from "react";
import style from "./PopUp.module.css";
import Flex from "../Flex/Flex";
import ChickenBiryani from "../../../assets/img/chicken_biryani.avif";

const PopUp = (props) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.overlay}`}></div>
        <div className={`${style.content}`}>
          <Flex direction={"cols"}>
            <div className={`${style.img_placeholder}`}>
              <img
                src={ChickenBiryani}
                alt="default.png"
                width={100}
                height={100}
              />
            </div>
            <p>chicken biryani</p>
            <p>
              Dolor sint anim minim eu dolore proident excepteur velit pariatur
              voluptate id proident. .
            </p>
          </Flex>
        </div>
      </div>
    </Fragment>
  );
};

export default PopUp;
