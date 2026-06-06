"use client"

import { Check, X } from "lucide-react"
import { motion } from "framer-motion"

export function ForWho() {
  const forYou = [
    "Gosta de futebol e quer uma renda extra no digital",
    "Quer começar do zero, mesmo sem experiência",
    "Não quer (ou não pode) aparecer como jogador",
    "Busca um método prático e direto ao ponto",
    "Quer aprender a criar conteúdo que as pessoas assistem",
  ]

  const notForYou = [
    "Procura aposta, bet ou dinheiro fácil",
    "Quer enriquecer da noite para o dia sem esforço",
    "Não está disposto a criar conteúdo de verdade",
    "Quer fórmula mágica sem colocar em prática",
  ]

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Para quem é</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.1] text-balance"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">O FutMoney é </span>
            <span className="text-[#d4af37] gold-glow-text">para você?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* É para você */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 lg:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(165deg, rgba(25,24,15,0.9) 0%, rgba(12,11,8,0.98) 100%)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(212,175,55,0.12)" }}
              >
                <Check className="w-5 h-5 text-[#d4af37]" />
              </span>
              É para você se...
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(212,175,55,0.12)" }}>
                    <Check className="w-3 h-3 text-[#d4af37]" />
                  </div>
                  <span className="text-white/70 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Não é para você */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 lg:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(165deg, rgba(15,15,12,0.8) 0%, rgba(8,8,6,0.95) 100%)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <h3 className="text-lg font-bold text-white/45 mb-6 flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <X className="w-5 h-5 text-white/30" />
              </span>
              Não é para você se...
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-white/[0.03]">
                    <X className="w-3 h-3 text-white/25" />
                  </div>
                  <span className="text-white/40 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Reforço de clareza */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/45 text-sm mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          O FutMoney <span className="text-white/70 font-medium">não é aposta, não é bet e não promete dinheiro fácil.</span>{" "}
          É um curso sobre criar conteúdo e estratégia digital usando o futebol que você já ama.
        </motion.p>
      </div>
    </section>
  )
}
