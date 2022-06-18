import React, { useEffect } from "react";
import BestSeller from "./BestSeller/BestSeller";
import ReactPlayer from "react-player";
import {
  HomePageContainer,
  SliderBottomDiv,
  SliderBottomImg,
} from "./HomePage.element";
import ImgSlider from "./Slider/Slider";
import HereYouCanTrust from "./Images/HereYouCanTrust.webp";
import SliderBottom from "./Images/SliderBottom.webp";
import BCbottom1 from "./Images/BCbottom1.webp";
import BCbottom2 from "./Images/BCbottom2.webp";
import BCbottom3 from "./Images/BCbottom3.webp";
import SpotLight from "./SpotLight/SpotLight";
import FindSolutions from "./FindSolutions/FindSolutions";
import MediaCoverAge from "./MediaCoverage/MediaCoverAge";
import BellaCash from "./Bellacash/BellaCash";
import AppComp from "./AppComp/AppComp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.logSinReducer.token);

  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  });
  return (
    <HomePageContainer>
      <ImgSlider />
      <SliderBottomDiv>
        <SliderBottomImg src={SliderBottom} alt="" />
      </SliderBottomDiv>
      <BestSeller />
      <SpotLight />
      <FindSolutions />
      <SliderBottomDiv>
        <SliderBottomImg src={HereYouCanTrust} alt="" />
      </SliderBottomDiv>
      <ReactPlayer
        url="https://youtu.be/65MyOTIWarA"
        width="100%"
        height="100vh"
      />
      <MediaCoverAge />
      <BellaCash />
      <SliderBottomDiv>
        <SliderBottomImg src={BCbottom1} alt="" />
      </SliderBottomDiv>
      <SliderBottomDiv>
        <SliderBottomImg src={BCbottom2} alt="" />
      </SliderBottomDiv>
      <SliderBottomDiv>
        <SliderBottomImg src={BCbottom3} alt="" />
      </SliderBottomDiv>
      <AppComp />
    </HomePageContainer>
  );
};

export default HomePage;
