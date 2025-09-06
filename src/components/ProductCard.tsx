import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  condition: "new" | "like-new" | "good";
  isEcoFriendly: boolean;
};

const ProductCard = ({ title, price, image, seller, condition }: ProductProps) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{seller}</p>
        <p className="text-sm">Condition: {condition}</p>
        <p className="text-xl font-bold mt-2">${price}</p>
        <Button className="mt-3 w-full">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
