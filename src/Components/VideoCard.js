
import React, { useState } from "react";
import { FaYoutube, FaTimes } from "react-icons/fa";

const VideoCard = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
            title: "Three Wheelers Electric Rickshaw Loader",
        },
        {
            thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
            title: "Yatri Black Super E Rickshaw with lithium battery",
        },
        {
            thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
            title: "Yatri Red Super E Rickshaw with Lithium battery",
        },
        {
            thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
            title: "E Loader Battery Rickshaw with Lithium Battery",
        },
    ];

    return (
        <div className="bg-gray-100 px-4 md:px-12 py-10">
            <h2 className="text-5xl font-light text-gray-800  mb-10 text-center">Product Videos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow-md p-4 flex flex-col cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                    >
                        <div className="relative w-full h-48 overflow-hidden rounded">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover rounded"
                            />
                            <FaYoutube className="absolute text-red-600 text-6xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <h3 className="mt-4 text-black text-2xl font-medium text-center">
                            {video.title}
                        </h3>

                        <button className="mt-auto px-4 py-2 text-3xl bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500 hover:text-4xl hover:scale-105  transition-all duration-200 ease-in-out" style={{ marginTop: "20px" }}>
                            Get Best Quote
                        </button>

                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mr-[50px] mx-2 sm:mx-4 md:mx-8">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800 text-2xl z-10"
                        >
                            <FaTimes />
                        </button>
                        <div className="p-4">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.thumbnail.split('/vi/')[1].split('/')[0]}`}
                                title={selectedVideo.title}
                                className="w-full h-64 md:h-96 rounded"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCard;

