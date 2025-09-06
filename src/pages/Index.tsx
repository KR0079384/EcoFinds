import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      {/* ✅ Left Side: Marketing / Welcome */}
      <div className="hidden w-1/2 bg-gradient-to-br from-green-600 to-green-400 p-10 text-white lg:flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">🌱 EcoFinds</h1>
        <h2 className="text-3xl font-extrabold mb-4">
          Discover Sustainable Treasures
        </h2>
        <p className="mb-8 text-lg">
          Join our community of eco-conscious buyers and sellers. Give pre-loved
          items a new life while reducing your environmental footprint.
        </p>
        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-bold">500K+</p>
            <p className="text-sm opacity-80">Items Saved</p>
          </div>
          <div>
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-sm opacity-80">Happy Users</p>
          </div>
        </div>
      </div>

      {/* ✅ Right Side: Login / Signup */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Sign in to continue your sustainable journey
          </p>

          {/* Toggle Buttons */}
          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-l-lg ${
                isLogin ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-r-lg ${
                !isLogin ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 text-green-600" />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          {/* Social login */}
          <div className="my-6 text-center text-gray-500">OR CONTINUE WITH</div>
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline">🌍 Google</Button>
            <Button variant="outline">🍏 Apple</Button>
            <Button variant="outline">👥 Facebook</Button>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            By signing up, you're joining a community of 50,000+ eco-conscious
            shoppers making a positive impact on our planet 🌱
          </p>
        </div>
      </div>
    </div>
  );
}
