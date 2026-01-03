import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react'; 

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6 text-white bg-neutral-950 sticky top-0 z-50">
      
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