import React, { useState } from "react";
import { Input, Button, Alert } from "antd";

const Form = ({showAlert, modalHandler, onShowAlert}) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const { name, email, msg } = inputs;
  const { show, errorMessage, type } = showAlert;

  const handleOnChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = (e) =>{
    e.preventDefault();

    // check if all the fields are filled by user
    if(!name || !email){
      onShowAlert('Please fill all required fields !', 'error')
      return
    }

    // setting input values on modal
    modalHandler(inputs);

    // empty input fields
    setInputs({ name: "", email: "", msg: "" });
  }

  return (
    <form className="mt-4">
      {show && (
        <Alert
          className="bg-red-200 text-red-900 mt-2 text-center"
          message={errorMessage}
          type={type}
          closable
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="mt-4">
        <label htmlFor="name" className="text-gray-700">
          Name*
        </label>
        <Input
          size="large"
          name="name"
          id="name"
          value={name}
          onChange={handleOnChange}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="text-gray-700">
          Email*
        </label>
        <Input
          size="large"
          name="email"
          id="email"
          value={email}
          onChange={handleOnChange}
        />

        <Button
          className="mt-2 border border-blue-400 text-blue-400"
          shape="round"
          role={"button"}
        >
          Add Guests
        </Button>
      </div>

      <div className="mt-4">
        <label htmlFor="msg" className="text-gray-700">
          Please share anything that will help prepare for out meeting.
        </label>
        <Input.TextArea
          autoSize={{ minRows: 4, maxRows: 5 }}
          name="msg"
          id="msg"
          value={msg}
          onChange={handleOnChange}
        />
      </div>

      <Button
        className="mt-8 mb-8 bg-blue-500 text-white hover:bg-blue-500"
        shape="round"
        type="primary"
        size="large"
        onClick={onHandleSubmit}
      >
        Schedule Event
      </Button>
    </form>
  );
};

export default Form;
