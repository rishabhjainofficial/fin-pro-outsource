import Navbar from "@/components/client/Navbar";
import "./globals.css";
import Footer from "@/components/client/Footer";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://gapbridgebiz.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        <Navbar />
        {/* pt-16 accounts for the 4rem (h-16) height of the navbar */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}