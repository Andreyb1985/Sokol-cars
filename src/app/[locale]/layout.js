import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sokol Autos",
  description: "Choose your dream car.",
  /*<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KV85DKRL');</script>
<!-- End Google Tag Manager -->*/
};

export default function RootLayout({ children, params: {locale} }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}
      <GoogleAnalytics gaId="GTM-KV85DKRL" />
     {/* <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV85DKRL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->*/}
      </body>
    </html>
  );
}

const locales = ['en', 'de','ru'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
