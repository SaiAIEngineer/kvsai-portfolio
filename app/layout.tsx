import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import GlobalSpotlight from "@/components/GlobalSpotlight";
import UltimateBackground from "@/components/UltimateBackground";

export const metadata: Metadata = {
  title: `KVSAI - Applied AI Research Engineer`,
  description: "| Applied AI Research Engineer",
  // ADD THIS SECTION BELOW
  icons: {
    icon: "/kvsai.svg", // Ensure your image is in the 'public' folder with this name
    shortcut: "/kvsai.svg",
    apple: "/kvsai.svg", // Optional: for iOS home screen
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="custom-cursor-enabled">
        {/* LIGHT EFFECT */}
        <GlobalSpotlight />
        {/* CURSOR */}
        <CustomCursor />
        {/* CONTENT */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
