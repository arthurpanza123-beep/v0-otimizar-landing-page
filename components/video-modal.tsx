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
      style={{ background: "#080608" }}
      onClick={onClose}
    >
      {/* ── Fundo atmosférico com neons ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Neon dourado — canto superior esquerdo */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #d4af37 0%, transparent 70%)", filter: "blur(60px)" }} />

        {/* Neon âmbar quente — canto inferior direito */}
        <div className="absolute -bottom-40 -right-24 w-[380px] h-[380px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #c8721a 0%, transparent 70%)", filter: "blur(70px)" }} />

        {/* Neon verde futebol — centro esquerdo */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[260px] h-[260px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #2d7a2d 0%, transparent 70%)", filter: "blur(55px)" }} />

        {/* Linha dourada topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] opacity-30"
          style={{ background: "linear-gradient(to right, transparent 0%, #d4af37 40%, #d4af37 60%, transparent 100%)" }} />

        {/* Linha dourada base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] opacity-20"
          style={{ background: "linear-gradient(to right, transparent 0%, #d4af37 40%, #d4af37 60%, transparent 100%)" }} />

        {/* Grain sutil */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }} />
      </div>

      {/* Botão fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <X className="w-4 h-4" />
      </button>

      {/* Label acima */}
      <p className="relative z-10 text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
        style={{ color: "#d4af37" }}>
        Assista ao vídeo completo
      </p>

      {/* Container do player */}
      <div
        className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "16/9",
          border: "1px solid rgba(212,175,55,0.3)",
          boxShadow:
            "0 0 0 1px rgba(212,175,55,0.06), 0 0 80px rgba(212,175,55,0.12), 0 30px 80px rgba(0,0,0,0.7)",
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
      <div className="relative z-10 mt-6 flex flex-col items-center gap-3 w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <Link
          href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[15px] text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #f5dc6a 0%, #d4af37 50%, #b8860b 100%)",
            boxShadow: "0 0 40px rgba(212,175,55,0.35), 0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          Quero garantir minha vaga
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-white/20 text-xs tracking-wide">
          Toque fora ou pressione ESC para fechar
        </p>
      </div>
    </div>,
    document.body
  )
}
