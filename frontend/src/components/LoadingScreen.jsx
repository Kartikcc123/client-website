import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500 mx-auto" />
        <p className="mt-4 text-slate-700">Loading Academic Plus…</p>
      </div>
    </div>
  )
}
