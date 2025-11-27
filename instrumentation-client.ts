import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // Adjust this value in production for better performance.
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while setting up Sentry.
  debug: false,

  // Replay is only available in the client
  replaysOnErrorSampleRate: 1.0,

  // Capture 10% of all sessions for session replay
  replaysSessionSampleRate: 0.1,

  integrations: [Sentry.replayIntegration()],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
