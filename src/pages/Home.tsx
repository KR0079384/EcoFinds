import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Grid, List } from "lucide-react";

// Import generated images
import bambooPhoneCase from "@/assets/bamboo-phone-case.jpg";
import organicTshirt from "@/assets/organic-cotton-tshirt.jpg";
import solarLights from "@/assets/solar-garden-lights.jpg";
import recycledBottle from "@/assets/recycled-water-bottle.jpg";

const Home = () => {
  const categories = ["All", "Electronics", "Clothing", "Home & Garden", "Books", "Sports", "Toys"];
  
  const mockProducts = [
    {
      id: 1,
      title: "Sustainable Bamboo Phone Case",
      price: 25,
      category: "Electronics",
      image: bambooPhoneCase,
      seller: "EcoTech Store",
      condition: "new" as const,
      isEcoFriendly: true
    },
    {
      id: 2,
      title: "Organic Cotton T-Shirt",
      price: 35,
      category: "Clothing",
      image: organicTshirt,
      seller: "Green Fashion",
      condition: "like-new" as const,
      isEcoFriendly: true
    },
    {
      id: 3,
      title: "Solar-Powered Garden Lights",
      price: 45,
      category: "Home & Garden",
      image: solarLights,
      seller: "Solar Solutions",
      condition: "new" as const,
      isEcoFriendly: true
    },
    {
      id: 4,
      title: "Recycled Plastic Water Bottle",
      price: 15,
      category: "Sports",
      image: recycledBottle,
      seller: "Hydro Green",
      condition: "new" as const,
      isEcoFriendly: true
    },
    {
      id: 5,
      title: "Upcycled Wooden Desk Lamp",
      price: 80,
      category: "Home & Garden",
      image: solarLights, // Reuse for now
      seller: "Craft Masters",
      condition: "good" as const,
      isEcoFriendly: true
    },
    {
      id: 6,
      title: "Bio-degradable Phone Stand",
      price: 20,
      category: "Electronics",
      image: bambooPhoneCase, // Reuse for now
      seller: "Tech Green",
      condition: "new" as const,
      isEcoFriendly: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Eco Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover amazing sustainable products from our verified eco-conscious sellers
            </p>
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <div className="flex border rounded-lg overflow-hidden">
                <Button variant="ghost" size="sm" className="rounded-none bg-primary text-primary-foreground">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated with EcoFinds
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get the latest eco-friendly products and sustainability tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="eco" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;