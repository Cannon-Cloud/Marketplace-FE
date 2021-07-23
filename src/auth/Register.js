import React from "react";
import RegisterForm from "../components/RegisterForm";
import { toast } from "react-toastify";
import { register } from "../actions/auth";

const Register = (props) => {
  const history = props.history;

  const onSaveRegistrationDataHandler = async (enteredUserData) => {
    const userData = enteredUserData;
    try {
      const res = await register(userData);
      // console.table(userData);
      console.log(`REGISTERED USER =====>`, res);
      toast.success("Registration successful. Please login.");
      history.push("/login");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <React.Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              onSaveRegistrationData={onSaveRegistrationDataHandler}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
