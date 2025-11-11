"use client";

import Link from "next/link";

// icons
import { Mail, GitHub, LinkedIn } from "@mui/icons-material";

// components
import ContactForm from "@/components/ContactForm";

const classNameIcons = "!text-5xl";

const Contact = () => {
  return (
    <div
      className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1
        justify-center items-center my-5"
    >
      <div className="w-6xl py-8">
        <h1
          className="text-6xl text-center md:text-center sm:text-center
            font-bold font-(family-name:--font-archivo-black) py-9"
        >
          Let&apos;s connect
        </h1>
        <p
          className="text-xl text-muted-foreground text-center md:text-center
            sm:text-center font-light italic
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
          <Link href="https://www.github.com/chelseaoktaviany">
            <GitHub className={classNameIcons} />
          </Link>
          <Link href="https://www.linkedin.com/in/chelseaoktaviany">
            <LinkedIn className={classNameIcons} />
          </Link>
        </div>
      </div>
      <div className="w-4xl py-8">
        <h1
          className="text-6xl text-center md:text-center sm:text-center
            font-bold font-(family-name:--font-archivo-black) py-10 mb-10"
        >
          Contact Me
        </h1>
        {/*form inputs*/}
        <div className="w-full flex justify-center items-center mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
