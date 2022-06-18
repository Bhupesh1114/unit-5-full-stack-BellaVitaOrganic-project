import React, { useEffect, useState } from "react";
import "./cartpage.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
// import { addProduct, increment } from "../../redux/AddTocart/AddToCart";

export const Cartpage = () => {
  const [tquantity, setTQuantity] = useState(1);
  const data = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  // const handleQuantity = (type) => {
  //   // if (type === "dec") {
  //   //   quantity > 1 && setQuantity(quantity - 1);
  //   // } else {
  //   //   setQuantity(quantity + 1);
  //   // }
  // };

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
        {data &&
          data.map((ele) => {
            return (
              <>
                <div className="ProductDiv" key={ele.id}>
                  <div className="ProductItems">
                    <div className="productImg">
                      <img src={ele.ImageUrl} alt="" className="cartImg" />
                    </div>
                    <div className="productDetails">
                      <p>{ele.Title}</p>
                      <p>₹ {ele.Price}</p>
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
                    <p>₹ 1</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="checkOut">
        <p className="Subtotal">Subtotal ₹ 1</p>
        <p className="tax">Tax included. Shipping calculated at checkout.</p>
        <button className="CheckButton" onClick={moveToAddres}>
          Check out
        </button>
      </div>
    </div>
  );
};
