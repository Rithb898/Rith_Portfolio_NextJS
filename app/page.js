import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillsSection from "@/sections/SkillsSection";
import React from "react";

function page() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <SkillsSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default page;
