import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashbored",
  description: "Dashbored by Muse Feta.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div
      className={cn("min-h-screen w-full bg-white text-black flex")}
    >
        {/* sidebar */}
        <Sidebar/>
        {/* mainpage */}
      <div className="p-8 w-full">
        {modal}
        {children}
        </div>
    </div>
  );
}
