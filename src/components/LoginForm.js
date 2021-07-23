import { useState } from "react";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    props.onLogin(userData);
  };

  return (
    <form onSubmit={submitHandler} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          value={email}
          onChange={emailChangeHandler}
        ></input>
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
          onChange={passwordChangeHandler}
        ></input>
      </div>
      <button
        disabled={!email || !password || password.length < 6}
        className="btn btn-primary"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
