import React from "react";
import Slider from "react-slick";
import { SpotLightData } from "./Data";
import {
  SpotLContainer,
  SpotLDiv,
  SpotLHeadDiv,
  SpotLHeading,
  SpotLHeadingLine,
  SpotLImg,
  SpotLMainDiv,
  SpotLTitle,
} from "./SpotLight.element";

const SpotLight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <SpotLContainer>
      <SpotLHeadDiv>
        <SpotLHeadingLine />
        <SpotLHeading>IN THE SPOTLIGHT</SpotLHeading>
        <SpotLHeadingLine />
      </SpotLHeadDiv>
      <Slider {...settings}>
        {SpotLightData.map((e) => {
          return (
            <SpotLMainDiv>
              <SpotLDiv>
                <SpotLImg src={e.Img} />
                <SpotLTitle>{e.Title}</SpotLTitle>
              </SpotLDiv>
            </SpotLMainDiv>
          );
        })}
      </Slider>
    </SpotLContainer>
  );
};

export default SpotLight;
