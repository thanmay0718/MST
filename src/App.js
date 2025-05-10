import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Playlist from './pages/Playlist';
import Recommendations from './pages/Recommendations';
import Downloads from './pages/Downloads';
import MusicPlayer from './components/MusicPlayer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SummerVibes from './components/SummerVibes';
import ChillMix from './components/ChillMix';
import WorkoutBeat from './components/WorkoutBeat';
import MidnightDream from './components/MidnightDream';
import ElectricSoul from './components/ElectricSoul';
import SunsetBoulevard from './components/SunsetBoulevard';
import CosmicJourney from './components/CosmicJourney';
import UrbanNights from './components/UrbanNights';
import OceanWaves from './components/OceanWaves';
import './App.css';

export const MusicContext = createContext();

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <MusicContext.Provider value={{ currentSong, setCurrentSong }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/summer-vibes" element={<SummerVibes />} />
              <Route path="/chill-mix" element={<ChillMix />} />
              <Route path="/workout-beat" element={<WorkoutBeat />} />
              <Route path="/midnight-dream" element={<MidnightDream />} />
              <Route path="/electric-soul" element={<ElectricSoul />} />
              <Route path="/sunset-boulevard" element={<SunsetBoulevard />} />
              <Route path="/cosmic-journey" element={<CosmicJourney />} />
              <Route path="/urban-nights" element={<UrbanNights />} />
              <Route path="/ocean-waves" element={<OceanWaves />} />
            </Routes>
          </MainContent>
        </div>
        <MusicPlayer currentSong={currentSong} />
        <Footer />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
