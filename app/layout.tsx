import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import GlobalSpotlight from "@/components/GlobalSpotlight";
import UltimateBackground from "@/components/UltimateBackground";

export const metadata: Metadata = {
  title: `KVSAI - Applied AI Research Engineer`,
  description: "|  Applied AI Research Engineer",
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
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}