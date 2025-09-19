
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SliderWithContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();
  const goHome = () => navigate('/home');

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      title: "Electric Vending Cart",
      price: "₹ 1.85 Lakh / Piece"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
      title: "Electric Cargo Cart",
      price: "₹ 1.95 Lakh / Piece"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
      title: "Battery Operated Loader",
      price: "₹ 1.75 Lakh / Piece"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
      title: "Heavy Duty E-Rickshaw",
      price: "₹ 2.25 Lakh / Piece"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
      title: "Multi Utility Electric Cart",
      price: "₹ 2.00 Lakh / Piece"
    }
  ];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=150&fit=crop&crop=center",
      title: "E Loader Battery Rickshaw with Lithium Battery"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=150&fit=crop&crop=center",
      title: "Yatri Black Super E Rickshaw"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&crop=center",
      title: "Yatri Passenger E Rickshaw"
    }
  ];

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => {
      setPrevIndex(prev);
      return (prev + 1) % slides.length;
    });
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => {
      setPrevIndex(prev);
      return (prev - 1 + slides.length) % slides.length;
    });
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setPrevIndex(currentSlide);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const t = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(t);
    }
  }, [isAnimating]);

  return (
    <>
      <style>{`
        @keyframes slideInFromBottom {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOutToTop {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        .slide-in-from-bottom { animation: slideInFromBottom 0.6s ease both; }
        .slide-out-to-top { animation: slideOutToTop 0.6s ease both; }
      `}</style>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen">
        <div className="w-full md:w-1/2 relative bg-gray-100">
          <div className="relative h-[320px] md:h-full overflow-hidden flex items-center justify-center">
            {isAnimating && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center slide-out-to-top z-0">
                <img
                  src={slides[prevIndex].image}
                  alt={slides[prevIndex].title}
                  className="w-[80%] md:w-[60%] h-auto md:h-[60%] object-cover mb-4 cursor-pointer"
                  onClick={goHome}
                />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{slides[prevIndex].title}</h3>
                <p className="text-base md:text-lg text-gray-600">{slides[prevIndex].price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Get Best Quote
                </button>
              </div>
            )}

            <div className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 ${isAnimating ? 'slide-in-from-bottom' : ''}`}>
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-[80%] md:w-[60%] h-auto md:h-[60%] object-cover mb-4 cursor-pointer"
                onClick={goHome}
              />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{slides[currentSlide].title}</h3>
              <p className="text-base md:text-lg text-gray-600">{slides[currentSlide].price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Get Best Quote
              </button>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all hover:scale-110 ${
                    currentSlide === index ? 'bg-blue-500 shadow-lg' : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col h-full mt-5 md:mt-0">
          <div className="h-auto md:h-[300px] bg-gray-800 text-white relative">
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-600 relative">
              <div className="flex space-x-4 sm:space-x-6">
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredMenu('about')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <span className="text-lg md:text-2xl text-white hover:text-blue-300 cursor-pointer">About Us</span>
                  {hoveredMenu === 'about' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      <div className="absolute -top-4 left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Testimonial</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Current Openings</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Download Brochure</a>
                      </div>
                    </div>
                  )}
                </div>

                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredMenu('products')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <span className="text-lg md:text-2xl text-white hover:text-blue-300 cursor-pointer">Our Products</span>

                  {hoveredMenu === 'products' && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md z-50">
                      <div className="absolute -top-1 left-12 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                      <div className="py-2 space-y-1">
                        {[
                          'Electric Rickshaw',
                          'Electric E Rickshaw',
                          'E Rickshaw Loader',
                          'Battery Operated Loader',
                          'Yatri E Rickshaw',
                          'New Items',
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center group px-4 py-2 hover:bg-gray-100 relative">
                            <a href="#" className="text-gray-800">{item}</a>

                            <div className="relative group/item ml-2">
                              <svg
                                className="w-4 h-4 text-gray-500 group-hover/item:text-gray-700 cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>

                              <div className="absolute top-0 left-full ml-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
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
                    </div>
                  )}
                </div>

                <span className="text-lg md:text-2xl text-white hover:text-blue-300 cursor-pointer">Contact Us</span>
              </div>

              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="px-3 py-1 rounded text-black text-sm w-24 sm:w-32"
                />
                <button className="ml-2 text-white">🔍</button>
              </div>
            </div>

            <div className="flex items-start justify-center p-4 flex-wrap md:flex-nowrap">
              <button className="hidden sm:block text-white p-2 text-7xl font-bold hover:text-blue-300 mt-13">&#8249;</button>
              <div className="flex flex-wrap gap-4 mx-4 justify-center md:flex-nowrap md:gap-0 md:space-x-4">
                {products.map((product, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-3 text-center min-w-[140px] sm:min-w-[160px] md:min-w-[180px] cursor-pointer" onClick={goHome}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-30 object-cover rounded mb-2"
                    />
                    <p className="text-base md:text-xl text-white">{product.title}</p>
                  </div>
                ))}
              </div>
              <button className="hidden sm:block text-white p-2 text-7xl font-bold hover:text-blue-300 mt-13">&#8250;</button>
            </div>
          </div>

          <div style={{ backgroundColor: '#29608A' }} className="text-white p-4 sm:p-6 text-lg sm:text-2xl pb-8 flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 flex items-center">
              <span className="mr-2 text-2xl sm:text-3xl">ℹ️</span>
              About Company
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center mt-4">
                <span className="mr-2 text-2xl sm:text-3xl">🏢</span>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">Nature of Business</p>
                  <p className="text-base sm:text-xl">Trader - Retailer</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <span className="mr-2 text-2xl sm:text-3xl">📅</span>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">GST Registration Date</p>
                  <p className="text-base sm:text-xl">20-12-2022</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <span className="mr-2 text-2xl sm:text-3xl">⚖️</span>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">Legal Status of Firm</p>
                  <p className="text-base sm:text-xl">Proprietorship</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <span className="mr-2 text-2xl sm:text-3xl">📋</span>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">Annual Turnover</p>
                  <p className="text-base sm:text-xl">40 L - 1.5 Cr</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <span className="mr-2 text-2xl sm:text-3xl">🆔</span>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">GST No.</p>
                  <p className="text-base sm:text-xl">08AFEPC0383B1Z3</p>
                </div>
              </div>
            </div>

            <div className="text-lg sm:text-2xl">
              <p className="mb-1">
                Established in <strong>2022</strong>, <strong>Aryan Automobiles</strong> is a well-recognized as 
                a <strong>Wholesaler</strong> and <strong>Retailer</strong> of <strong>E-Rickshaw and E-Rickshaw Loader</strong>.
              </p>
              <p className="mt-6">🌟 <strong>Extra Info:</strong> We also provide customized electric vehicles as per user requirements.</p>
              <button className="text-blue-200 underline hover:text-white mt-4">Read More</button>
            </div>

            <div className="mt-8 w-full flex items-center justify-end">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-yellow-400 shadow-lg flex flex-col items-center justify-center text-center text-black font-bold leading-tight">
                  <span className="text-base">TRUST</span>
                  <span className="text-base -mt-1">SEAL</span>
                  <span className="text-[10px] font-semibold text-red-600 mt-1">indiamart</span>
                </div>
                <div className="text-white text-lg sm:text-xl flex items-center">
                  IndiaMART Trust Seal Verified
                  <sup className="ml-1 text-sm">®</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderWithContent;