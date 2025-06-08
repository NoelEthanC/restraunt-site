import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function FeaturedDishes() {
    const featuredDishes = [
        {
            name: "Grilled Lobster Tail",
            description:
                "Fresh lobster tail grilled to perfection, served with herb butter and seasonal vegetables",
            image: "/images/dishes/10.jpg",
            price: "$45",
        },
        {
            name: "Wagyu Beef Steak",
            description:
                "Premium Wagyu beef cooked to your preference, accompanied by truffle mashed potatoes",
            image: "/images/dishes/1.jpg",
            price: "$65",
        },
        {
            name: "Saffron Risotto",
            description:
                "Creamy risotto infused with saffron, topped with pan-seared scallops and parmesan",
            image: "/images/dishes/4.jpg",
            price: "$38",
        },
    ];

    return (
        <section
            id="menu"
            className="w-full py-20 md:py-20 lg:py-28  relative bg-restaurant-white overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-restaurant-cream opacity-100 rounded-bl-full"></div>
            <img
                src="/images/pasta-bowl.png"
                alt="Pasta Bowl from the menu"
                className="md:w-24 md:h-24 h-12 w-12 absolute top-24 right-12 transform animate-pulse  rotate-12"
            />
            <img
                src="/images/cocktail.png"
                alt="cocktail from the menu"
                className="md:w-24 md:h-24 h-12 absolute md:top-28 top-24 left-12 transform an  rotate-12"
            />
            <img src="" alt="" className="" />
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 mb-8 slide-up">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-restaurant-charcoal font-['Playfair_Display']">
                            Our Menu
                        </h2>
                        <div className="w-20 h-1 bg-cinnamon mx-auto mt-2 mb-4"></div>
                        <p className="max-w-[700px] text-restaurant-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Experience our culinary masterpieces crafted with
                            passion and precision
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  stagger-container">
                        {featuredDishes.map((dish) => (
                            <div
                                key={dish.name}
                                className="stagger-item group relative overflow-hidden rounded-lg border border-restaurant-gray/30 bg-espresso menu-item"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={dish.image || "/placeholder.svg"}
                                        alt={dish.name}
                                        width={600}
                                        height={400}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-restaurant-charcoal">
                                            {dish.name}
                                        </h3>
                                        <span className="text-restaurant-orange font-bold">
                                            {dish.price}
                                        </span>
                                    </div>
                                    <p className="text-almond mb-4">
                                        {dish.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-restaurant-orange"></div>
                            </div>
                        ))}
                    </div>
                    <div className=" scale-in">
                        <Link href="/menu">
                            <Button className="border-restaurant-orange bg-restaurant-charcoal  flex  items-center text-restaurant-white hover:bg-restaurant-orange/80 px-8 py-5 text-lg">
                                <>View Full Menu</>
                                <ChevronRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
