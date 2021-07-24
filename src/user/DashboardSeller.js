import React, { useState } from "react";
import DashbaordNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
import { createConnectAccount } from "../actions/stripe";
import { toast } from "react-toastify";

const DashboardSeller = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useSelector((state) => ({ ...state }));

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res); // get loginlink
    } catch (err) {
      console.log(err);
      toast.error("Stripe connect failed. Try again.");
      setIsLoading(false);
    }
  };
  const connected = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Listings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/listings/new" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const notConnected = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <HomeOutlined className="h1" />
            <h4>Setup payouts to post listings</h4>
            <p>
              MERN partners with stripe to transfer earnings to your bank
              account
            </p>
            <button
              disabled={isLoading}
              onClick={clickHandler}
              className="btn btn-primary mb-3"
            >
              {isLoading ? "Processing... " : "Setup Payouts"}
            </button>
            <p className="text-muted">
              <small>
                You will be redirected to stripe to complete the onboarding
                process
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="constainer-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="container-fluid p4">
        <DashbaordNav />
      </div>
      {auth &&
      auth.user &&
      auth.user.strip_seller &&
      auth.user.strip_seller.charges_enabled
        ? connected()
        : notConnected()}
    </React.Fragment>
  );
};

export default DashboardSeller;
