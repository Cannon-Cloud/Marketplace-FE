import React from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = props.history;

  const onLoginHandler = async (enteredUserData) => {
    const userData = enteredUserData;

    try {
      let res = await login(userData);
      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND IN LOCAL STORAGE THEN REDIRECT ===>"
        );
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Login</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm onLogin={onLoginHandler} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
