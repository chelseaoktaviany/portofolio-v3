// import { prisma } from "@/db/prisma";

import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";

export default async function Home() {
  // server component fetch
  // const [skills, projects, certifications] =
  //   await Promise.all([
  //     prisma.skills.findMany({ orderBy: { id: "asc" } }),
  //     prisma.projects.findMany({ take: 3, orderBy: { id: "asc" } }),
  //     prisma.certifications.findMany({ orderBy: { id: "asc" } }),
  //   ]);

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
      <section
        className="w-full h-screen flex justify-center items-center"
        id="projects"
      >
        <Projects />
      </section>
    </>
  );
}
