import React from 'react';

function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 text-white py-15 px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col-2 items-center justify-center gap-20">
        
        <div className="text-justify">
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">
            Ethan <span className="text-blue-400">Francisco</span>
          </h2>
          <p className="text-neutral-500 text-sm tracking-[0.1em] uppercase">
            © 2025 All Rights Reserved. 
          </p>
        </div>

        <div className="w-12 h-1 bg-neutral-800 my-2"></div>
        
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