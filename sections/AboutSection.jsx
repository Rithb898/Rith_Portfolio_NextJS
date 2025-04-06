import React from "react";
import HeroImg from "@/public/rith.webp";
import Image from "next/image";

function AboutSection() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Frontend Developer, Builder, Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <Image
                  src={HeroImg}
                  className="rounded-[15px] shadow-sm block"
                  alt="Rith Banerjee hero image"
                  width={1207}
                  height={529}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hey! I’m Rith Banerjee — a self-taught frontend web developer
                with a passion for building interactive, accessible, and
                visually compelling user experiences. I specialize in tools like{" "}
                <span className="font-bold text-white">
                  React, Next.js, Tailwind CSS, and Framer Motion
                </span>
                .
              </p>
              <p className="text-white">
                With a background in commerce (B.Com, Raja Peary Mohan College),
                I bring a unique perspective to solving real-world problems
                through design and code. I'm always exploring ways to learn
                faster, build cleaner, and share more.
              </p>
              <p className="text-white">
                I’ve created projects like{" "}
                <span className="font-semibold">
                  CryptoTracker, GenStrongPass, and Focus-on-Today
                </span>{" "}
                — each reflecting my love for frontend problem solving and UI/UX
                design. I’m currently diving into backend crawling, Chrome
                extensions, and LLM integration.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in building for curiosity, sharing to grow, and
                    solving problems that make life easier. My journey is fueled
                    by open-source projects, web experiments, and constant
                    upskilling.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Rith Banerjee, Frontend Developer
                    </cite>
                    <div className="text-white">
                      “Code. Learn. Share. Repeat.”
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
