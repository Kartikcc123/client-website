import { useEffect, useState, useCallback } from 'react'

export default function useInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(null)
  const [isInstallable, setIsInstallable] = useState(false)

  useEffect(() => {
    function handleBeforeInstallPrompt(e) {
      e.preventDefault()
      setPromptEvent(e)
      setIsInstallable(true)
    }

    function handleAppInstalled() {
      setPromptEvent(null)
      setIsInstallable(false)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const promptInstall = useCallback(async () => {
    if (!promptEvent) return { outcome: 'not-available' }
    try {
      promptEvent.prompt()
      const choice = await promptEvent.userChoice
      setPromptEvent(null)
      setIsInstallable(false)
      return choice
    } catch (err) {
      return { outcome: 'error', error: err }
    }
  }, [promptEvent])

  return { isInstallable, promptInstall, promptEvent }
}
