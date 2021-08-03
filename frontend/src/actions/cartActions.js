import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
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
    const {
      cart: { cartItems },
    } = getState();
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
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
    const {
      cart: { cartItems },
    } = getState();
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
    console.log("baabaaa", cartItems);
  } catch (error) {}
};

// const xremoveFromCart = (productId) =>  (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: productId });
//   const { cart: { cartItems } } = getState();
//   console.log("items", cartItems);
//   Cookie.set("cartItems", JSON.stringify(cartItems));
// };
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  console.log("items", cartItems);
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};


export {
  addToCart,
  xaddToCart,
  removeFromCart,
  //    saveShipping, savePayment
};
