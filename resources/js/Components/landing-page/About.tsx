export function AboutSection() {
    return (
        <section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32 bg-restaurant-gold"
        >
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div className="space-y-4 slide-right">
                        <div className="inline-block rounded-lg bg-restaurant-orange px-3 py-1 text-sm text-restaurant-white font-medium">
                            Our Story
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-restaurant-charcoal font-playfair">
                            A Culinary Journey
                        </h2>
                        <p className="text-restaurant-charcoal/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Founded in 2015, Max & Sherry Dine and Lounge was
                            born from a passion for exceptional cuisine and
                            memorable dining experiences. Our founders, Max and
                            Sherry, envisioned a restaurant that would combine
                            the finest ingredients with impeccable service in an
                            elegant setting.
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-restaurant-charcoal/80">
                                    8+
                                </span>
                                <span className="text-restaurant-charcoal/80">
                                    Years of Excellence
                                </span>
                            </div>
                            <div className="w-px h-12 bg-restaurant-charcoal/30"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-restaurant-charcoal/90">
                                    50+
                                </span>
                                <span className="text-restaurant-charcoal/80">
                                    Signature Dishes
                                </span>
                            </div>
                            <div className="w-px h-12 bg-restaurant-charcoal/30"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-restaurant-charcoal/90">
                                    5⭐
                                </span>
                                <span className="text-restaurant-charcoal/80">
                                    Customer Rating
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-[600px] slide-left bg-restaurant-white">
                        <img
                            src="/images/dishes/2.jpg"
                            alt="Restaurant interior"
                            className="object-cover  h-full w-full transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
