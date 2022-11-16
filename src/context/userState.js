import UserContext from "./userContext";
import React, { useState } from "react";

const UserState = (props) => {
  const s = {
    firstName: "Dana",
    lastName: "",
    email: "",
    location: "",
    organisation: "",
    phoneNumberCode: "",
    phoneNumber: "",
    whatsAppNumberCode: "",
    whatsAppNumber: "",
    profileImg: null,
  };
  const [state, setState] = useState(s);

  const update = (state) => {
    setState(state);
  };

  return (
    <UserContext.Provider value={{ state, update }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
