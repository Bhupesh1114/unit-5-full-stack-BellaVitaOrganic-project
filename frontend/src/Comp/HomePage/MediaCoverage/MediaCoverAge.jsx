import React from "react";
import Slider from "react-slick";
import M1 from "../Images/MediaCov/M1.webp";
import M2 from "../Images/MediaCov/M2.webp";
import M3 from "../Images/MediaCov/M3.webp";
import M4 from "../Images/MediaCov/M4.webp";
import M5 from "../Images/MediaCov/M5.webp";
import M6 from "../Images/MediaCov/M6.webp";
import M7 from "../Images/MediaCov/M7.webp";
import M8 from "../Images/MediaCov/M8.webp";
import M9 from "../Images/MediaCov/M9.webp";
import M10 from "../Images/MediaCov/M10.webp";
import {
  MediaCDiv,
  MediaCHeadDiv,
  MediaCHeading,
  MediaCHeadingLine,
  MediaCImg,
  MediaCImgDiv,
  MediaCMaindiv,
} from "./MediaCoverAge.element";
const MediaCoverAge = () => {
  const MediaCImages = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <MediaCDiv>
      <MediaCHeadDiv>
        <MediaCHeadingLine />
        <MediaCHeading>MEDIA COVERAGE</MediaCHeading>
        <MediaCHeadingLine />
      </MediaCHeadDiv>
      <Slider {...settings}>
        {MediaCImages.map((e) => {
          return (
            <MediaCMaindiv>
              <MediaCImgDiv>
                <MediaCImg src={e} alt="" />
              </MediaCImgDiv>
            </MediaCMaindiv>
          );
        })}
      </Slider>
    </MediaCDiv>
  );
};

export default MediaCoverAge;
