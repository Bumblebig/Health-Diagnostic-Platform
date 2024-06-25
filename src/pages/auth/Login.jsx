import ModeSwitch from "./components/ModeSwitch";
import { useState, useContext } from "react";
import "./Login.scss";
import LoginForm from "./components/LoginForm";
import Providers from "./components/Providers";
import SignupForm from "./components/SignupForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = async () => {};

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <div className="login-form-content">
            <h1 className="logo block text-center text-4xl font-bold">HAVVA</h1>
            <div className="content-text w-fit block">
              {mode === "signin" ? (
                <>
                  <h1
                    className={
                      "text-center text-3xl text-primary font-semibold"
                    }
                  >
                    Welcome Back!
                  </h1>
                  <p className={"text-center"}>
                    Please enter your Login details.
                  </p>
                </>
              ) : (
                <>
                  <h1
                    className={
                      "text-center text-3xl text-primary font-semibold"
                    }
                  >
                    Welcome!
                  </h1>
                  <p className={"text-center"}>
                    Please enter your details to get started.
                  </p>
                </>
              )}
              <ModeSwitch mode={mode} setMode={setMode} />
            </div>
            {mode === "signin" ? (
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            ) : (
              <SignupForm
                email={email}
                setEmail={setEmail}
                handleSignUp={handleSignUp}
                password={password}
                setPassword={setPassword}
              />
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
