"use client"

import Link from "next/link"
import Image from "next/image"
import { Play, BadgeCheck } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoUrl = "https://drive.google.com/file/d/1fZwvFR0ax7FqQr61kpBI3EoSqM1v4um0/preview"

  return (
    <section id="video" className="relative py-16 lg:py-24 overflow-hidden scroll-mt-20 bg-[#050505]">
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#d4af37]/[0.03] rounded-full blur-[160px] ambient-light" />

      <div className="relative max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Texto acima */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 badge-premium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]" />
            </span>
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Vídeo</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Assista e entenda </span>
            <span className="text-[#d4af37] gold-glow-text">como funciona o método</span>
          </h2>
        </motion.div>

        {/* Player grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid rgba(212,175,55,0.25)",
            boxShadow: "0 0 70px rgba(212,175,55,0.12), 0 25px 70px rgba(0,0,0,0.7)",
          }}
        >
          {isPlaying ? (
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ border: "none" }}
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="group absolute inset-0 w-full h-full flex items-center justify-center"
              aria-label="Reproduzir vídeo"
            >
              <Image
                src="/images/video-thumb.png"
                alt="Capa do vídeo FutMoney"
                fill
                priority
                className="object-cover"
              />
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.5) 100%)",
                }}
              />
              <span
                className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #f5dc6a 0%, #d4af37 45%, #b8860b 100%)",
                  boxShadow: "0 0 50px rgba(212,175,55,0.6), 0 8px 30px rgba(0,0,0,0.6)",
                }}
              >
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              </span>
              <span
                className="absolute z-10 inline-flex h-20 w-20 rounded-full bg-[#d4af37]/40 animate-ping"
                style={{ animationDuration: "2.5s" }}
              />
            </button>
          )}
        </motion.div>

        {/* CTA abaixo do vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center mt-8"
        >
          <Link
            href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[15px] text-black w-full sm:w-auto transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #f5dc6a 0%, #d4af37 45%, #b8860b 100%)",
              boxShadow: "0 0 40px rgba(212,175,55,0.5), 0 4px 18px rgba(0,0,0,0.5)",
              fontFamily: "var(--font-space), system-ui, sans-serif",
            }}
          >
            Quero começar no FutMoney
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 mt-4 text-[13px] text-white/75 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-[#d4af37]" /> Acesso imediato
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-[#d4af37]" /> Garantia de 7 dias
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
