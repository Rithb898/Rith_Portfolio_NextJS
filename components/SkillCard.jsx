"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";

function SkillCard({ icon: Icon, title, skills, color }) {

  return (
    <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-8 h-8" />
            {/* <div>
              <i className={`${iconClass[icon]} w-8 h-8`}></i>
            </div> */}
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
              <Image
                src={skill.icon.src}
                alt={skill.name}
                width={16}
                height={16}
              />
              <span className="font-medium">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      {/* <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      /> */}
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  );
}

export default SkillCard;
