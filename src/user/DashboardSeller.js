import DashbaordNav from "../components/DashboardNav";

const DashboardSeller = () => {
  return (
    <>
      <div className="constainer-fluid bg-secondary p-5">
        <h1>Dashboard</h1>
      </div>

      <div className="container-fluid p4">
        <DashbaordNav />
      </div>

      <div className="container">
        <p> Show all hotels user has posted and a button to add new</p>
      </div>
    </>
  );
};

export default DashboardSeller;
