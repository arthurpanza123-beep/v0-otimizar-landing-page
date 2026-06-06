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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-5"
      style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(24px)" }}
      onClick={onClose}
    >
      {/* Partícula dourada decorativa */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-40"
          style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-40"
          style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />
      </div>

      {/* Botão fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <X className="w-4 h-4" />
      </button>

      {/* Label acima */}
      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4 opacity-0 animate-[fadeIn_0.4s_0.1s_forwards]"
        style={{ color: "#d4af37" }}>
        Assista ao vídeo completo
      </p>

      {/* Container do player com borda dourada */}
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "16/9",
          border: "1px solid rgba(212,175,55,0.35)",
          boxShadow: "0 0 0 1px rgba(212,175,55,0.08), 0 30px 80px rgba(0,0,0,0.8), 0 0 60px rgba(212,175,55,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ border: "none", width: "100%", height: "100%", display: "block" }}
        />
      </div>

      {/* CTA abaixo do player */}
      <div className="mt-6 flex flex-col items-center gap-3 w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <Link
          href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[15px] text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #f5dc6a 0%, #d4af37 50%, #b8860b 100%)",
            boxShadow: "0 0 40px rgba(212,175,55,0.3), 0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          Quero garantir minha vaga
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-white/25 text-xs tracking-wide">
          Toque fora ou pressione ESC para fechar
        </p>
      </div>
    </div>,
    document.body
  )
}
