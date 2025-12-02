"use client";

// libraries
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Link from "next/link";

// components
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// validations
import { registerSchema } from "@/validators/auth";

// libraries
import { apiFetch } from "@/lib/api";

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setError(null);

    try {
      const res = await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const { message } = await res.json();
        setError(message || "Failed to register");

        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  const inputs: Array<{
    formName: "firstName" | "lastName";
    label: string;
    placeholder: string;
    inputType: string;
  }> = [
    {
      formName: "firstName",
      label: "First name",
      placeholder: "Your first name...",
      inputType: "text",
    },
    {
      formName: "lastName",
      label: "Last name",
      placeholder: "Your last name...",
      inputType: "text",
    },
  ];

  const inputs2: Array<{
    formName: "emailAddress" | "password" | "passwordConfirm";
    label: string;
    placeholder: string;
    inputType: string;
  }> = [
    {
      formName: "emailAddress",
      label: "E-mail address",
      placeholder: "Your e-mail address",
      inputType: "email",
    },
    {
      formName: "password",
      label: "Password",
      placeholder: "Your password...",
      inputType: "password",
    },
    {
      formName: "passwordConfirm",
      label: "Password confirm",
      placeholder: "Your password confirm...",
      inputType: "password",
    },
  ];

  return (
    <div className="flex flex-col col justify-center items-center py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-2 space-y-6">
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="w-full grid grid-cols-2 justify-between items-center
                py-2 gap-10"
            >
              {inputs.map((item, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={item.formName}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-md my-4">
                        {item.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-80 py-5 mb-2 not-focus:text-md
                            focus:text-md placeholder:text-md"
                          type={item.inputType}
                          placeholder={item.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              {inputs2.map((item, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={item.formName}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-md my-4">
                        {item.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-170 py-5 mb-2 not-focus:text-md
                            focus:text-md placeholder:text-md"
                          type={item.inputType}
                          placeholder={item.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>

          {/*error message*/}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex flex-col justify-center items-center py-2 mt-2">
            <Button
              className="w-80 px-6 py-7 text-center dark:text-zinc-950
                dark:bg-zinc-100/80 text-rounded lg:text-md tracking-wider
                dark:hover:bg-zinc-800 dark:hover:text-zinc-50
                hover:cursor-pointer transition-colors"
              type="submit"
            >
              Sign Up
            </Button>
            <p className="mt-8 lg:text-md">
              Do you have an existing account?{" "}
              <Link className="font-bold dark:text-zinc-200" href="/login">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
