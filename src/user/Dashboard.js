import DashbaordNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="constainer-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p4">
        <DashbaordNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Bookings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              Browse Hotels
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
