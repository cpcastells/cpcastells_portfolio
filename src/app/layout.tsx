import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Carles Pueyo portfolio",
  description: "Carles Pueyo portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat bg-light dark:bg-dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
