import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, signin } from "../actions/userActions";
import Alert from "@material-ui/lab/Alert";
import "../css/Register.css";

function Login(props) {
  // for signin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // for register
  const [rname, setRname] = useState("");
  const [remail, setRemail] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  // for register
  const userRegister = useSelector((state) => state.userRegister);

  // for signin
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  // for register
  const rsubmitHandler = (e) => {
    e.preventDefault();
    if (rpassword !== cpassword) {
      alert("passwords donot match");
    } else {
      dispatch(register(rname, remail, rpassword));
    }
  };
  useEffect(() => {
    if (userRegister.userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userRegister.userInfo]);

  useEffect(() => {
    document.querySelector(".img__btn").addEventListener(
      "click",
      function () {
        document.querySelector(".cont").classList.toggle("s--signup");
      },
      []
    );
  });
  // for signin
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <>
      <div class="bg-login">
        <img
          class="bg-image"
          src="https://raw.githubusercontent.com/Kabeer-Ahmed11/Web-mobile-Assignments/master/Login%20page/789.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <div class="cont">
          <div class="login-form sign-in">
            <h2 class="h2-login">Welcome back</h2>
            <label class="label-login">
              <span class="span-login">Email</span>
              <input
                class="input-login"
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label class="label-login">
              <span class="span-login">Password</span>
              <input
                class="input-login"
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {error && <h6 style={{color:'red'}}>{error}</h6>} */}
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="button" class="login-submit" onClick={submitHandler}>
              Sign In
            </button>
            {error && (
              <Alert
                style={{ backgroundColor: "red", color: "white" }}
                severity="secondary"
              >
                {error}
              </Alert>
            )}
          </div>
          <div class="sub-cont">
            <div class="login-img">
              <div class="img__text m--up">
                <h2 class="h2-login">New here?</h2>
                <p>
                  Sign up and discover great <br /> amount of new Games!
                </p>
              </div>
              <div class="img__text m--in">
                <h2 class="h2-login">One of us?</h2>
                <p>
                  If you already has an account,
                  <br /> We've missed you!
                </p>
              </div>
              <div class="img__btn">
                <span class=" btn-slide span-login m--up">Sign Up</span>
                <span class=" btn-slide span-login m--in ">Sign In</span>
              </div>
            </div>
            <div class="login-form sign-up">
              <h2 class="h2-login">Time to Play like Pro,</h2>
              <label class="label-login">
                <span class="span-login">Name</span>
                <input
                  class="input-login"
                  id="remail"
                  type="name"
                  required
                  onChange={(e) => setRname(e.target.value)}
                />
              </label>
              <label class="label-login">
                <span class="span-login">Email</span>
                <input
                  class="input-login"
                  id="remail"
                  type="email"
                  required
                  onChange={(e) => setRemail(e.target.value)}
                />
              </label>
              <label class="label-login">
                <span class="span-login">Password</span>
                <input
                  class="input-login"
                  id="rpassword"
                  type="password"
                  required
                  onChange={(e) => setRpassword(e.target.value)}
                />
              </label>
              <label class="label-login">
                <span class="span-login">Re-enter Password</span>
                <input
                  class="input-login"
                  type="password"
                  id="cpassword"
                  required
                  onChange={(e) => setCpassword(e.target.value)}
                />
              </label>
              <button
                type="button"
                class="login-submit"
                onClick={rsubmitHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
