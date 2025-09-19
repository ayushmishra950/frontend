
import React from 'react';

const RatingsAndReviews = () => {

  const ratingsData = [
    { stars: 5, percentage: 77 },
    { stars: 4, percentage: 0 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 23 },
  ];

  const userSatisfactionData = [
    { name: 'Response', percentage: 100 },
    { name: 'Quality', percentage: 100 },
    { name: 'Delivery', percentage: 100 },
  ];

  const reviewsData = [
    { name: 'Narpat Singh', location: 'Jaipur, Rajasthan', product: 'E-Rickshaw Loader', date: '03-September-25', stars: 5 },
    { name: 'Sunil Harikishan Parocha', location: 'Mumbai, Maharashtra', product: 'E-Rickshaw Loader', date: '10-August-25', stars: 5 },
    { name: 'Moolchand Khatri', location: 'Jaipur, Rajasthan', product: 'Food Cart', date: '27-June-25', stars: 5 },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full">
      <div className="p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Ratings & Reviews
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10">
          
          <div className="flex flex-col md:w-1/2">
            
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold mr-2">4.2/5</span>
              <div className="flex mr-4">
                {renderStars(4)}
              </div>
              <p className="text-gray-600 text-sm">Reviewed by 22 Users</p>
            </div>

            {ratingsData.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="w-8 text-gray-700">{item.stars}★</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="w-12 text-right text-gray-700">{item.percentage}%</span>
              </div>
            ))}
          </div>

          <div className="flex-1 mt-14">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">👍</span>User Satisfaction
            </h3>
            {userSatisfactionData.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <p className="text-gray-600 mr-2">{item.name}</p>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-green-600 font-semibold">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Most Relevant Reviews
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviewsData.map((review, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center text-lg font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <p className="ml-auto text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex mb-2">
                  {renderStars(review.stars)}
                </div>
                <p className="text-gray-600 mb-1">Product Name: {review.product}</p>
              </div>
            ))}
          </div>
        </div>

       <div className="text-center mt-8">
      <button 
        className=" bg-white  text-blue-600  border  border-gray-400  font-bold  py-3 px-8  rounded  transition-colors   duration-300   ease-in-out
          hover:bg-[#18395C]
          hover:text-white
          hover:border-blue-700
        "
      >
        View More Reviews
      </button>
    </div>

      </div>
    </div>
  );
};

export default RatingsAndReviews;
