import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/home" className="text-xl font-bold tracking-wide">
        EcoFinds
      </Link>

      {/* Menu Links */}
      <div className="flex space-x-6">
        <Link to="/home" className="hover:underline">
          Home
        </Link>
        <Link to="/sell" className="hover:underline">
          Sell
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
      </div>
    </nav>
  );
}
