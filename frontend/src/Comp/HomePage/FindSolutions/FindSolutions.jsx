import React from "react";
import Slider from "react-slick";
import {
  FindSDiv,
  FindSHeadDiv,
  FindSHeading,
  FindSHeadingLine,
  FindSImg,
  FindSImgDiv,
  FindSMaindiv,
} from "./FindSolutions.element";
import FS1 from "../Images/FindSolution/FS1.webp";
import FS2 from "../Images/FindSolution/FS2.webp";
import FS3 from "../Images/FindSolution/FS3.webp";
import FS4 from "../Images/FindSolution/FS4.webp";
import FS5 from "../Images/FindSolution/FS5.webp";
import FS6 from "../Images/FindSolution/FS6.webp";
import FS7 from "../Images/FindSolution/FS7.webp";
import FS8 from "../Images/FindSolution/FS8.webp";
import FS9 from "../Images/FindSolution/FS9.webp";

const FindSolutions = () => {
  const FindsImages = [FS1, FS2, FS3, FS4, FS5, FS6, FS7, FS8, FS9];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <FindSDiv>
      <FindSHeadDiv>
        <FindSHeadingLine />
        <FindSHeading>FIND SOLUTIONS FOR</FindSHeading>
        <FindSHeadingLine />
      </FindSHeadDiv>
      <Slider {...settings}>
        {FindsImages.map((e) => {
          return (
            <FindSMaindiv>
              <FindSImgDiv>
                <FindSImg src={e} alt="" />
              </FindSImgDiv>
            </FindSMaindiv>
          );
        })}
      </Slider>
    </FindSDiv>
  );
};

export default FindSolutions;
