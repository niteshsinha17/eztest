import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Account from "./Account/Account";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        {/* on account page */}
        <Account />
      </div>
    </div>
  );
};

export default Main;
