import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="relative inline-block px-8 py-3 text-white font-medium text-lg border border-white/30 rounded-lg overflow-hidden group transition-colors duration-300 hover:border-white/80"
    >
      {/* Эффект бегущего света */}
      <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default AnimatedButton;