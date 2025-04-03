"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout } from "lucide-react";
import IconCloudDemo from "./ui/globe";
import javascript from "@/public/javascript-original.svg"
import python from "@/public/python-original.svg"
import react from "@/public/react-original.svg";
import nextjs from "@/public/nextjs-original.svg"
import css from "@/public/css3-original.svg"
import html from "@/public/html5-original.svg"
import tailwind from "@/public/tailwindcss-original.svg"
import nodejs from "@/public/nodejs-plain-wordmark.svg"
import express from "@/public/express-original.svg"
import aws from "@/public/aws.svg"
import linux from "@/public/linux-original.svg"
import git from "@/public/git-original.svg"
import vercel from "@/public/vercel-original-wordmark.svg"
import netlify from "@/public/netlify-original.svg"
import appwrite from "@/public/appwrite-original.svg"
import supabase from "@/public/supabase-original.svg"
import figma from "@/public/figma-original.svg"
import framerMotion from "@/public/framermotion-original.svg"


import Image from "next/image";
// import SkillCard from "./SkillCard";


const SkillCard = ({ icon: Icon, title, skills, color }) => (
  (
    <Card className='group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20'>
      <CardContent className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div
            className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className='w-8 h-8' />
            {/* <Image src={Icon} alt='react' width={32} height={32} /> */}
          </div>
          <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400'>
            {title}
          </h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant='outline'
              className='relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20'
            >
              {/* <span className="w-4 h-4">
                <i className={`${iconClass[skill.icon]} w-full h-full`}></i>
              </span> */}
              <Image src={skill.icon.src} alt={skill.name} width={16} height={16} />
              <span className='font-medium'>{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", icon: javascript },
        {
          name: "Python",
          icon: python,
        },
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: react },
        {
          name: "Next.js",
          icon: nextjs,
        },
        { name: "CSS", icon: css },
        { name: "HTML", icon: html },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
      ],
    },
    {
      icon: Code2,
      title: "Backend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "NodeJS",
          icon: nodejs,
        },
        {
          name: "Express",
          icon: express,
        },
      ],
    },
    {
      icon: Code2,
      title: "Devops/Developement",
      color: "text-blue-400",
      skills: [
        { name: "AWS", icon: aws },
        { name: "Linux", icon: linux },
        { name: "Git", icon: git },
        { name: "Vercel", icon: vercel },
        {
          name: "Netlify",
          icon: netlify,
        },
      ],
    },
    {
      icon: Code2,
      title: "Backend as a Service(BaaS)",
      color: "text-blue-400",
      skills: [
        {
          name: "Appwrite",
          icon: appwrite,
        },
        {
          name: "Supabase",
          icon: supabase,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: figma },
        {
          name: "Framer Motion",
          icon: framerMotion,
        },
      ],
    },
  ];

  return (
    <main
      className='pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative'
      id='skills'
    >
      <section className='container mx-auto px-4 py-11 relative z-10'>
        <div className='flex justify-center items-center '>
          <IconCloudDemo />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
