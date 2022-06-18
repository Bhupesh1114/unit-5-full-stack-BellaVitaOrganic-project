import styled from "styled-components";

export const BestSellerContainer = styled.div`
  width: 100%;
`;
export const BestSellerHeadDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  text-align: center;
`;
export const BestSellerHeadingLine = styled.p`
  width: 55px;
  height: 1.5px;
  background-color: #475d4b80;
`;

export const BestSellerHeading = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #475d4b;
`;

export const BestSellerSlider = styled.div``;

export const BestMainDiv = styled.div``;

export const BestSellerProduct = styled.div`
  border: 1px solid #e5f0da;
  height: 450px;
  border-radius: 0px 0px 5px 5px;
  line-height: 10px;
  margin: 10px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 300px;
  transition: all 0.4s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductTitleDesDiv = styled.div`
  margin: 0px 0px 0px 10px;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;
export const ProductDes = styled.p`
  font-size: 16px;
  text-align: left;
`;

export const PriceAndratingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;
export const PriceDiv = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  align-items: center;
`;

export const PriceP = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
export const StkPriceP = styled.p`
  text-decoration: line-through;
  font-size: 16px;
  font-weight: 600;
`;

export const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

export const RatingP = styled.p`
  font-size: 16px;
  color: #475d4b;
  font-weight: 600;
`;
export const ProductButton = styled.button`
  font-size: 16px;
  background-color: #475d4b;
  padding: 15px;
  width: 100%;
  color: #fff;
  font-weight: 550;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: 0px;
`;
