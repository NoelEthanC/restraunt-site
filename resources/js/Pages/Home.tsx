import { AboutSection } from "@/Components/landing-page/About";
import ContactSection from "@/Components/landing-page/ContactSection";
import { FeaturedDishes } from "@/Components/landing-page/FeaturedDishes";
import GallerySection from "@/Components/landing-page/GallerySection";
import Hero from "@/Components/landing-page/Hero";
import TestimonialsSection from "@/Components/landing-page/Testimonials";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";
import { Contact } from "lucide-react";
import React from "react";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <Hero />
            {/* <section className="relative w-full bg-caramel">
     
                h-1/2 bg-restaurant-orange opacity-30 self-center flex blur-3xl rounded-"></div>
                    <div className="flex flex-col items-center justify-center gap-4 py-12 md:py-24 lg:py-32">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-caramel font-['Playfair_Display']">
                            Welcome to Max & Sherry!
                        </h2>
                        <p className="text-caramel md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Experience the perfect blend of culinary artistry
                            and warm hospitality at Max & Sherry Dine and
                            Lounge.
                        </p>
                    </div>
                </div>
            </section> */}
            <FeaturedDishes />
            <GallerySection />
            <AboutSection />
            <TestimonialsSection />
            <ContactSection />
        </>
    );
};

Home.layout = (
    page: Iterable<React.ReactNode> | React.ReactPortal | null | undefined
) => <SiteLayout children={page} />;

export default Home;
