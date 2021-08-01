import Axios from "axios";
import Cookie from "js-cookie";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: { 
        product: data._id,
        name: data.name,
        image: data.coverImg,
        price: data.price,
        countInStock: data.countInstock,
        qty,
      },
    });
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    console.log("baabaaa", cartItems);
  } catch (error) {}
};
const xaddToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/xproducts/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.coverImg,
        price: data.price,
        countInStock: data.countInstock,
        qty,
      },
    });
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    console.log("baabaaa", cartItems);
  } catch (error) {}
};

// const xremoveFromCart = (productId) =>  (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: productId });
//   const { cart: { cartItems } } = getState();
//   console.log("items", cartItems);
//   Cookie.set("cartItems", JSON.stringify(cartItems));
// };
const removeFromCart = (productId) =>  (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const { cart: { cartItems } } = getState();
  console.log("items", cartItems);
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

export {
  addToCart,
  xaddToCart,
   removeFromCart,
//    saveShipping, savePayment
};