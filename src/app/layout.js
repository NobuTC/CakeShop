import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import MyNavBar from "./_components/navbar/NavBar";
import Footer from "./_components/footer/Footer";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MyNavBar />
          <div className="container mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
