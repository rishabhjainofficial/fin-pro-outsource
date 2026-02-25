import Navbar from "@/components/client/Navbar";
import "./globals.css";
import Footer from "@/components/client/Footer";
import { Metadata } from "next";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://gapbridgebiz.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  verification: {
    google: "SAFDMwHrwwVbrebYR4L9rtoBBwg8IwJSHZ67HsT5vNE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "viwic25aho");
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TFT8ZHC2')
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VNWV7HTVFC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VNWV7HTVFC');
          `}
        </Script>
      </head>
      <body className="bg-slate-50 antialiased">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFT8ZHC2" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}