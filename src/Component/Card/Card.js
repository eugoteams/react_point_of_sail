/** @format */

import React, { Fragment, memo, useCallback } from "react";
import style from "./Card.module.css";
import { IndianRupee } from "lucide-react";
import Flex from "../UI/Flex/Flex";
import ChickenBiryani from "../../assets/img/chicken_biryani.avif";

const Card = ({ name, price, tag, onClick }) => {
  return (
    <Fragment>
      <div className={`${style.container}`} onClick={onClick}>
        <div
          className={`${style.overlay}`}
          name={JSON.stringify({ name, price, tag })}
        ></div>
        <Flex direction={"cols"} align={"alignCenter"}>
          <div className={`${style.img_placeholder}`}>
            <img
              src={ChickenBiryani}
              alt="default.png"
              width={100}
              height={100}
            />
          </div>
          <div className={`${style.description_wrapper}`}>
            <Flex justify={"space_between"} align={"alignFlexStart"}>
              <Flex direction={"cols"} flex={true}>
                <p>{name} </p>
                <p className={`${style.tag}`}>{tag}</p>
              </Flex>
              <Flex align={"alignCenter"} justify={"justify_end"}>
                <IndianRupee size={12} color={"#212529"} />
                <p>{price}</p>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default memo(Card);
