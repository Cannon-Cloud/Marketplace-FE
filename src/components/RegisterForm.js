import { useState } from "react";

const RegisterForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    props.onSaveRegistrationData(userData);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={submitHandler} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Your Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={nameChangeHandler}
        ></input>
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Your Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={emailChangeHandler}
        ></input>
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Your Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={passwordChangeHandler}
        ></input>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterForm;
