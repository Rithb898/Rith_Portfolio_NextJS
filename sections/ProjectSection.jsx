"use client";
import React from "react";
import * as motion from "motion/react-client";
import ModernGridPattern from "@/components/background/ModernGridPattern";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { LinkPreview } from "@/components/ui/link-preview";
import { projects } from "@/constant/constant";
import { FaGithub } from "react-icons/fa";

export default function ProjectSection() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen bg-[#04081A] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="projects"
    >
      <ModernGridPattern />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          heading="Projects"
          subheading="Explore my creative journey through code and design"
        />
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#0a1428]/60 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/40 border border-slate-700/30 hover:border-slate-600/50"
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0a1428]/50 opacity-70 group-hover:opacity-80"></div>
                </div>

                {/* Project Content */}
                <div className="md:w-1/2 p-8 relative backdrop-blur-xs bg-[#0a1428]/30 group-hover:bg-[#081020]/50 transition-all duration-300">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-6 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-xs">
                      Featured Project
                    </div>
                  )}

                  <h3 className="text-3xl font-bold text-white mb-4 mt-2">
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-emerald-400">
                      {project.title}
                    </span>
                  </h3>

                  <p className="text-slate-300 mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-slate-700/40 text-slate-300 border border-slate-600/30 backdrop-blur-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}

                  <div className="flex gap-4">
                    <LinkPreview
                      url={project.links.github}
                      className="font-bold"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-cyan-400 hover:bg-slate-900/70 transition-all border border-slate-700/50">
                        <FaGithub size={18} />
                      </div>
                    </LinkPreview>
                    <LinkPreview
                      url={project.links.demo}
                      className="font-bold"
                      quality={100}
                      width={250}
                      height={150}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-emerald-400 hover:bg-slate-900/70 transition-all border border-slate-700/50">
                        <ExternalLink size={18} />
                      </div>
                    </LinkPreview>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
