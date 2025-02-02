import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Countries Info",
  description: "Countries information",
};

const poppins = Poppins({ weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
