import React from 'react';
import { useNavigate } from 'react-router-dom';

const UrbanNights = () => {
  const navigate = useNavigate();

  const handlePlayUrbanNights = () => {
    // Display alert message
    alert('Urban Nights is now playing! Dive into the city\'s vibrant sounds 🌃🎶');
    
    // Log for debugging
    console.log('Urban Nights action triggered');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* City Skyline Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: '0 0 15px 3px rgba(255, 255, 0, 0.6)'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-gray-300 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Main Content Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Header Section */}
          <div className="relative h-56 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white tracking-tight">
                Urban Nights
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Immerse yourself in the rhythm of the city with our exclusive Urban Nights album. Experience the pulse of urban life through carefully curated tracks that blend hip-hop, R&B, and electronic beats with the energy of the city.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Hip-hop beats</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Updated weekly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">R&B vibes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Electronic beats</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayUrbanNights}
              className="w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Play Urban Nights"
            >
              Play Urban Nights 🌃
            </button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Duration: 120 minutes • Updated weekly
              </p>
            </div>
          </div>
        </div>

        {/* Mood Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Urban', 'Hip-Hop', 'R&B', 'Electronic', 'Nightlife'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrbanNights; 