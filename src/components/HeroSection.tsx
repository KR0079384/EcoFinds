import { Button } from "@/components/ui/button";
import { Search, Leaf, Recycle, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Import hero background images
import heroForest from "@/assets/hero-forest.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import heroOcean from "@/assets/hero-ocean.jpg";
import heroWind from "@/assets/hero-wind.jpg";

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  const heroImages = [heroForest, heroSolar, heroOcean, heroWind];

  useEffect(() => {
    if (!api) return;

    // Auto-play carousel
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full w-full">
                  <img 
                    src={image} 
                    alt={`Eco hero background ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Leaf className="w-12 h-12" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Sustainable
            <span className="block text-eco-mint">Products</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our eco-friendly marketplace where every purchase makes a positive impact on our planet.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm text-white/80">Eco Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-sm text-white/80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-sm text-white/80">Less Waste</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Search className="w-5 h-5 mr-2" />
              Start Shopping
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Sell Your Items
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-xl">
              <Recycle className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Circular Economy</h3>
              <p className="text-sm text-white/80">Give products a second life</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <Heart className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Verified Sellers</h3>
              <p className="text-sm text-white/80">Trusted eco-conscious community</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <Leaf className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Carbon Neutral</h3>
              <p className="text-sm text-white/80">Offset your shopping footprint</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;