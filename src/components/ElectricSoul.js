import React from 'react';
import { useNavigate } from 'react-router-dom';

const ElectricSoul = () => {
  const navigate = useNavigate();

  const handlePlayElectricSoul = () => {
    // Display alert message
    alert('Electric Soul is now playing! Let the energy flow ⚡🎶');
    
    // Log for debugging
    console.log('Electric Soul triggered');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Main Content Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-blue-500/20">
          {/* Header Section */}
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-cyan-500">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Electric Soul
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience the electrifying beats that energize your soul! Our carefully curated selection of high-energy tracks, powerful rhythms, and soul-stirring melodies will keep you moving and grooving all day long.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">High-energy tracks</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">Updated daily</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">Soul-stirring beats</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">Dynamic energy</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayElectricSoul}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Play Electric Soul"
            >
              Play Electric Soul ⚡
            </button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Duration: 60 minutes • Updated daily
              </p>
            </div>
          </div>
        </div>

        {/* Mood Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Energetic', 'Electric', 'Soul', 'Dance', 'Power'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium hover:bg-blue-800/50 transition-colors duration-300 cursor-pointer border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectricSoul; 