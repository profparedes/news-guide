import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'

import App from './App'
import { NewYorkTimesProvider } from 'context/NewYorkTimes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <NewYorkTimesProvider>
        <App />
      </NewYorkTimesProvider>
    </Suspense>
  </React.StrictMode>,
)
