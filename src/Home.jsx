import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-neutral-950">
      
      <section className="relative p-18 pb-40 flex items-center justify-center px-4 overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <h1 className="text-[15vw] font-black text-neutral-900 tracking-tighter uppercase">
            PORTFOLIO
          </h1>
        </div>

        <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="text-right text-white text-lg mb-1 max-w-[300px]">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-lg mb-2">
              Ethan Edgar B. Francisco
            </h2>
            <p>
              Hi I am Ethan, a Computer Science Undergrad specializing in Cybersecurity, studying in Asia Pacific College.
            </p>
          </div>

          <div>
            <img 
              src="/francisco.png" 
              alt="Ethan"
              className="h-[50vh] md:h-[70vh] w-auto object-contain drop-shadow-2xl grayscale-[40%]"
            />
          </div>

          <div className="text-left max-w-[300px] order-3 text-white text-lg mb-10">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-lg mb-2">
              About Me:
            </h2>
            <p>
              I currently live in Paranaque City Metro Manila, I am 20 years old, and I am currently in my 2nd year of College.
            </p>
          </div>
        </div>
      </section>

      <section 
        className="min-h-screen flex items-center justify-center bg-blue-900 bg-fixed bg-cover bg-center px-8 py-24"
        style={{ backgroundImage: "url('/weh.jpg')" }} 
      >
        <div className="max-w-4xl text-center bg-black/40 backdrop-blur-md p-12 rounded-3xl border border-white/10">
          <h3 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            My Philosophy
          </h3>
          <p className="text-xl text-neutral-200 leading-relaxed">
            As a Computer Science undergraduate at Asia Pacific College with a specialization in Cybersecurity, my mission is to graduate with a robust technical foundation that enables me to contribute meaningfully to the ever-evolving tech landscape. 
            I am deeply committed to the pursuit of multi-disciplinary proficiency, spanning from secure network architecture to intuitive front-end development using React and Tailwind CSS. 
            I believe that true expertise is not just about the knowledge acquired in a classroom, but about the resilience built through real-world application. 
            I embrace a growth mindset that views every technical challenge or mistake as a critical learning opportunity, allowing me to refine my skills and evolve within my role. 
            My goal is to transition into the industry as a lifelong learner who remains dedicated to becoming a significant, reliable figure in technology through continuous improvement and professional integrity
          </p>
        </div>
      </section>
      
      <section className="flex flex-col items-center justify-center pt-50 pb-75 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]"></div>
        
        <h2 className="relative z-10 text-6xl text-white font-black uppercase mb-12">Skills</h2>
        
        <div className="relative z-10 grid grid-cols-4 gap-8">
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">Python</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">React</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">Tailwind</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">Networking</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">CSS</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">SQL</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">Cybersecurity</div>
          <div className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default">Linux</div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center pb-80 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <h2 className="relative z-10 text-6xl text-white font-black uppercase mb-12">Credentials</h2>
        
        <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-6xl px-4">
          <div className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Education</span>
            <h3 className="text-white text-2xl mt-2">Asia Pacific College</h3>
          </div>
          <div className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">NetAcad Badge</span>
            <h3 className="text-white text-2xl mt-2">Networking Basics</h3>
          </div>
            <div className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">LinkedIn Certification</span>
            <h3 className="text-white text-2xl mt-2">Foundations of Algorithmic Thinking</h3>
          </div>
          <div className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">LinkedIn Certification</span>
            <h3 className="text-white text-2xl mt-2">Advanced Algorithmic Thinking with Python</h3>
          </div>
          <div className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">LinkedIn Certification</span>
            <h3 className="text-white text-2xl mt-2">Python Data Structures: Stacks, Deques, and Queues</h3>
          </div>
          <div className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">LinkedIn Certification</span>
            <h3 className="text-white text-2xl mt-2">Fundamentals of Dynamic Programming</h3>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;