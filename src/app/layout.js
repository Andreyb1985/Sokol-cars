import { Inter } from "next/font/google";

// import "@/app/globals.css";
import '@/styles/global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sokol Autos",
  description: "Choose your dream car.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
