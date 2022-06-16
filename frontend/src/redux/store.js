import { legacy_createStore as createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import  logSinReducer from "../components/Login_Signup/login_signup.reducer"

const rootReducers = combineReducers({
 logSinReducer
});


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducers, enhancer);

export default store;