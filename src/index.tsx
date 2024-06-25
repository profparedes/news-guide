import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'

import { NewYorkTimesProvider } from 'context/NewYorkTimesContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <NewYorkTimesProvider>
        <App />
      </NewYorkTimesProvider>
    </Suspense>
  </React.StrictMode>,
)
