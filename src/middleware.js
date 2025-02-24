import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ru', 'de', 'ua'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|ru|de|ua)/:path*',
    '/((?!_next|_vercel|_next|.*\\..*).*)'
  ],
};
