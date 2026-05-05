import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import LoadingScreen from './components/LoadingScreen'
import OfflineBanner from './components/OfflineBanner'
import PWAInstallButton from './components/PWAInstallButton'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('New content available, please refresh.')
  },
  onOfflineReady() {
    console.log('App is ready to work offline.')
  },
})

const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <OfflineBanner />
      <div className="app-shell">
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <PWAInstallButton />
      </div>
    </AuthProvider>
  </StrictMode>,
)
