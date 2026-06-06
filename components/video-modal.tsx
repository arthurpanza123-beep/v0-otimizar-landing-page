"use client"

import { useEffect, useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoUrl = "https://www.youtube.com/embed/Xf3jdd2ssNc?autoplay=1&rel=0&modestbranding=1&controls=1&color=white"
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose() },
    [onClose]
  )

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleEscape])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Botão fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        <X className="w-5 h-5" />
      </button>

      {/* Player YouTube — 16:9, largura total, sem corte */}
      <div
        className="w-full"
        style={{ aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
    </div>,
    document.body
  )
}
