import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 🛡️ Sentry imports
// import * as Sentry from "@sentry/react"
// import { BrowserTracing } from "@sentry/tracing"

// ⚙️ Sentry configuration
// Sentry.init({
//   dsn: "https://5ecaf311940474412286366019539e83@o4509634657320960.ingest.us.sentry.io/4509634679341056",
//   integrations: [new BrowserTracing()],
//   tracesSampleRate: 1.0, // captures 100% of transactions, lower this in production if needed
//   sendDefaultPii: true,
//   enabled: import.meta.env.MODE === 'production' // only enable in production
// })

// 🧠 Wrap App in ErrorBoundary
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)
