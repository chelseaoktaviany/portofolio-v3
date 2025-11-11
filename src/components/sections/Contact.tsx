"use client";

import { useState } from "react";

// components
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  // data for contact section
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full flex flex-col justify-center items-center my-5">
      <h1
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Contact Me
      </h1>
      {/*form inputs*/}
      <div className="w-full flex justify-center items-center mt-8">
        <ContactForm
          name={name}
          emailAddress={emailAddress}
          message={message}
        />
      </div>
    </div>
  );
};

export default Contact;
