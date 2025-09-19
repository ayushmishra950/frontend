
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      title: "Electric Rickshaw",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
      title: "Electric E Rickshaw",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
      title: "E Rickshaw Loader",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
      title: "Battery Operated Loader",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526404079167-6a52ab39ecbb?w=600&h=400&fit=crop&crop=center",
      title: "Eco Friendly Loader",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      title: "Passenger Rickshaw",
    },
  ];

  const hoverImages = [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1526404079167-6a52ab39ecbb?w=600&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1526404079167-6a52ab39ecbb?w=600&h=400&fit=crop&crop=center",

  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [frame, setFrame] = useState(0);
  const intervalRef = useRef(null);

  const navigate = useNavigate();
  const goHome = () => navigate('/home');

  useEffect(() => {
    if (hoveredIndex !== null) {
      intervalRef.current = setInterval(() => {
        setFrame((f) => (f + 1) % hoverImages.length);
      }, 1500);
    }
    return () => clearInterval(intervalRef.current);
  }, [hoveredIndex]);

  return (
    <div className="bg-gray-100 px-4 md:px-12 py-10">
      <h2 className="text-5xl font-light text-gray-800 mb-10 mt-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {products.slice(0, 4).map((product, index) => {
          const isHovered = hoveredIndex === index;
          const currentImage = isHovered ? hoverImages[frame] : product.image;

          return (
            <div
              key={index}
              className="bg-white rounded-md shadow-md p-4 flex flex-col items-center cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(index);
                setFrame(0);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setFrame(0);
              }}
              onClick={goHome}
            >
              <div className="relative w-full h-48 overflow-hidden rounded">
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={product.title}
                  className="absolute w-full h-full object-cover rounded animate-slide-in"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
        {products.slice(4).map((product, index) => {
          const actualIndex = index + 4;
          const isHovered = hoveredIndex === actualIndex;
          const currentImage = isHovered ? hoverImages[frame] : product.image;

          return (
            <div
              key={actualIndex}
              className="bg-white rounded-md shadow-md p-4 flex flex-col items-center cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(actualIndex);
                setFrame(0);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setFrame(0);
              }}
              onClick={goHome}
            >
              <div className="relative w-full h-48 overflow-hidden rounded">
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={product.title}
                  className="absolute w-full h-full object-cover rounded animate-slide-in"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <h3 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-2">
          We Send You The Price Immediately
        </h3>
        <button className="px-6 py-3 mt-8 bg-blue-600 text-white text-xl md:text-5xl font-light rounded border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 transition cursor-pointer">
          Get Instant Quote
        </button>


      </div>

      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ImageCard;