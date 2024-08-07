
import type { Metadata } from "next";
import { Inter,Oswald } from "next/font/google";
import "./globals.css";

// Custom Component 
import Topbar from "@/component/Topbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({
  weight:"400",
  subsets:["latin"],
  display:"swap",
  variable:"--oswald"
})

export const metadata: Metadata = {
  title: "SSS Care",
  description: "seamless_seek__serve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable}`}>

      
      <body className={`${oswald.className}`}>
        <Topbar/>
        {children}
        <Footer/>
      </body>
      

    </html>
  );
}
