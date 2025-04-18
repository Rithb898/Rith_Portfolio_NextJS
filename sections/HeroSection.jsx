"use client";

import GridBackground from "@/components/background/GridBackground";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import { Confetti } from "@/components/magicui/confetti";
import { Meteors } from "@/components/magicui/meteors";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroWords } from "@/constant/constant";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function HeroSection() {
  const confettiRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width on mount
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#020617] text-white min-h-screen overflow-hidden">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        <GridBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={30} />
        </div>

        {/* Conditionally render confetti if not on mobile */}
        {!isMobile && (
          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full pointer-events-none"
          />
        )}

        {/* Main Content Container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            {/* Decorative blurs */}
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-xs border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">
                Open For Work
              </span>
            </div>

            {/* Name section */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span
                  className="relative inline-block cursor-pointer"
                  onMouseEnter={() => confettiRef.current?.fire()}
                >
                  I'm
                  <span className="typing-effect gradient-text">
                    {" "}
                    Rith Banerjee
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-linear-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-xs animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords
                  className={"text-lg sm:text-xl text-blue-400 font-medium"}
                  words={HeroWords}
                />
              </span>
            </div>

            {/* Description */}
            <div className="relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                Building slick, responsive web apps with React, Tailwind & vibes
                ✨
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col items-center sm:flex-row sm:items-stretch gap-6 animate__animated animate__fadeInUp animate__delay-2s">
              {/* View Projects Button */}
              <Link
                href="#projects"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 p-[1px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-gray-900 px-6 py-3 text-white transition-all duration-300 group-hover:bg-transparent">
                  <span>Learn More</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
                </span>
              </Link>

              {/* Get Resume Button */}
              <Link
                href="https://drive.google.com/file/d/1yo0sNILfUVpxDnOjXLE6bCossAMZTbCL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 p-[1px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-gray-900 px-6 py-3 text-gray-300 transition-all duration-300 border border-gray-700 group-hover:text-white group-hover:bg-transparent">
                  <span>Get Resume</span>
                  <IoMdMail className="transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </Link>

              {/* Social Icons */}
              <div className="flex gap-5 items-center mt-4 sm:mt-0">
                <Link
                  href="https://github.com/Rithb898"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rith-banerjee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
                </Link>
                <Link href="mailto:rithbanerjee@example.com" aria-label="Email">
                  <IoMdMail className="h-6 w-6 text-gray-400 hover:text-teal-400 transition-colors duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="w-full lg:w-1/2">
            <InteractiveTerminal />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
