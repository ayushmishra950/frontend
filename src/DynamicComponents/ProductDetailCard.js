
import React, { useState } from "react";

const ProductDetailCard = ({ data }) => {
  const images = [
    'https://picsum.photos/id/1010/400/300',
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
    'https://picsum.photos/id/1014/400/300',
    'https://picsum.photos/id/1015/400/300',
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row border p-6 rounded shadow-lg bg-white gap-8 h-auto md:h-[500px]">
      <div className="w-full md:w-1/2 relative flex gap-4">
        <div className="flex-1 md:sticky md:top-20 h-full">
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex flex-col gap-4 w-16 md:w-24 overflow-y-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`cursor-pointer rounded border-2 ${
                mainImage === img ? "border-blue-500" : "border-transparent"
              }`}
              onMouseEnter={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 ml-auto h-full overflow-y-auto p-8 shadow-inner text-base md:text-[28px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 md:gap-0">
          <p className="text-gray-600">
            Approx. Price: <span className="font-bold text-black">Rs {data.price}</span> / Piece
          </p>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 text-sm md:text-[20px]">
            Get Latest Price
          </button>
        </div>

        <div className="flex items-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="PDF Icon"
            className="w-8 h-8 mr-3"
          />
          <span className="text-red-600 font-medium cursor-pointer hover:underline">
            {data.brochureLink}
          </span>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Product Details:</h3>

          <table className="w-full text-left border-t border-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 font-medium text-gray-600">Minimum Order Quantity</td>
                <td className="py-3 text-gray-900">1 Piece</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Payload Capacity</td>
                <td className="py-3 text-gray-900">{data.payload}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">E Rickshaw Brand</td>
                <td className="py-3 text-gray-900">{data.brand}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Battery Type</td>
                <td className="py-3 text-gray-900">{data.batteryType}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Max Power</td>
                <td className="py-3 text-gray-900">{data.power}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">E Rickshaw Model</td>
                <td className="py-3 text-gray-900">{data.model}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Model Year</td>
                <td className="py-3 text-gray-900">{data.year}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Body Type</td>
                <td className="py-3 text-gray-900">{data.bodyType}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Battery Capacity</td>
                <td className="py-3 text-gray-900">{data.batteryCapacity}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-600">Max Speed (km/h)</td>
                <td className="py-3 text-gray-900">{data.speed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailCard;
