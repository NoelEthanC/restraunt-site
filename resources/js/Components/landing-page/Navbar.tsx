import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect which section is currently in view
            const sections = [
                "home",
                "menu",
                "about",
                "gallery",
                "contact",
                "reservation",
            ];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (sectionId: string) => {
        setIsOpen(false);
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Helper function to determine active link style
    const getLinkClass = (sectionId: string) => {
        return cn(
            "transition-colors duration-300 cursor-pointer",
            activeSection === sectionId
                ? "text-gray-200 font-medium"
                : "text-restaurant-ivory hover:text-gray-200"
        );
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "backdrop-blur-md bg-black/30 py-2 shadow-lg"
                    : "bg-transparent py-0"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-gray-200 font-playfair font-bold text-xl md:text-3xl"
                >
                    <img
                        src="/images/black-logo.png"
                        alt="logo"
                        className="w-20 filter invert filter-brightness-200   h-16 md:h-24"
                    />
                    {/* Max <span className="text-restaurant-ivory">&</span> Sherry */}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    <a
                        onClick={() => handleLinkClick("home")}
                        className={getLinkClass("home")}
                    >
                        Home
                    </a>
                    <a
                        onClick={() => handleLinkClick("menu")}
                        className={getLinkClass("menu")}
                    >
                        Menu
                    </a>
                    <a
                        onClick={() => handleLinkClick("about")}
                        className={getLinkClass("about")}
                    >
                        About
                    </a>
                    <a
                        onClick={() => handleLinkClick("gallery")}
                        className={getLinkClass("gallery")}
                    >
                        Gallery
                    </a>
                    <a
                        onClick={() => handleLinkClick("contact")}
                        className={getLinkClass("contact")}
                    >
                        Contact
                    </a>
                    <Button
                        onClick={() => handleLinkClick("reservation")}
                        className={cn(
                            "bg-transparent border border-restaurant-orange hover:bg-restaurant-orange hover:transition-all hover:scale-105 hover:delay-100 mx-auto px-8 py-1",
                            activeSection === "reservation"
                                ? "bg-restaurant-orange text-white"
                                : "text-restaurant-orange hover:text-white"
                        )}
                    >
                        Reserve a Table
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-restaurant-ivory p-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/90 z-40 pt-20"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="container-custom flex flex-col space-y-6 text-center">
                        <a
                            onClick={() => handleLinkClick("home")}
                            className={cn(
                                "text-xl py-3",
                                activeSection === "home"
                                    ? "text-gray-200 font-medium"
                                    : "text-restaurant-ivory hover:text-gray-200"
                            )}
                        >
                            Home
                        </a>
                        <a
                            onClick={() => handleLinkClick("menu")}
                            className={cn(
                                "text-xl py-3",
                                activeSection === "menu"
                                    ? "text-gray-200 font-medium"
                                    : "text-restaurant-ivory hover:text-gray-200"
                            )}
                        >
                            Menu
                        </a>
                        <a
                            onClick={() => handleLinkClick("about")}
                            className={cn(
                                "text-xl py-3",
                                activeSection === "about"
                                    ? "text-gray-200 font-medium"
                                    : "text-restaurant-ivory hover:text-gray-200"
                            )}
                        >
                            About
                        </a>
                        <a
                            onClick={() => handleLinkClick("gallery")}
                            className={cn(
                                "text-xl py-3",
                                activeSection === "gallery"
                                    ? "text-gray-200 font-medium"
                                    : "text-restaurant-ivory hover:text-gray-200"
                            )}
                        >
                            Gallery
                        </a>
                        <a
                            onClick={() => handleLinkClick("contact")}
                            className={cn(
                                "text-xl py-3",
                                activeSection === "contact"
                                    ? "text-gray-200 font-medium"
                                    : "text-restaurant-ivory hover:text-gray-200"
                            )}
                        >
                            Contact
                        </a>
                        <Button
                            onClick={() => handleLinkClick("reservation")}
                            className={cn(
                                "bg-transparent border border-restaurant-orange hover:bg-restaurant-orange hover:transition-all hover:translate-x-10 mx-auto px-8 py-2",
                                activeSection === "reservation"
                                    ? "bg-restaurant-orange text-white"
                                    : "text-restaurant-white hover:text-white"
                            )}
                        >
                            Reserve a Table
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
