import React from "react";
import "./cartpage.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { addProduct } from "../../redux/AddTocart/AddToCart";

export const Cartpage = () => {
  // const data = useSelector(addProduct);
  // console.log(data)
  const navigate = useNavigate();
  const moveToAddres = () => {
    navigate("/address");
  };
  return (
    <div>
      <div className="cartTop">
        <div className="yourCart">Your Cart</div>
        <div className="ConShop">
          <p className="contShop">Continue Shopping</p>
        </div>
      </div>
      <div className="CartTitle">
        <div className="productT">Product</div>
        <div className="quantT">Quantity</div>
        <div className="priceT">Total</div>
      </div>
      <div className="mainProductDiv">
        <div className="ProductDiv">
          <div className="ProductItems">
            <div className="productImg">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_77788ac8-4061-459a-bfb5-f5b5068c1dfa_300x.jpg?v=1652340499"
                alt=""
              />
            </div>
            <div className="productDetails">
              <p>NicoLips Lip Bightening Scrub, 20gm</p>
              <p>₹ 399</p>
            </div>
          </div>
          <div className="ProductQuantity">
            <div className="Quantdiv">
              <AiOutlineMinus />
              <p>1</p>
              <AiOutlinePlus />
            </div>
            <div className="QuantityDelete">
              <RiDeleteBinLine />
            </div>
          </div>
          <div className="ProductTotal">
            <p>₹ 399</p>
          </div>
        </div>
        <div className="ProductDiv">
          <div className="ProductItems">
            <div className="productImg">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_77788ac8-4061-459a-bfb5-f5b5068c1dfa_300x.jpg?v=1652340499"
                alt=""
              />
            </div>
            <div className="productDetails">
              <p>NicoLips Lip Bightening Scrub, 20gm</p>
              <p>₹ 399</p>
            </div>
          </div>
          <div className="ProductQuantity">
            <div className="Quantdiv">
              <AiOutlineMinus />
              <p>1</p>
              <AiOutlinePlus />
            </div>
            <div className="QuantityDelete">
              <RiDeleteBinLine />
            </div>
          </div>
          <div className="ProductTotal">
            <p>₹ 399</p>
          </div>
        </div>
      </div>
      <div className="checkOut">
        <p>Subtotal ₹ 897</p>
        <p className="tax">Tax included. Shipping calculated at checkout.</p>
        <button className="CheckButton" onClick={moveToAddres}>
          Check out
        </button>
      </div>
    </div>
  );
};
