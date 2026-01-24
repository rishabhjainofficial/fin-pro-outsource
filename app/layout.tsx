import Navbar from "@/components/client/Navbar";
import "./globals.css";

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
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}