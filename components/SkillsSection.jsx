import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Paintbrush, Layout } from "lucide-react";
import {
  FaReact,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaAws,
  FaLinux
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiAppwrite,
  SiSupabase,
  SiNetlify,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";
import IconCloudDemo from "./ui/globe";

import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaNodeJs  } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiExpress } from "react-icons/si";

import reactIcon from "@/public/react.svg"
// import SkillCard from "./SkillCard";



const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span>{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", icon: <IoLogoJavascript className="w-4 h-4 text-[#f7df1e]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61dbfb]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-4 h-4 text-[#2d53e7]" /> },
        { name: "HTML", icon: <TiHtml5 className="w-4 h-4 text-[#e5532d]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#08bbd9]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Backend Development",
      color: "text-blue-400",
      skills: [
        { name: "NodeJS", icon: <FaNodeJs className="w-4 h-4 text-[#6ba269]" /> },
        { name: "Express", icon: <SiExpress className="w-4 h-4 text-[#f7e025]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Devops/Developement",
      color: "text-blue-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#ff9c08]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Netlify", icon: <SiNetlify className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Backend as a Service(BaaS)",
      color: "text-blue-400",
      skills: [
        { name: "Appwrite", icon: <SiAppwrite className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Framer Motion", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative" id="skills">
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </main>
  );
};

export default SkillsSection;
