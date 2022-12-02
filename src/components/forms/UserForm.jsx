import React, { useState } from "react";
import Form from "./Form";

const UserForm = ({ setUserDetails, showModal }) => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    errorMessage: "",
    type: "",
  });

  const onShowAlert = (errorMessage, type = "error") => {
    setShowAlert({ show: true, errorMessage, type });
  };

  const modalHandler = ({ name, email, msg }) => {
    showModal();
    setUserDetails({
      name,
      email,
      msg,
      min: 15,
      time: "9:30am-9:45am, Friday, September 16, 2022",
      country: "India Standard Time",
    });
  };
  return (
    <div className="p-2 px-4  md:border-l-2 md:mt-0 mt-8 border-t-2 md:border-t-0 min-h-max md:min-h-screen">
      <h1 className="text-lg font-bold mt-8">Enter Details</h1>

      <Form
        showAlert={showAlert}
        modalHandler={modalHandler}
        onShowAlert={onShowAlert}
        setShowAlert={setShowAlert}
      />
    </div>
  );
};

export default UserForm;
