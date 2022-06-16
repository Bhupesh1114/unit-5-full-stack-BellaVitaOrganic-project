import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FORM } from "./Signup";
import { login } from "./login_signup.action";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    setFormData({...formData,[name] : event.target.value});
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formData));
  }
  useEffect(() => {
    if (state.logSinReducer.token !== null) {
       navigate("/")
   }
},[state.logSinReducer.token])

  return (
    <div className="d-flex justify-content-center mt-5">
      <div>
        <h1 className="fw-normal text-center mb-4">Login</h1>
        <FORM onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email" onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
          <div className="d-flex flex-column align-items-center">
            <input type="submit" value="Sign in" />
            <Link to="/account/register">Create account</Link>
          </div>
        </FORM>
      </div>
    </div>
  );
};
export default Login;
