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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop escuro */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

      {/* Botão fechar — sempre visível no topo da tela */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Fechar vídeo"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Container do vídeo — centralizado e responsivo */}
      <div
        className="relative z-10 w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 0 60px rgba(212,175,55,0.2), 0 25px 80px rgba(0,0,0,0.8)",
          border: "1px solid rgba(212,175,55,0.25)",
          background: "#000",
        }}
      >
        {/* Player - iframe do Google Drive */}
        <iframe
          src={videoUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>

      {/* Instrução de fechar */}
      <p className="relative z-10 mt-5 text-center text-white/45 text-sm">
        Toque fora ou pressione{" "}
        <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/60">ESC</kbd> para fechar
      </p>
    </div>
  )
}
