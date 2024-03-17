import AboutMe from "@/components/main/AboutMe";
import ContactMe from "@/components/main/ContactMe";

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    
   <main className="h-full w-full flex justify-center items-center ">
    <div className="flex flex-col container justify-center items-center">
    
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Encryption/>
      <Projects/>
      <ContactMe/> 
   
      
    </div>
   </main>
  );
}
