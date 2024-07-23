// import { About_first_section, Breadcumb, Counter, WhyChooseAbout } from '@/components'
import React from 'react'
import { Metadata } from 'next'
import Breadcumb from '@/components/Breadcumb';
import Counter from '@/components/Counter';
import WhyChooseAbout from '@/components/about/WhyChooseAbout'
import About_first_section from '@/components/about/firstSection'

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
};

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