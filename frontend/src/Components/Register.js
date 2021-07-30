import React, { useEffect } from "react";
import "../css/Register.css";
function Login() {
  useEffect(() => {
    document.querySelector(".img__btn").addEventListener(
      "click",
      function () {
        document.querySelector(".cont").classList.toggle("s--signup");
      },
      []
    );
  });
  return (
    <>
      <div class="bg-login">
        <img class="bg-image" src="https://raw.githubusercontent.com/Kabeer-Ahmed11/Web-mobile-Assignments/master/Login%20page/789.jpg" width="100%" height="100%" alt="" />
        <div class="cont">
          <div class="login-form sign-in">
            <h2 class="h2-login">Welcome back</h2>
            <label class="label-login">
              <span class="span-login">Email</span>
              <input class="input-login" type="email" />
            </label>
            <label class="label-login">
              <span class="span-login">Password</span>
              <input class="input-login" type="password" />
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="button" class="login-submit">
              Sign In
            </button>
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
                <input class="input-login" type="text" />
              </label>
              <label class="label-login">
                <span class="span-login">Email</span>
                <input class="input-login" type="email" />
              </label>
              <label class="label-login">
                <span class="span-login">Password</span>
                <input class="input-login" type="password" />
              </label>
              <label class="label-login">
                <span class="span-login">Re-enter Password</span>
                <input class="input-login" type="password" />
              </label>
              <button type="button" class="login-submit">
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
