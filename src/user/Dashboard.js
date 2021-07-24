import DashbaordNav from "../components/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div className="constainer-fluid bg-secondary p-5">
        <h1>Dashboard</h1>
      </div>

      <div className="container-fluid p4">
        <DashbaordNav />
      </div>

      <div className="container">
        <p> Show all items and a button to brows items</p>
      </div>
    </>
  );
};

export default Dashboard;
