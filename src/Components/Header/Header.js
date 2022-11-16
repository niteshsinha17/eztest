import ProfilePic from "../../assets/images/profile-pic.png";
import "./Header.css";
import Logo from "../../assets/logo/logo.png";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../context/userContext";

const Header = ({ pageTitle }) => {
  const actionMenuRef = useRef();
  const [open, setOpen] = useState(0);
  const userState = useContext(UserContext);
  useEffect(() => {
    const clickHandler = (e) => {
      if (actionMenuRef.current.contains(e.target) === false) {
        setOpen(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-title">{pageTitle}</div>
      <div className="header-right">
        <span className="header-logo">
          <img src={Logo} alt="ez" />
        </span>
        <div
          ref={actionMenuRef}
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "header-profile active" : "header-profile"}
        >
          <span>Hi {userState.state.firstName},</span>
          <span className="header-profile-avatar">
            <img
              src={userState.state.profileImg || ProfilePic}
              alt="profile-pic"
            />
          </span>
          <ul className="profile-actions">
            <li> Account</li>
            <li> Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
