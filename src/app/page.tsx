// import { prisma } from "@/db/prisma";

import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";

export default async function Home() {
  // server component fetch (soon)

  return (
    <>
      {/* intro section */}
      <section className="min-h-screen flex justify-center items-center">
        <Hero />
      </section>

      {/* about section */}
      <section
        className="w-full h-screen flex items-center bg-zinc-300
          dark:bg-zinc-950"
        id="about"
      >
        <AboutUs />
      </section>

      {/* skills section */}
      <section
        className="w-full h-screen flex justify-center items-center"
        id="skills"
      >
        <Skills />
      </section>

      {/* experiences section  */}
      <section
        className="w-full h-screen flex justify-center items-center"
        id="experiences"
      >
        <Experiences />
      </section>

      {/* projects section */}
      <section className="w-full h-screen py-16" id="projects">
        <Projects />
      </section>

      {/* contact us section */}
      <section
        className="w-full h-screen py-16 flex justify-center items-center"
      ></section>
    </>
  );
}
