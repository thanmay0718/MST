import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MusicContext } from '../App';
import {
  genres,
  genreBasedPlaylists,
  personalizedPlaylists,
  recommendedSongs
} from '../data/dummyData';

const PlaylistCard = ({ playlist, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    onClick={onClick}
  >
    <img
      src={playlist.coverImage}
      alt={playlist.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{playlist.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{playlist.description}</p>
      <p className="text-gray-500 text-sm mt-2">{playlist.songs?.length || 0} songs</p>
    </div>
  </div>
);

const GenreCard = ({ genre, isSelected, onClick }) => (
  <div
    className={`relative rounded-lg overflow-hidden cursor-pointer transform transition-all ${
      isSelected ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'
    }`}
    onClick={onClick}
  >
    <img
      src={genre.coverImage}
      alt={genre.name}
      className="w-full h-32 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h3 className="text-white font-bold text-xl">{genre.name}</h3>
    </div>
  </div>
);

const Recommendations = () => {
  const [selectedGenre, setSelectedGenre] = useState('electronic');
  const navigate = useNavigate();
  const { setCurrentSong } = useContext(MusicContext);

  const handlePlaylistClick = (playlist) => {
    // In a real app, this would navigate to a playlist detail page
    navigate(`/playlist/${playlist.id}`);
  };

  const handleGenreChange = (genreKey) => {
    setSelectedGenre(genreKey);
  };

  const getGenreKey = (genreName) => {
    return genreName.toLowerCase().replace(' ', '');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Personalized Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Made For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalizedPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist)}
            />
          ))}
        </div>
      </section>

      {/* Genres Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              genre={genre}
              isSelected={selectedGenre === getGenreKey(genre.name)}
              onClick={() => handleGenreChange(getGenreKey(genre.name))}
            />
          ))}
        </div>
      </section>

      {/* Genre-based Recommendations */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {genres.find((g) => getGenreKey(g.name) === selectedGenre)?.name} Playlists
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {genreBasedPlaylists[selectedGenre]?.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist)}
            />
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {recommendedSongs.slice(0, 6).map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setCurrentSong(song)}
            >
              <img
                src={song.coverImage}
                alt={song.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold truncate">{song.title}</h3>
                <p className="text-gray-600 text-sm truncate">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recommendations; 