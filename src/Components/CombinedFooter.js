
import React from "react";
import { MapPin, Phone, Share2, Facebook, Twitter, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function CombinedFooter() {
  return (
    <div className="relative w-full h-auto md:h-[360px] overflow-visible md:overflow-hidden">
      <div className="relative md:absolute md:top-0 md:left-0 w-full md:w-[45%] h-auto md:h-full bg-[linear-gradient(135deg,black_92%,transparent_100%)] z-10 px-4 md:px-8 py-6 md:py-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
          <h2 className="text-[22px] md:text-[32px] font-semibold">Reach Us</h2>
        </div>
        <div className="space-y-2">
          <h3 className="text-[20px] md:text-[28px] font-semibold">Anurag Chaturvedi (Proprietor)</h3>
          <p className="text-[18px] md:text-[22px] font-medium">Aryan Automobiles</p>
          <p className="text-[16px] md:text-[22px]">Shop no2, Yadav Bhawan, Heerapura, Ajmer road, Opposite Kamladevi Govt school</p>
          <p className="text-[16px] md:text-[22px]">Jaipur - 302021, Rajasthan, India</p>
          <p className="text-[16px] md:text-[22px] text-blue-400 hover:underline cursor-pointer mt-2">
            Get Directions
          </p>
        </div>
      </div>

      <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-[55%] h-auto md:h-full bg-neutral-800 z-0 px-4 md:px-8 py-6 md:py-10 text-white flex flex-col justify-between gap-6 md:gap-0">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-2 gap-4">
            <div className="flex flex-col items-center md:items-center ml-0 md:ml-60 cursor-pointer hover:text-blue-400">
              <div className="flex items-center gap-3 text-[24px] md:text-[40px] font-semibold">
                <Phone className="w-6 h-6 md:w-10 md:h-10 text-blue-500" />
                <span>Call Us</span>
              </div>
              <span className="text-[24px] md:text-[40px] font-semibold mt-2">1234567890</span>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2 mr-0 md:mr-40">
              <div className="flex items-center gap-3 text-[24px] md:text-[40px] font-semibold ">
                <Share2 className="w-6 h-6 md:w-10 md:h-10 cursor-pointer text-blue-500 hover:text-blue-700" />
                <span>Share Us</span>
              </div>

              <div className="flex gap-4 mt-2">
                <Facebook className="w-6 h-6 md:w-10 md:h-10 cursor-pointer hover:text-blue-600" />
                <Twitter className="w-6 h-6 md:w-10 md:h-10 cursor-pointer hover:text-blue-400" />
                <Linkedin className="w-6 h-6 md:w-10 md:h-10 cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-600 my-4 md:my-6"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center ml-0 md:ml-60 mb-0 md:mb-40 gap-3 text-[24px] md:text-[40px] font-semibold cursor-pointer hover:text-blue-400">
            <Mail className="w-6 h-6 md:w-10 md:h-10 text-blue-500" />
            <span>Send Email</span>
          </div>

          <div className="flex items-center mr-0 md:mr-30 mb-0 md:mb-40 gap-3 text-[24px] md:text-[40px] font-semibold cursor-pointer hover:text-blue-400">
            <MessageSquare className="w-6 h-6 md:w-10 md:h-10 text-blue-500" />
            <span>Send SMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}