import React, { useState } from "react";
import "./Login.css";
import SignIn from "../../Components/SignIn/SignIn";
import movies from "../../assets/movies.png";

const LoginScreen = ({ setGuest }) => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src={movies}
          alt=""
          onClick={() => {
            setSignIn(false);
            setSignUp(false);
          }}
        />
        <button
          className="loginScreen__button"
          onClick={() => {
            setSignIn(true);
            setSignUp(false);
          }}
        >
          Sign in
        </button>
        <div className={`loginScreen__body `}>
          {signIn ? (
            <SignIn setSignUp={setSignUp} signUp={signUp} setGuest={setGuest} />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                mebership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => {
                      setSignIn(true);
                    }}
                  >
                    Get started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        <div className="loginScreen__gradient" />
      </div>
    </div>
  );
};

export default LoginScreen;
