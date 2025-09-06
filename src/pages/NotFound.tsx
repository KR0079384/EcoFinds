import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 gradient-eco rounded-full flex items-center justify-center mx-auto mb-6">
          <Leaf className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for seems to have wandered off into the sustainable wilderness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="eco" size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/sell">
            <Button variant="outline" size="lg">
              Start Selling
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 p-4 bg-eco-mint/20 rounded-lg">
          <p className="text-sm text-center">
            🌱 While you're here, why not browse our eco-friendly marketplace?
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;