import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Leaf,
  ArrowRight,
  Chrome,
  Smartphone,
  Users,
} from "lucide-react";
import { PasswordStrengthIndicator } from "./PasswordStrengthIndicator";
import authHeroImage from "@/assets/auth-hero.jpg";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    rememberMe: false,
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${authHeroImage})` }}
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md text-center space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-8 h-8" />
                <span className="text-2xl font-bold">EcoFinds</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Discover Sustainable Treasures
            </h1>
            <p className="text-lg opacity-90">
              Join our community of eco-conscious buyers and sellers. Give
              pre-loved items a new life while reducing your environmental
              footprint.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold">500K+</div>
                <div className="opacity-80">Items Saved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold">50K+</div>
                <div className="opacity-80">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Authentication Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 bg-nature-gradient">
        <div className="w-full max-w-md">
          <Card className="shadow-warm border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center space-y-2">
              <div className="flex items-center justify-center lg:hidden mb-4">
                <Leaf className="w-6 h-6 text-primary mr-2" />
                <span className="text-xl font-bold text-primary">EcoFinds</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                {isLogin ? "Welcome Back!" : "Join EcoFinds"}
              </CardTitle>
              <CardDescription>
                {isLogin
                  ? "Sign in to continue your sustainable journey"
                  : "Create your account and start making a difference"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={isLogin ? "login" : "signup"} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted">
                  <TabsTrigger
                    value="login"
                    onClick={() => setIsLogin(true)}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-eco"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    onClick={() => setIsLogin(false)}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-eco"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10 bg-white/80 border-border focus:border-primary transition-all duration-300"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 bg-white/80 border-border focus:border-primary transition-all duration-300"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked) =>
                            handleInputChange("rememberMe", !!checked)
                          }
                        />
                        <Label htmlFor="remember" className="text-sm">
                          Remember me
                        </Label>
                      </div>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm text-primary"
                      >
                        Forgot password?
                      </Button>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                    >
                      Sign In
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="John Doe"
                          className="pl-10 bg-white/80 border-border focus:border-primary transition-all duration-300"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10 bg-white/80 border-border focus:border-primary transition-all duration-300"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          className="pl-10 pr-10 bg-white/80 border-border focus:border-primary transition-all duration-300"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <PasswordStrengthIndicator password={formData.password} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 bg-white/80 border-border focus:border-primary transition-all duration-300"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) =>
                          handleInputChange("agreeTerms", !!checked)
                        }
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Button
                          variant="link"
                          className="p-0 h-auto text-sm text-primary"
                        >
                          Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button
                          variant="link"
                          className="p-0 h-auto text-sm text-primary"
                        >
                          Privacy Policy
                        </Button>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={!formData.agreeTerms}
                    >
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="p-3 hover:bg-accent transition-all duration-300"
                  >
                    <Chrome className="w-4 h-4" />
                    <span className="sr-only">Continue with Google</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="p-3 hover:bg-accent transition-all duration-300"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="sr-only">Continue with Apple</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="p-3 hover:bg-accent transition-all duration-300"
                  >
                    <Users className="w-4 h-4" />
                    <span className="sr-only">Continue with Facebook</span>
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                By signing up, you're joining a community of 50,000+
                eco-conscious shoppers making a positive impact on our planet 🌱
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
