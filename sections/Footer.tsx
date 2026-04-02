"use client";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-20 py-6 text-center border-t border-white/10 text-gray-400 text-sm overflow-hidden">

      {/* Animated Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>

      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-[gradientMove_6s_linear_infinite] -z-10"></div>

      {/* Text */}
      <p className="tracking-wide transition hover:text-white duration-300">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium hover:text-cyan-400 transition">
          Kalyanam Venkata Sree Sai
        </span>
        . Built with{" "}
        <span className="text-red-500 animate-pulse">❤️</span>{" "}
        for AI & Innovation.
      </p>

    </footer>
  );
}