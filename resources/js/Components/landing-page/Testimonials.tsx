import React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    username: string;
    avatar: string;
    content: string;
    rating: number;
    source: "facebook" | "instagram" | "twitter";
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        username: "@saraheats",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        content:
            "Max & Sherry's is my go-to spot for celebrations! The ambiance is perfect and that chocolate soufflé is absolutely divine. I've never had better!",
        rating: 5,
        source: "instagram",
    },
    {
        id: 2,
        name: "Michael Chen",
        username: "michael.c",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        content:
            "The wine pairings here are exceptional. The sommelier really knows how to enhance every dish with the perfect complement. Worth every penny!",
        rating: 5,
        source: "facebook",
    },
    {
        id: 3,
        name: "Alicia Rodriguez",
        username: "@foodie_ali",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        content:
            "I've been to many fine dining establishments, but the service at Max & Sherry's is unmatched. The staff makes you feel like family while maintaining absolute professionalism.",
        rating: 5,
        source: "twitter",
    },
    {
        id: 4,
        name: "David Thompson",
        username: "dave_t",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        content:
            "Their seasonal menu never disappoints! Each visit offers something new and exciting. The farm-to-table commitment really shines through in every bite.",
        rating: 5,
        source: "facebook",
    },
];

const SourceIcon = ({ source }: { source: string }) => {
    switch (source) {
        case "facebook":
            return <Facebook className="h-4 w-4 text-blue-600" />;
        case "instagram":
            return <Instagram className="h-4 w-4 text-pink-600" />;
        case "twitter":
            return <Twitter className="h-4 w-4 text-blue-400" />;
        default:
            return null;
    }
};

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${
                        i < rating ? "text-restaurant-orange" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialsSection = () => {
    return (
        <section
            id="testimonials"
            className="section-padding bg-restaurant-white "
        >
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="section-title">What People Say</h2>
                    <p className="section-subtitle">Guest Testimonials</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="bg-restaurant-charcoal bg-opacity-30 border-restaurant-gold hover:shadow-lg transition-all duration-300 animate-fade-in"
                            style={{
                                animationDelay: `${testimonial.id * 0.2}s`,
                            }}
                        >
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="mb-4">
                                    <StarRating rating={testimonial.rating} />
                                </div>

                                <p className="text-restaurant-charcoal/80 italic mb-6 flex-grow">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-restaurant-gold border-opacity-30">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10 border-2 border-restaurant-gold">
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                            />
                                            <AvatarFallback className="bg-restaurant-brown text-restaurant-ivory">
                                                {testimonial.name.substring(
                                                    0,
                                                    2
                                                )}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium text-restaurant-ivory">
                                                {testimonial.name}
                                            </p>
                                            <div className="flex items-center text-xs text-restaurant-charcoal/70">
                                                <SourceIcon
                                                    source={testimonial.source}
                                                />
                                                <span className="ml-1">
                                                    {testimonial.username}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <SourceIcon source={testimonial.source} />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
