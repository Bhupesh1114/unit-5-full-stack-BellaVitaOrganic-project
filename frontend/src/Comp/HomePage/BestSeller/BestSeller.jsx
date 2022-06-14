import React from "react";
import Slider from "react-slick";
import {
  BestSellerContainer,
  BestSellerHeadDiv,
  BestSellerHeading,
  BestSellerHeadingLine,
  BestSellerProduct,
  BestSellerSlider,
  ProductButton,
  ProductDes,
  ProductImg,
  ProductTitle,
} from "./Bestseller.element";

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <BestSellerContainer>
      <BestSellerHeadDiv>
        <BestSellerHeadingLine />
        <BestSellerHeading>BESTSELLERS</BestSellerHeading>
        <BestSellerHeadingLine />
      </BestSellerHeadDiv>

      <BestSellerSlider>
        <Slider {...settings}>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
          <BestSellerProduct>
            <ProductImg src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286" />
            <ProductTitle>
              Exfoliate Face And Body Scrub Grit ,75gm
            </ProductTitle>
            <ProductDes>
              Gentle Exfoliation, Nourishing & Skin Brightening
            </ProductDes>
            <ProductButton>ADD TO CART</ProductButton>
          </BestSellerProduct>
        </Slider>
      </BestSellerSlider>
    </BestSellerContainer>
  );
};

export default BestSeller;
