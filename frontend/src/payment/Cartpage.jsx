import React from "react";
import "./cartpage.css";
import { Link } from "react-router-dom";

export const Cartpage = () => {
  return (
    <div>
      <div className="main_div_cart">
        <div className="yourcart_continueshopping">
          <p>Your Cart</p>
          <Link className="continueshop" to={""}>
            Continue shopping >
          </Link>
        </div>

        <div className="Prod_quan_subto">
          <div className="prod">Product</div>
          <div className="qyan">QUANTITY</div>
          <div className="total">TOTAL</div>
        </div>

        <div className="product_cart">
          <div className="imgdiv"></div>

          <div className="pro_info_div">
            <h3 className="name_of_prod">
              Face Spots & Marks Reduction Combo{" "}
            </h3>
            <h3 className="pro_price">Rs. 679.00</h3>
          </div>

          <div className="inc_dec_dele">
          <div className="add_delete_box"> 
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
     
          <input type="text" placeholder="12"  />
          <i className="fas fa-plus add" ></i>
          
          </div>
          </div>
          <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
          ></i>
        </div>
          </div>

          <div className="total_price_div">
            <h3 className="toltalprice">Rs. 679.00</h3>
          </div>
        </div>

        <div>
          <p>Subtotal Rs. 679.00</p>

          <button >Check out</button>
        </div>
      </div>
    </div>
  );
};
