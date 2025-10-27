import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
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
          I am a fresh graduate in Computer Science with 1 year of experience in
          full-stack web development. Proficient in MERN stack (MongoDB,
          Express.JS, React, Node.JS) with hands-on experience in developing and
          maintaining RESTful APIs, backend systems, and databases. Passionate
          about building scalable applications and continuously learning new
          technologies. Feel free to look at my CV.
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
              border-[#ffffff] rounded-md tracking-wider hover:bg-[#ebebeb]/5
              transition uppercase text-center"
          >
            download cv
          </Link>
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
