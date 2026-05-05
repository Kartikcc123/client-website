import React from 'react'
import useInstallPrompt from '../hooks/useInstallPrompt'

export default function PWAInstallButton({ className = '' }) {
  const { isInstallable, promptInstall } = useInstallPrompt()

  if (!isInstallable) return null

  return (
    <button
      onClick={() => promptInstall()}
      className={"px-3 py-1 rounded bg-sky-500 text-white hover:bg-sky-600 " + className}
      aria-label="Install app"
    >
      Install App
    </button>
  )
}
