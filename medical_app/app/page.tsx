import { About, Add, Hero, Services } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Add/>
    </div>
  );
}
