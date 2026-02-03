import Link from "next/link";

// components
import Btn from "@/components/button";
import ProjectCard from "./ProjectCard";

// data
import { projectsData } from "@/data/ProjectData";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
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
          />
        ))}
      </div>

      {/* more projects button */}
      <div className="flex justify-center py-8 my-10">
        <Btn variant="ghost">
          <Link href="#">More projects</Link>
        </Btn>
      </div>
    </div>
  );
};

export default ProjectsSection;
