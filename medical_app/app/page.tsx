import { About, Add, Counter, Faq, Hero, Process, Services, WhyChoose } from "@/components";
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
