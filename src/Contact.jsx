import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Facebook } from 'lucide-react'; //Icons for the contact links

function Contact() {
  return (
    // Main wrapper: Sets the dark theme, full height, and handles center alignment of the content
    <div className="min-h-screen bg-neutral-950 text-white p-8 md:p-20 flex items-center justify-center relative overflow-hidden">

      {/* Pulsing glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>

      {/* Decorative background orbs: Uses absolute positioning and high blur for a modern glow effect */}
      <div className="absolute -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid pattern overlay: Subtle CSS-based geometric pattern for texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none"></div>
      
      {/* Main layout container: Splitting the screen into text (left) and info cards (right) */}
      <div className="max-w-6xl w-full grid grid-cols-2 gap-16 z-10">

        {/* Left Section with the text: Large Typography / Heading */}
        <div className="flex flex-col justify-top gap-10">
          <div>
            <h1 className="text-6xl font-black tracking-tighter leading-tight">
              Get in <br />
              <span className="text-blue-400">touch.</span>
            </h1>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Start a conversation.
            </h2>
            <p className="text-white mt-4 text-lg max-w-md leading-relaxed">
              I'm always open to discussing cybersecurity, new projects, or opportunities. Let's connect and build something secure.
            </p>
          </div>
        </div>

        {/* Section: Contact Information Card with Glassmorphism styling */}
        <div className="flex flex-col gap-10 bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">

          {/* Location details with lucidreact icons used */}
          <div className="flex items-start gap-5">
            <div className="bg-blue-500/10 p-4 rounded-full shrink-0">
              <MapPin className="text-blue-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-neutral-300 text-lg">
                Parañaque City,<br />
                Metro Manila, Philippines
              </p>
            </div>
          </div>

          {/* Phone details with lucidreact icons used */}
          <div className="flex items-start gap-5">
             <div className="bg-blue-500/10 p-4 rounded-full">
              <Phone className="text-blue-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-neutral-300 text-lg">
                +63 995 675 2909
              </p>
            </div>
          </div>

          {/* Email details with lucidreact icons used */}
          <div className="flex items-start gap-5">
             <div className="bg-blue-500/10 p-4 rounded-full">
              <Mail className="text-blue-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Mail</h3>
              <p className="text-neutral-300 text-lg">
                ethanedgarf@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Links: Includes hover states and group-hover animations */}
          <div className="pt-4">
            <h3 className="text-xl font-bold mb-6">Follow Me</h3>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/ethan-edgar-francisco-33a86b329/" target="_blank" rel="noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group">
                <Linkedin size={28} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a href="https://github.com/Zoomerboi" target="_blank" rel="noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group">
                <Github size={28} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a href="https://www.instagram.com/3than_18_/" target="_blank" rel="noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 group">
                <Instagram size={28} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a href="https://www.facebook.com/ethanedgar.francisco" target="_blank" rel="noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-blue-600/20 hover:text-blue-600 transition-all duration-300 group">
                <Facebook size={28} className="group-hover:scale-110 transition-transform"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;