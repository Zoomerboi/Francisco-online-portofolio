import React from 'react';

function Footer() {
  return (
    // Footer Wrapper: Sets a solid black background with a very subtle top border to separate it from the content above
    <footer className="bg-black border-t border-neutral-900 text-white py-15 px-8 relative z-10">

      {/* Centered container: Limits content width and uses Flexbox to align the two text blocks and the separator */}
      <div className="max-w-6xl mx-auto flex flex-col-2 items-center justify-center gap-20">
        
        {/* Left Branding Block: Displays the name with a bold, high-contrast typography style */}
        <div className="text-justify">
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">
            Ethan <span className="text-blue-400">Francisco</span>
          </h2>

          {/* Copyright notice with increased letter spacing for a premium feel */}
          <p className="text-neutral-500 text-sm tracking-[0.1em] uppercase">
            © 2025 All Rights Reserved. 
          </p>
        </div>
        
        {/* Decorative Divider: A small horizontal bar acting as a visual break between branding and bio details */}
        <div className="w-12 h-1 bg-neutral-800 my-2"></div>
        
        {/* Right Info Block: Contains location and academic specialization details */}
        <div className="text-justify">
          <p className="text-[10px] text-neutral-200 font-mono uppercase tracking-[0.4em] leading-loose">
            Designed & Developed in Parañaque City, PH <br />
            CS Undergraduate • Cybersecurity Specialization
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;