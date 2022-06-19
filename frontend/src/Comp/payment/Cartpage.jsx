import React, { useEffect, useState } from "react";
import "./cartpage.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/AddTocart/AddToCart";

export const Cartpage = () => {
  const data = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const moveToAddres = () => {
    navigate("/address");
  };

 const total = data.reduce((a,b)=>{
    return a +(b.cartqty*b.price);
  },0);
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
        {data &&
          data.map((ele) => {
            return (
              <>
                <div className="ProductDiv" key={ele._id}>
                  <div className="ProductItems">
                    <div className="productImg">
                      <img src={ele.imageUrl} alt="" className="cartImg" />
                    </div>
                    <div className="productDetails">
                      <p>{ele.title}</p>
                      <p>₹ {ele.price}</p>
                    </div>
                  </div>
                  <div className="ProductQuantity">
                    <div className="Quantdiv">
                      <AiOutlineMinus   onClick={()=>dispatch(decrement(data,ele._id))}/>
                      <p>{ele.cartqty}</p>
                      <AiOutlinePlus onClick={()=>dispatch(increment(data,ele._id))}/>
                    </div>
                    <div className="QuantityDelete">
                      <RiDeleteBinLine />
                    </div>
                  </div>
                  <div className="ProductTotal">
                    <p>₹{ele.cartqty*ele.price}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="checkOut">
        <p className="Subtotal">Subtotal ₹ {total}</p>
        <p className="tax">Tax included. Shipping calculated at checkout.</p>
        <button className="CheckButton" onClick={moveToAddres}>
          Check out
        </button>
      </div>
    </div>
  );
};
