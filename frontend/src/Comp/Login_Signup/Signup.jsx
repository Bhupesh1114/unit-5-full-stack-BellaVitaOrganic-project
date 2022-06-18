import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { registerUser } from "./login_signup.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const state = useSelector((state) => state);
  console.log(state);
  // const [spinner, setSpinner] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    setFormData({ ...formData, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData));
    // setSpinner(true);
  };
  // if (state.logSinReducer.isLoading === true) {
  //     setSpinner(false)
  // }
  useEffect(() => {
    if (state.logSinReducer.registerStatus === true) {
      navigate("/login");
    }
  }, [state.logSinReducer.registerStatus]);

  return (
    <div
      className="d-flex justify-content-center mt-5 text-center"
      style={{ marginBottom: "100px" }}
    >
      <div>
        {/* {spinner && <Spinner  animation="border" size="lg"/> } */}

        <h1 className="fw-normal mb-4">Create account</h1>
        <FORM onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <div className="d-flex align-items-center flex-column">
            <input type="submit" value="Create" />
            <Link to="/login">Already have account</Link>
          </div>
        </FORM>
      </div>
    </div>
  );
};

export default Signup;
export const FORM = styled.form`
  width: 60%;

  margin: auto;
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
    transition: box-shadow 0.2s ease-in-out;
    border: 1px solid gray;
    outline: none;
  }
  input:hover {
    box-shadow: 1px -1px 1px 1px rgb(130, 130, 130),
      -1px 1px 1px 1px rgb(130, 130, 130);
  }
  input:focus {
    box-shadow: 1px -1px 1px 1px black, -1px 1px 1px 1px black;
  }
  input[type="submit"] {
    background-color: #475d4b;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
    width: 40%;
    margin-top: 30px;
    text-align: center;
    padding: 0px;

  }
  input[type="submit"]:hover {
    box-shadow: none;
  }
  a {
    color: gray;
    padding: 20px 0px 5px 0px;
    text-decoration: none;
    border-bottom: 1px solid gray;
  }
  a:hover {
    border-bottom: 2px solid black;
  }
`;
