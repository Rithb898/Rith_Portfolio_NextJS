"use client";

import {
  Brush,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  PanelLeft,
  PlugZap,
  Server,
} from "lucide-react";
import javascript from "@/public/javascript-original.svg";
import python from "@/public/python-original.svg";
import react from "@/public/react-original.svg";
import nextjs from "@/public/nextjs-original.svg";
import css from "@/public/css3-original.svg";
import html from "@/public/html5-original.svg";
import tailwind from "@/public/tailwindcss-original.svg";
import nodejs from "@/public/nodejs-plain-wordmark.svg";
import express from "@/public/express-original.svg";
import aws from "@/public/aws.svg";
import linux from "@/public/linux-original.svg";
import git from "@/public/git-original.svg";
import github from "@/public/github-original.svg";
import vercel from "@/public/vercel-original-wordmark.svg";
import netlify from "@/public/netlify-original.svg";
import appwrite from "@/public/appwrite-original.svg";
import supabase from "@/public/supabase-original.svg";
import figma from "@/public/figma-original.svg";
import framerMotion from "@/public/framermotion-original.svg";
import axios from "@/public/axios-plain.svg";
import postman from "@/public/postman-original.svg";
import vscode from "@/public/vscode-original.svg";
import jetbrains from "@/public/jetbrains-original.svg";

import FitForJob from "@/public/FitForJob.png";
import CryptoTracker from "@/public/CryptoTracker.png";
import GenStrongPass from "@/public/GenStrongPass.png";
import FocusOnToday from "@/public/FocusOnToday.png";

export const HeroWords = [
  "Frontend Developer",
  "React Wizard",
  "UI/UX Lover",
  "Code Artist",
  "Linux & GitHub Enthusiast",
  "Next.js Learner",
];

export const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    color: "text-yellow-400",
    borderColor: "blue",
    skills: [
      { name: "JavaScript", icon: javascript },
      {
        name: "Python",
        icon: python,
      },
    ],
  },
  {
    icon: Brush,
    title: "Frontend Development",
    color: "text-blue-400",
    borderColor: "red",
    skills: [
      { name: "React", icon: react },
      {
        name: "Next.js",
        icon: nextjs,
      },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
    ],
  },
  {
    icon: Layout,
    title: "UI/UX & Animation",
    color: "text-pink-400",
    borderColor: "blue",
    skills: [
      { name: "Figma", icon: figma },
      { name: "Framer Motion", icon: framerMotion },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "text-green-400",
    borderColor: "red",
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
    icon: Database,
    title: "Backend as a Service(BaaS)",
    color: "text-orange-400",
    borderColor: "blue",
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
    icon: Cloud,
    title: "Deployment & DevOps",
    color: "text-teal-400",
    borderColor: "red",
    skills: [
      { name: "Vercel", icon: vercel },
      { name: "Netlify", icon: netlify },
      { name: "AWS", icon: aws },
      { name: "Linux", icon: linux },
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    color: "text-red-400",
    borderColor: "blue",
    skills: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
    ],
  },
  {
    icon: PlugZap,
    title: "API & Testing Tools",
    color: "text-fuchsia-400",
    borderColor: "red",
    skills: [
      { name: "Axios", icon: axios },
      { name: "Postman", icon: postman },
    ],
  },
  {
    icon: PanelLeft,
    title: "IDE & Editors",
    color: "text-cyan-400",
    borderColor: "blue",
    skills: [
      { name: "VS Code", icon: vscode },
      { name: "JetBrains", icon: jetbrains },
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    school: "Raja Peary Mohan College",
    mascot: "🎓",
    year: "2021–2024",
    achievements: [
      "Specialized in Accounting & Finance",
      "Completed with strong academic record",
    ],
    skills: [
      "Accounting",
      "Financial Management",
      "Taxation",
      "Business Law",
      "Economics",
    ],
    description:
      "Developed a strong foundation in financial management, business strategy, and economic principles to support a career in commerce and technology.",
  },
  {
    degree: "Higher Secondary (Commerce Stream)",
    school: "Raghunathpur Nafar Academy",
    mascot: "📚",
    year: "2019-2021",
    achievements: [
      "Completed with distinction",
      "Outstanding performance in Commerce subjects",
    ],
    skills: ["Mathematics", "Business Studies", "Commerce", "English"],
    description:
      "Gained a comprehensive understanding of business principles, mathematics, and communication skills to build a strong academic foundation.",
  },
];

export const projects = [
  {
    title: "FitForJob - AI Application Assistant",
    description:
      "An AI-powered web app that helps job seekers generate personalized job application materials. Users can upload resumes, input job and company info, and generate responses like cover letters, value propositions, LinkedIn messages, and interview prep Qs. Built with Next.js 15, Tailwind CSS 4, Groq (LLaMA 3.3 and Deepsheek), Clerk, and MongoDB. Includes response history management, validation, toast notifications, and usage analytics.",
    tags: [
      "Next.js 15",
      "Tailwind CSS 4",
      "Groq API",
      "LLaMA 3.3",
      "Deepsheek",
      "pdf-parse",
      "Clerk",
      "React Hook Form",
      "Zod",
      "MongoDB",
      "Shadcn UI",
      "PostHog",
      "Motion"
    ],
    category: "Fullstack",
    links: {
      github: "https://github.com/Rithb898/FitForJob-AI-Application-Assistant/", // replace with your actual repo
      demo: "https://fitforjob.vercel.app/", // replace with your actual live URL
    },
    image: FitForJob, // make sure you import or add an image reference
    featured: true,
  },
  {
    title: "CryptoTracker",
    description:
      "A real-time cryptocurrency tracking platform built with React and the CoinGecko API. Features include dark/light mode, a responsive UI with Tailwind CSS, favorites/watchlist management, and interactive coin detail pages with chart visualizations. Context API is used for efficient global state handling and smoother user interactions.",
    tags: ["React", "Tailwind CSS", "CoinGecko API", "Context API"],
    category: "Frontend",
    links: {
      github: "https://github.com/Rithb898/Crypto-Price-Tracker",
      demo: "https://cryptotrackerrith.netlify.app/",
    },
    image: CryptoTracker,
    featured: false,
  },
  {
    title: "GenStrongPass",
    description:
      "A secure and customizable password generator app built with React. Users can select password length and character types, while real-time strength analysis offers feedback and suggestions. Designed with accessibility and responsiveness in mind using Tailwind CSS for a smooth user experience.",
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
      "A minimalist productivity tracker that helps users manage daily goals. Features include adding, editing, deleting, and completing tasks with real-time visual progress tracking. Motivational quotes and responsive design enhance the overall experience across all devices.",
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
