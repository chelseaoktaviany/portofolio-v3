import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { prisma } from "@/db/prisma";
import {
  Skills,
  Projects,
  Educations,
  Experiences,
  Certifications,
} from "@/types";

export default async function Home() {
  // server component fetch
  const projects = await prisma.projects.findMany({
    take: 6,
    orderBy: { id: "asc" },
  });

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
      <section className="w-full h-screen bg-[#050505]">
        <div className="flex flex-col md:flex-row gap-10 justify-center my-5">
          <div className="flex-1 px-18 py-5 mx-auto text-start">
            <h1
              className="text-[70px] font-bold my-8
                font-(family-name:--font-archivo-black)"
            >
              Hello,
            </h1>
            <p
              className="text-2xl font-light
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
            {/* button for download cv */}

            <Button
              variant="ghost"
              className="my-8 px-8 py-8 text-md border-1 border-[#ffffff]"
            >
              <Link href="#" className="uppercase">
                download cv
              </Link>
            </Button>
          </div>
          <div className="flex-1 relative bottom-5 w-[600px] h-[600px] mx-auto">
            <Image
              src="/images/avatar.jpeg"
              alt="Chel's avatar"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="w-full h-screen bg-[#1e1e1e]">
        <div className="flex flex-col md:flex-row gap-10 justify-center my-5">
          <div className="flex-1 px-18 py-5 mx-auto text-center">
            <h1
              className="text-[70px] font-bold my-8
                font-(family-name:--font-archivo-black)"
            >
              What I do
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
