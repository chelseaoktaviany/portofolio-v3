import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { prisma } from "@/db/prisma";

export default async function Home() {
  // server component fetch
  const [skills, projects, educations, experiences, certifications] =
    await Promise.all([
      prisma.skills.findMany({ orderBy: { id: "asc" } }),
      prisma.projects.findMany({ take: 3, orderBy: { id: "asc" } }),
      prisma.educations.findMany({ orderBy: { id: "asc" } }),
      prisma.experiences.findMany({ take: 3, orderBy: { startDate: "desc" } }),
      prisma.certifications.findMany({ orderBy: { id: "asc" } }),
    ]);

  return (
    <>
      {/* intro section */}
      <section className="min-h-screen flex justify-center items-center">
        <div
          className="flex flex-col justify-center py-2 text-center
            md:text-center sm:text-center"
        >
          <h1
            className="text-5xl font-bold
              font-(family-name:--font-archivo-black) my-5"
          >
            Chelsea Oktaviany
          </h1>
          <h2 className="text-2xl font-light
            font(family-name:--font-pontano-sans">
            Fullstack Developer | linkedin.com/in/chelseaoktaviany
          </h2>
        </div>
      </section>

      {/* about section */}
      <section
        className="w-full h-screen flex items-center bg-[#050505]"
        id="about"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {/* left content */}
          <div
            className="flex flex-col justify-center px-10 md:px-20 space-y-6
              text-[#ebebeb]"
          >
            <h1
              className="lg:text-[70px] md:text-6xl font-bold
                font-(family-name:--font-archivo-black)"
            >
              Hello,
            </h1>
            <p
              className="lg:text-2xl md:text-base leading-[40px] font-light
                font(family-name:--font-pontano-sans)"
            >
              I am a fresh graduate in Computer Science with 1 year of
              experience in full-stack web development. Proficient in MERN stack
              (MongoDB, Express.JS, React, Node.JS) with hands-on experience in
              developing and maintaining RESTful APIs, backend systems, and
              databases. Passionate about building scalable applications and
              continuously learning new technologies. Feel free to look at my
              CV.
            </p>

            <div className="flex space-x-5 justify-center md:justify-start">
              {/* button for download cv */}
              <Link
                href="#"
                className="w-[200px] inline-block my-8 px-3 py-5 rounded-md
                  tracking-wider bg-[#ebebeb] hover:bg-[#18181b]
                  hover:text-[#ebebeb] transition uppercase text-center
                  text-[#121212]"
              >
                read more
              </Link>

              {/* button for download cv */}
              <Link
                href="#"
                className="w-[200px] inline-block my-8 px-3 py-5 border-1
                  border-[#ffffff] rounded-md tracking-wider
                  hover:bg-[#ebebeb]/5 transition uppercase text-center"
              >
                download cv
              </Link>
            </div>
          </div>
          {/* right content - image */}
          <div className="relative hidden md:block">
            <Image
              src="/images/avatar.jpeg"
              alt="Chel's avatar"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="w-full h-screen bg-[#1e1e1e]" id="skills">
        <div className="flex flex-col md:flex-row gap-10 justify-center my-5">
          <div className="flex-1 px-18 py-5 mx-auto text-center">
            <h1
              className="text-[70px] font-bold my-8
                font-(family-name:--font-archivo-black)"
            >
              What I do
            </h1>
          </div>
          {/* skills list */}
        </div>
      </section>
    </>
  );
}
