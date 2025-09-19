import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full text-gray-800 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 bg-white space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-2">
          <div className="font-extrabold text-2xl md:text-[32px] text-gray-900 ml-2 md:ml-6">
            Aryan Automobiles
          </div>

      <div className="flex flex-col md:flex-row items-start md:items-center text-sm md:text-[19px] text-gray-700 space-y-2 md:space-y-0">
  <div className="font-semibold pr-0 md:pr-3 border-r-0 md:border-r border-gray-400 ml-2 md:ml-6">
    Jaipur, Rajasthan
  </div>

  <div className="flex items-center px-0 md:px-3 border-r-0 md:border-r border-gray-400">
    <FaCheckCircle className="text-green-500 mr-1" />
    <span>
      GST No. <strong className="tracking-wider">08AFEPC0383B1Z3</strong>
    </span>
  </div>

  <div className="flex items-center pl-0 md:pl-3">
    <img
      src="https://5.imimg.com/data5/ANDROID/Default/2022/1/JD/BD/FH/142401956/verified-512.png"
      alt="Trust Seal"
      className="w-5 h-5 mr-1"
    />
    <span className="font-semibold text-gray-800">TrustSEAL Verified</span>
  </div>
</div>


        </div>

        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5 w-full md:w-auto">
          <button className="flex flex-col items-start justify-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-left w-full md:w-auto">
            <div className="flex items-center space-x-3 text-[22px] font-semibold">
              <FaPhoneAlt size={20} />
              <span>Call 07942815920</span>
            </div>
            <div className="text-sm text-gray-300 pl-8">58% Response Rate</div>
          </button>

          <button className="flex items-center space-x-3 bg-[#195a86] hover:bg-[#154c72] text-white px-7 py-3 rounded-full text-[26px] font-semibold w-full md:w-auto justify-center">
            <MdEmail size={24} />
            <span>SEND EMAIL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
