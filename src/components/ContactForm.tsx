"use client";

// lib
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// components
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  name: string;
  emailAddress: string;
  message: string;
}

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Your name must be at least 4 character",
  }),
  emailAddress: z.email({ message: "Your e-mail must be valid" }),
  message: z
    .string()
    .max(255, { message: "Your message must not be 255 characters" }),
});

const classNameForm = "py-6 border dark:border-zinc-50/40";

const ContactForm = ({ name, emailAddress, message }: ContactFormProps) => {
  // defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  });

  // defining submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-2xl flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name={"name"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className={classNameForm}
                    placeholder="Your name..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    className={classNameForm}
                    placeholder="Your e-mail address..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="py-3 border dark:border-zinc-50/30"
                    placeholder="Write a message.."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="w-full px-4 py-7 uppercase"
            variant="default"
            type="submit"
          >
            submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
