import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://70d4c06666137a1808f24191e7b33f11@o4507809170128896.ingest.de.sentry.io/4507809172684880",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.browserProfilingIntegration(),
//     Sentry.replayIntegration(),
//   ],
//   // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
//   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   // Set profilesSampleRate to 1.0 to profile every transaction.
//   // Since profilesSampleRate is relative to tracesSampleRate,
//   // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
//   // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
//   // results in 25% of transactions being profiled (0.5*0.5=0.25)
//   profilesSampleRate: 1.0,
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
