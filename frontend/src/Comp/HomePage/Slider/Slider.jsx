import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Images = [
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Desktop-Home-Page-Banner-1200x399_1_1500x.jpg?v=1655142292",
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_2_1500x.png?v=1654766303",
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_1_59ab296a-15d5-4e1c-84dd-bd35b002e4ce_1500x.png?v=1654536568",
  ];
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
  max-width: 98%;
  align-items: left;
  margin-left: 5px;
`;

const SlideImg = styled.img`
  border-radius: 10px;
`;
