import React from "react";
import './checkout.css';
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

   const handleSubmit=()=>{
      alert("Payment Successful!");
      navigate("/");
   }
  return (
    <>
      <div id="container">
        {" "}
        <header>
          {" "}
          <div id="logo_div">
            {" "}
            <img
              src="https://m.media-amazon.com/images/S/abs-image-upload-na/7/AmazonStores/A21TJRUUN4KGV/afc678bf0a083f43bef9a1e74738989c.w1333.h1333.jpg"
              alt="logo"
            />{" "}
          </div>{" "}
          <div id="title">
            {" "}
            <p id="title_name">
              IDAM NATURAL WELLNESS PRIVATE LIMITED
            </p> <br />{" "}
            <span>
              {" "}
              <a href="/sagar/buy.html">Cancel</a>
            </span>{" "}
          </div>{" "}
          <p id="price"></p>{" "}
        </header>{" "}
        <div id="payment">
          {" "}
          <div id="payment_left">
            {" "}
            <div className="payment_method" id="card_pay">
              {" "}
              <i className="bi bi-credit-card"></i> <p>Card</p>{" "}
            </div>{" "}
            <div className="payment_method">
              {" "}
              <i className="bi bi-safe"></i> <p>UPI</p>{" "}
            </div>{" "}
            <div className="payment_method">
              {" "}
              <i className="bi bi-wallet2"></i> <p>Wallets</p>{" "}
            </div>{" "}
            <div className="payment_method">
              {" "}
              <i className="bi bi-bank"></i> <p>Net Banking</p>{" "}
            </div>{" "}
            <div className="payment_method">
              {" "}
              <i className="bi bi-paypal"></i> <p>PayPal</p>{" "}
            </div>{" "}
          </div>{" "}
          <div id="payment_right">
            {" "}
            <div id="card_payment">
              {" "}
              <p>Debit card,Credit card and Prepaid card are supported</p>{" "}
              <input
                type="text"
                className="temp"
                placeholder="Card Number"
                id="card_number"
              />
              <br />{" "}
              <input
                type="text"
                className="temp"
                placeholder="Card Holder Name"
                id="card_name"
              />
              <br />{" "}
              <input type="text" className="temp1" placeholder="MM/YY" id="doe" />{" "}
              <input type="password" className="temp1" placeholder="CVV" id="cvv" />
              <br /> <input type="radio" />{" "}
              <label id="card_label">Save this card</label>
              <br /> <button id="card_btn" onClick={handleSubmit}>Pay Now</button>{" "}
              <div id="pay_logos"></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="spinner-border text-primary" id="spin" role="status">
        {" "}
        <span className="sr-only"></span>{" "}
      </div>{" "}
      
    </>
  );
};


export default Checkout;