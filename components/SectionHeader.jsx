import React from "react";
import * as motion from "motion/react-client";

function SectionHeader({ heading, subheading }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
      }}
    >
      <div className="inline-block relative mb-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 relative z-10">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-purple-400 to-emerald-400">
            {heading}
          </span>
        </h1>
        <div className="absolute -bottom-2 left-0 w-full h-3 bg-linear-to-r from-cyan-500 to-emerald-500 opacity-70 blur-xs"></div>
      </div>
      <p className="text-slate-300 max-w-2xl mx-auto text-lg">{subheading}</p>
    </motion.div>
  );
}

export default SectionHeader;
