import Alert from "@material-ui/lab/Alert";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import CheckoutSteps from "./Checkoutsteps";

function Placeorder(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="mrow mtop">
          <div className="mcol-2">
            <ul>
              <li>
                <div className="mcard mcard-body">
                  <h2>Shipping</h2>
                  <p>
                    <h5>
                      <strong>Name:</strong>
                    </h5>{" "}
                    {cart.shippingAddress.fullName} <br />
                    <h5>
                      <strong>Address: </strong>
                    </h5>{" "}
                    {cart.shippingAddress.address},{cart.shippingAddress.city},{" "}
                    {cart.shippingAddress.postalCode},
                    {cart.shippingAddress.country}
                  </p>
                </div>
              </li>
              <li>
                <div className="mcard mcard-body">
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong> {cart.paymentMethod}
                  </p>
                </div>
              </li>
              <li>
                <div className="mcard mcard-body">
                  <h2>Order Items</h2>
                  <ul>
                    {cart.cartItems.map((item) => (
                      <li key={item.product}>
                        <div className="mrow">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="msmall"
                            ></img>
                          </div>
                          <div className="min-30">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>

                          <div>
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mcol-1">
            <div className="mcard mcard-body">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div className="mrow">
                    <div>Items</div>
                    <div>${cart.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="mrow">
                    <div>Shipping</div>
                    <div>${cart.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="mrow">
                    <div>Tax</div>
                    <div>${cart.taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="mrow">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="btn-primary w-100 mt-3 p-2"
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </li>
                {/* {loading && <LoadingBox></LoadingBox>} */}
                {error && (
                  <Alert
                    style={{ backgroundColor: "red", color: "white" }}
                    severity="secondary"
                  >
                    {error}
                  </Alert>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
