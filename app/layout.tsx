import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from 'next/font/local'
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

const font = Inter({ subsets: ["latin"] });
const aj = localfont({ src: [{
  path: '../public/font/alfont_com_AAJannatLT-.ttf'
}],
  variable: "--font-aj"
})
export const metadata: Metadata = {
  title: "CLick Agency",
  description: "CLick Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="">
      <body className={`${aj.variable} ${font.className}`}>
      <ActiveSectionContextProvider>

            {children}
        
      </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
