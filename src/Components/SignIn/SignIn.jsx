import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignUp, signUp, setGuest }) => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const PasswordRef = useRef(null);

  const register2 = () => {
    setSignUp(true);
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        PasswordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
    navigate("/");
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        PasswordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return signUp ? (
    <div className="signUpScreen">
      <form>
        <h5
          className="guest"
          onClick={() => {
            setGuest(true);
          }}
        >
          Click here to skip firebase auth and see the app
        </h5>
        <h1>Sign Up</h1>
        <h3>Create a password to start your membership</h3>
        <p>That's it, you're done!. We hate paperwork, too.</p>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={PasswordRef} />
        <button
          type="submit"
          onClick={(e) => {
            register(e);
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  ) : (
    <div className="signUpScreen">
      <form>
        <h5
          className="guest"
          onClick={() => {
            setGuest(true);
          }}
        >
          Click here to skip firebase auth and see the app
        </h5>
        <h1>Sign In</h1>
        <h3>Welcome back!</h3>
        <p>Enter your password and you'll be watching in no time.</p>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={PasswordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SigUpScreen__gray">New to Movies? </span>
          <span
            className="SigUpScreen__link"
            onClick={() => {
              register2();
            }}
          >
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
