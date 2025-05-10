import React from 'react';
import { useNavigate } from 'react-router-dom';

const CosmicJourney = () => {
  const navigate = useNavigate();

  const handleExploreCosmicJourney = () => {
    // Display alert message
    alert('Cosmic Journey album is now playing! Get ready for a stellar experience 🚀🎶');
    
    // Log for debugging
    console.log('Cosmic Journey triggered');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Starry Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Main Content Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-blue-500/20">
          {/* Header Section */}
          <div className="relative h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Cosmic Journey
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Embark on a transcendent musical adventure with our Cosmic Journey album collection. Experience the vastness of space through carefully curated tracks that blend ambient sounds, electronic beats, and celestial melodies.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Celestial melodies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Updated weekly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Ambient sounds</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Electronic beats</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handleExploreCosmicJourney}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Explore Cosmic Journey"
            >
              Explore Cosmic Journey 🚀
            </button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Duration: 90 minutes • Updated weekly
              </p>
            </div>
          </div>
        </div>

        {/* Mood Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Space', 'Ambient', 'Electronic', 'Celestial', 'Transcendent'].map((tag) => (
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

export default CosmicJourney; 