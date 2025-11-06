"use client";

import { useState } from "react";

// components
import FormInput from "../FormInput";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Contact Us
      </h1>
      {/*form inputs*/}
      <div className="w-full flex justify-center items-center mt-15">
        <FormInput />
      </div>
    </div>
  );
};

export default Contact;
