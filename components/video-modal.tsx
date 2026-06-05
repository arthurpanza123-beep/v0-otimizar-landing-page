"use client"

import { useEffect, useCallback } from "react"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // Google Drive embed URL (esconde interface do Drive)
  const videoUrl = "https://drive.google.com/file/d/1fZwvFR0ax7FqQr61kpBI3EoSqM1v4um0/preview"

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      {/* Backdrop escuro */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Container do vídeo */}
      <div 
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 0 60px rgba(212,175,55,0.2), 0 25px 80px rgba(0,0,0,0.8)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white hover:bg-black/80 transition-all duration-200"
          aria-label="Fechar vídeo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Player - iframe do Google Drive */}
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          style={{ border: "none" }}
        />

        {/* Borda dourada sutil */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ 
            boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.15)",
          }}
        />
      </div>

      {/* Instrução de fechar */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
        Pressione <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/60">ESC</kbd> ou clique fora para fechar
      </p>
    </div>
  )
}
