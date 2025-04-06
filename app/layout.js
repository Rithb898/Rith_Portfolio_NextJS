import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PostHogProvider } from "@/components/PostHogProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rith's Portfolio",
  description: "Rith Banerjee's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} font-montserrat antialiased `}>
        <Navbar />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
