import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import { HomePageContainer, SliderBottomDiv, SliderBottomImg } from "./HomePage.element";
import ImgSlider from "./Slider/Slider";

const HomePage = () => {
  return (
    <HomePageContainer>
      <ImgSlider />
      <SliderBottomDiv>
        <SliderBottomImg
          src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Flexi-Box-1200x235_1500x.jpg?v=1655203182"
          alt=""
        />
      </SliderBottomDiv>
      <BestSeller/>
    </HomePageContainer>
  );
};

export default HomePage;
