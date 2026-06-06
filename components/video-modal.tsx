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
    <>
      {/* Overlay preto atrás do iframe */}
      <div
        className="fixed inset-0 z-[100] bg-black"
        onClick={onClose}
      />

      {/* Botão fechar — acima do iframe */}
      <button
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="fixed top-4 right-4 z-[102] w-11 h-11 flex items-center justify-center rounded-full text-white"
        style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
      >
        <X className="w-5 h-5" />
      </button>

      {/* iframe fullscreen — ocupa tela inteira sem corte nem escala */}
      <iframe
        src={videoUrl}
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        className="fixed z-[101]"
        style={{
          border: "none",
          top: "56px",          /* logo abaixo do botão fechar */
          left: 0,
          right: 0,
          bottom: "96px",       /* espaço para o CTA */
          width: "100%",
          height: "calc(100% - 56px - 96px)",
        }}
      />

      {/* CTA — fixo na base acima do iframe */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[102] px-4 pb-6 pt-3"
        style={{ background: "linear-gradient(to top, #000 70%, transparent)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-base text-black"
          style={{
            background: "linear-gradient(135deg, #f0d060 0%, #d4af37 50%, #b8860b 100%)",
            boxShadow: "0 0 24px rgba(212,175,55,0.35)",
          }}
        >
          Quero garantir minha vaga
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>,
    document.body
  )
}
