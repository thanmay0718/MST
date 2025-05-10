import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SummerVibes = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const summerSongs = [
    {
      id: 1,
      title: "Summer Paradise",
      artist: "Simple Plan",
      duration: "3:45",
      coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/summer-paradise.mp3"
    },
    {
      id: 2,
      title: "Summer Vibes",
      artist: "Lofi Girl",
      duration: "4:20",
      coverImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/summer-vibes.mp3"
    },
    {
      id: 3,
      title: "Beach House",
      artist: "Kygo",
      duration: "3:55",
      coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/beach-house.mp3"
    },
    {
      id: 4,
      title: "Summer Nights",
      artist: "John Travolta",
      duration: "3:15",
      coverImage: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/summer-nights.mp3"
    }
  ];

  const chillSongs = [
    {
      id: 5,
      title: "Ocean Waves",
      artist: "Nature Sounds",
      duration: "5:00",
      coverImage: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/ocean-waves.mp3"
    },
    {
      id: 6,
      title: "Midnight Rain",
      artist: "Ambient Dreams",
      duration: "4:45",
      coverImage: "https://images.unsplash.com/photo-1501691223387-dd0506c89ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/midnight-rain.mp3"
    },
    {
      id: 7,
      title: "Forest Whispers",
      artist: "Nature's Melody",
      duration: "6:15",
      coverImage: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/forest-whispers.mp3"
    },
    {
      id: 8,
      title: "Zen Garden",
      artist: "Peaceful Mind",
      duration: "7:30",
      coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioUrl: "/music/zen-garden.mp3"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(null);
    setCurrentTime(0);
  };

  const handleSummerVibesClick = () => {
    alert('Get ready for Summer Vibes! Curated playlists coming your way 🌞🎶');
  };

  const handlePlayClick = (songId) => {
    const song = summerSongs.find(s => s.id === songId);
    
    if (isPlaying === songId) {
      // Pause current song
      audioRef.current?.pause();
      setIsPlaying(null);
    } else {
      // Stop current song if playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Play new song
      if (song) {
        audioRef.current = new Audio(song.audioUrl);
        audioRef.current.play()
          .then(() => {
            setIsPlaying(songId);
          })
          .catch(error => {
            console.error('Error playing audio:', error);
            alert('Error playing audio. Please check if the audio file exists.');
          });
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-blue-100 rounded-2xl p-8 shadow-xl">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 
            className="text-4xl font-bold text-yellow-600 mb-4"
            role="heading"
            aria-level="2"
          >
            Summer Vibes
          </h2>
          <p className="text-lg text-gray-700">
            Explore the ultimate summer playlist to keep the vibes going!
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Summer beach scene"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-lg transform rotate-3">
              <span className="text-sm font-semibold">Summer Hits 2024</span>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                What's Inside?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Beach Party Anthems
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tropical House Mixes
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Summer Classics
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleSummerVibesClick}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              Summer Vibes 🌞
            </button>
          </div>
        </div>

        {/* Summer Songs Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-yellow-600 mb-6">Featured Summer Songs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summerSongs.map((song) => (
              <div 
                key={song.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={song.coverImage}
                    alt={`${song.title} cover`}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handlePlayClick(song.id)}
                    className="absolute bottom-2 right-2 bg-yellow-400 text-white p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    {isPlaying === song.id ? (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 truncate">{song.title}</h4>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">
                      {isPlaying === song.id ? formatTime(currentTime) : song.duration}
                    </span>
                    <button className="text-yellow-500 hover:text-yellow-600 transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                  </div>
                  {isPlaying === song.id && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-yellow-500 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chill Music Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Chill Music</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chillSongs.map((song) => (
              <div 
                key={song.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={song.coverImage}
                    alt={`${song.title} cover`}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handlePlayClick(song.id)}
                    className="absolute bottom-2 right-2 bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    {isPlaying === song.id ? (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 truncate">{song.title}</h4>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">
                      {isPlaying === song.id ? formatTime(currentTime) : song.duration}
                    </span>
                    <button className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                  </div>
                  {isPlaying === song.id && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-yellow-600">100+</div>
            <div className="text-sm text-gray-600">Summer Hits</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Chill Tracks</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-yellow-600">24/7</div>
            <div className="text-sm text-gray-600">Summer Radio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerVibes; 