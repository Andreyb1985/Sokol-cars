import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ru', 'de'],

  // Used when no locale matches
  defaultLocale: 'ru',
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|ru|de)/:path*',
    '/((?!_next|_vercel|_next|.*\\..*).*)'
  ],
};
