import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {

  // const navquantity = useSelector((state) => state.cart.quantity);
  return (
    <div>
      <nav class="navbarhead">
        <div class="container-fluid ">
          <span class="navbar-text">
            <h6
              style={{
                fontWeight: "bold",
                color: "black",
                marginLeft: "500px",
              }}
            >
              Father's Day Sale - FLAT 30% OFF On Skincare*{" "}
              <a href=" shop@bellavitaorganic.com">
                <button
                  style={{
                    width: "110px",
                    padding: "5px",
                    marginLeft: "11px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    color: "white",
                    fontWeight:"500",
                    backgroundColor: "#475d4b",
                    border: "none"
                  }}
                >
                  Shop Now
                </button>
              </a>
            </h6>
          </span>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div>
            <Link to="">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220@2x.png?v=1653304683"
                alt="navbarlogo"
                className="logo"
              />
            </Link>
            <Link to="">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220@2x.png?v=1653304701"
                alt="navbarlogo"
                className="logo"
              />
            </Link>
            <Link to="">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220@2x.png?v=1653304721"
                alt="navbarlogo"
                className="logo"
              />
            </Link>
          </div>

          {/* <a class="navbar-brand" href=" ">.</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  SHOP ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  NEW ARRIVALS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  BESTSELLERS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  SKIN CARE
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  HAIR CARE
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  BODY CARE
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  PERFUMES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  COMBOS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mx-3" aria-current="page">
                  BUILD A BOX
                </Link>
              </li>
              <div className="icons"></div>
              {/* <li  className='navbar-brand'> */}
              <Link to="" className="navbar-brand">
                <i class="bi bi-search"></i>
              </Link>
              {/* </li> */}
              {/* <li  className='navbar-brand'> */}
              <Link to="" className="navbar-brand">
                {" "}
                <i class="bi bi-person"></i>
              </Link>
              {/* </li> */}
              {/* <li  className='navbar-brand'> */}
              <Link className="navbar-brand position-relative" to="/cart">
                <i class="bi bi-bag"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  1
                </span>
              </Link>

              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
