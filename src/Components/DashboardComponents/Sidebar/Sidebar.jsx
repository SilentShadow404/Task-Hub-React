import { HomeIcon, ClipboardIcon, ChartBarIcon, CogIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); 
    navigate("/login"); 
  };

  return (
    <div className="sidebar">
      <h2 className="sidebarlogo">Task Hub</h2>
      <nav>
        <ul className="abc">
          <li>
            <Link to="/dashboard">
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <ClipboardIcon className="icon" />
              <span>Tasks</span>
            </Link>
          </li>
          <li className="logout" onClick={handleLogout}>
            <ArrowLeftOnRectangleIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
