// Can be imported from a shared config

 
const locales = ['en', 'ru'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
