import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  /**
   * REUSABLE ANIMATION VARIANTS: Defines the transition states for consistent
   * motion behavior across different sections of the page.
   */
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-neutral-950">
      {/* HERO SECTION: The introduction area with large background typography and profile imagery */}
      <section className="relative p-18 pb-40 flex items-center justify-center px-4 overflow-hidden">

        {/* Big Background Text: Positioned behind everything else as a decorative "watermark" */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <h1 className="text-[15vw] font-black text-neutral-900 tracking-tighter uppercase">
            PORTFOLIO
          </h1>
        </div>

        {/* Foreground Content: Responsive flex container for bio and photo with initial entrance reveal */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
        >
          {/* Bio Intro - Right aligned on desktop */}
          <div className="text-right text-white text-lg mb-1 max-w-[300px]">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-lg mb-2">
              Ethan Edgar B. Francisco
            </h2>
            <p>
              Hi I am Ethan, a Computer Science Undergrad specializing in Cybersecurity, studying in Asia Pacific College.
            </p>
          </div>

          {/* Portrait Image: Centered with a subtle grayscale filter and spring-physics hover interaction */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="francisco.png" 
              alt="Ethan"
              className="h-[50vh] md:h-[70vh] w-auto object-contain drop-shadow-2xl grayscale-[40%]"
            />
          </motion.div>

          {/* Quick Facts - Left aligned on desktop */}
          <div className="text-left max-w-[300px] order-3 text-white text-lg mb-10">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-lg mb-2">
              About Me:
            </h2>
            <p>
              I currently live in Paranaque City Metro Manila, I am 20 years old, and I am currently in my 2nd year of College.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION: Uses a fixed background image to create a parallax scrolling effect */}
      <section 
        className="min-h-screen flex items-center justify-center bg-blue-900 bg-fixed bg-cover bg-center px-8 py-24"
        style={{ backgroundImage: "url('weh.jpg')" }} 
      >
        {/* Glassmorphism Card: Semi-transparent black background with viewport-triggered entrance animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl text-center bg-black/40 backdrop-blur-md p-12 rounded-3xl border border-white/10"
        >
          <h3 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            My Philosophy
          </h3>
          <p className="text-xl text-neutral-200 leading-relaxed">
            As a Computer Science undergraduate at Asia Pacific College with a specialization in Cybersecurity, my mission is to graduate with a robust technical foundation that enables me to contribute meaningfully to the ever-evolving tech landscape. 
            I am deeply committed to the pursuit of multi-disciplinary proficiency, spanning from secure network architecture to intuitive front-end development using React and Tailwind CSS. 
            I believe that true expertise is not just about the knowledge acquired in a classroom, but about the resilience built through real-world application. 
            I embrace a growth mindset that views every technical challenge or mistake as a critical learning opportunity, allowing me to refine my skills and evolve within my role. 
            I goal is to transition into the industry as a lifelong learner who remains dedicated to becoming a significant, reliable figure in technology through continuous improvement and professional integrity
          </p>
        </motion.div>
      </section>

      {/* SKILLS SECTION: Displays technical expertise in a 4-column grid with staggered child animations */}
      <section className="flex flex-col items-center justify-center pt-50 pb-75 relative overflow-hidden bg-black">
        {/* Background Grid Pattern: Creates a tech/blueprint aesthetic */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
        {/* Ambient Glow: Large blurred circles to add color and depth to the dark theme */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]"></div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-6xl text-white font-black uppercase mb-12"
        >
          Skills
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 grid grid-cols-4 gap-8"
        >
          {/* Skill Tags: Items animate sequentially into view using staggered delay logic */}
          {["Python", "React", "Tailwind", "Networking", "CSS", "SQL", "Cybersecurity", "Linux"].map((skill) => (
            <motion.div 
              key={skill}
              variants={fadeInUp}
              className="px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CREDENTIALS SECTION: List of academic and professional certifications with slide-in reveals */}
      <section className="flex flex-col items-center justify-center pb-80 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <h2 className="relative z-10 text-6xl text-white font-black uppercase mb-12">Credentials</h2>

        {/* Credentials Grid: 2-column layout utilizing directional motion for increased visual interest */}
        <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-6xl px-4">
          {[
            { cat: "Education", name: "Asia Pacific College" },
            { cat: "NetAcad Badge", name: "Networking Basics" },
            { cat: "LinkedIn Certification", name: "Foundations of Algorithmic Thinking" },
            { cat: "LinkedIn Certification", name: "Advanced Algorithmic Thinking with Python" },
            { cat: "LinkedIn Certification", name: "Python Data Structures: Stacks, Deques, and Queues" },
            { cat: "LinkedIn Certification", name: "Fundamentals of Dynamic Programming" }
          ].map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm"
            >
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">{cert.cat}</span>
              <h3 className="text-white text-2xl mt-2">{cert.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;