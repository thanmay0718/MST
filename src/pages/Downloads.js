import React, { useState, useContext } from 'react';
import { MusicContext } from '../App';
import { downloadedSongs, downloadQueue, recommendedSongs } from '../data/dummyData';

const DownloadToggle = ({ isDownloaded, onToggle, progress }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center justify-center h-8 w-20 rounded-full focus:outline-none ${
      isDownloaded ? 'bg-green-500' : progress !== undefined ? 'bg-blue-500' : 'bg-gray-300'
    }`}
  >
    {progress !== undefined ? (
      <div className="text-white text-xs font-medium">{progress}%</div>
    ) : (
      <>
        <span
          className={`absolute left-1 w-6 h-6 bg-white rounded-full transform transition-transform duration-200 ${
            isDownloaded ? 'translate-x-12' : 'translate-x-0'
          }`}
        />
        <span className="text-white text-xs font-medium ml-7">
          {isDownloaded ? 'On' : 'Off'}
        </span>
      </>
    )}
  </button>
);

const SongRow = ({ song, isDownloaded, onToggleDownload, progress }) => {
  const { setCurrentSong } = useContext(MusicContext);
  const formattedDate = isDownloaded
    ? new Date(song.downloadedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null;

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-4 flex-1">
        <img
          src={song.coverImage}
          alt={song.title}
          className="w-12 h-12 rounded cursor-pointer"
          onClick={() => setCurrentSong(song)}
        />
        <div className="flex-1">
          <h3 className="font-semibold">{song.title}</h3>
          <p className="text-gray-600 text-sm">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="text-gray-500 text-sm w-24">
          {isDownloaded ? formattedDate : song.size}
        </div>
        <div className="w-20">
          <DownloadToggle
            isDownloaded={isDownloaded}
            onToggle={() => onToggleDownload(song)}
            progress={progress}
          />
        </div>
      </div>
    </div>
  );
};

const Downloads = () => {
  const [downloaded, setDownloaded] = useState(new Set(downloadedSongs.map(song => song.id)));
  const [downloading, setDownloading] = useState(
    new Map(downloadQueue.map(song => [song.id, song.progress]))
  );

  const handleToggleDownload = (song) => {
    const newDownloaded = new Set(downloaded);
    const newDownloading = new Map(downloading);

    if (downloaded.has(song.id)) {
      // Remove from downloaded
      newDownloaded.delete(song.id);
    } else if (downloading.has(song.id)) {
      // Cancel download
      newDownloading.delete(song.id);
    } else {
      // Start download
      newDownloading.set(song.id, 0);
      // Simulate download progress
      simulateDownload(song.id);
    }

    setDownloaded(newDownloaded);
    setDownloading(newDownloading);
  };

  const simulateDownload = (songId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setDownloading(prev => {
          const next = new Map(prev);
          next.delete(songId);
          return next;
        });
        setDownloaded(prev => new Set([...prev, songId]));
      } else {
        setDownloading(prev => new Map(prev).set(songId, Math.floor(progress)));
      }
    }, 500);
  };

  const getAvailableSongs = () => {
    return recommendedSongs.filter(
      song => !downloaded.has(song.id) && !downloading.has(song.id)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Downloads</h1>
        <p className="text-gray-600">Manage your offline music library</p>
      </div>

      {/* Downloaded Songs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Downloaded Songs</h2>
        <div className="bg-white rounded-lg shadow divide-y">
          {downloadedSongs.map((song) => (
            <SongRow
              key={song.id}
              song={song}
              isDownloaded={downloaded.has(song.id)}
              onToggleDownload={handleToggleDownload}
            />
          ))}
        </div>
      </section>

      {/* Download Queue Section */}
      {downloading.size > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Download Queue</h2>
          <div className="bg-white rounded-lg shadow divide-y">
            {Array.from(downloading.entries()).map(([songId, progress]) => {
              const song = recommendedSongs.find(s => s.id === songId);
              return (
                <SongRow
                  key={songId}
                  song={song}
                  isDownloaded={false}
                  onToggleDownload={handleToggleDownload}
                  progress={progress}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* Available for Download Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Available for Download</h2>
        <div className="bg-white rounded-lg shadow divide-y">
          {getAvailableSongs().map((song) => (
            <SongRow
              key={song.id}
              song={song}
              isDownloaded={false}
              onToggleDownload={handleToggleDownload}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Downloads; 