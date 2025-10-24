// import { prisma } from "@/db/prisma";

import Hero from "@/components/section/Hero";
import AboutUs from "@/components/section/AboutUs";
import Skills from "@/components/section/Skills";

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
        className="w-full h-screen flex items-center bg-[#050505]"
        id="about"
      >
        <AboutUs />
      </section>

      {/* skills section */}
      <section
        className="w-full h-screen flex justify-center items-center
          bg-[#1e1e1e]"
        id="skills"
      >
        <Skills />
      </section>

      {/* experiences section  */}
    </>
  );
}
