import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ✅ UI components (from your `ui/` folder)
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

// ✅ Custom components (we created these manually)
import Navigation from "@/components/Navigation";

// ✅ Pages (from your `pages/` folder)
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Index from "./pages/Index"; // login/signup page
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import SellProduct from "./pages/SellProduct";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Global Navigation always visible */}
        <Navigation />

        <Routes>
          {/* Landing/Login page */}
          <Route path="/" element={<Index />} />

          {/* Main App pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/sell" element={<SellProduct />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
