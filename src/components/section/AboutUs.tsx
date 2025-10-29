import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      {/* left content */}
      <div
        className="flex flex-col justify-center px-10 md:px-20 space-y-6
          text-zinc-950 dark:text-zinc-50"
      >
        <h1
          className="lg:text-xxl md:text-6xl font-bold
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

        <div className="flex space-x-5 justify-center md:justify-start">
          {/* button for download cv */}
          <Button
            className="w-50 h-15 my-8 px-3 py-5 tracking-wider bg-zinc-950
              dark:bg-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-800
              text-zinc-100 dark:text-zinc-900 hover:text-zinc-900
              dark:hover:text-zinc-50 transition uppercase text-center"
            variant="default"
          >
            <Link href="#">read more</Link>
          </Button>

          {/* button for download cv */}
          <Button
            className="w-50 h-15 my-8 px-3 py-5 border-1 border-zinc-950
              dark:border-zinc-50 tracking-wider hover:bg-zinc-950/5
              dark:hover:bg-zinc-50/5 transition text-center uppercase"
            variant="ghost"
          >
            <Link href="#">download cv</Link>
          </Button>
        </div>
      </div>
      {/* right content - image */}
      <div className="relative hidden md:block">
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

export default AboutUs;
