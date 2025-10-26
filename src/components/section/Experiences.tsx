import ExperienceList from "@/components/ExperienceList";

const Experiences = async () => {
  const experiences = [
    {
      id: 1,
      jobTitle: "Backend Developer Internship",
      company: "PT. Media Andalan Nusa",
      location: "Jakarta, Indonesia",
      duration: "February 2023 - December 2023",
      techStack: [
        "MongoDB",
        "ExperessJS",
        "ReactJS",
        "NodeJS",
        "React Native",
        "Postman",
      ],
    },
    {
      id: 2,
      jobTitle: "Fullstack Developer Internship",
      company: "PT. Media Andalan Nusa",
      location: "Jakarta, Indonesia",
      duration: "Novemeber 2022 - January 2023",
      techStack: [
        "MongoDB",
        "ExperessJS",
        "ReactJS",
        "NodeJS",
        "React Native",
        "Postman",
        "Flutter",
        "Firebase",
        "Wordpress",
        "Divi Builder",
      ],
    },
    {
      id: 3,
      jobTitle: "Backend Developer Student Internship",
      company: "COVID-19 Response Acceleration Task Force",
      location: "Jakarta, Indonesia",
      duration: "June 2020 - September 2020",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="text-[70px] text-center md:text-center sm:text-center
          font-bold font-(family-name:--font-archivo-black) mb-10"
      >
        Work Experiences
      </div>
      {/* experience list */}
      {experiences.map((item) => (
        <ExperienceList
          key={item.id}
          jobTitle={item.jobTitle}
          company={item.company}
          location={item.location}
          duration={item.duration}
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};

export default Experiences;
