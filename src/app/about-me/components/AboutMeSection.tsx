import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const AboutMeSection = () => {
  return (
    <div
      className="w-full h-screen grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2
        md:grid-cols-1 sm:grid-cols-1"
    >
      {/* left content */}
      <div
        className="flex flex-col justify-center px-10 md:px-20 space-y-6
          text-zinc-950 dark:text-zinc-50 text-center xl:text-start
          lg:text-start md:text-center sm:text-center"
      >
        <h1
          className="text-3xl lg:text-xxl md:text-6xl sm:text-4xl font-bold
            font-(family-name:--font-archivo-black)"
        >
          Hello,
        </h1>
        <p
          className="lg:text-2xl md:text-base leading-10 font-light
            font-(family-name:--font-pontano-sans)"
        >
          I am a fresh graduate in Computer Science with 1 year of experience in
          full-stack web development. Proficient in MERN stack (MongoDB,
          Express.JS, React, Node.JS) with hands-on experience in developing and
          maintaining RESTful APIs, backend systems, and databases. Passionate
          about building scalable applications and continuously learning new
          technologies. Feel free to look at my CV.
        </p>

        <div
          className="flex space-x-5 lg:justify-start md:justify-center
            sm:justify-center"
        >
          <Button
            className="w-full lg:w-50 md:w-full sm:w-full h-15 my-8 px-3 py-5
              tracking-wider bg-zinc-950 dark:bg-zinc-200 hover:bg-zinc-600
              dark:hover:bg-zinc-800 text-zinc-100 dark:text-zinc-900
              hover:text-zinc-100 dark:hover:text-zinc-50 transition uppercase
              text-center"
            variant="default"
          >
            <Link href="#contact">let&apos;s connect</Link>
          </Button>
        </div>
      </div>
      {/* right content - image */}
      <div className="relative hidden lg:block md:hidden sm:hidden">
        <Image
          className="w-full h-full object-cover brightness-70"
          src="/images/avatar.jpg"
          alt="Chel's avatar"
          fill
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
