import React from "react";
import {
  BellacashDiv,
  BellaCashImg,
  BellaCHeadDiv,
  BellaCHeading,
  BellaCHeadingLine,
} from "./BellaCash.element";
import BellaCashImgg from "../Images/BellaCashImgg.webp";

const BellaCash = () => {
  return (
    <BellacashDiv>
      <BellaCHeadDiv>
        <BellaCHeadingLine />
        <BellaCHeading>BELLA CASH</BellaCHeading>
        <BellaCHeadingLine />
      </BellaCHeadDiv>
      <BellaCashImg src={BellaCashImgg} />
    </BellacashDiv>
  );
};

export default BellaCash;
