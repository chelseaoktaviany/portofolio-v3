// import { prisma } from "@/db/prisma";

// sections
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default async function Home() {
  // server component fetch (soon)

  return (
    <>
      {/* intro section */}
      <section
        className="w-full min-h-screen flex justify-center items-center
          bg-radial from-zinc-300 to-zinc-400 to-100% dark:from-zinc-900
          dark:to-zinc-950 dark:to-100%"
      >
        <Hero />
      </section>

      {/* about section */}
      <section
        className="w-full lg:h-screen flex items-center bg-zinc-300
          dark:bg-zinc-950"
        id="about"
      >
        <AboutMe />
      </section>

      {/* skills section */}
      <section
        className="w-full lg:h-screen flex justify-center items-center"
        id="skills"
      >
        <Skills />
      </section>

      {/* experiences section  */}
      <section
        className="w-full lg:h-screen flex justify-center items-center"
        id="experiences"
      >
        <Experiences />
      </section>

      {/* projects section */}
      <section className="w-full lg:h-screen" id="projects">
        <Projects />
      </section>

      {/* contact me section */}
      <section className="w-full h-120" id="contact">
        <Contact />
      </section>
    </>
  );
}
