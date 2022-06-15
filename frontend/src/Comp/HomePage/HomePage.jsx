import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import {
  HomePageContainer,
  SliderBottomDiv,
  SliderBottomImg,
} from "./HomePage.element";
import ImgSlider from "./Slider/Slider";
import SliderBottom from "./Images/SliderBottom.webp";
import SpotLight from "./SpotLight/SpotLight";

const HomePage = () => {
  return (
    <HomePageContainer>
      <ImgSlider />
      <SliderBottomDiv>
        <SliderBottomImg src={SliderBottom} alt="" />
      </SliderBottomDiv>
      <BestSeller />
      <SpotLight/>
    </HomePageContainer>
  );
};

export default HomePage;
