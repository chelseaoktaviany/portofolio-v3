import Link from "next/link";

// components
import { Skeleton } from "@/components/ui/skeleton";

import ProjectImage from "@/components/ProjectImage";

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
      <div className="w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        {projectsData.map((item) => (
          <ProjectImage
            key={item.id}
            title={item.title}
            projectImage={item.projectImage}
          />
        ))}
      </div>
      {/* more projects button */}
      {/* <div className="w-full flex justify-center items-center py-16">soon</div> */}
    </div>
  );
};

export default Projects;
