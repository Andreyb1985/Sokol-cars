import { Inter } from "next/font/google";
import NextIntlProvider from '@/app/[locale]/NextIntlProvider'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/global.css';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

const metadataByLocale = {
	ru: {
		title: "Sokol Autos — проверка и подбор автомобилей в Германии",
		description: "Осмотр, диагностика и подбор автомобилей в NRW. Разовый осмотр — 80 €.",
	},
	de: {
		title: "Sokol Autos — Fahrzeugprüfung und Autosuche in Deutschland",
		description: "Besichtigung, Diagnose und Autosuche in NRW. Einzelprüfung für 80 €.",
	},
	en: {
		title: "Sokol Autos — vehicle inspection and selection in Germany",
		description: "Vehicle inspection, diagnostics and selection in NRW. A single inspection costs €80.",
	},
	ua: {
		title: "Sokol Autos — перевірка та підбір автомобілів у Німеччині",
		description: "Огляд, діагностика та підбір автомобілів у NRW. Разовий огляд — 80 €.",
	},
};

export async function generateMetadata({params: {locale}}) {
	const localized = metadataByLocale[locale] || metadataByLocale.ru

	return {
		metadataBase: new URL('https://www.sokol.autos'),
		title: localized.title,
		description: localized.description,
		openGraph: {
			type: 'website',
			siteName: 'Sokol Autos',
			title: localized.title,
			description: localized.description,
			images: [
				{
					url: '/sokol-autos-og.png',
					width: 1200,
					height: 630,
					alt: localized.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: localized.title,
			description: localized.description,
			images: ['/sokol-autos-og.png'],
		},
	}
}

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
