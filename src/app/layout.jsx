import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configurar la fuente con los pesos que necesitas
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "800"], // 500 = Medium, 800 = Extra Bold
  variable: "--font-figtree",
});

export const metadata = {
  title: "Blog Card Preview",
  description: "Challenge component by Frontend Mentor",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable}`}>{children}</body>
    </html>
  );
}
