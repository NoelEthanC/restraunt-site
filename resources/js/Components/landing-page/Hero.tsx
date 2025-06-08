import React from "react";
import { Button } from "@/Components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
// TODO: Add dynamic retrieval of images from the database
const Hero = () => {
    const handleReservation = () => {
        // Smooth scroll to reservation section
        const element = document.getElementById("reservation");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnInteraction: false })
    );

    const carouselImages = [
        {
            url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
            alt: "Nsima with chambo dish",
        },
        {
            url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
            alt: "Rice and beans dish",
        },
        {
            url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
            alt: "Elegant restaurant table setup with ambient lighting",
        },
    ];

    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Carousel for background images */}
            <div className="absolute inset-0 z-0">
                <Carousel
                    className="w-full h-full"
                    plugins={[plugin.current]}
                    opts={{ loop: true }}
                >
                    <CarouselContent className="h-full">
                        {carouselImages.map((image, index) => (
                            <CarouselItem key={index} className="h-full ">
                                <div className="relative w-full h-full">
                                    <img
                                        className="w-full md:h-full   min-h-[100vh] md:min-h-0 object-cover "
                                        src={image.url}
                                        alt={image.alt}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-65" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Content */}
            <div className="container-custom z-10 text-center">
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 text-restaurant-white opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                >
                    Max <span className="text-restaurant-orange">&</span> Sherry
                </h1>
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-playfair text-restaurant-white mb-6 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                >
                    Dine and Lounge
                </h2>
                <p
                    className="text-lg md:text-xl text-restaurant-gray font-sans max-w-xl mx-auto mb-8 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.9s" }}
                >
                    Where every dish tells a story and every moment becomes a
                    memory.
                </p>
                <div
                    className="flex flex-col md:flex-row gap-4 justify-center opacity-0 animate-fade-in"
                    style={{ animationDelay: "1.2s" }}
                >
                    <Button
                        onClick={handleReservation}
                        className="bg-restaurant-orange text-restaurant-white hover:bg-opacity-90 px-8 py-5 text-lg"
                    >
                        Explore Menu
                    </Button>
                    <Button
                        variant="outline"
                        className="border-restaurant-orange bg-transparent text-restaurant-white hover:bg-restaurant-orange hover:text-restaurant-white px-8 py-5 text-lg"
                        onClick={() => {
                            const element = document.getElementById("menu");
                            if (element)
                                element.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Reserve a Table
                    </Button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer animate-bounce"
                onClick={() => {
                    const element = document.getElementById("menu");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 5V19M12 19L19 12M12 19L5 12"
                        stroke="#F5F5F5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
