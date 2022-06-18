// Import Action types
import { REGISTER_USER, LOGIN_USER } from "./login_signup.action";

const initState = {
  registerStatus: false,
  token: localStorage.getItem("token") || null,
  isLoading: false,
};

const logSinReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true,
        registerStatus: payload.success,
      };
    case LOGIN_USER:
      return {
        ...state,
        token: payload.token,
      };
    default:
      return state;
  }
};

export default logSinReducer;
