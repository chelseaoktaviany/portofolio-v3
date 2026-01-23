import Image from "next/image";
import Link from "next/link";

// components
import Btn from "@/components/button";

const AboutMeSection = () => {
  return (
    <div
      className="w-full h-screen grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2
        md:grid-cols-1 sm:grid-cols-1"
    >
      {/* left content */}
      <div
        className="flex flex-col justify-center px-10 md:px-20 space-y-6
          text-center xl:text-start lg:text-start md:text-center sm:text-center"
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

        {/*buttons*/}
        <div
          className="space-x-5 space-y-4 justify-center lg:justify-start
            md:justify-center"
        >
          <Btn variant="default">
            <Link href="/pdf/chelsea-resume.pdf" target="_blank" download>
              Download CV
            </Link>
          </Btn>
          <Btn variant="ghost">
            <Link href="#contact">Connect me</Link>
          </Btn>
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
