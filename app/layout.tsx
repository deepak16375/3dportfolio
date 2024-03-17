import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Cursor from "@/components/main/Cursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak kumar | Frontend developer",
  description: "A passionate frontend developer from India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Cursor/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
