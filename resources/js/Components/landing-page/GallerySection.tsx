import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { AspectRatio } from "@/Components/ui/aspect-ratio";

interface GalleryImage {
    url: string;
    alt: string;
    category: "interior" | "food" | "events";
}

const galleryImages: GalleryImage[] = [
    {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
        alt: "Elegant restaurant interior with mood lighting",
        category: "interior",
    },
    {
        url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
        alt: "Signature steak dish with garnish",
        category: "food",
    },
    {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        alt: "Bar area with premium spirits",
        category: "interior",
    },
    {
        url: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop",
        alt: "Gourmet seafood platter",
        category: "food",
    },
    {
        url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
        alt: "Wine selection in cellar",
        category: "interior",
    },
    {
        url: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=2068&auto=format&fit=crop",
        alt: "Artistically plated dessert",
        category: "food",
    },
    {
        url: "https://images.unsplash.com/photo-1621494547944-5797d35bf3a7?q=80&w=2070&auto=format&fit=crop",
        alt: "Private dining event setting",
        category: "events",
    },
    {
        url: "https://images.unsplash.com/photo-1610651342286-24d2a611362c?q=80&w=2070&auto=format&fit=crop",
        alt: "Chef preparing gourmet dish",
        category: "food",
    },
];

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(
        null
    );

    // Filter images based on active category
    const filteredImages =
        activeCategory === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section
            id="gallery"
            className="section-padding bg-restaurant-white relative"
        >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-restaurant-cream opacity-100 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-restaurant-orange opacity-80 rounded-tr-full"></div>
            <img
                src="/images/dish-1.png"
                alt="Pasta Bowl from the menu"
                className="md:w-48 md:h-48 h-12 w-12 absolute top-20 right-12 transform object-contain  rotate-12"
            />
            <img
                src="/images/drinks.png"
                alt="Drinks"
                className="absolute top-20  left-0 w-24 h-24 md:w-48 md:h-48  "
            />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-restaurant-orange opacity-80 rounded-tr-full"></div>

            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="section-title  text-restaurant-charcoal font-['Playfair_Display']">
                        Gallery
                    </h2>
                    <p className="section-subtitle  te ">
                        A visual journey through our space and cuisine
                    </p>
                </div>

                {/* Gallery filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <button
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                            activeCategory === "all"
                                ? "bg-restaurant-orange text-restaurant-charcoal border-restaurant-orange"
                                : "border-restaurant-brown text-restaurant-ivory hover:border-restaurant-orange"
                        }`}
                        onClick={() => setActiveCategory("all")}
                    >
                        All
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                            activeCategory === "interior"
                                ? "bg-restaurant-orange text-restaurant-charcoal border-restaurant-orange"
                                : "border-restaurant-brown text-restaurant-ivory hover:border-restaurant-orange"
                        }`}
                        onClick={() => setActiveCategory("interior")}
                    >
                        Interior
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                            activeCategory === "food"
                                ? "bg-restaurant-orange text-restaurant-charcoal border-restaurant-orange"
                                : "border-restaurant-brown text-restaurant-ivory hover:border-restaurant-orange"
                        }`}
                        onClick={() => setActiveCategory("food")}
                    >
                        Food
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                            activeCategory === "events"
                                ? "bg-restaurant-orange text-restaurant-charcoal border-restaurant-orange"
                                : "border-restaurant-brown text-restaurant-ivory hover:border-restaurant-orange"
                        }`}
                        onClick={() => setActiveCategory("events")}
                    >
                        Events
                    </button>
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div
                                    className="overflow-hidden rounded-lg cursor-pointer group opacity-0 animate-fade-in"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <AspectRatio ratio={1 / 1}>
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </AspectRatio>
                                    <div className="absolute inset-0 bg-gradient-to-t from-restaurant-charcoal to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-restaurant-ivory text-sm font-medium">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            </DialogTrigger>

                            <DialogContent className="w-full sm:max-w-[80vw] h-auto max-h-[90vh] p-0 bg-transparent border-0">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
