
import React from 'react';
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
    const goHome = () => navigate('/footer');

  return (
    <footer style={{ backgroundColor: '#29608A' }} className="text-gray-300">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div>
            <h3 className="text-4xl font-bold mb-4 text-white">Our Company</h3>
            <ul className="relative space-y-6 text-sm pl-8">
              <div
                className="absolute left-4 top-0"
                style={{ height: 'calc(100% - 1rem)', width: '2px', backgroundColor: 'white' }}
              ></div>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">About Us</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">Testimonial</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">Sitemap</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">Contact Us</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-4 text-white">Our Products</h3>
            <ul className="relative space-y-6 text-sm pl-8">
              <div
                className="absolute left-4 top-0"
                style={{ height: 'calc(100% - 1rem)', width: '2px', backgroundColor: 'white' }}
              ></div>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">Electric Rickshaw</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">Electric E Rickshaw</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">E Rickshaw Loader</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>

              <li className="relative pl-6 text-2xl hover:underline">
                <a href="#">Battery Operated Loader</a>
                <span className="absolute left-0 top-1/2 w-4 h-0.5 bg-white -translate-y-1/2"></span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start mt-16">
            <ul className="space-y-2 mb-4 text-sm">
              <li>
                <a href="#" className="text-2xl hover:underline">
                  Yatri E Rickshaw
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl hover:underline">
                  New Items
                </a>
              </li>
            </ul>
            <button className="border text-3xl font-bold border-white py-2 px-6 hover:bg-white hover:text-blue-900 transition-colors self-start">
              +View All
            </button>
          </div>
        </div>

        <div
          className="relative w-full md:w-1/3 min-h-[300px] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#29608A' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">Dummy Image</span>
            </div>
          </div>

          <div
            onClick={goHome}
            className="relative w-80 h-80 rounded-full cursor-pointer transform translate-x-0 md:translate-x-[30%]"
            style={{
              backgroundImage: "url('https://via.placeholder.com/320')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 rounded-full flex flex-col items-center justify-center text-center p-4">
              <p className="text-white font-semibold" style={{ fontSize: '20px' }}>
                See All Products
              </p>
              <p className="text-white mt-1" style={{ fontSize: '20px' }}>
                Click Here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-700 py-4 px-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p className="mb-2 md:mb-0">
          ©Aryan Automobiles. All Rights Reserved (
          <a href="#" className="underline">
            Terms of Use
          </a>
          )
        </p>
        <div className="flex items-center">
          <p className="mr-4">Developed and Managed by IndiaMART INTORMeSH Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
