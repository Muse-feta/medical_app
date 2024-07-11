import { About_first_section, Breadcumb, Counter, WhyChooseAbout } from '@/components'
import React from 'react'

const About = () => {
  return (
    <div>
        <Breadcumb title="About Us" subtitle="About Us"/>
        <div>
            <About_first_section/>
            <Counter/>
            <WhyChooseAbout/>
        </div>
    </div>
  )
}

export default About