import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import CryptoTracker from "@/public/CryptoTracker.png";
import GenStrongPass from "@/public/GenStrongPass.png";
import FocusOnToday from "@/public/FocusOnToday.png";


function Projects() {
  const projects = [
    {
      title: "CryptoTracker",
      description:
        "Developed a real-time cryptocurrency tracking platform using React and CoinGecko API. Implemented responsive design with Tailwind CSS, added dark/light theme support, and integrated features like favorites/watchlist and detailed coin information with charts. Optimized state management with Context API for enhanced user interactions.",
      tags: ["React", "Tailwind CSS", "CoinGecko API", "Context API"],
      category: "Frontend",
      links: {
        github: "https://github.com/Rithb898/Crypto-Price-Tracker",
        demo: "https://cryptotrackerrith.netlify.app/",
      },
      image: CryptoTracker,
      featured: true,
    },
    {
      title: "GenStrongPass",
      description:
        "Built a robust password generator application with customizable length and character sets. Implemented real-time password strength evaluation with improvement suggestions. Enhanced responsiveness and usability using Tailwind CSS. Focused on user safety by generating secure and unique passwords.",
      tags: ["React", "Tailwind CSS"],
      category: "Frontend",
      links: {
        github: "https://github.com/Rithb898/GenStrongPass/",
        demo: "https://genstrongpass.netlify.app/",
      },
      image: GenStrongPass,
      featured: false,
    },
    {
      title: "Focus-on-Today",
      description:
        "Developed a user-friendly goal tracking app to enhance daily productivity. Implemented features like adding, editing, deleting, and marking goals as completed. Integrated a dynamic progress bar to visualize goal completion. Incorporated motivational quotes for user encouragement. Ensured cross-device compatibility with responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: {
        github: "https://github.com/Rithb898/Focus-on-Today",
        demo: "https://focusontoday.netlify.app/",
      },
      image: FocusOnToday,
      featured: false,
    },
  ];

  return (
    <div className='min-h-screen bg-[#04081A] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden' id="projects">
      {/* Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
        {/* Modern grid pattern */}
        <div className='absolute inset-0'>
          <div className='h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]'></div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block relative mb-4'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-2 relative z-10'>
              <span className='bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-purple-400 to-emerald-400'>
                Projects
              </span>
            </h1>
            <div className='absolute -bottom-2 left-0 w-full h-3 bg-linear-to-r from-cyan-500 to-emerald-500 opacity-70 blur-xs'></div>
          </div>
          <p className='text-slate-300 max-w-2xl mx-auto text-lg'>
            Explore my creative journey through code and design
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className='flex justify-center mb-12 flex-wrap gap-2'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-linear-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className='grid grid-cols-1 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative bg-[#0a1428]/60 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/40 border border-slate-700/30 hover:border-slate-600/50'
            >
              <div className='flex flex-col md:flex-row'>
                {/* Project Image */}
                <div className='relative md:w-1/2 h-64 md:h-auto overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90'
                  />
                  <div className='absolute inset-0 bg-linear-to-r from-transparent to-[#0a1428]/50 opacity-70 group-hover:opacity-80'></div>
                </div>

                {/* Project Content */}
                <div className='md:w-1/2 p-8 relative backdrop-blur-xs bg-[#0a1428]/30 group-hover:bg-[#081020]/50 transition-all duration-300'>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className='absolute top-3 right-6 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-xs'>
                      Featured Project
                    </div>
                  )}

                  <h3 className='text-3xl font-bold text-white mb-4 mt-2'>
                    <span className='bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-emerald-400'>
                      {project.title}
                    </span>
                  </h3>

                  <p className='text-slate-300 mb-6'>{project.description}</p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-3 mb-8'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-3 py-1 text-xs rounded-full bg-slate-700/40 text-slate-300 border border-slate-600/30 backdrop-blur-xs'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-4'>
                    <a
                      href={project.links.github}
                      className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-cyan-400 hover:bg-slate-900/70 transition-all border border-slate-700/50'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.links.demo}
                      className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-emerald-400 hover:bg-slate-900/70 transition-all border border-slate-700/50'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
