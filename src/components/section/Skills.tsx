import Link from "next/link";

// icons
import HTML5 from "@/svg/html5-plain.svg";
import CSS3 from "@/svg/css3-plain.svg";
import JavaScript from "@/svg/javascript-plain.svg";
import MongoDB from "@/svg/mongodb-plain.svg";
import ExpressJS from "@/svg/express-original.svg";
import ReactJS from "@/svg/react-original.svg";
import NodeJS from "@/svg/nodejs-plain.svg";
import ReactNative from "@/svg/reactnative-original.svg";

import SkillCard from "@/components/SkillCard";

const Skills = async () => {
  const skillLists = [
    {
      id: 1,
      skillTitle: "HTML5",
      icon: HTML5,
    },
    {
      id: 2,
      skillTitle: "CSS3",
      icon: CSS3,
    },
    {
      id: 3,
      skillTitle: "JavaScript",
      icon: JavaScript,
    },
    {
      id: 4,
      skillTitle: "MongoDB",
      icon: MongoDB,
    },
    {
      id: 5,
      skillTitle: "ExpressJS",
      icon: ExpressJS,
    },
    {
      id: 6,
      skillTitle: "ReactJS",
      icon: ReactJS,
    },
    {
      id: 7,
      skillTitle: "NodeJS",
      icon: NodeJS,
    },
    {
      id: 8,
      skillTitle: "React Native",
      icon: ReactNative,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1
        className="text-[70px] text-center md:text-center sm:text-center
          font-bold font-(family-name:--font-archivo-black) mb-10"
      >
        Tools & Skills
      </h1>
      {/* skills list */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl w-full">
        {skillLists.map((item) => (
          <SkillCard
            key={item.id}
            skillTitle={item.skillTitle}
            icon={item.icon}
          />
        ))}
      </div>

      {/* more skills button */}
      <div className="py-8 my-10">
        <Link
          className="px-10 py-6 rounded-sm bg-transparent border
            border-[#ebebeb] hover:bg-[#ebebeb]/30 tracking-wider
            transition-colors uppercase"
          href="#"
        >
          More skills
        </Link>
      </div>
    </div>
  );
};

export default Skills;
