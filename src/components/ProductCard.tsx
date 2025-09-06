import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  condition: "new" | "like-new" | "good" | "fair";
  isEcoFriendly?: boolean;
}

const ProductCard = ({ 
  id, 
  title, 
  price, 
  category, 
  image, 
  seller, 
  condition,
  isEcoFriendly = true 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const conditionColors = {
    "new": "bg-eco-green text-white",
    "like-new": "bg-eco-light text-white",
    "good": "bg-eco-mint text-foreground",
    "fair": "bg-muted text-muted-foreground"
  };

  return (
    <Card className="group overflow-hidden hover:shadow-card transition-smooth cursor-pointer gradient-card border-0">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Eco Badge */}
        {isEcoFriendly && (
          <Badge className="absolute top-2 left-2 bg-eco-green text-white border-0">
            Eco-Friendly
          </Badge>
        )}
        
        {/* Like Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/90 hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart 
            className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground line-clamp-2 flex-1 mr-2">
            {title}
          </h3>
          <span className="text-xl font-bold text-primary">
            ${price}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <Badge className={`text-xs ${conditionColors[condition]}`}>
            {condition}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">
          Sold by {seller}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
          onClick={(e) => e.stopPropagation()}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;