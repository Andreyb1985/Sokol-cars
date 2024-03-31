import { Inter } from "next/font/google";

import '@/styles/global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sokol Autos",
  description: "Choose your dream car.",
};

export default function RootLayout({ children, params: {locale} }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

const locales = ['en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
