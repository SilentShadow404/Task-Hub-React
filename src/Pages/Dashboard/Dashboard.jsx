import "./Dashboard.css";
import Sidebar from "../../Components/DashboardComponents/Sidebar/Sidebar";
import DashboardHome from "../../Components/DashboardComponents/DashboardHome/DashboardHome";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardHome />
    </div>
  );
};

export default Dashboard;
