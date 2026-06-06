"use client"

import { useEffect, useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { X, BadgeCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // Google Drive embed URL (esconde interface do Drive)
  const videoUrl = "https://drive.google.com/file/d/1fZwvFR0ax7FqQr61kpBI3EoSqM1v4um0/preview"
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

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

  if (!isOpen || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col px-4"
      onClick={onClose}
    >
      {/* Backdrop escuro */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

      {/* Botão fechar — sempre visível no topo da tela */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Fechar vídeo"
      >
        <X className="w-5 h-5" />
      </button>

      {/* ÁREA CENTRAL — título + player centralizados na tela */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho compacto acima do player */}
        <div className="text-center">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-2.5"
            style={{
              background: "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#e8c96a",
            }}
          >
            <BadgeCheck className="w-3.5 h-3.5" />
            ASSISTA ANTES DE DECIDIR
          </span>
          <h3
            className="text-lg sm:text-2xl font-bold text-white leading-tight text-balance"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            Veja como o FutMoney funciona na prática
          </h3>
        </div>

        {/* Container do vídeo — 16:9 responsivo (âncora do centro) */}
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 60px rgba(212,175,55,0.2), 0 25px 80px rgba(0,0,0,0.8)",
            border: "1px solid rgba(212,175,55,0.25)",
            background: "#000",
          }}
        >
          <iframe
            src={videoUrl}
            className="absolute left-1/2 top-1/2 h-full w-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{ border: "none", transform: "translate(-50%, -50%) scale(1.04)" }}
          />
        </div>
      </div>

      {/* RODAPÉ FIXO — CTA + instrução pinados na base */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-3 pb-6 pt-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-black w-full sm:w-auto"
          style={{
            background: "linear-gradient(135deg, #f0d060 0%, #d4af37 50%, #b8860b 100%)",
            boxShadow: "0 0 30px rgba(212,175,55,0.35)",
          }}
        >
          Quero garantir minha vaga
          <ArrowRight className="w-4 h-4" />
        </Link>

        <p className="text-center text-white/40 text-xs">
          Toque fora ou pressione{" "}
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/55">ESC</kbd> para fechar
        </p>
      </div>
    </div>,
    document.body,
  )
}
