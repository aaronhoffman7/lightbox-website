import "./globals.css";
import type { Metadata } from "next";
import { PageTitleProvider } from "./context/PageTitleContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "Lightbox Energy",
  description: "Lightbox Energy",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Titania font */}
        <link
          href="https://fonts.cdnfonts.com/css/titania"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTitleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </PageTitleProvider>
      </body>
    </html>
  );
}
