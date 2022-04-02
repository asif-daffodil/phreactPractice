import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2 className="text-4xl text-center py-4">Welcome to TShirt Mania!</h2>
      <nav className="flex justify-center">
        <Link to="/home" className="px-4">
          Home
        </Link>
        <Link to="/orderreview" className="px-4">
          Order Review
        </Link>
      </nav>
    </div>
  );
};

export default Header;
