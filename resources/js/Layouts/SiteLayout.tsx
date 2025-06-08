import Footer from "@/Components/landing-page/Footer";
import Navbar from "@/Components/landing-page/Navbar";
import React from "react";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen w-full bg-restaurant-charcoal">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default SiteLayout;
