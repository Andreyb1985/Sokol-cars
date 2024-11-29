import { Inter } from "next/font/google";
import NextIntlProvider from '@/app/[locale]/NextIntlProvider'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/global.css';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sokol Autos",
	description: "Choose your dream car.",
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
		<GoogleAnalytics gaId="AW-16801379163" />
		</body>
		</html>
	);
}
