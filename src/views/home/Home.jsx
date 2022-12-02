import React, { useState } from "react";
import UserForm from "../../components/forms/UserForm";
import Meetings from "../../components/meetings/Meetings";
import Modal from "../../components/modal/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
 
  const showModal = ()=>{
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <Modal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        userDetails={userDetails}
      />
      <div className="grid-container p-1">
        <div>
          <Meetings />
        </div>
        <div>
          <UserForm setUserDetails={setUserDetails} showModal={showModal}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
