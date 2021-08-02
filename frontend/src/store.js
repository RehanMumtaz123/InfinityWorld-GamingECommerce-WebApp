import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import Cookie from "js-cookie";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { userSigninReducer } from "./reducers/userReducers";

// const cartItems = JSON.parse(Cookie.get("cartItems") || []);
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  // userRegister: userRegisterReducer,
  // productSave: productSaveReducer,
  // productDelete: productDeleteReducer,
  // productReviewSave: productReviewSaveReducer,
  // orderCreate: orderCreateReducer,
  // orderDetails: orderDetailsReducer,
  // orderPay: orderPayReducer,
  // userUpdate: userUpdateReducer,
  // myOrderList: myOrderListReducer,
  // orderList: orderListReducer,
  // orderDelete: orderDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
