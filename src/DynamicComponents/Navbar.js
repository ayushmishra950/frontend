

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showNested, setShowNested] = useState(Array(6).fill(false));

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Search:', searchText);
      setShowSearch(false);
      setSearchText('');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="bg-gray-800 text-white shadow-lg relative z-20">
        <div className="container mx-auto px-4 py-4 flex flex-row justify-between items-center gap-1 md:gap-0">
          <ul className="flex gap-2 md:gap-8 text-sm md:text-2xl font-medium relative justify-center md:justify-start">

            <li
              className="group relative"
              onClick={isMobile ? () => {
                setShowProductsDropdown((prev) => {
                  const newState = !prev;
                  if (newState) {
                    setShowNested(Array(6).fill(false));
                  }
                  return newState;
                });
              } : undefined}
            >              <a href="#" className="hover:text-gray-400 flex items-center justify-between">
                Our Products
              </a>

              <div className={`absolute ${isMobile ? 'left-0 w-64' : '-right-20 w-80'} mt-6 bg-white border border-gray-200 rounded shadow-lg transition-all duration-300 z-30 
${isMobile ? (showProductsDropdown ? 'opacity-100 visible' : 'opacity-0 invisible') : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>


                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full hidden md:block">
                  <div className="w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200"></div>
                </div>


                {[
                  "Electric Rickshaw",
                  "Electric E Rickshaw",
                  "E Rickshaw Loader",
                  "Battery Operated Loader",
                  "Yatri E Rickshaw",
                  "New Items"
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between px-4 py-2 hover:bg-gray-100">
                    <a href="#" className="text-gray-800">{item}</a>

                    <div className="relative ml-4 group/item cursor-pointer" onClick={isMobile ? () => { const newShow = [...showNested]; newShow[index] = !newShow[index]; setShowNested(newShow); } : undefined}>
                      <svg
                        className="w-4 h-4 text-gray-500 group-hover/item:text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>

                      <div className={`absolute ${isMobile ? 'left-0 top-full mt-2' : 'left-full ml-1 top-0'} w-56 bg-white border border-gray-200 rounded shadow-lg transition-all duration-300 z-40 
                      ${isMobile ? (showNested[index] ? 'opacity-100 visible' : 'opacity-0 invisible') : 'opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible'}`}>
                        {Array.from({ length: 6 }, (_, i) => (
                          <a
                            key={i}
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            Dummy Item {i + 1}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>

            <li><a href="#" className="hover:text-gray-400">Home</a></li>

            <li className="group relative" onClick={isMobile ? () => setShowAboutDropdown(!showAboutDropdown) : undefined}>
              <a href="#" className="hover:text-gray-400">About Us</a>
              <div className={`absolute -right-20 mt-6 w-64 bg-white border border-gray-200 rounded shadow-lg transition-all duration-300 z-30 ${isMobile ? (showAboutDropdown ? 'opacity-100 visible' : 'opacity-0 invisible') : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full hidden md:block">
                  <div className="w-3 h-3 mr-10 bg-white rotate-45 border-l border-t border-gray-200"></div>
                </div>

                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Testimonial</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Current Openings</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Download Brochure</a>
              </div>
            </li>

            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>

          <div className="relative">
            <div
              className="bg-white p-2 flex items-center justify-center w-10 h-10 cursor-pointer z-10 relative"
              onClick={() => setShowSearch(!showSearch)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {showSearch && (
              <div className="absolute top-full mt-2 w-92 ml-[-160px]">
                <div className="flex justify-center">
                  <div className="w-3 h-3 bg-white rotate-45 border-l border-t border-gray-300"></div>
                </div>

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type to search..."
                  autoFocus
                  className="w-[200px] md:w-[380px] mt-2 px-3 bg-white py-1.5 md:py-3 border border-gray-300 rounded shadow focus:outline-none text-gray-800 text-[16px] md:text-[29px]" style={{
                    height: 'auto'
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
