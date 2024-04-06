import { Inter } from "next/font/google";
import NextIntlProvider from '@/app/[locale]/NextIntlProvider'
//import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/global.css';
import { notFound } from 'next/navigation';

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

export default async function RootLayout({ children, params: { locale } }) {
	let translations
	try {
		translations = (await import(`../../../messages/${locale}`)
		).default
	} catch (error) {
		notFound()
	}

	return (
		<html lang={locale}>
		<body className={inter.className}>
		<NextIntlProvider locale={locale} messages={translations} timeZone="Europe/Berlin"
											now={new Date()}>
			{children}
		</NextIntlProvider>

		{/*<GoogleAnalytics gaId="G-ZTTTTK57SM" />*/}
		{/* <!-- Google Tag Manager (noscript) -->
		 <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV85DKRL"
		 height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		 <!-- End Google Tag Manager (noscript) -->*/}
		</body>
		</html>
	);
}
