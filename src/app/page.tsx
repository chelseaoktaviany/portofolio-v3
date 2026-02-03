// sections
import HeroSection from "@/app/hero/components/HeroSection";
import AboutMeSection from "@/app/about-me/components/AboutMeSection";
import SkillsSection from "@/app/skills/components/SkillsSection";
import ProjectsSection from "@/app/projects/components/ProjectsSection";
import ContactSection from "@/app/contact-me/components/ContactSection";

export default async function Home() {
  // server component fetch (soon)

  return (
    <>
      {/* intro section */}
      <section className="w-full min-h-screen flex justify-center items-center">
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

      {/* projects section */}
      <section className="w-full lg:h-screen" id="projects">
        <ProjectsSection />
      </section>

      {/* contact me section */}
      <section className="w-full h-80 justify-center items-center" id="contact">
        <ContactSection />
      </section>
    </>
  );
}
