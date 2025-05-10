import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChillMix = () => {
  const navigate = useNavigate();

  const handlePlayChillMix = () => {
    // Display alert message
    alert('Chill Mix is playing now! Sit back and enjoy 🎶');
    
    // Log for debugging
    console.log('Chill Mix triggered');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Main Content Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Chill Mix
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Relax and unwind with soothing tracks handpicked just for you! Our carefully curated selection of ambient sounds, gentle melodies, and peaceful rhythms will help you find your perfect moment of tranquility.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Curated for relaxation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Updated weekly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Perfect for meditation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Stress relief focus</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayChillMix}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Play Chill Mix"
            >
              Play Chill Mix 🎧
            </button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Duration: 60 minutes • Updated weekly
              </p>
            </div>
          </div>
        </div>

        {/* Mood Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Relaxing', 'Peaceful', 'Calm', 'Soothing', 'Tranquil'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChillMix; 