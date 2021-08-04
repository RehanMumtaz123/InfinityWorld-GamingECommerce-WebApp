import Alert from "@material-ui/lab/Alert";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder, payOrder } from "../actions/orderActions";
import LoadingBox from "./LoadingBox";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
function Orderscreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  useEffect(() => {
    const addPayPalScript = async () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AdRJuaKnTxzGBsXg3uzUHc3YQ1xyQLHKcVcKLOAaJ0mm8GgJjMpLleK7G6uQmO3Rd89suksTf51EH6qa";
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    //   console.log("otr", order);
    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (true) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, sdkReady, orderId]);
  //   useEffect(() => {
  //     const addPayPalScript = async () => {
  //         try {
  //             // const { data } = await axios.get("http://127.;0.:15000/api/config/paypal");
  //             // console.log({
  //             //   RESPONSE: data,
  //             // });
  //             const script = document.createElement("script");
  //             script.type = "text/javascript";
  //             script.src = "https://www.paypal.com/sdk/js?client-id=AZVH6nyVyk6ny_Uw1XRil7xQoyeiZEnde8TTpvOWZyyPlqYUSm4CLJb4rDLCWnxyAgu8Po5CjftEhxza";
  //             script.async = true;
  //             script.onload = () => {
  //               setSdkReady(true);
  //             };
  //             document.body.appendChild(script);
  //             console.log(script);
  //         }
  //     catch(err){
  //         console.log(err)
  //     }
  //     };
  //     if (!window.paypal) {
  //       console.log("ADDING PAYPAL SCRIPT");
  //       addPayPalScript();
  //     }
  //   }, []);
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  if (error) {
    return (
      <Alert
        style={{ backgroundColor: "pink", width: "100vw" }}
        severity="secondary"
      >
        {error}
      </Alert>
    );
  }

  if (loading || !order) {
    return <LoadingBox />;
  }

  console.log({ order });

  return (
    <div>
      <h1 className="mh1 mx-5 my-3">Order {order._id}</h1>
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
                  {order.shippingAddress.fullName} <br />
                  <h5>
                    <strong>Address: </strong>
                  </h5>{" "}
                  {order.shippingAddress.address},{order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                <div>
                  {order.isDelivered ? (
                    <Alert
                      style={{ backgroundColor: "pink", width: "100%" }}
                      severity="secondary"
                    >
                      Delivered at {order.deliveredAt}
                    </Alert>
                  ) : (
                    <Alert
                      style={{ backgroundColor: "pink", width: "100%" }}
                      severity="secondary"
                    >
                      Not delivered
                    </Alert>
                  )}
                </div>
              </div>
            </li>
            <li>
              <div className="mcard mcard-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                <div>
                  {order.isPaid ? (
                    <Alert
                      style={{ backgroundColor: "lightgreen", width: "100%" }}
                      severity="success"
                    >
                      {order.paidAt}
                    </Alert>
                  ) : (
                    <Alert
                      style={{ backgroundColor: "pink", width: "100%" }}
                      severity="secondary"
                    >
                      Not Paid
                    </Alert>
                  )}
                </div>
              </div>
            </li>
            <li>
              <div className="mcard mcard-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
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
                          {item.qty} x ${item.price} = ${item.qty * item.price}
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
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="mrow">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="mrow">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="mrow">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                      {errorPay && (
                        <Alert
                          style={{ backgroundColor: "pink", width: "100vw" }}
                          severity="secondary"
                        >
                          {errorPay}
                        </Alert>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderscreen;
