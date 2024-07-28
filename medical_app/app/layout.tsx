import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
// import AuthContextProvider from "@/context/authContext/AuthContextProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthContextProvider from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medical - App",
  description: "Medical App by Muse Feta.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          {/* <HeaderTop/> */}
          <Header />
          {children}
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  );
}
