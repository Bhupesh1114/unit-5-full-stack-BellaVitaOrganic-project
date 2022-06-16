import axios from 'axios';

// Action type
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";




// Action creator
export const registerUser = (payload) => (dispatch) => {
    let name = payload.firstName + " " + payload.lastName;
    payload.name = name;
    ["firstName", "lastName"].forEach(elem => delete payload[elem]);
    axios.post("http://localhost:8080/register", payload)
        .then(response => {
            console.log(response);
            dispatch({type:REGISTER_USER, payload: response.data})
          
        })
    .catch(err => console.log(err));
}

export const login = (payload) => (dispatch) => {
    axios.post("http://localhost:8080/login", payload)
        .then(response => {
            console.log(response);
            localStorage.setItem("token", response.data.token)
            dispatch({type:LOGIN_USER,payload:response.data})
            
        })
    .catch(err => console.log(err));
}
