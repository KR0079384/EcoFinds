import { useState } from "react";
import { FaFacebook, FaGoogle, FaLeaf } from "react-icons/fa";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-400 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-40 right-10"></div>
      <div className="absolute w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-10 left-1/2"></div>

      {/* Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 relative border border-white/30">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-green-600 to-emerald-400 rounded-full shadow-lg">
            <FaLeaf className="text-white text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-green-900 drop-shadow mb-2">
          {isLogin ? "Welcome Back 🌱" : "Create Your Account 🌍"}
        </h2>
        <p className="text-center text-gray-700 mb-6">
          {isLogin
            ? "Login to continue your eco journey."
            : "Join us and make sustainable choices today."}
        </p>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/60 border border-gray-300 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Full Name"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                Full Name
              </label>
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/60 border border-gray-300 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/60 border border-gray-300 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              Password
            </label>
          </div>

          {!isLogin && (
            <div className="relative">
              <input
                type="password"
                required
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/60 border border-gray-300 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Confirm Password"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                Confirm Password
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social login */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/80 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/80 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
        </div>

        {/* Switch mode */}
        <p className="text-center text-sm text-gray-700 mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-700 font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
