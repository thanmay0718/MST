import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkoutBeat = () => {
  const navigate = useNavigate();

  const handleStartWorkout = () => {
    // Display alert message
    alert('Workout Beat is now playing! Let\'s crush those goals 🎶💥');
    
    // Log for debugging
    console.log('Workout Beat triggered');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-red-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Main Content Container */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-red-500/20">
          {/* Header Section */}
          <div className="relative h-48 bg-gradient-to-r from-red-600 to-red-800">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Workout Beat
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Pump up your energy with high-intensity tracks tailored for your workouts! Our carefully curated selection of powerful beats, motivational tracks, and energizing rhythms will help you push through your fitness goals.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">High-energy tracks</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">Updated daily</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">Perfect for HIIT</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-300">Motivational focus</p>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handleStartWorkout}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Start Workout Beat"
            >
              Start Workout Beat 💪
            </button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Duration: 45 minutes • Updated daily
              </p>
            </div>
          </div>
        </div>

        {/* Workout Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['HIIT', 'Cardio', 'Strength', 'Running', 'CrossFit'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-red-900/50 text-red-300 rounded-full text-sm font-medium hover:bg-red-800/50 transition-colors duration-300 cursor-pointer border border-red-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutBeat; 