export const featuredPlaylists = [
  {
    id: 1,
    title: 'Summer Vibes',
    description: 'Feel the summer heat with these upbeat tracks',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    songs: 20
  },
  {
    id: 2,
    title: 'Chill Mix',
    description: 'Relax and unwind with these soothing tracks',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    songs: 15
  },
  {
    id: 3,
    title: 'Workout Beat',
    description: 'Power through your workout with these energetic tracks',
    coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    songs: 25
  },
  {
    id: 4,
    title: 'Midnight Dream',
    description: 'Drift away into a soothing soundscape perfect for late-night relaxation',
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    songs: 18
  },
  {
    id: 5,
    title: 'Dreamy Nights',
    description: 'Gentle melodies to help you unwind and sleep peacefully',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    songs: 22
  }
];

export const recommendedSongs = [
  { 
    id: 1, 
    title: 'Midnight Dreams', 
    artist: 'Luna Nova',
    duration: '3:45',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
    audioUrl: 'https://example.com/audio/midnight-dreams.mp3'
  },
  { 
    id: 2, 
    title: 'Electric Soul', 
    artist: 'The Wave Riders',
    duration: '4:20',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
    audioUrl: 'https://example.com/audio/electric-soul.mp3'
  },
  { 
    id: 3, 
    title: 'Sunset Boulevard', 
    artist: 'Coastal Dreams',
    duration: '3:55',
    coverImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500',
    audioUrl: 'https://example.com/audio/sunset-boulevard.mp3'
  }
];

export const recommendedAlbums = [
  { 
    id: 1, 
    title: 'Cosmic Journey', 
    artist: 'Stellar Echo',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500'
  },
  { 
    id: 2, 
    title: 'Urban Nights', 
    artist: 'City Lights',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500'
  },
  { 
    id: 3, 
    title: 'Ocean Waves', 
    artist: 'Coastal Dreams',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500'
  }
];

export const userPlaylists = [
  {
    id: 1,
    title: 'My Favorites',
    description: 'A collection of my favorite songs',
    songs: [1, 2, 3], // References to song IDs
    createdAt: '2024-03-15'
  }
];

export const genres = [
  {
    id: 1,
    name: 'Electronic',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
    description: 'Electronic beats and synthesized sounds'
  },
  {
    id: 2,
    name: 'Indie Rock',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
    description: 'Alternative and independent rock music'
  },
  {
    id: 3,
    name: 'Jazz',
    coverImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500',
    description: 'Smooth jazz and classic performances'
  }
];

export const genreBasedPlaylists = {
  electronic: [
    {
      id: 4,
      title: 'Electronic Essentials',
      description: 'Must-hear electronic tracks',
      coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
      songs: [1, 2]
    },
    {
      id: 5,
      title: 'Dance Mix',
      description: 'Get moving with these beats',
      coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
      songs: [2, 3]
    }
  ],
  indieRock: [
    {
      id: 6,
      title: 'Indie Discoveries',
      description: 'Fresh indie rock finds',
      coverImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500',
      songs: [1, 3]
    },
    {
      id: 7,
      title: 'Rock Classics',
      description: 'Timeless rock anthems',
      coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
      songs: [2, 3]
    }
  ],
  jazz: [
    {
      id: 8,
      title: 'Jazz Club',
      description: 'Late night jazz favorites',
      coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
      songs: [1, 2]
    },
    {
      id: 9,
      title: 'Smooth Jazz',
      description: 'Relaxing jazz melodies',
      coverImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500',
      songs: [2, 3]
    }
  ]
};

export const personalizedPlaylists = [
  {
    id: 10,
    title: 'Your Daily Mix',
    description: 'Personalized tracks based on your listening history',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
    songs: [1, 2, 3],
    type: 'daily'
  },
  {
    id: 11,
    title: 'Discover Weekly',
    description: 'New discoveries picked for you',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
    songs: [2, 3],
    type: 'weekly'
  },
  {
    id: 12,
    title: 'Your Time Capsule',
    description: 'Rediscover songs from your past',
    coverImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500',
    songs: [1, 3],
    type: 'throwback'
  }
];

export const downloadedSongs = [
  {
    id: 1,
    title: 'Midnight Dreams',
    artist: 'Luna Nova',
    duration: '3:45',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
    audioUrl: 'https://example.com/audio/midnight-dreams.mp3',
    downloadedAt: '2024-03-15T10:30:00Z',
    size: '8.2 MB'
  }
];

export const downloadQueue = [
  {
    id: 2,
    title: 'Electric Soul',
    artist: 'The Wave Riders',
    duration: '4:20',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
    audioUrl: 'https://example.com/audio/electric-soul.mp3',
    progress: 65,
    size: '7.8 MB'
  }
]; 