"use client";

import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/constant/constant";
import React from "react";

function SkillsSection() {
  return (
    <section
      className="pt-40 lg:pt-[0rem] bg-[#020617] text-white min-h-screen"
      id="skills"
    >
      <section className="container mx-auto px-4 py-24 relative z-10">
        <SectionHeader
          heading="Skills"
          subheading="My technical proficiencies and areas of expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default SkillsSection;
