import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { recommendedSongs, recommendedAlbums } from '../data/dummyData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState({
    songs: [],
    albums: [],
    artists: []
  });

  useEffect(() => {
    const query = searchParams.get('q')?.toLowerCase() || '';
    const type = searchParams.get('type') || 'all';

    if (!query) return;

    // Filter songs
    const filteredSongs = recommendedSongs.filter(
      song => type === 'all' || type === 'songs'
        ? song.title.toLowerCase().includes(query) || 
          song.artist.toLowerCase().includes(query)
        : false
    );

    // Filter albums
    const filteredAlbums = recommendedAlbums.filter(
      album => type === 'all' || type === 'albums'
        ? album.title.toLowerCase().includes(query) || 
          album.artist.toLowerCase().includes(query)
        : false
    );

    // Extract unique artists
    const artists = new Set([
      ...filteredSongs.map(song => song.artist),
      ...filteredAlbums.map(album => album.artist)
    ]);

    setResults({
      songs: filteredSongs,
      albums: filteredAlbums,
      artists: Array.from(artists)
    });
  }, [searchParams]);

  const query = searchParams.get('q') || '';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {results.songs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Songs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.songs.map(song => (
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
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {results.albums.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.albums.map(album => (
              <div key={album.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{album.title}</h3>
                  <p className="text-gray-600">{album.artist}</p>
                  <p className="text-sm text-gray-500">{album.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {results.artists.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.artists.map((artist, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-semibold">{artist}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {results.songs.length === 0 && 
       results.albums.length === 0 && 
       results.artists.length === 0 && (
        <div className="text-center text-gray-600">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchResults; 