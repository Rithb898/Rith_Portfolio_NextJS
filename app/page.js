import Contact from '@/components/Contact'
import EducationSection from '@/components/EducationSection'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SkillsSection from '@/components/SkillsSection'
import React from 'react'

function page() {
  return (
    <>

      <Hero />
      <SkillsSection />
      <EducationSection />
      <Projects />
      <Contact />
    </>
  )
}

export default page