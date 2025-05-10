import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-64 h-full">
      <ul className="space-y-2">
        <li><Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link></li>
        <li><Link to="/recommendations" className="text-gray-800 hover:text-blue-600">For You</Link></li>
        <li><Link to="/downloads" className="text-gray-800 hover:text-blue-600">Downloads</Link></li>
        <li><Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link></li>
        <li className="pt-4 border-t border-gray-300">
          <Link to="/playlist" className="text-gray-800 hover:text-blue-600">Create Playlist</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar; 