import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forest community - discord online",
  description: "Forest group community Roblox - Discord",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font Awesome CDN */}
        <script
          src="https://kit.fontawesome.com/e1288edb06.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
