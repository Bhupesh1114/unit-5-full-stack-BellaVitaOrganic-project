import React, { useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { AiTwotoneStar } from "react-icons/ai";

import {
  BestMainDiv,
  BestSellerContainer,
  BestSellerHeadDiv,
  BestSellerHeading,
  BestSellerHeadingLine,
  BestSellerProduct,
  BestSellerSlider,
  PriceAndratingDiv,
  PriceDiv,
  PriceP,
  ProductButton,
  ProductDes,
  ProductImg,
  ProductTitle,
  ProductTitleDesDiv,
  RatingDiv,
  RatingP,
  StkPriceP,
} from "./Bestseller.element";
import { useEffect } from "react";

const BestSeller = () => {
  const [bdata, setBData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    axios.get("http://localhost:5500/bestSellerData").then(({ data }) => {
      console.log(data);
      setBData(data);
    });
  }, []);

  return (
    <BestSellerContainer>
      <BestSellerHeadDiv>
        <BestSellerHeadingLine />
        <BestSellerHeading>BESTSELLERS</BestSellerHeading>
        <BestSellerHeadingLine />
      </BestSellerHeadDiv>

      <BestSellerSlider>
        <Slider {...settings}>
          {bdata.map((e) => {
            return (
              <BestMainDiv>
                <BestSellerProduct>
                  <ProductImg src={e.ImageUrl} />
                  <ProductTitleDesDiv>
                    <ProductTitle>{e.Title}</ProductTitle>
                    <ProductDes>{e.Description}</ProductDes>
                  </ProductTitleDesDiv>
                  <PriceAndratingDiv>
                    <PriceDiv>
                      <PriceP>₹ {e.Price}</PriceP>
                      <StkPriceP>₹ {e.StkPrice}</StkPriceP>
                    </PriceDiv>
                    <RatingDiv>
                      <RatingP>{e.Rating}</RatingP>
                      <AiTwotoneStar />
                    </RatingDiv>
                  </PriceAndratingDiv>
                  <ProductButton>ADD TO CART</ProductButton>
                </BestSellerProduct>
              </BestMainDiv>
            );
          })}
        </Slider>
      </BestSellerSlider>
    </BestSellerContainer>
  );
};

export default BestSeller;
