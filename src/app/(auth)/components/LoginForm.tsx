"use client";

// libraries
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
import { loginSchema } from "@/validators/auth";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);

    // e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const emailAddress = formData.get("emailAddress");
    // const password = formData.get("password");

    // const res = await fetch(`${process.env.BASE_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: { ContentType: "application/json" },
    //   body: JSON.stringify({ emailAddress, password }),
    // });

    // if (res.ok) {
    //   // router.push("/dashboard");
    //   console.log("logged in!");
    // } else {
    //   // handle error
    // }
  };

  const inputs: Array<{
    formName: "emailAddress" | "password";
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
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center py-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="py-2 space-y-6"
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
                        className="w-100 py-5 mb-2 not-focus:text-md
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

            <div className="flex flex-col justify-center items-center py-2 mt-2">
              <Button
                className="w-full px-6 py-7 text-center dark:text-zinc-950
                  dark:bg-zinc-100/80 text-rounded lg:text-md tracking-wider
                  dark:hover:bg-zinc-800 dark:hover:text-zinc-50
                  hover:cursor-pointer transition-colors"
                type="submit"
              >
                Sign In
              </Button>
              <p className="mt-8 lg:text-lg">
                Don&apos;t have an existing account?{" "}
                <Link className="font-bold dark:text-zinc-200" href="/register">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
