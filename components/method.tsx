"use client"

import Image from "next/image"
import { Target, FileVideo, Scissors, Users, Wallet, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function Method() {
  const steps = [
    { icon: Target, number: "01", title: "Posicionamento", description: "Defina seu nicho e se destaque no mercado." },
    { icon: FileVideo, number: "02", title: "Conteúdo", description: "Crie vídeos que prendem do início ao fim." },
    { icon: Scissors, number: "03", title: "Edição", description: "Domine as técnicas que fazem viralizar." },
    { icon: Users, number: "04", title: "Audiência", description: "Construa seguidores engajados e fiéis." },
    { icon: Wallet, number: "05", title: "Monetização", description: "Transforme views em receita recorrente." },
    { icon: Lock, number: "06", title: "Caixa Preta", description: "Acesse os segredos que aceleram resultados." },
  ]

  return (
    <section id="metodo" className="relative py-16 lg:py-24 overflow-hidden scroll-mt-20">
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 badge-premium">
              <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Estratégia</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl lg:text-[3rem] font-bold mb-5 tracking-tight"
              style={{ fontFamily: "'Clash Display', var(--font-display)" }}
            >
              <span className="text-white">O Método </span>
              <span className="text-[#d4af37] gold-glow-text">FutMoney</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed">
              Plano de jogo completo para transformar paixão em conteúdo lucrativo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ 
                border: "1px solid rgba(212,175,55,0.12)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)"
              }}
            >
              <Image src="/images/strategy-board.png" alt="Quadro tático" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030303]/80" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 lg:-right-6 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(8,8,6,0.95)",
                border: "1px solid rgba(212,175,55,0.2)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5)"
              }}
            >
              <div className="text-xl font-black text-[#d4af37]">6 módulos</div>
              <div className="text-xs text-white/40">completos</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 lg:p-7 rounded-2xl overflow-hidden card-shine"
              style={{
                background: "linear-gradient(165deg, rgba(18,18,14,0.8) 0%, rgba(8,8,6,0.95) 100%)",
                border: "1px solid rgba(212,175,55,0.06)",
              }}
            >
              {/* Number BG */}
              <span className="absolute top-2 right-3 text-6xl font-black text-[#d4af37]/[0.025] pointer-events-none">
                {step.number}
              </span>

              <div className="relative">
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.1)" }}
                >
                  <step.icon className="w-5 h-5 text-[#d4af37]" />
                </div>

                <span className="text-[#d4af37]/60 text-[10px] font-bold mb-2 block tracking-widest">
                  PASSO {step.number}
                </span>
                <h3 
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Progress */}
              <div className="mt-5 h-0.5 bg-white/[0.03] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#f0d77a]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
