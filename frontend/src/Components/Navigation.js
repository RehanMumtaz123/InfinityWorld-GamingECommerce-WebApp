import React from "react";
import "../css/Navigation.css";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  poot: {
    "& > *": {
      margin: theme.spacing(1),
      margin: "0 10",
    },
  },
}));
function Navigation() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand pb-2" href="#">
          <img
            src="https://mega00.blob.core.windows.net/projectimages/Navbar-the-infinity-world-logo.png "
            width="200"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto me-auto pe-5 mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="px-4 nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="px-4 nav-link text-white" href="#">
                Consoles
              </a>
              <div class="mega-menu">
                <div class="container">
                  <div class="item">
                    <h3>Playstation</h3>
                    <a href="/consoles/ps5">
                      <img src="https://mega00.blob.core.windows.net/projectimages/Navbar-ps.png" />
                    </a>
                  </div>

                  <div class="item">
                    <h3>Xbox</h3>
                    <a href="/consoles/xb">
                      <img src="https://mega00.blob.core.windows.net/projectimages/Navbar-xbox.png" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="px-4 nav-link text-white" href="#">
                Games
              </a>
              <div class="mega-menu">
                <div class="container">
                  <div class="item">
                    <h3>Playstation</h3>
                    <a href="#">
                      <img src="https://mega00.blob.core.windows.net/projectimages/Navbar-ps.png" />
                    </a>
                  </div>

                  <div class="item">
                    <h3>Xbox</h3>
                    <a href="#">
                      <img src="https://mega00.blob.core.windows.net/projectimages/Navbar-xbox.png" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="px-4 me-5 nav-link text-white" href="#">
                Team
              </a>
            </li>
          </ul>
          <span>
            <Link
              className={classes.poot}
              to="/cart"
              style={{ color: "white", margin: "1.5em" }}
            >
              <Badge
                color="secondary"
                badgeContent={cartItems.length > 0 ? cartItems.length : 0}
              >
                <ShoppingCartIcon style={{ color: "white" }} color="light" />
              </Badge>
            </Link>
            {userInfo ? (
              <div className="mapdropdown">
                <>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.3em",
                    }}
                  >
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="mapdropdown-content">
                    {/* <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>

                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li> */}
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </>
              </div>
            ) : (
              <Link to="/register">
                <img
                  src="https://mega00.blob.core.windows.net/projectimages/Navbar-profile-user.png"
                  width="25"
                  height="25"
                  alt=""
                />
              </Link>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
