"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import MyNavBar from "./_components/navbar/NavBar";
import Footer from "./_components/footer/Footer";
import { CartProvider, Providers } from "./providers";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CartProvider>
            <div className="relative min-h-screen">
              <MyNavBar suppressHydrationWarning={true} />
              <div className=" mx-auto">{children}</div>
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
