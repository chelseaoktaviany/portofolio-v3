"use client";

// lib
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// store
import { useContactStore } from "@/store/contactStore";

// validation
import { contactSchema, ContactFormData } from "@/lib/validation";

// components
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const classNameInput =
  "py-7 border border-zinc-950/40 dark:border-zinc-50/40 !text-lg placeholder:text-lg";

const classNameLabel = "text-lg";

const ContactForm = () => {
  // defining form
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  });

  const { loading, success, error, setStatus, reset } = useContactStore();

  // defining submit handler
  const onSubmit = (values: ContactFormData) => {
    setStatus({ loading: true, error: null, success: false });

    // api handle (soon)

    try {
      setStatus({ success: true });

      reset();

      // log
      console.log(values);
    } catch (err: any) {
      setStatus({ error: err.message });
    } finally {
      setStatus({ loading: false });
    }
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
                <FormLabel className={classNameLabel}>Name</FormLabel>
                <FormControl>
                  <Input
                    className={classNameInput}
                    placeholder="Your name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={classNameLabel}>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className={classNameInput}
                    placeholder="Your e-mail address..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={classNameLabel}>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-50 py-3 border border-zinc-950/30
                      dark:border-zinc-50/30 placeholder:text-lg !text-lg
                      resize-none"
                    placeholder="Write a message.."
                    rows={7}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*error handling*/}
          {error && (
            <FormMessage className="text-sm text-red-500">{error}</FormMessage>
          )}
          {success && (
            <FormMessage className="text-sm text-green-600">
              Message sent successfully!
            </FormMessage>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-7 hover:cursor-pointer uppercase
              tracking-wider"
            variant="default"
          >
            {loading ? "sending..." : "send message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
