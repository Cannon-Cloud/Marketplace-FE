import React from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";

const Register = () => {
  const onSaveRegistrationDataHandler = async (enteredUserData) => {
    const userData = enteredUserData;
    try {
      const res = await axios.post(
        `http://localhost:8000/api/register`,
        userData
      );
      // console.table(userData);
      console.log(`REGISTERED USER =====>`, res);
    } catch (err) {
      console.log(err);
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
