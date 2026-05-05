import React from 'react'
import useOnlineStatus from '../hooks/useOnlineStatus'

export default function OfflineBanner() {
  const online = useOnlineStatus()
  if (online) return null

  return (
    <div role="status" aria-live="polite" className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-amber-400 text-amber-900 px-4 py-2 rounded shadow">
      You are offline — some features may be unavailable.
    </div>
  )
}
