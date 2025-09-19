
import React from 'react';

const EnquiryForm = () => {
  return (
    <div className="bg-[#1C4164] p-8 md:p-12 text-center w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
          Tell Us What Are You Looking For ?
        </h2>
        <div className="bg-white border border-gray-200 rounded p-4 mb-6">
          <textarea
            className="w-full h-32 md:h-40 p-3 text-gray-700 placeholder-gray-500 focus:outline-none resize-none"
            placeholder="Kindly Describe Your Requirement"
          ></textarea>
        </div>
        <button className="bg-[#007BFF] text-4xl hover:bg-blue-600 text-white font-light py-3 px-12 rounded transition duration-300 ease-in-out">
          Send Enquiry
        </button>
      </div>
    </div>
  );
};

export default EnquiryForm;