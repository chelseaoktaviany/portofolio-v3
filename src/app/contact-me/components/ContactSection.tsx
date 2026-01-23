"use client";

import Link from "next/link";

// icons
import { Mail, GitHub, LinkedIn } from "@mui/icons-material";

const classNameIcons = "text-2xl lg:!text-4xl md:!text-3xl sm:!text-2xl";

const ContactSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 my-5">
      <h1
        className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center
          md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10"
      >
        Let&apos;s connect
      </h1>
      <p
        className="text-md lg:text-2xl text-muted-foreground text-center
          md:text-center sm:text-center font-light italic
          font-(family-name:--font-pontano-sans) py-0"
      >
        I&apos;d love to hear from you! Feel free to reach out through this
        form, or find me on social media below.
      </p>
      <div className="flex justify-center items-center py-5 my-7 space-x-5">
        <Link
          href="mailto:chelseaoktaviany97@gmail.com"
          className="hover:text-primary transition-colors"
        >
          <Mail className={classNameIcons} />
        </Link>
        <Link
          href="https://www.github.com/chelseaoktaviany"
          className="hover:text-primary transition-colors"
        >
          <GitHub className={classNameIcons} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/chelseaoktaviany"
          className="hover:text-primary transition-colors"
        >
          <LinkedIn className={classNameIcons} />
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
