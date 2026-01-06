import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react'; 

function Navbar() {
  return (
    // Navigation Container: Sticky positioning keeps the bar at the top during scroll. 
    // z-50 ensures it stays above all other background elements and orbs.
    <nav className="flex items-center justify-between px-12 py-6 text-white bg-neutral-950 sticky top-0 z-50">

      {/* Brand Section: Combines a circular profile image with the name link */}
      <div className="flex items-center gap-3">
        <img 
          src="ME.jpg" 
          alt="Logo" 
          className="w-10 h-10 rounded-full object-cover border border-gray-700"
        />
        <Link to="/" className="inline-block text-xl font-bold hover:text-blue-400 hover:scale-110 transition-all uppercase tracking-tighter">
          Ethan Francisco
        </Link>
      </div>
      
      {/* Main Navigation Links: Hidden on mobile (hidden) and displayed on medium screens and up (md:flex) */}
      <ul className="hidden md:flex items-center gap-10 text-sm font-bold tracking-[0.2em] opacity-90">
        <li>
          <Link to="/" className="inline-block text-lg hover:text-blue-500 hover:scale-120 transition-all">HOME</Link>
        </li>
        <li>
          <Link to="/projects" className="inline-block text-lg hover:text-blue-500 hover:scale-120 transition-all">PROJECTS</Link>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <Link 
          to="/contact" 
          className="hidden lg:inline-block ml-4 px-6 py-2 border border-blue-500 text-blue-500 font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white hover:scale-120 transition-all"
        >
          Contact Me!
        </Link>
      </div>
      
    </nav> 
  );
}

export default Navbar;