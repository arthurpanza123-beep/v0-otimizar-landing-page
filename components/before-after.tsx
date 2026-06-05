"use client"

import Image from "next/image"
import { X, Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function BeforeAfter() {
  const before = [
    "Cria no impulso",
    "Depende da sorte",
    "Não sabe reter atenção",
    "Não entende monetização",
    "Fica preso na arquibancada",
  ]

  const after = [
    "Cria com plano",
    "Entende o jogo da atenção",
    "Produz com mais qualidade",
    "Sabe onde monetizar",
    "Entra para a Liga dos Criadores",
  ]

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/[0.02] blur-[180px] rounded-full ambient-light" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">De torcedor comum a </span>
            <span className="text-[#d4af37] gold-glow-text">criador com estratégia.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-5 relative">
          {/* Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-12 h-12 rounded-full flex items-center justify-center btn-premium"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 lg:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(165deg, rgba(15,15,12,0.8) 0%, rgba(8,8,6,0.95) 100%)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-7">
              <Image src="/images/frustrated-creator.png" alt="Antes" fill className="object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-transparent to-transparent" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <X className="w-5 h-5 text-white/25" />
              </div>
              <h3 className="text-lg font-bold text-white/35">Antes do FutMoney</h3>
            </div>
            <ul className="space-y-2.5">
              {before.map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.015)" }}>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-white/[0.03] flex items-center justify-center">
                    <X className="w-3 h-3 text-white/20" />
                  </div>
                  <span className="text-white/40 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-7 lg:p-8 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(165deg, rgba(25,24,15,0.9) 0%, rgba(12,11,8,0.98) 100%)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/[0.05] rounded-full blur-[60px]" />
            
            <div className="relative aspect-video rounded-xl overflow-hidden mb-7">
              <Image src="/images/success-creator.png" alt="Depois" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b08] via-transparent to-transparent" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(212,175,55,0.1)" }}
                >
                  <Check className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-bold text-white">Depois do FutMoney</h3>
              </div>
              <ul className="space-y-2.5">
                {after.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.06)" }}
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(212,175,55,0.12)" }}>
                      <Check className="w-3 h-3 text-[#d4af37]" />
                    </div>
                    <span className="text-white text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
