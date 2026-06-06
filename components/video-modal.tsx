"use client"

import { useEffect, useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoUrl = "https://drive.google.com/file/d/1fZwvFR0ax7FqQr61kpBI3EoSqM1v4um0/preview"
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
      className="fixed inset-0 z-[100] flex flex-col bg-black"
      onClick={onClose}
    >
      {/* Barra superior: botão fechar */}
      <div
        className="flex items-center justify-end px-4 shrink-0"
        style={{ height: "52px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Player: ocupa todo o espaço restante, sem corte, sem escala */}
      <div
        className="flex-1 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media; fullscreen"
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
