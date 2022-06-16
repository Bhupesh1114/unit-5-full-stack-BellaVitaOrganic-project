import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const state = useSelector(state => state)
    console.log(state);
    const navigate = useNavigate();
    useEffect(() => {
        if (state.logSinReducer.token === null) {
           navigate("/account/register")
       }
    },[state.logSinReducer.token])
  return (
      <div>
          <h1>Home Page</h1>
    </div>
  )
}

export default Home;