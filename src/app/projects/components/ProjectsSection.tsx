"use client";
import { useState, useEffect } from "react";

// using supabase
import { createClient } from "@/utils/supabase/client";

// components
import Btn from "@/components/button";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [data, setData] = useState<any[]>([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(true);

  const setMoreProjects = () => {
    setVisible((prev) => prev + 4);
  };

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: projects } = await supabase.from("projects").select("*");

      if (projects) {
        setData(projects);
      }

      setLoading(false);

      console.log(data);
    };

    fetchData();
  }, []);

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
        className="px-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1
          sm:grid-cols-1 gap-6 justify-center items-center"
      >
        {loading ? (
          <h2 className="flex justify-center items-center">
            Loading projects…
          </h2>
        ) : data.length === 0 ? (
          <h2 className="flex justify-center items-center">No data found.</h2>
        ) : (
          data
            .slice(0, visible)
            .map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                projectDescription={item.project_description}
                projectLink={item.project_link}
                demoLink={item.demo_link}
                techStack={item.tech_stack}
                projectImage={item.project_image}
                startDate={item.start_date}
                endDate={item.end_date}
              />
            ))
        )}
      </div>

      {/* more projects button */}
      <div className="flex justify-center py-8 my-10">
        {visible < data.length && (
          <Btn variant="ghost" onClick={setMoreProjects}>
            More projects
          </Btn>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
