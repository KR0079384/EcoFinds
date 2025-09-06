import Navigation from "@/components/Navigation";
// import Navigation from "../components/Navigation.tsx";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Heart, ShoppingCart, Star, Shield, Truck, RotateCcw, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const product = {
    id: 1,
    title: "Sustainable Bamboo Phone Case",
    price: 25,
    originalPrice: 35,
    category: "Electronics",
    condition: "new",
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    seller: {
      name: "EcoTech Store",
      rating: 4.8,
      reviews: 156,
      joined: "2022"
    },
    description: "This beautifully crafted bamboo phone case is the perfect blend of style and sustainability. Made from 100% natural bamboo with a smooth finish, it provides excellent protection while being completely biodegradable. The case features precise cutouts for all ports and buttons, wireless charging compatibility, and a comfortable grip texture.",
    features: [
      "100% natural bamboo construction",
      "Wireless charging compatible",
      "Shock-absorbing design",
      "Precise port cutouts",
      "Biodegradable material",
      "Comfortable grip texture"
    ],
    ecoFeatures: [
      "Made from recycled materials",
      "Carbon-neutral shipping",
      "Biodegradable packaging",
      "Ethically sourced"
    ],
    specifications: {
      "Material": "Natural Bamboo",
      "Compatibility": "iPhone 14 Pro",
      "Weight": "25g",
      "Dimensions": "6.1 x 3.0 x 0.4 inches",
      "Color": "Natural Wood"
    }
  };

  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      comment: "Love this case! The bamboo feels premium and it fits perfectly. Great eco-friendly option!"
    },
    {
      id: 2,
      user: "Mike R.",
      rating: 4,
      date: "2024-01-10",
      comment: "Nice quality and fast shipping. The texture is very comfortable to hold."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-card"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart 
                    className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </Button>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-eco-green text-white">
                    Eco-Friendly
                  </Badge>
                  <Badge variant="outline">
                    {product.category}
                  </Badge>
                  <Badge className="bg-eco-light text-white">
                    {product.condition}
                  </Badge>
                </div>
                
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge variant="destructive">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Seller Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {product.seller.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{product.seller.name}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{product.seller.rating}</span>
                          <span>({product.seller.reviews} reviews)</span>
                          <span>• Member since {product.seller.joined}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="eco" size="lg" className="flex-1">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Buy Now
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-5 h-5 text-eco-green" />
                  <span>Buyer Protection</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-5 h-5 text-eco-green" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-5 h-5 text-eco-green" />
                  <span>30-Day Returns</span>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-eco-green rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eco Features */}
              <div className="bg-eco-mint/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-eco-green">
                  🌱 Eco-Friendly Features
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.ecoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-eco-green rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Specifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.user}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;