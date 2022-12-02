import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { HiCalendar } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";

const Meetings = () => {
  return (
    <div className="p-2 md:min-h-screen min-h-max">
      <div className="mt-8">
        <p className="text-gray-600 font-semibold">Gaurav Garg</p>
        <p className="text-2xl font-bold">15 Minute Meeting</p>
      </div>
      <div className="mt-6">
        <p className="mb-1">
          <MdOutlineAccessTimeFilled className="text-gray-500 text-[18px] inline-block mb-[4px]" />
          <span className="ml-2">15 min</span>
        </p>
        <p className="mb-1">
          <HiCalendar className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
          <span className="ml-2">
            9:30am-9:45am, Friday, September 16, 2022
          </span>
        </p>
        <p>
          <FaGlobeAmericas className="text-gray-500 text-[18px] inline-block mb-[4px]" />{" "}
          <span className="ml-2"> India Standard Time</span>
        </p>
      </div>
    </div>
  );
};

export default Meetings;
