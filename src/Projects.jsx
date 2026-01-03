import React from 'react';

function Projects() {
  return (
    <div 
      className="bg-neutral-950 min-h-screen text-white relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('download (3).jpg')" }} 
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <section className="relative z-10 pt-32 pb-16 px-8 max-w-5xl mx-auto border-b border-neutral-600">
        <h2 className="text-6xl font-black uppercase tracking-tighter">
          My Projects
        </h2>
      </section>

      <section className="relative z-10 py-20 px-8 max-w-5xl mx-auto flex flex-col gap-12">

        <a 
          href="Francisco-vite-projectV2.zip" 
          download 
          className="p-10 border border-neutral-800 bg-neutral-950/70 hover:border-blue-500 active:scale-120 transition-all rounded-2xl"
        >
          <h4 className="text-4xl font-bold mt-2">
            Dispatch Game Wiki
          </h4>
          <p className="text-neutral-500 mt-4 leading-relaxed italic">
            This React-based wiki for the game Dispatch features a character encyclopedia, interactive media galleries
          </p>
          <div className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest">
            Click to download Zip File ↓
          </div>
        </a>

        <a 
          href="inprola-finals-main 1.zip" 
          download 
          className="p-10 border border-neutral-800 bg-neutral-950/70 hover:border-blue-500 active:scale-120 transition-all rounded-2xl"
        >
          <h4 className="text-4xl font-bold mt-2">
            Direct Clothing Inc.
          </h4>
          <p className="text-neutral-500 mt-4 leading-relaxed italic">
            This Java-based order entry and inventory system for Direct Clothing Inc. manages customer data, stock levels, and automated catalog pricing.
          </p>
          <div className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest">
            Click to download Zip File ↓
          </div>
        </a>

        <a 
          href="Todolist.py" 
          download 
          className="p-10 border border-neutral-800 bg-neutral-950/70 hover:border-blue-500 active:scale-120 transition-all rounded-2xl"
        >
          <h4 className="text-4xl font-bold mt-2">
            Python To-do List
          </h4>
          <p className="text-neutral-500 mt-4 leading-relaxed italic">
            A python application that that lets users track tasks they have in an easy to use simple python application.
          </p>
          <div className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest">
            Click to download File ↓
          </div>
        </a>

        <a 
          href="DESALGOFINALS-paper-Anciro-Francisco-Paje(finaloutput) (1).pdf" 
          download 
          className="p-10 border border-neutral-800 bg-neutral-950/70 hover:border-blue-500 active:scale-120 transition-all rounded-2xl"
        >
          <h4 className="text-4xl font-bold mt-2">
            Smart Route Optimization for Sustainable Transportation Final Paper
          </h4>
          <p className="text-neutral-500 mt-4 leading-relaxed italic">
            A finals paper that studies how an algorithm can be utilized to make an application that routes destinations with sustainability and efficiency in consideration.
          </p>
          <div className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest">
            Click to download PDF ↓
          </div>
        </a>

        <a 
          href="BarangayTaskManager.zip" 
          download 
          className="p-10 border border-neutral-800 bg-neutral-950/70 hover:border-blue-500 active:scale-120 transition-all rounded-2xl"
        >
          <h4 className="text-4xl font-bold mt-2">
            Barangay Task Manager
          </h4>
          <p className="text-neutral-500 mt-4 leading-relaxed italic">
            This Python-based community application allows users to suggest and vote on local tasks, automatically prioritizing them by vote count for organized completion.
          </p>
          <div className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest">
            Click to download Zip File ↓
          </div>
        </a>
      </section>
    </div>
  );
}

export default Projects;