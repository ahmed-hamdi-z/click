import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from 'next/font/local'
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Script from 'next/script'


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
       <head>
       <meta name="facebook-domain-verification" content="0n3o49oyhesq5tobs7nxs79ik6j394" />
      <Script src="/utils/snaptr.js"></Script>
      </head>
      <body className={`${aj.variable} ${font.className}`}>
      <ActiveSectionContextProvider>
            {children}
      </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
