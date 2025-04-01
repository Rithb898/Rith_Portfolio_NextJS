"use client";

import React from "react";
// import Meteors from "./ui/meteors";
import { SparklesText } from "./magicui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-20'>
      <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          className='absolute inset-0'
        >
          <pattern
            id='grid'
            width='40'
            height='40'
            patternUnits='userSpaceOnUse'
          >
            <rect
              width='40'
              height='40'
              fill='none'
              stroke='white'
              strokeWidth='0.5'
              className='opacity-40 animate-gridPulse'
            />
          </pattern>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
      </div>
    </div>
  );
};

function Hero() {
  const words = [
    "React Frontend Developer & UI/UX Enthusiast",
    "Learning Next.js",
    "Linux & GitHub for DevOps Enthusiast",
    "Learning MARN Stack",
  ];
  return (
    <>
      <main className='pt-20 lg:pt-[0rem] bg-[#020617] text-white min-h-screen'>
        <section className='hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8'>
          <div className='absolute inset-0'></div>

          <GridBackground />

          {/* Meteors Effect */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {/* <Meteors number={30} /> */}
          </div>

          {/* Main content container */}
          <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0'>
            {/* Left column - Text content */}
            <div className='w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative'>
              {/* Decorative blurs */}
              <div className='absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl'></div>
              <div className='absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl'></div>

              {/* Welcome badge */}
              <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-xs border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s'>
                <div className='w-2 h-2 rounded-full bg-blue-400 animate-pulse'></div>
                <span className='text-gray-300 text-xs sm:text-sm font-medium'>
                  Welcome to my universe
                </span>
              </div>

              {/* Name section */}
              <div className='relative mb-6 sm:mb-8'>
                <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight'>
                  <SparklesText text='Hello' />
                  <span className='relative inline-block'>
                    I'm
                    <span className='typing-effect gradient-text'>
                      {" "}
                      Rith Banerjee
                    </span>
                  </span>
                </h1>
                <div className='absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse'></div>
              </div>

              {/* Role badge */}
              <div className='inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-linear-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-xs animate__animated animate__fadeInUp animate__delay-1s'>
                <i className='fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base'></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className='relative mb-8 sm:mb-12 max-w-xl'>
                <p className='text-base sm:text-xl text-gray-300/90 leading-relaxed'>
                  Frontend Developer skilled in React, Next.js, GitHub, Tailwind
                  CSS, and JavaScript. Crafting frameworks and coding the future
                  💻✨
                </p>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s'>
                {/* View Projects Button */}
                <a
                  href='https://github.com/Rithb898'
                  className='group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]'
                >
                  <span className='block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-teal-400'>
                    <span className='relative flex items-center justify-center gap-2 text-white font-medium'>
                      <span>Learn More</span>
                      <i className='fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1'></i>
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <a
                  href='#'
                  className='group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-linear-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]'
                >
                  <span className='block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-gray-800 group-hover:to-gray-700'>
                    <span className='relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white'>
                      <span>Get Resume</span>
                      <i className='fas fa-envelope transform transition-all duration-300 group-hover:rotate-12'></i>
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating badges */}
              <div className='hidden lg:block absolute left-[15.5rem] top-[3.3rem] animate-float-slow'>
                <div className='px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-xs border border-purple-500/20 text-purple-400'>
                  <i className='fas fa-wand-magic-sparkles'></i>&nbsp;&nbsp;UI
                  Magic
                </div>
              </div>
              <div className='hidden lg:block absolute right-10 top-20 animate-float'>
                <div className='px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-xs border border-blue-500/20 text-blue-400'>
                  <i className='fas fa-code'></i>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className='hidden lg:block absolute top-[18rem] left-[80%] transform -translate-x-1/2 animate-float'>
                <div className='px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-xs border border-amber-500/20 text-amber-400'>
                  <i className='fas fa-lightbulb'></i>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            {/* Right Column - Terminl */}
            <div className='w-full lg:w-1/2'>
              <Terminal>
                <TypingAnimation className='md:text-xl'>
                  &gt; npm fetch-my-details@latest
                </TypingAnimation>

                <AnimatedSpan delay={2000} className='text-green-500 text-lg'>
                  <span>✔ Fetching user details...</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className='text-green-500 text-lg'>
                  <span>✔ User found: Rith</span>
                </AnimatedSpan>

                <TypingAnimation className='md:text-xl' delay={3000}>
                  &gt; whoami
                </TypingAnimation>

                <AnimatedSpan delay={3500} className='text-green-500 text-lg'>
                  <span>Rith Banerjee</span>
                </AnimatedSpan>

                <TypingAnimation delay={4000} className='md:text-xl'>
                  &gt; echo "Passionate about Web Development"
                </TypingAnimation>

                <AnimatedSpan delay={6500} className='text-green-500 md:text-xl'>
                  <span>Passionate about Web Development</span>
                </AnimatedSpan>

                <TypingAnimation delay={7000} className='md:text-xl'>
                  &gt; skills --list
                </TypingAnimation>

                <AnimatedSpan delay={7500} className='text-blue-500 md:text-xl'>
                  <span>- Next.js, React, Tailwind CSS</span>
                </AnimatedSpan>

                <AnimatedSpan delay={8000} className='text-blue-500 md:text-xl'>
                  <span>- TypeScript, Node.js, Express</span>
                </AnimatedSpan>

                <TypingAnimation delay={8500} className='md:text-xl'>
                  &gt; echo "Let's build something amazing!"
                </TypingAnimation>

                <AnimatedSpan delay={9000} className='text-green-500 md:text-xl'>
                  <span>Let's build something amazing!</span>
                </AnimatedSpan>
              </Terminal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
