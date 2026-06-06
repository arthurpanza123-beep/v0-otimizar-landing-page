"use client"

import { useEffect, useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { X, ArrowRight } from "lucide-react"
import Link from "next/link"

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
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, handleEscape])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black" onClick={onClose}>

      {/* X — canto superior direito */}
      <button
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 border border-white/20 text-white"
      >
        <X className="w-5 h-5" />
      </button>

      {/* PLAYER — exatamente no centro vertical da tela, largura 100% */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* aspect-ratio 16:9 com padding-top trick — ocupa 100vw */}
        <div
          className="relative w-full"
          style={{
            paddingTop: "56.25%",
            borderTop: "1.5px solid rgba(212,175,55,0.4)",
            borderBottom: "1.5px solid rgba(212,175,55,0.4)",
          }}
        >
          <iframe
            src={videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* CTA — fixo na base */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-5 flex flex-col items-center gap-3"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 70%, transparent)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-base text-black"
          style={{
            background: "linear-gradient(135deg, #f0d060 0%, #d4af37 50%, #b8860b 100%)",
            boxShadow: "0 0 30px rgba(212,175,55,0.4)",
          }}
        >
          Quero garantir minha vaga
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-white/30 text-xs">Toque fora para fechar</p>
      </div>

    </div>,
    document.body
  )
}
