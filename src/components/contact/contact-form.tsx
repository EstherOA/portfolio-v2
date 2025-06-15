import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Loader2Icon } from "lucide-react";

const formSchema = z.object({
  firstname: z
    .string()
    .min(1, {
      message: "Please enter your first name",
    })
    .max(50),
  lastname: z
    .string()
    .min(1, {
      message: "Please enter your last name",
    })
    .max(50),
  email: z.string().email("Please enter a valid email address"),
  title: z
    .string()
    .min(2, {
      message: "Title is required",
    })
    .max(50),
  message: z
    .string()
    .min(2, {
      message: "Message is required",
    })
    .max(50),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      title: "",
      message: "",
    },
  });

  async function handleSubmit() {
    const isValid = await form.trigger();
    if (!isValid || !formRef.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY as string
      )
      .then(() => {
        toast.success("Got your message!", {
          description: "I will reply shortly :)",
          position: "bottom-right",
        });
        form.reset();
      })
      .catch((e) => {
        console.error("failed to send message:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form ref={formRef} className="space-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="janedoe@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-fit rounded-none! hover:shadow-lg hover:bg-zinc-800! w-[150px] h-[50px] transition-all duration-300"
          type="button"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading && <Loader2Icon className="animate-spin" />}
          Submit
        </Button>
      </form>
      <Toaster />
    </Form>
  );
};

export default ContactForm;
