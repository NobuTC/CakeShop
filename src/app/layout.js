"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import MyNavBar from "./_components/navbar/NavBar";
import Footer from "./_components/footer/Footer";
import { CartProvider, OpenProvider, Providers } from "./providers";
import ModalComponent from "./_components/modal/ModalComponent";
import { useDisclosure } from "@nextui-org/react";

export default function RootLayout({ children }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <OpenProvider value={{ isOpen, onOpen, onOpenChange }}>
            <CartProvider>
              <div className="relative min-h-screen">
                <MyNavBar
                  onOpen={onOpen}
                  onOpenChange={onOpenChange}
                  suppressHydrationWarning={true}
                />
                <div className=" mx-auto">{children}</div>
                <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} />
              </div>
            </CartProvider>
          </OpenProvider>
        </Providers>
      </body>
    </html>
  );
}
