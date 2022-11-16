import "./ProfileInformation.css";
import Img from "../../../../assets/images/profile-pic.png";
import EditIcon from "../../../../assets/icons/edit.svg";
import {
  ContactNumberInput,
  TextInput,
} from "../../../../Components/Input/Input";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../../context/userContext";

const ProfileInformation = ({ showTitle }) => {
  const [userData, setUserData] = useState({});
  const userState = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    userState.update(userData);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setUserData(userState.state);
  };

  useEffect(() => {
    setUserData(userState.state);
  }, []);

  const handleChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  return (
    <div className="profile-selection">
      {showTitle && <div className="title">ProfileInformation</div>}
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <div className="profile-img">
              <img src={userData.profileImg || Img} alt="profile-img" />
              <span className="edit-btn">
                <input
                  type="file"
                  name=""
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.addEventListener("load", function () {
                      handleChange("profileImg", this.result);
                    });
                  }}
                  id=""
                />
                <img src={EditIcon} />
              </span>
            </div>
          </div>
          <div className="form-group input-fields">
            <TextInput
              label="First Name"
              id="firstName"
              value={userData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />

            <TextInput
              label="Last Name"
              onChange={handleChange}
              id="lastName"
              value={userData.lastName}
              placeholder="Last Name"
            />
            <TextInput
              label="Email"
              onChange={handleChange}
              value={userData.email}
              id="email"
              placeholder="Email Address"
            />
            <TextInput
              label="Organisation"
              id="organisation"
              onChange={handleChange}
              value={userData.organisation}
              placeholder="Organisation Name"
            />
            <ContactNumberInput
              number={userData.phoneNumber}
              codeId="phoneNumberCode"
              numberId="phoneNumber"
              onChange={handleChange}
              countryCode={userData.phoneNumberCode}
              label="Phone Number"
            />
            <ContactNumberInput
              number={userData.whatsAppNumber}
              onChange={handleChange}
              codeId="whatsAppNumberCode"
              numberId="whatsAppNumber"
              countryCode={userData.whatsAppNumberCode}
              label="WhatsApp Number"
            />
          </div>
          <div className="btns">
            <button onClick={handleCancel} className="cancel-btn">
              {" "}
              Cancel
            </button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileInformation;
