import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import SiteLayout from "@/Layouts/SiteLayout";
import PageLayout from "@/Layouts/PageLayout";

// Menu data structure
interface MenuItem {
    name: string;
    description: string;
    price: string;
    popular?: boolean;
}

interface MenuCategory {
    category: string;
    items: MenuItem[];
}

const menuData: MenuCategory[] = [
    {
        category: "starters",
        items: [
            {
                name: "Truffle Arancini",
                description: "Wild mushroom risotto balls with truffle aioli",
                price: "$16",
                popular: true,
            },
            {
                name: "Pan-Seared Scallops",
                description: "With butternut squash puree and crispy pancetta",
                price: "$19",
            },
            {
                name: "Burrata Caprese",
                description:
                    "Heirloom tomatoes, fresh burrata, basil oil, aged balsamic",
                price: "$15",
            },
            {
                name: "Prawn Cocktail",
                description:
                    "Tiger prawns with avocado, cucumber, spicy tomato dressing",
                price: "$17",
            },
            {
                name: "Beef Carpaccio",
                description:
                    "Thinly sliced beef with truffle oil, capers, and parmesan",
                price: "$18",
            },
            {
                name: "Duck Confit Croquettes",
                description: "Served with orange marmalade and micro greens",
                price: "$16",
            },
        ],
    },
    {
        category: "mains",
        items: [
            {
                name: "Filet Mignon",
                description:
                    "8oz grass-fed beef with red wine jus, truffled potato puree",
                price: "$42",
                popular: true,
            },
            {
                name: "Herb-Crusted Rack of Lamb",
                description:
                    "With rosemary jus, spring vegetables and mint gremolata",
                price: "$38",
            },
            {
                name: "Pan-Roasted Sea Bass",
                description:
                    "With saffron risotto, fennel, citrus butter sauce",
                price: "$36",
            },
            {
                name: "Wild Mushroom Ravioli",
                description:
                    "With sage brown butter, roasted walnuts, aged parmesan",
                price: "$28",
            },
            {
                name: "Braised Short Ribs",
                description:
                    "Slow cooked with red wine, served with creamy polenta",
                price: "$34",
            },
            {
                name: "Roasted Duck Breast",
                description:
                    "With cherry reduction, wild rice, and seasonal vegetables",
                price: "$38",
            },
        ],
    },
    {
        category: "desserts",
        items: [
            {
                name: "Dark Chocolate Soufflé",
                description: "With vanilla bean ice cream and raspberry coulis",
                price: "$14",
                popular: true,
            },
            {
                name: "Crème Brûlée",
                description:
                    "Classic vanilla bean custard with caramelized sugar",
                price: "$12",
            },
            {
                name: "Tiramisu",
                description:
                    "Coffee-soaked ladyfingers, mascarpone cream, cocoa dusting",
                price: "$13",
            },
            {
                name: "Seasonal Fruit Tart",
                description: "With almond frangipane and honey mascarpone",
                price: "$11",
            },
            {
                name: "Sticky Toffee Pudding",
                description:
                    "Warm date pudding with butterscotch sauce and vanilla ice cream",
                price: "$13",
            },
            {
                name: "Chocolate Lava Cake",
                description:
                    "Warm chocolate cake with molten center and crème anglaise",
                price: "$14",
            },
        ],
    },
    {
        category: "drinks",
        items: [
            {
                name: "Signature Old Fashioned",
                description:
                    "Bourbon, house bitters, orange peel, smoked with cherry wood",
                price: "$15",
                popular: true,
            },
            {
                name: "Elderflower Spritz",
                description:
                    "Gin, elderflower liqueur, prosecco, mint, cucumber",
                price: "$14",
            },
            {
                name: "Sommelier's Wine Selection",
                description:
                    "Ask your server for today's carefully curated selection",
                price: "Various",
            },
            {
                name: "Artisanal Coffee",
                description: "Single-origin beans prepared to your preference",
                price: "$6",
            },
            {
                name: "Espresso Martini",
                description: "Vodka, coffee liqueur, fresh espresso, vanilla",
                price: "$16",
            },
            {
                name: "Seasonal Craft Cocktail",
                description:
                    "Rotating selection of seasonal ingredients and spirits",
                price: "$15",
            },
        ],
    },
    {
        category: "vegetarian",
        items: [
            {
                name: "Charred Cauliflower Steak",
                description:
                    "With romesco sauce, toasted almonds, and herb oil",
                price: "$24",
                popular: true,
            },
            {
                name: "Wild Mushroom Risotto",
                description:
                    "Creamy arborio rice with seasonal mushrooms and truffle oil",
                price: "$26",
            },
            {
                name: "Roasted Vegetable Tart",
                description:
                    "Seasonal vegetables, goat cheese, caramelized onions in puff pastry",
                price: "$22",
            },
            {
                name: "Eggplant Parmesan",
                description:
                    "Layers of eggplant, san marzano tomato sauce, and fresh mozzarella",
                price: "$24",
            },
            {
                name: "Grilled Halloumi Salad",
                description:
                    "With quinoa, roasted vegetables, and pomegranate dressing",
                price: "$20",
            },
            {
                name: "Vegetable Paella",
                description:
                    "Saffron rice with seasonal vegetables and herb aioli",
                price: "$25",
            },
        ],
    },
    {
        category: "kids",
        items: [
            {
                name: "Mini Cheeseburger",
                description: "House-ground beef patty with cheddar and fries",
                price: "$12",
                popular: true,
            },
            {
                name: "Chicken Tenders",
                description:
                    "Breaded chicken breast with honey mustard and fries",
                price: "$10",
            },
            {
                name: "Mac & Cheese",
                description: "Creamy three-cheese sauce with shell pasta",
                price: "$9",
            },
            {
                name: "Spaghetti & Meatballs",
                description:
                    "House-made meatballs with tomato sauce and parmesan",
                price: "$11",
            },
            {
                name: "Grilled Cheese",
                description:
                    "Melted cheddar and swiss on sourdough with tomato soup",
                price: "$9",
            },
            {
                name: "Fish Fingers",
                description:
                    "Crispy breaded fish with tartar sauce and vegetables",
                price: "$10",
            },
        ],
    },
];

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>("starters");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 4;

    // Calculate pagination
    const getCurrentItems = (category: string) => {
        const categoryData = menuData.find((c) => c.category === category);
        if (!categoryData) return [];

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return categoryData.items.slice(startIndex, endIndex);
    };

    const totalPages = (category: string) => {
        const categoryData = menuData.find((c) => c.category === category);
        if (!categoryData) return 1;
        return Math.ceil(categoryData.items.length / itemsPerPage);
    };

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Reset pagination when category changes
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    return (
        <section id="menu" className="section-padding bg-restaurant-white">
            <div className="container-custom">
                {/* Menu tabs and content */}
                <Tabs
                    defaultValue="starters"
                    className="w-full"
                    onValueChange={handleCategoryChange}
                >
                    <div className="flex justify-center mb-10 overflow-x-auto">
                        <TabsList className="bg-restaurant-gold border border-restaurant-gold rounded-full h-auto p-1">
                            <TabsTrigger
                                value="starters"
                                className="data-[state=active]:bg-restaurant-orange rounded-full data-[state=active]:text-restaurant-charcoal rounded-full px-6 py-3"
                            >
                                Starters
                            </TabsTrigger>
                            <TabsTrigger
                                value="mains"
                                className="data-[state=active]:bg-restaurant-orange rounded-full data-[state=active]:text-restaurant-charcoal px-6 py-3"
                            >
                                Mains
                            </TabsTrigger>
                            <TabsTrigger
                                value="desserts"
                                className="data-[state=active]:bg-restaurant-orange rounded-full data-[state=active]:text-restaurant-charcoal px-6 py-3"
                            >
                                Desserts
                            </TabsTrigger>
                            <TabsTrigger
                                value="drinks"
                                className="data-[state=active]:bg-restaurant-orange rounded-full data-[state=active]:text-restaurant-charcoal px-6 py-3"
                            >
                                Drinks
                            </TabsTrigger>
                            <TabsTrigger
                                value="vegetarian"
                                className="data-[state=active]:bg-restaurant-orange rounded-full data-[state=active]:text-restaurant-charcoal px-6 py-3"
                            >
                                Vegetarian
                            </TabsTrigger>
                            <TabsTrigger
                                value="kids"
                                className="data-[state=active]:bg-restaurant-orange rounded-full data-[state=active]:text-restaurant-charcoal px-6 py-3"
                            >
                                Kids
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Content for each tab */}
                    {menuData.map((category) => (
                        <TabsContent
                            key={category.category}
                            value={category.category}
                            className="mt-0"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {getCurrentItems(category.category).map(
                                    (item, index) => (
                                        <Card
                                            key={index}
                                            className={`bg-restaurant-gold/30 border border-restaurant-cream/50 hover:border-restaurant-gold transition-colors duration-300 overflow-hidden
                      ${
                          activeCategory === category.category
                              ? "opacity-0 animate-fade-in"
                              : ""
                      }`}
                                            style={{
                                                animationDelay: `${
                                                    index * 0.15
                                                }s`,
                                            }}
                                        >
                                            <CardContent className="p-6 relative">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl md:text-2xl font-playfair text-restaurant-charcoal font-bold">
                                                        {item.name}
                                                        {item.popular && (
                                                            <span className="ml-2 text-xs bg-restaurant-burgundy text-restaurant-ivory px-2 py-1 rounded-full">
                                                                Chef's Choice
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <span className="font-playfair text-xl text-restaurant-orange font-bold">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <p className="text-restaurant-charcoal/70 opacity-80">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    )
                                )}
                            </div>

                            {/* Pagination */}
                            {totalPages(category.category) > 1 && (
                                <Pagination className="mt-10">
                                    <PaginationContent>
                                        {currentPage > 1 && (
                                            <PaginationItem>
                                                <PaginationPrevious
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(
                                                            currentPage - 1
                                                        );
                                                    }}
                                                    className="text-restaurant-ivory hover:text-restaurant-gold"
                                                />
                                            </PaginationItem>
                                        )}

                                        {Array.from({
                                            length: totalPages(
                                                category.category
                                            ),
                                        }).map((_, i) => (
                                            <PaginationItem key={i}>
                                                <PaginationLink
                                                    href="#"
                                                    isActive={
                                                        currentPage === i + 1
                                                    }
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(i + 1);
                                                    }}
                                                    className={`text-restaurant-ivory ${
                                                        currentPage === i + 1
                                                            ? "bg-restaurant-gold text-restaurant-charcoal"
                                                            : "hover:text-restaurant-gold"
                                                    }`}
                                                >
                                                    {i + 1}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}

                                        {currentPage <
                                            totalPages(category.category) && (
                                            <PaginationItem>
                                                <PaginationNext
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(
                                                            currentPage + 1
                                                        );
                                                    }}
                                                    className="text-restaurant-ivory hover:text-restaurant-gold"
                                                />
                                            </PaginationItem>
                                        )}
                                    </PaginationContent>
                                </Pagination>
                            )}
                        </TabsContent>
                    ))}
                </Tabs>

                {/* View full menu button */}
                <div className="text-center mt-12">
                    <button className="btn-outline">View Full Menu</button>
                </div>
            </div>
        </section>
    );
};

export default MenuPage;

MenuPage.layout = (page: React.ReactElement) => (
    <SiteLayout>
        <PageLayout
            heading="Our Menu"
            subheading=" Culinary excellence in every bite"
            image="/images/tables/table-1.webp "
            children={page}
        />
    </SiteLayout>
);
