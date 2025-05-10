import React from 'react';
import { useNavigate } from 'react-router-dom';
import { featuredPlaylists, recommendedSongs, recommendedAlbums } from '../data/dummyData';

const Home = () => {
  const navigate = useNavigate();

  const handlePlaylistClick = (playlist) => {
    if (playlist.title.toLowerCase().includes('summer')) {
      navigate('/summer-vibes');
    } else if (playlist.title.toLowerCase().includes('chill')) {
      navigate('/chill-mix');
    } else if (playlist.title.toLowerCase().includes('workout')) {
      navigate('/workout-beat');
    } else if (playlist.title.toLowerCase().includes('midnight') || playlist.title.toLowerCase().includes('dream')) {
      navigate('/midnight-dream');
    } else if (playlist.title.toLowerCase().includes('electric') || playlist.title.toLowerCase().includes('soul')) {
      navigate('/electric-soul');
    } else if (playlist.title.toLowerCase().includes('sunset') || playlist.title.toLowerCase().includes('boulevard')) {
      navigate('/sunset-boulevard');
    } else if (playlist.title.toLowerCase().includes('cosmic') || playlist.title.toLowerCase().includes('journey')) {
      navigate('/cosmic-journey');
    } else if (playlist.title.toLowerCase().includes('urban') || playlist.title.toLowerCase().includes('night')) {
      navigate('/urban-nights');
    } else if (playlist.title.toLowerCase().includes('ocean') || playlist.title.toLowerCase().includes('wave')) {
      navigate('/ocean-waves');
    } else {
      navigate(`/playlist/${playlist.id}`);
    }
  };

  const handleSongClick = (song) => {
    if (song.title.toLowerCase().includes('midnight') || song.title.toLowerCase().includes('dream')) {
      navigate('/midnight-dream');
    } else if (song.title.toLowerCase().includes('electric') || song.title.toLowerCase().includes('soul')) {
      navigate('/electric-soul');
    } else if (song.title.toLowerCase().includes('sunset') || song.title.toLowerCase().includes('boulevard')) {
      navigate('/sunset-boulevard');
    } else if (song.title.toLowerCase().includes('cosmic') || song.title.toLowerCase().includes('journey')) {
      navigate('/cosmic-journey');
    } else if (song.title.toLowerCase().includes('urban') || song.title.toLowerCase().includes('night')) {
      navigate('/urban-nights');
    } else if (song.title.toLowerCase().includes('ocean') || song.title.toLowerCase().includes('wave')) {
      navigate('/ocean-waves');
    }
  };

  const handleAlbumClick = (album) => {
    if (album.title.toLowerCase().includes('cosmic') || album.title.toLowerCase().includes('journey')) {
      navigate('/cosmic-journey');
    } else if (album.title.toLowerCase().includes('urban') || album.title.toLowerCase().includes('night')) {
      navigate('/urban-nights');
    } else if (album.title.toLowerCase().includes('ocean') || album.title.toLowerCase().includes('wave')) {
      navigate('/ocean-waves');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPlaylists.map(playlist => (
            <div 
              key={playlist.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handlePlaylistClick(playlist)}
            >
              <div className="relative">
                <img 
                  src={playlist.coverImage} 
                  alt={playlist.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {playlist.title.toLowerCase().includes('summer') 
                        ? 'View Summer Vibes' 
                        : playlist.title.toLowerCase().includes('chill')
                        ? 'View Chill Mix'
                        : playlist.title.toLowerCase().includes('workout')
                        ? 'View Workout Beat'
                        : playlist.title.toLowerCase().includes('midnight') || playlist.title.toLowerCase().includes('dream')
                        ? 'View Midnight Dream'
                        : playlist.title.toLowerCase().includes('electric') || playlist.title.toLowerCase().includes('soul')
                        ? 'View Electric Soul'
                        : playlist.title.toLowerCase().includes('sunset') || playlist.title.toLowerCase().includes('boulevard')
                        ? 'View Sunset Boulevard'
                        : playlist.title.toLowerCase().includes('cosmic') || playlist.title.toLowerCase().includes('journey')
                        ? 'View Cosmic Journey'
                        : playlist.title.toLowerCase().includes('urban') || playlist.title.toLowerCase().includes('night')
                        ? 'View Urban Nights'
                        : playlist.title.toLowerCase().includes('ocean') || playlist.title.toLowerCase().includes('wave')
                        ? 'View Ocean Waves'
                        : 'View Playlist'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{playlist.title}</h3>
                <p className="text-gray-600 mb-2">{playlist.description}</p>
                <p className="text-sm text-gray-500">{playlist.songs} songs</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Songs Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Recommended Songs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedSongs.map(song => (
            <div 
              key={song.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer group"
              onClick={() => handleSongClick(song)}
            >
              <div className="relative">
                <img 
                  src={song.coverImage} 
                  alt={song.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {song.title.toLowerCase().includes('midnight') || song.title.toLowerCase().includes('dream')
                        ? 'View Midnight Dream'
                        : song.title.toLowerCase().includes('electric') || song.title.toLowerCase().includes('soul')
                        ? 'View Electric Soul'
                        : song.title.toLowerCase().includes('sunset') || song.title.toLowerCase().includes('boulevard')
                        ? 'View Sunset Boulevard'
                        : song.title.toLowerCase().includes('cosmic') || song.title.toLowerCase().includes('journey')
                        ? 'View Cosmic Journey'
                        : song.title.toLowerCase().includes('urban') || song.title.toLowerCase().includes('night')
                        ? 'View Urban Nights'
                        : song.title.toLowerCase().includes('ocean') || song.title.toLowerCase().includes('wave')
                        ? 'View Ocean Waves'
                        : 'Play Song'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{song.title}</h3>
                <p className="text-gray-600 mb-2">{song.artist}</p>
                <p className="text-sm text-gray-500">{song.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Albums Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Recommended Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedAlbums.map(album => (
            <div 
              key={album.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer group"
              onClick={() => handleAlbumClick(album)}
            >
              <div className="relative">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {album.title.toLowerCase().includes('cosmic') || album.title.toLowerCase().includes('journey')
                        ? 'View Cosmic Journey'
                        : album.title.toLowerCase().includes('urban') || album.title.toLowerCase().includes('night')
                        ? 'View Urban Nights'
                        : album.title.toLowerCase().includes('ocean') || album.title.toLowerCase().includes('wave')
                        ? 'View Ocean Waves'
                        : 'View Album'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{album.title}</h3>
                <p className="text-gray-600 mb-2">{album.artist}</p>
                <p className="text-sm text-gray-500">{album.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 