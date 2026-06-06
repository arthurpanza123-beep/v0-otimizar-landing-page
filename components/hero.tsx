"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Eye, Users, BadgeCheck } from "lucide-react"
import { VideoModal } from "./video-modal"
import { motion } from "framer-motion"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* ── Background ─────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-futmoney.png"
          alt="Setup premium de criador de conteúdo de futebol"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />

        {/* Escurecimento esquerdo — legibilidade do texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.72) 30%, rgba(5,5,5,0.3) 55%, transparent 72%)",
          }}
        />

        {/* Transição inferior */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.4) 12%, transparent 32%)",
          }}
        />

        {/* Brilho extra no notebook — lado direito */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 45% 55% at 72% 58%, rgba(255,255,255,0.06) 0%, rgba(255,220,100,0.04) 35%, transparent 70%)",
          }}
        />

        {/* Partículas douradas + bokeh cinematográfico */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Partículas pequenas que sobem */}
          {[
            { left: "6%",  delay: "0s",   dur: "14s", size: 2,   opacity: 0.55 },
            { left: "14%", delay: "4s",   dur: "18s", size: 1.5, opacity: 0.45 },
            { left: "22%", delay: "7s",   dur: "12s", size: 2,   opacity: 0.5  },
            { left: "32%", delay: "2s",   dur: "16s", size: 1.5, opacity: 0.4  },
            { left: "42%", delay: "9s",   dur: "20s", size: 2,   opacity: 0.5  },
            { left: "55%", delay: "5s",   dur: "15s", size: 1.5, opacity: 0.35 },
            { left: "10%", delay: "11s",  dur: "17s", size: 1.5, opacity: 0.4  },
            { left: "48%", delay: "13s",  dur: "19s", size: 2,   opacity: 0.45 },
          ].map((p, i) => (
            <div
              key={i}
              className="particle absolute rounded-full"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: `rgba(212,175,55,${p.opacity})`,
                left: p.left,
                bottom: "-4px",
                animationDelay: p.delay,
                animationDuration: p.dur,
              }}
            />
          ))}

          {/* Bokeh — bolas desfocadas grandes e sutis */}
          {[
            { left: "8%",  top: "20%", size: 180, opacity: 0.018 },
            { left: "35%", top: "65%", size: 120, opacity: 0.022 },
            { left: "18%", top: "75%", size: 90,  opacity: 0.025 },
            { left: "60%", top: "15%", size: 140, opacity: 0.014 },
            { left: "50%", top: "80%", size: 80,  opacity: 0.02  },
          ].map((b, i) => (
            <div
              key={`bokeh-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
                left: b.left,
                top: b.top,
                background: `rgba(212,175,55,${b.opacity})`,
                filter: "blur(32px)",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Poeira iluminada — faixa diagonal sutil */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, transparent 0%, rgba(212,175,55,0.018) 30%, transparent 55%)",
            }}
          />
        </div>
      </div>

      {/* ── Selo de autoridade visual — flutua sobre o notebook ── */}
      <div className="hidden lg:block absolute z-10 right-[8%] top-[22%]">
        {/* Anel externo pulsante */}
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            animationDuration: "3s",
            background: "rgba(212,175,55,0.08)",
            scale: "1.3",
          }}
        />
        <div
          className="relative flex flex-col items-center justify-center rounded-full"
          style={{
            width: 116,
            height: 116,
            background: "radial-gradient(circle at 40% 35%, rgba(240,208,96,0.18) 0%, rgba(212,175,55,0.08) 60%, transparent 100%)",
            border: "1.5px solid rgba(212,175,55,0.4)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 40px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <span
            className="text-[#d4af37] font-black leading-none"
            style={{
              fontFamily: "'Clash Display', 'Space Grotesk', system-ui, sans-serif",
              fontSize: "1.8rem",
              textShadow: "0 0 30px rgba(212,175,55,0.7)",
            }}
          >
            100M+
          </span>
          <span className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mt-1">
            Views
          </span>
          <span className="text-white/40 text-[9px] tracking-wide mt-0.5">
            geradas
          </span>
        </div>
      </div>

      {/* ── Conteúdo ────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-[600px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-[#d4af37]/50 backdrop-blur-md mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]" />
            </span>
            <span className="text-xs text-[#d4af37] font-semibold tracking-widest uppercase">
              Liga dos Criadores
            </span>
          </div>

          {/* ── Headline compacta — máximo 2 linhas ── */}
          {/* Glow atrás da headline para separar do fundo */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "22%",
              left: "-5%",
              width: "55%",
              height: "32%",
              background: "radial-gradient(ellipse at center, rgba(212,175,55,0.07) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <h1
            className="font-black leading-[1.08] mb-5"
            style={{
              fontFamily: "'Clash Display', 'Space Grotesk', var(--font-space), system-ui, sans-serif",
              fontSize: "clamp(2.5rem, 4.2vw, 3.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              wordSpacing: "0.05em",
            }}
          >
            <span className="text-white">Ganhe dinheiro com </span>
            <span
              className="text-[#d4af37]"
              style={{ textShadow: "0 0 50px rgba(212,175,55,0.5)" }}
            >
              futebol
            </span>
            <br />
            <span className="text-white">sem precisar ser </span>
            <span
              className="text-[#d4af37]"
              style={{ textShadow: "0 0 50px rgba(212,175,55,0.5)" }}
            >
              jogador.
            </span>
          </h1>

          {/* Subheadline — frase curta de compra rápida */}
          <p
            className="text-white/90 leading-relaxed mb-3 max-w-[540px] font-medium"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(1.1rem, 1.9vw, 1.3rem)",
            }}
          >
            Curso prático para criar conteúdo de futebol, crescer páginas e{" "}
            <span className="text-[#d4af37] font-semibold">monetizar no digital.</span>
          </p>

          {/* Aviso anti-público-errado — logo no topo */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg mb-8"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            <BadgeCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
            <span className="text-[13px] sm:text-sm text-white/85 font-medium leading-snug">
              <span className="text-white font-bold">Não é aposta. Não é bet.</span> É criação de conteúdo + estratégia digital.
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            {/* Principal — glow premium reforçado */}
            <Link
              href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[15px] text-black overflow-hidden transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #f5dc6a 0%, #d4af37 45%, #b8860b 100%)",
                boxShadow: "0 0 40px rgba(212,175,55,0.55), 0 0 80px rgba(212,175,55,0.2), 0 4px 18px rgba(0,0,0,0.5)",
                fontFamily: "var(--font-space), var(--font-inter), system-ui, sans-serif",
              }}
            >
              {/* micro brilho no hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 55%)" }}
              />
              {/* pulso de glow ao redor */}
              <span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 60px rgba(212,175,55,0.5) inset" }}
              />
              Quero começar no FutMoney
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* VSL */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-[15px] text-white/90 backdrop-blur-sm transition-all duration-300 hover:text-white hover:bg-white/5"
              style={{
                border: "1px solid rgba(212,175,55,0.35)",
                fontFamily: "var(--font-space), var(--font-inter), system-ui, sans-serif",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[rgba(212,175,55,0.2)]"
                style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.3)" }}
              >
                <Play className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
              </div>
              Assistir o vídeo
            </button>
          </div>

          {/* Selo de segurança perto do CTA */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-12 text-[13px] text-white/75 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-[#d4af37]" /> Acesso imediato
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-[#d4af37]" /> Garantia de 7 dias
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-[#d4af37]" /> Conteúdo prático
            </span>
          </div>

          {/* ── Provas sociais fortes com numeros animados ── */}
          <div className="flex flex-wrap gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(212,175,55,0.18)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.12)" }}
              >
                <Eye className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span
                className="text-sm font-bold text-[#d4af37]"
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                +100M
              </span>
              <span className="text-sm text-white/75 font-medium">de views geradas</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(212,175,55,0.18)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.12)" }}
              >
                <Users className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span
                className="text-sm font-bold text-[#d4af37]"
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                +10 anos
              </span>
              <span className="text-sm text-white/75 font-medium">de experiência</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(212,175,55,0.18)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.12)" }}
              >
                <BadgeCheck className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span
                className="text-sm font-bold text-[#d4af37]"
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                Método
              </span>
              <span className="text-sm text-white/75 font-medium">validado na prática</span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Linha dourada de rodapé */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
