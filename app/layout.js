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
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          type='text/css'
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <Navbar />
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
