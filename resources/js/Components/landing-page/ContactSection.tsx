import React from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

// Form schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z
        .string()
        .min(5, { message: "Subject must be at least 5 characters." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    // Form definition
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    // Form submission handler
    const onSubmit = async (values: ContactFormValues) => {
        setIsSubmitting(true);

        // Simulate API call with timeout
        setTimeout(() => {
            console.log("Contact form data:", values);

            // Show success message
            toast({
                title: "Message Sent",
                description:
                    "Thank you for your message. We'll respond as soon as possible.",
                duration: 5000,
            });

            // Reset form
            form.reset();
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section
            id="contact"
            className="section-padding bg-restaurant-white relative"
            // style={{ backgroundColor: "#f8f8f8" }}
        >
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        We'd love to hear from you
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left column - Contact info and map */}
                    <div className="space-y-8 animate-fade-in">
                        {/* Contact information cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-restaurant-white p-6 rounded-lg border border-restaurant-gold hover:border-restaurant-gold transition-all duration-300">
                                <h3 className="font-playfair font-bold text-xl text-restaurant-orange mb-3">
                                    Address
                                </h3>
                                <p className="text-restaurant-charcoal/75">
                                    123 Gourmet Avenue
                                    <br />
                                    Lilongwe, Malawi
                                </p>
                            </div>

                            <div className="bg-restaurant-white p-6 rounded-lg border border-restaurant-cream hover:border-restaurant-gold transition-all duration-300">
                                <h3 className="font-playfair text-xl text-restaurant-orange font-bold mb-3">
                                    Reservations
                                </h3>
                                <p className="text-restaurant-charcoal/75">
                                    +265 1234 5678
                                    <br />
                                    reservations@maxsherry.com
                                </p>
                            </div>

                            <div className="bg-restaurant-white p-6 rounded-lg border border-restaurant-gold hover:border-restaurant-gold transition-all duration-300">
                                <h3 className="font-playfair text-xl text-restaurant-orange font-bold mb-3">
                                    Opening Hours
                                </h3>
                                <p className="text-restaurant-charcoal/75">
                                    Mon-Thu: 17:00 - 22:00
                                    <br />
                                    Fri-Sat: 17:00 - 23:00
                                    <br />
                                    Sun: 17:00 - 21:00
                                </p>
                            </div>

                            <div className="bg-restaurant-white p-6 rounded-lg border border-restaurant-gold hover:border-restaurant-gold transition-all duration-300">
                                <h3 className="font-playfair text-xl text-restaurant-orange font-bold mb-3">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:text-blue-500 transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-pink-400 hover:text-restaurant-gold transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-blue-400 hover:text-restaurant-gold transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-lg overflow-hidden border border-restaurant-brown h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d34.9732405!3d-15.8123339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845d179d9ef3b%3A0x4104d43b6345576f!2sMax%20%26%20Sherry%20Dine%20and%20Lounge!5e0!3m2!1sen!2smw!4v1715113246003!5m2!1sen!2smw"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right column - Contact form */}
                    <div
                        className="bg-restaurant-white p-6 md:p-10 rounded-lg border border-restaurant-orange animate-fade-in"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <h3 className="text-2xl font-playfair text-restaurant-orange font-bold mb-6">
                            Send a Message
                        </h3>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                {/* Name field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-restaurant-ivory">
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-restaurant-cream/50  border-none"
                                                    placeholder="Your full name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-restaurant-ivory">
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-restaurant-cream/50  border-none"
                                                    placeholder="Your email"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Subject field */}
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-restaurant-ivory">
                                                Subject
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-restaurant-cream/50  border-none"
                                                    placeholder="Subject of your message"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Message field */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-restaurant-ivory">
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="bg-restaurant-cream/50  border-none resize-none h-32"
                                                    placeholder="Your message..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full bg-restaurant-orange text-restaurant-charcoal hover:bg-opacity-80"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
