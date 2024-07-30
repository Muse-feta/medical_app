

import About from "@/components/About";
import Add from "@/components/Add";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";

import Image from "next/image";


 

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Add/>
      <WhyChoose/>
      <Counter/>
      <Process/>
      {/* <Faq/> */}
    </div>
  );
}
