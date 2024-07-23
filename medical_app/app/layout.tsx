import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
<<<<<<< HEAD
// import { Footer, Header, HeaderTop } from "@/components";
import AuthContextProvider from "@/context/authContext/AuthContextProvider";
import Header from "@/components/Header";
import { Footer } from "react-day-picker";
=======
import { Footer, Header, HeaderTop } from "@/components";
>>>>>>> parent of ac85760 (finished useContext)

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
<<<<<<< HEAD
    <AuthContextProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <HeaderTop/> */}
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </AuthContextProvider>
=======
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderTop/> */}
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
>>>>>>> parent of ac85760 (finished useContext)
  );
}
