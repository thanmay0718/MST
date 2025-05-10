import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: 'Curated Playlists',
      description: 'Discover handpicked playlists crafted by music experts and artists.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Smart Recommendations',
      description: 'Get personalized music suggestions based on your listening habits.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: 'Offline Downloads',
      description: 'Download your favorite tracks and enjoy them without an internet connection.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" role="heading" aria-level="1">
              About Our Music Platform
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We're passionate about bringing you the best music experience with cutting-edge features
              and a vast library of songs.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              role="button"
              aria-label="Contact us for more information"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" role="heading" aria-level="2">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-600">
            We combine cutting-edge technology with a deep love for music to create an
            unparalleled listening experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" role="heading" aria-level="2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that music has the power to bring people together and enrich lives.
              Our mission is to make high-quality music accessible to everyone, everywhere,
              while supporting artists and fostering a vibrant music community.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-gray-600">Songs Available</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Curated Playlists</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 