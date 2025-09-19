
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const products = [
  {
    name: 'Yatri plus 5 battery SS e rickshaw blue colour',
    image: 'https://picsum.photos/id/1010/400/300',
  },
  {
    name: 'Yatri Black Super E Rickshaw',
    image: 'https://picsum.photos/id/1011/400/300',
  },
  {
    name: 'Yatri Sky Blue Super E Rickshaw with lithium battery',
    image: 'https://picsum.photos/id/1012/400/300',
  },
  {
    name: 'E Loader Battery Rickshaw with Lithium Battery',
    image: 'https://picsum.photos/id/1013/400/300',
  },
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth < 768 ? 1 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="w-full bg-gray-100 py-10">
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-blue-800 mb-8">
        Explore More Products
      </h2>
      <div className="relative w-11/12 mx-auto flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-12 z-10 p-2 text-xl md:text-2xl text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <FaChevronLeft />
        </button>
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`group ${visibleItems === 1 ? 'w-full' : 'w-1/4'} flex-shrink-0 p-4 relative`}
              >
                <div className="bg-white border border-gray-200 p-4 transition-transform duration-300 ease-in-out group-hover:border-black group-hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg md:text-2xl text-gray-700 font-medium overflow-hidden">
                      {product.name}
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                      Get Best Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-12 z-10 p-2 text-xl md:text-2xl text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-white text-blue-800 border border-blue-800 px-8 py-4 rounded-lg font-semibold text-lg md:text-[35px] transition-all duration-300 hover:bg-blue-800 hover:text-white hover:border-blue-800 focus:outline-none">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;