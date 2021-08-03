import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "./Checkoutsteps";

function Shippingaddress(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  if (!userInfo) {
    props.history.push("/register");
  }
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
//   const [fullName, setFullName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [postalCode, setPostalCode] = useState('');
//   const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
    // const newLat = addressMap ? addressMap.lat : lat;
    // const newLng = addressMap ? addressMap.lng : lng;
    // if (addressMap) {
    //   setLat(addressMap.lat);
    //   setLng(addressMap.lng);
    // }
    // let moveOn = true;
    // if (!newLat || !newLng) {
    //   moveOn = window.confirm(
    //     'You did not set your location on map. Continue?'
    //   );
    // }
    // if (moveOn) {
    //   dispatch(
    //     saveShippingAddress({
    //       fullName,
    //       address,
    //       city,
    //       postalCode,
    //       country,
    //       lat: newLat,
    //       lng: newLng,
    //     })
    //   );
    //   props.history.push('/payment');
    // }
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="mform" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">FullName</label>
          <TextField
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{ margin: 8 }}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <TextField
            type="text"
            id="address"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{ margin: 8 }}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <TextField
            type="text"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            style={{ margin: 8 }}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <TextField
            type="text"
            id="postalCode"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            style={{ margin: 8 }}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <TextField
            type="text"
            id="country"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            style={{ margin: 8 }}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <button
            className="btn-primary"
            style={{
              padding: 10,
              width: "100%",
              marginTop: "1rem",
              marginLeft: "0.4rem",
            }}
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shippingaddress;
