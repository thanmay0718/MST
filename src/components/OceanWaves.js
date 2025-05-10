import React from 'react';
import { useNavigate } from 'react-router-dom';

const OceanWaves = () => {
  const navigate = useNavigate();

  const handlePlayOceanWaves = () => {
    // Display alert message
    alert('Ocean Waves album is now playing! Let the serenity of the waves wash over you 🌊🎶');
    
    // Log for debugging
    console.log('Ocean Waves action triggered');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ocean Waves Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.2,
              boxShadow: '0 0 20px 4px rgba(191, 219, 254, 0.4)'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-blue-200 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Main Content Container */}
        <div className="bg-blue-900/30 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-blue-500/20">
          {/* Header Section */}
          <div className="relative h-56 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white tracking-tight">
                Ocean Waves
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Relax and unwind with the soothing sounds of Ocean Waves. Perfect for calming moments, meditation, or peaceful sleep. Experience the gentle rhythm of the ocean through carefully curated ambient tracks that blend natural wave sounds with soft melodies.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-blue-100">Natural wave sounds</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-blue-100">Updated weekly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-blue-100">Ambient melodies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-blue-100">Sleep aid</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayOceanWaves}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
              aria-label="Play Ocean Waves"
            >
              Play Ocean Waves 🌊
            </button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-blue-200">
                Duration: 180 minutes • Updated weekly
              </p>
            </div>
          </div>
        </div>

        {/* Mood Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Relaxation', 'Meditation', 'Sleep', 'Ambient', 'Nature'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-blue-900/30 text-blue-200 rounded-full text-sm font-medium hover:bg-blue-800/30 transition-colors duration-300 cursor-pointer border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OceanWaves; 