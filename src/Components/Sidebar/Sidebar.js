import "./Sidebar.css";
import Logo from "../../assets/logo/logo.png";
import MessageSquare from "../../assets/icons/message-square.svg";
import AssignmentReturned from "../../assets/icons/assignment-returned.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="ez" />
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <img src={AssignmentReturned} alt="" />
          </li>
        </ul>
        <ul>
          <li>
            <img src={MessageSquare} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
