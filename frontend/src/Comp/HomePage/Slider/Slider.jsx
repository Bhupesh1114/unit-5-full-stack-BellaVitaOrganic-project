import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Slider1 from "../Images/Slider1.webp";
import Slider2 from "../Images/Slider2.webp";
import Slider3 from "../Images/Slider3.webp";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Images = [Slider1, Slider2, Slider3];
  return (
    <SliderDiv>
      <Slider {...settings}>
        {Images.map((e) => {
          return <SlideImg src={e} alt="" />;
        })}
      </Slider>
    </SliderDiv>
  );
};

export default ImgSlider;

const SliderDiv = styled.div`
  max-width: 100%;
  height:30%;
  align-items: left;
  margin-bottom: 50px;
`;

const SlideImg = styled.img`
  border-radius: 10px;
  height: 100%;
`;
