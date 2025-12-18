import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

import ProjectImage from "./ProjectImage";

// data
import { projectsData } from "@/data/ProjectData";

const ProjectsSection = () => {
  return (
    <div
      className="w-full flex flex-col justify-center lg:justify-center
        md:justify-center sm:justify-center lg:items-center md:items-center
        sm:items-center mt-5"
    >
      <h1
        className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center
          md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Projects
      </h1>
      {/*projects list */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1
          gap-6 justify-center items-center px-10"
      >
        {projectsData.map((item) => (
          <ProjectImage
            key={item.id}
            title={item.title}
            projectDescription={item.projectDescription}
            projectLink={item.projectLink}
            demoLink={item.demoLink}
            techStack={item.techStack}
            projectImage={item.projectImage}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>

      {/* more projects button */}
      <div className="flex justify-center py-8 my-10">
        <Button
          className="w-80 lg:w-50 h-18 px-10 py-6 border border-zinc-950
            dark:border-zinc-50 hover:bg-zinc-300/30 dark:hover:bg-zinc-50/10
            tracking-wider transition-colors uppercase hover:cursor-pointer"
          variant="ghost"
        >
          <Link href="#">More projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
