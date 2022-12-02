import React from "react";
import { Modal } from "antd";
import { MdOutlineAccessTimeFilled, MdEmail } from "react-icons/md";
import { HiCalendar } from "react-icons/hi";
import { FaGlobeAmericas, FaUserAlt } from "react-icons/fa";
import { BiMessageRoundedError } from "react-icons/bi";

const ModalContainer = ({
  isModalOpen,
  handleCancel,
  handleOk,
  userDetails,
}) => {
  return (
    <>
      <Modal
        title="Meeting Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          className: "bg-blue-500",
        }}
      >
        <div className="h-[1px] bg-gray-300 mb-4"></div>
        {userDetails && (
          <>
            {userDetails.name && (
              <p  className="mb-1">
                <FaUserAlt className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
                <span className="font-semibold">{userDetails.name}</span>
              </p>
            )}
            {userDetails.email && (
              <p  className="mb-1">
                {" "}
                <MdEmail className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
                <span className="font-semibold">{userDetails.email}</span>
              </p>
            )}
            {userDetails.msg && (
              <p  className="mb-1">
                <BiMessageRoundedError className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
                <span className="font-semibold">{userDetails.msg}</span>
              </p>
            )}
            {userDetails.min && (
              <p className="mb-1">
                <MdOutlineAccessTimeFilled className="text-gray-500 text-[18px] inline-block mb-[4px]" />
                <span  className="font-semibold"> {userDetails.min} min</span>
              </p>
            )}
            {userDetails.time && (
              <p className="mb-1">
                <HiCalendar className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
                <span className="ml-2 ">{userDetails.time}</span>
              </p>
            )}
            {userDetails.country && (
              <p className="mb-1">
                <FaGlobeAmericas className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
                <span className="ml-2"> {userDetails.country}</span>
              </p>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default ModalContainer;
