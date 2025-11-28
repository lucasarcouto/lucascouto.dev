import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Set tracesSampleRate to 1 to capture 100% of transactions for tracing.
  // Adjust this value in production for better performance.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while setting up Sentry.
  debug: false,
});
