import React from "react";
import "./information.css";
import img from "./img/Bellavitaorganic.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

export const Information = () => {
  const data = useSelector((state) => state.cartReducer.cart);
  const navigate = useNavigate();
  const total = data.reduce((a, b) => {
    return a + b.cartqty * b.price;
  }, 0);
  return (
    <div>
      <div className="imgbox">
        <img src={img} alt="" />
      </div>

      <div className="informationbox">
        <div className="box1">
          <div className="paprg">
            <div>
              <button>{`Cart >`} </button>
            </div>
            <div>
              <button>{`Information >`}</button>
            </div>
            <div>
              <button>{`Shipping >`}</button>
            </div>
            <div>
              <button>{`Payment >`}</button>
            </div>
          </div>

          <div className="contact">
            <p>Contact information</p>
            <Link className="alreadylogin" to={""}>
              Already have an account?Log in
            </Link>
          </div>

          <div className="emailinput">
            <input className="" type="email" name="email" placeholder="Email" />
          </div>

          <div className="checkboxdiv">
            <input className="check" type="checkbox"></input>
            <label htmlFor="">Email me with news and offers</label>
          </div>

          <div className="shippingaddressdiv">
            <div className="shpippingbox">
              <h2>Shipping address</h2>
            </div>

            <div className="addressdiv">
              <div className="countryname">
                <label htmlFor="">Country/region</label>
                <select
                  className="country_ind"
                  name="country"
                  placeholder="Country/region"
                >
                  <option data-code="IN" selected="selected" value="India">
                    India
                  </option>
                </select>
              </div>

              <div className="name_larname_div">
                <div className="namebox">
                  <input
                    className="firstnameinp"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="lastnamebox">
                  <input
                    className="lastname"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>

            <div className="cus_address">
              <input className="address" type="text" placeholder="Address" />
            </div>

            <div className="cus_appartment">
              <input
                className="Apartment"
                type="text"
                placeholder="Apartment, Suite,etc. (optional)"
              />
            </div>

            <div className="city_state_code_div">
              <div className="cityname">
                <input
                  className="cus_city_name"
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </div>
              <div className="statename">
                <select>
                  <option disabled="">State</option>
                  <option
                    data-alternate-values='["Andaman and Nicobar Islands","Andaman and Nicobar"]'
                    value="AN"
                  >
                    Andaman and Nicobar Islands
                  </option>
                  <option data-alternate-values='["Andhra Pradesh"]' value="AP">
                    Andhra Pradesh
                  </option>
                  <option
                    data-alternate-values='["Arunachal Pradesh"]'
                    value="AR"
                  >
                    Arunachal Pradesh
                  </option>
                  <option data-alternate-values='["Assam"]' value="AS">
                    Assam
                  </option>
                  <option data-alternate-values='["Bihar"]' value="BR">
                    Bihar
                  </option>
                  <option data-alternate-values='["Chandigarh"]' value="CH">
                    Chandigarh
                  </option>
                  <option
                    data-alternate-values='["Chhattisgarh","Chattisgarh","CT"]'
                    value="CG"
                  >
                    Chhattisgarh
                  </option>
                  <option
                    data-alternate-values='["Dadra and Nagar Haveli"]'
                    value="DN"
                  >
                    Dadra and Nagar Haveli
                  </option>
                  <option data-alternate-values='["Daman and Diu"]' value="DD">
                    Daman and Diu
                  </option>
                  <option data-alternate-values='["Delhi"]' value="DL">
                    Delhi
                  </option>
                  <option data-alternate-values='["Goa"]' value="GA">
                    Goa
                  </option>
                  <option data-alternate-values='["Gujarat"]' value="GJ">
                    Gujarat
                  </option>
                  <option data-alternate-values='["Haryana"]' value="HR">
                    Haryana
                  </option>
                  <option
                    data-alternate-values='["Himachal Pradesh"]'
                    value="HP"
                  >
                    Himachal Pradesh
                  </option>
                  <option
                    data-alternate-values='["Jammu and Kashmir"]'
                    value="JK"
                  >
                    Jammu and Kashmir
                  </option>
                  <option data-alternate-values='["Jharkhand"]' value="JH">
                    Jharkhand
                  </option>
                  <option data-alternate-values='["Karnataka"]' value="KA">
                    Karnataka
                  </option>
                  <option data-alternate-values='["Kerala"]' value="KL">
                    Kerala
                  </option>
                  <option data-alternate-values='["Ladakh"]' value="LA">
                    Ladakh
                  </option>
                  <option data-alternate-values='["Lakshadweep"]' value="LD">
                    Lakshadweep
                  </option>
                  <option data-alternate-values='["Madhya Pradesh"]' value="MP">
                    Madhya Pradesh
                  </option>
                  <option data-alternate-values='["Maharashtra"]' value="MH">
                    Maharashtra
                  </option>
                  <option data-alternate-values='["Manipur"]' value="MN">
                    Manipur
                  </option>
                  <option data-alternate-values='["Meghalaya"]' value="ML">
                    Meghalaya
                  </option>
                  <option data-alternate-values='["Mizoram"]' value="MZ">
                    Mizoram
                  </option>
                  <option data-alternate-values='["Nagaland"]' value="NL">
                    Nagaland
                  </option>
                  <option
                    data-alternate-values='["Odisha","OD","Orissa"]'
                    value="OR"
                  >
                    Odisha
                  </option>
                  <option data-alternate-values='["Puducherry"]' value="PY">
                    Puducherry
                  </option>
                  <option data-alternate-values='["Punjab"]' value="PB">
                    Punjab
                  </option>
                  <option data-alternate-values='["Rajasthan"]' value="RJ">
                    Rajasthan
                  </option>
                  <option data-alternate-values='["Sikkim"]' value="SK">
                    Sikkim
                  </option>
                </select>
              </div>
              <div className="pincode">
                <input
                  className="cus_code"
                  type="text"
                  name="pincode"
                  placeholder="PIN code"
                />
              </div>
            </div>

            <div className="cus_phone_no">
              <input
                className="phone"
                type="value"
                name="number"
                placeholder="Phone"
              />
            </div>
            <div className="save_information">
              <input type="checkbox"></input>
              <label htmlFor="">Email me with news and offers</label>
            </div>
          </div>

          <div className="return_continueshpping_btn">
            <div className="returnbox">
              <div className="return" to="">
                <IoIosArrowBack />
                <p>Return to cart</p>
              </div>
            </div>
            <div>
                <button onClick={()=>navigate("/payment")}>CHECKOUT NOW</button>
            </div>
          </div>
          <hr className="line" />

          <div className="policy">
            <p className="poly" to={""}>
              Refund policy
            </p>
            <p className="poly" to={""}>
              Shipping policy
            </p>
            <p className="poly" to={""}>
              Privacy policy
            </p>
            <p className="poly" to={""}>
              Terms of service
            </p>
          </div>
        </div>

        <div className="box2">
          {data &&
            data.map((e) => {
              return (
                <div className="addProductDiv">
                  <div className="productImg">
                    <img src={e.imageUrl} alt="" />
                    <p>{e.title}</p>
                  </div>
                  <div>
                    <p>₹{e.price}</p>
                  </div>
                </div>
              );
            })}

          <hr className="line2" />
          <div className="cupondiv">
            <form>
              <div className="cupon_btn">
                <div className="code">
                  <input
                    className="applyforcode"
                    type="text"
                    name="cupon"
                    placeholder="Gift card or discount code"
                  />
                </div>
                <button className="" type="submit">
                  Apply
                </button>
              </div>
            </form>
          </div>

          <hr className="line3" />

          <div className="amtdiv">
            <div className="total">Subtotal</div>
            <div className="amt">₹{total}</div>
          </div>
          <div className="Shippingdiv">
            <div className="ship">Shipping </div>
            <div className="calculatednext">Calculated at next step</div>
          </div>

          <hr className="line4" />

          <div className="total_amt_div">
            <div className="totalamt">
              <p>Total</p>
            </div>
            <div className="price">
              <p>₹{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
