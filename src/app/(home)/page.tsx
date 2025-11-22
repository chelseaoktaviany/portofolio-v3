// import { prisma } from "@/db/prisma";

// sections
import HeroSection from "@/app/(home)/hero/components/HeroSection";
import AboutMeSection from "@/app/(home)/about-me/components/AboutMeSection";
import SkillsSection from "@/app/(home)/skills/components/SkillsSection";
import EducationsSection from "@/app/(home)/educations/components/EducationsSection";
import ExperiencesSection from "@/app/(home)/experiences/components/ExperiencesSection";
import ProjectsSection from "@/app/(home)/projects/components/ProjectsSection";
import ContactSection from "@/app/(home)/contact-me/components/ContactSection";

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
        <HeroSection />
      </section>

      {/* about section */}
      <section
        className="w-full lg:h-screen flex items-center bg-zinc-300
          dark:bg-zinc-950"
        id="about"
      >
        <AboutMeSection />
      </section>

      {/* skills section */}
      <section
        className="w-full lg:h-screen flex justify-center items-center"
        id="skills"
      >
        <SkillsSection />
      </section>

      {/*educations section*/}
      <section
        className="w-full lg:h-screen flex justify-center items-center"
        id="educations"
      >
        <EducationsSection />
      </section>

      {/* experiences section  */}
      <section
        className="w-full lg:h-screen flex justify-center items-center"
        id="experiences"
      >
        <ExperiencesSection />
      </section>

      {/* projects section */}
      <section className="w-full lg:h-screen" id="projects">
        <ProjectsSection />
      </section>

      {/* contact me section */}
      <section className="w-full h-120" id="contact">
        <ContactSection />
      </section>
    </>
  );
}
