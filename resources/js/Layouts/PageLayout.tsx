"use client";

import type React from "react";

export default function PageLayout({
    heading,
    subheading,
    image,
    children,
}: {
    heading: string;
    subheading: string;
    image: string;
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundPosition: "center",
                        }}
                    />
                    <div className="absolute inset-0 bg-[#0A0908]/70" />
                </div>
                <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal text-[#F2F4F3] font-['Playfair_Display']">
                        {heading}
                    </h1>
                    <div className="w-20 h-1 bg-[#49111C] mx-auto"></div>
                    <p className="text-xl text-[#F2F4F3]/90 max-w-[700px] mx-auto">
                        {subheading}
                    </p>
                </div>
            </section>

            <section className="">{children}</section>
        </main>
    );
}
