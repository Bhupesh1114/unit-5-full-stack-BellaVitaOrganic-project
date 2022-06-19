import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import styled from "./Footer.module.css";
const Footer = () => {
  return (
    <div style={{ marginTop:"100px"}}>
      <div className={styled.seconddiv}>
        <div className={styled.secondDivfirstchild}>
          <h5>ONLINE PRESENCE</h5>
          <hr />
          <p className={styled.hoverEffect}>Amazon</p>
          <p className={styled.hoverEffect}>Nykaa</p>
          <p className={styled.hoverEffect}>Flipkart</p>
          <p className={styled.hoverEffect}>Tata CLiq</p>
          <p className={styled.hoverEffect}>Snapdeal</p>
        </div>

        <div>
          <h5>INFORMATION</h5>
          <hr />
          <p className={styled.hoverEffect}>Blogs </p>
          <p className={styled.hoverEffect}>Newsroom</p>
          <p className={styled.hoverEffect}>Term & Conditions</p>
          <p className={styled.hoverEffect}>Privacy Policy</p>
          <p className={styled.hoverEffect}>Refund and Return</p>
          <p className={styled.hoverEffect}>Shipping Policy</p>
          <p className={styled.hoverEffect}>Reward Policy</p>
        </div>

        <div>
          <h5>SUPPORT</h5>
          <hr />
          <p className={styled.hoverEffect}>About Us</p>
          <p className={styled.hoverEffect}>Contact Us</p>
          <p className={styled.hoverEffect}>Order Tracking</p>
          <p className={styled.hoverEffect}>All Products</p>
          <p className={styled.hoverEffect}>FAQ</p>
        </div>

        <div>
          <h5>CONTACT US</h5>
          <hr />
          <p className={styled.hoverEffect}>
            {" "}
            <i class="bi bi-house-heart-fill"></i>Office Location: Plot no. 417,
            Udyog Vihar Phase III, Gurgaon,Haryana ,India
          </p>
          <p className={styled.hoverEffect}>
            {" "}
            <i class="bi bi-envelope-fill"> </i> shop@bellavitaorganic.com
          </p>
          <p className={styled.hoverEffect}>
            <i class="bi bi-telephone-fill"></i> +91 9311732440
          </p>
          <p className={styled.hoverEffec}>
            Timing:9:00 AM To 9:00 PM , Monday To Sunday
          </p>
        </div>

        <div>
          <h5>OUT NEWSLETTER</h5>
          <hr />
          <p className={styled.hoverEffec}>
            Sign up here to get the latest news, updates and special offers
            delivered to your inbox.
          </p>
          <p className={styled.hoverEffec}>
            Plus, you'll be the first to know about our discounts!
          </p>
          <input
            className="fo"
            type="search"
            placeholder="Enter Email Address"
          />
          <br />
          <br />
          <button type="button" className={styled.SubmitButton}>
            SUBMIT
          </button>
        </div>
      </div>
      <div className={styled.navnd}>
        <Container fluid className="footer">
          <Row>
            <Col md="4" className={styled.footercopywright}>
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/payments-stripe-footer_256x256_e_400x.png?v=1650369513"
                alt="socialmed"
              />
            </Col>
            <Col md="4" className="footer-body">
              <SocialMedia />
            </Col>
            <Col md="4" className="footer-copywright">
              <h6> @ 2022, Bella Vita Organic </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
