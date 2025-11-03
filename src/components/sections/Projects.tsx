import Link from "next/link";

// components
import { Skeleton } from "@/components/ui/skeleton";

import ProjectCard from "@/components/ProjectCard";

// data
import { projectsData } from "@/data/ProjectData";

const Projects = () => {
  return (
    <div className="w-full">
      <h1
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Projects
      </h1>
      {/*projects list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            projectDescription={item.projectDescription}
            projectLink={item.projectLink}
            demoLink={item.demoLink}
            techStack={item.techStack}
            projectImage={item.projectImage}
            startDate={item.startDate}
            endDate={item.endDate}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      {/* more projects button */}
      {/* <div className="w-full flex justify-center items-center py-16">soon</div> */}
    </div>
  );
};

export default Projects;
