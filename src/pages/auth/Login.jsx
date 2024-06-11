import ModeSwitch from "./components/ModeSwitch";
import { useState } from "react";
import "./Login.scss";
import LoginForm from "./components/LoginForm";
import Providers from "./components/Providers";
import SignupForm from "./components/SignupForm";

const Login = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <div className="login-form-content">
            <h1 className="logo block text-center text-4xl font-bold">LOGO</h1>
            <div className="content-text w-fit block">
              <h1 className={"text-center text-3xl text-primary font-semibold"}>
                Welcome Back!
              </h1>
              <p className={"text-center"}>Please enter your Login details.</p>
              <ModeSwitch mode={mode} setMode={setMode} />
            </div>
            {mode === "signin" ? (
              <LoginForm email={email} setEmail={setEmail} />
            ) : (
              <SignupForm email={email} setEmail={setEmail} />
            )}
            <Providers />
          </div>
        </div>
        <img
          src="https://amb.se/wp-content/uploads/2019/01/medtech.jpg"
          alt=""
          className="screen-image flex-1 block w-1/2 object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
