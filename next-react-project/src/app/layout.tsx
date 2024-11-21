import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
};

function Header() {
  return (
    <header className="bg-slate-500 py4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">Snowtooth Mountain</Link>
          </div>
          <div>
            <Link href="/mountain">Mountain Info</Link>
          </div>
          <div>
            <Link href="/hotels">Hotels</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
