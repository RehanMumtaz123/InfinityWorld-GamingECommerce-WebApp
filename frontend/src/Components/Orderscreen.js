import Alert from "@material-ui/lab/Alert";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import LoadingBox from "./LoadingBox";
function Orderscreen(props) {
  const orderId = props.match.params.id;

  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <Alert
      style={{ backgroundColor: "pink", width: "100vw" }}
      severity="secondary"
    >
      {error}
    </Alert>
  ) : (
    <div>
      <h1 className="mh1">Order {order._id}</h1>
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
              </div>
            </li>
            <li>
              <div className="mcard mcard-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderscreen;
