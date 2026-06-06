"use client"

import { Check, Shield, Zap, Clock } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "./countdown-timer"
import { motion } from "framer-motion"

export function Pricing() {
  const features = [
    "Método completo em vídeo aulas",
    "Criação do zero ao avançado",
    "Edição profissional e thumbnails",
    "Estratégias de crescimento",
    "Módulo Caixa Preta exclusivo",
    "Atualizações vitalícias",
    "Comunidade de criadores",
  ]

  return (
    <section id="planos" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      {/* Noise */}
      <div className="noise-overlay" />
      
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/[0.025] rounded-full blur-[150px] ambient-light" />

      <div className="max-w-[480px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Entre para o </span>
            <span className="text-[#d4af37]">FutMoney</span>
          </h2>
          <p className="text-white/45 text-sm">Curso completo + Caixa Preta • acesso imediato</p>
        </motion.div>

        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <CountdownTimer />
        </motion.div>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div 
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(165deg, rgba(18,17,12,1) 0%, rgba(8,8,6,1) 100%)",
              border: "1.5px solid rgba(212,175,55,0.2)",
              boxShadow: "0 0 60px rgba(212,175,55,0.08), 0 25px 50px rgba(0,0,0,0.5)"
            }}
          >
            {/* Premium Header - sem logo */}
            <div 
              className="px-5 py-5 text-center"
              style={{ 
                background: "linear-gradient(180deg, rgba(212,175,55,0.06) 0%, transparent 100%)",
                borderBottom: "1px solid rgba(212,175,55,0.08)"
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]/40" />
                <span className="text-[#d4af37]/80 text-[10px] font-bold tracking-[0.2em] uppercase">Acesso Completo</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]/40" />
              </div>
              <h3 
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Clash Display', var(--font-display)" }}
              >
                FutMoney
              </h3>
            </div>

            {/* Price */}
            <div className="px-5 py-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-white/30 line-through text-xs">R$ 197</span>
                <span 
                  className="px-1.5 py-0.5 rounded text-[9px] font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #f0d060, #d4af37)" }}
                >
                  -60%
                </span>
              </div>
              
              <div className="flex items-baseline justify-center">
                <span className="text-white/45 text-base mr-1">12x</span>
                <span className="text-white/35 text-lg mr-0.5">R$</span>
                <span 
                  className="text-4xl font-black text-white tracking-tight"
                  style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                >
                  8,06
                </span>
              </div>
              <p className="text-white/30 text-[11px] mt-0.5">ou R$ 77,90 a vista</p>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)" }} />

            {/* Features */}
            <div className="px-5 py-4">
              <ul className="grid grid-cols-1 gap-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(212,175,55,0.1)" }}
                    >
                      <Check className="w-2 h-2 text-[#d4af37]" />
                    </div>
                    <span className="text-white/55 text-[12px]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="px-5 pb-5">
              <Link
                href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full py-3 rounded-xl font-bold text-black text-sm btn-premium"
              >
                Entrar para o FutMoney agora
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Reforços */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/[0.04]">
                {[
                  { icon: Zap, text: "Acesso imediato" },
                  { icon: Shield, text: "Garantia de 7 dias" },
                  { icon: Check, text: "Conteúdo prático" },
                  { icon: Clock, text: "Serve para iniciantes" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-white/45 text-[11px]">
                    <item.icon className="w-3 h-3 text-[#d4af37]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantee — selo em destaque */}
          <div
            className="mt-5 p-5 rounded-2xl flex items-center gap-4"
            style={{
              background: "linear-gradient(165deg, rgba(212,175,55,0.07) 0%, rgba(8,8,6,0.9) 100%)",
              border: "1px solid rgba(212,175,55,0.22)",
              boxShadow: "0 0 40px rgba(212,175,55,0.06)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex flex-col items-center justify-center flex-shrink-0"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.25), rgba(8,8,6,1))",
                border: "2px solid rgba(212,175,55,0.4)",
                boxShadow: "0 0 25px rgba(212,175,55,0.2)",
              }}
            >
              <Shield className="w-6 h-6 text-[#d4af37]" />
              <span className="text-[#d4af37] text-[9px] font-bold tracking-wider mt-0.5">7 DIAS</span>
            </div>
            <div>
              <p
                className="text-white font-bold text-[15px] mb-0.5"
                style={{ fontFamily: "'Clash Display', var(--font-display)" }}
              >
                Risco zero, garantido.
              </p>
              <p className="text-white/65 text-[12px] leading-snug">
                Se em 7 dias você achar que não é pra você, devolvemos{" "}
                <span className="text-[#d4af37] font-semibold">100% do seu dinheiro</span>. Sem perguntas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
