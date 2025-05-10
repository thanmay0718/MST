import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userPlaylists, recommendedSongs } from '../data/dummyData';

const Playlist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showAddSongs, setShowAddSongs] = useState(false);
  const [availableSongs, setAvailableSongs] = useState([]);

  useEffect(() => {
    if (id) {
      const foundPlaylist = userPlaylists.find(p => p.id === parseInt(id));
      if (foundPlaylist) {
        setPlaylist(foundPlaylist);
        setTitle(foundPlaylist.title);
        setDescription(foundPlaylist.description);
      }
    }
  }, [id]);

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    const newPlaylist = {
      id: userPlaylists.length + 1,
      title,
      description,
      songs: [],
      createdAt: new Date().toISOString().split('T')[0]
    };
    // In a real app, this would be an API call
    userPlaylists.push(newPlaylist);
    navigate(`/playlist/${newPlaylist.id}`);
  };

  const handleUpdatePlaylist = (e) => {
    e.preventDefault();
    if (playlist) {
      playlist.title = title;
      playlist.description = description;
      setIsEditing(false);
    }
  };

  const handleAddSong = (songId) => {
    if (playlist && !playlist.songs.includes(songId)) {
      playlist.songs.push(songId);
      setPlaylist({ ...playlist });
    }
  };

  const handleRemoveSong = (songId) => {
    if (playlist) {
      playlist.songs = playlist.songs.filter(id => id !== songId);
      setPlaylist({ ...playlist });
    }
  };

  const getPlaylistSongs = () => {
    if (!playlist) return [];
    return playlist.songs.map(songId => 
      recommendedSongs.find(song => song.id === songId)
    ).filter(Boolean);
  };

  const getTotalDuration = () => {
    const songs = getPlaylistSongs();
    return songs.reduce((total, song) => {
      const [minutes, seconds] = song.duration.split(':').map(Number);
      return total + minutes * 60 + seconds;
    }, 0);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!id) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Create New Playlist</h1>
        <form onSubmit={handleCreatePlaylist} className="max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create Playlist
          </button>
        </form>
      </div>
    );
  }

  if (!playlist) {
    return <div className="text-center">Playlist not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {isEditing ? (
        <form onSubmit={handleUpdatePlaylist} className="max-w-lg mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold">{playlist.title}</h1>
              <p className="text-gray-600 mt-2">{playlist.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                Created on {playlist.createdAt} • {playlist.songs.length} songs • {formatDuration(getTotalDuration())}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Edit
              </button>
              <button
                onClick={() => setShowAddSongs(!showAddSongs)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {showAddSongs ? 'Cancel' : 'Add Songs'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddSongs && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add Songs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedSongs
              .filter(song => !playlist.songs.includes(song.id))
              .map(song => (
                <div key={song.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={song.coverImage}
                    alt={song.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{song.title}</h3>
                    <p className="text-gray-600">{song.artist}</p>
                    <p className="text-sm text-gray-500">{song.duration}</p>
                    <button
                      onClick={() => handleAddSong(song.id)}
                      className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Add to Playlist
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Songs in Playlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getPlaylistSongs().map(song => (
            <div key={song.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={song.coverImage}
                alt={song.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{song.title}</h3>
                <p className="text-gray-600">{song.artist}</p>
                <p className="text-sm text-gray-500">{song.duration}</p>
                <button
                  onClick={() => handleRemoveSong(song.id)}
                  className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist; 