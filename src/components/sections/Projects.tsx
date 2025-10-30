import Link from "next/link";

// components
import { Skeleton } from "@/components/ui/skeleton";

import ProjectCard from "@/components/ProjectCard";

// data
import { projectsData } from "@/data/ProjectData";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Projects
      </h1>
      {/*projects list */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            projectDescription={item.projectDescription}
            projectLink={item.projectLink}
            demoLink={item.demoLink}
            techStack={item.techStack}
            startDate={item.startDate}
            endDate={item.endDate}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      {/* more projects button */}
      <div>soon</div>
    </div>
  );
};

export default Projects;
