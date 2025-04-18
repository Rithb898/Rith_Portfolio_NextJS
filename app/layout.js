import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PostHogProvider } from "@/components/PostHogProvider";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rith's Portfolio",
  description: "Rith Banerjee's Portfolio",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta property="og:image" content="/website-preview.png" />
        <meta name="twitter:card" content="/website-preview.png" />
      </head>
      <body className={`${montserrat.variable} font-montserrat`}>
        <Navbar />
        <PostHogProvider>{children}</PostHogProvider>
        <Footer />
      </body>
    </html>
  );
}
