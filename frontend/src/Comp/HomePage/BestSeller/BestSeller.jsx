import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { addProduct } from "../../../redux/AddTocart/AddToCart";

const BestSeller = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
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
      setProduct(data);
    });
  }, []);

  // const handleAddToCart = () => {
  //   dispatch(
  //     addProduct({ product, quantity, price: product.Price * quantity })
  //   );
  // };

  return (
    <BestSellerContainer>
      <BestSellerHeadDiv>
        <BestSellerHeadingLine />
        <BestSellerHeading>BESTSELLERS</BestSellerHeading>
        <BestSellerHeadingLine />
      </BestSellerHeadDiv>

      <BestSellerSlider>
        <Slider {...settings}>
          {product.map((e) => {
            return (
              <BestMainDiv key={e.id}>
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
                  <ProductButton
                    onClick={() => {
                      dispatch(
                        addProduct({
                          e,
                          quantity,
                          price: e.Price * quantity,
                        })
                      );
                    }}
                  >
                    ADD TO CART
                  </ProductButton>
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
