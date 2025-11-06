import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import ProjectImage from "@/components/ProjectImage";

// data
import { projectsData } from "@/data/ProjectData";

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5">
      <h1
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Projects
      </h1>
      {/*projects list */}
      <div className="w-xxl grid grid-cols-1 md:grid-cols-3 gap-10">
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
      <div className="py-8 my-10">
        <Button
          className="w-50 h-18 px-10 py-6 border border-zinc-950
            dark:border-zinc-50 hover:bg-zinc-950/30 dark:hover:bg-zinc-50/30
            tracking-wider transition-colors uppercase hover:cursor-pointer"
          variant="ghost"
        >
          <Link href="#">More projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
