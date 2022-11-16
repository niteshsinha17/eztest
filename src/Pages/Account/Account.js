import { useEffect, useState } from "react";
import BackIcon from "../../assets/icons/back.svg";
import Header from "../../Components/Header/Header";
import useWindowSize from "../../Hooks/WindowResizeHooks";
import "./Account.css";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ProfileInformation from "./Components/ProfileInformation/ProfileInformation";

const Account = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const menuItems = ["Profile Information", "Change Password"];
  const windowSize = useWindowSize();
  const changeMenu = (menuIndex) => {
    setCurrentMenu(menuIndex);
  };

  useEffect(() => {
    if (window.innerWidth >= 960) {
      changeMenu(0);
    }
  }, [windowSize]);

  var menu = null;

  switch (currentMenu) {
    case 0:
      menu = <ProfileInformation showTitle={windowSize.width > 960} />;
      break;
    case 1:
      menu = <ChangePassword />;
      break;
    default:
      menu = null;
  }
  return (
    <>
      <Header
        pageTitle={
          windowSize.width > 960 ? (
            "Account"
          ) : currentMenu != null ? (
            <>
              <span onClick={() => changeMenu(null)} className="back-icon">
                <img src={BackIcon} alt="back" />
              </span>
              {menuItems[currentMenu]}
            </>
          ) : (
            "Account"
          )
        }
      />
      <div className="panel">
        <div className="srollview">
          <div className="account">
            {(windowSize.width > 960 || currentMenu == null) && (
              <div className="menu">
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={item}
                      className={index == currentMenu ? "active" : ""}
                      onClick={() => {
                        setCurrentMenu(index);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="menu-panel">{menu}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
