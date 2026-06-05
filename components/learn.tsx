"use client"

import { Video, Scissors, ImageIcon, TrendingUp, Wallet, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function Learn() {
  const items = [
    { icon: Video, title: "Criar vídeos que prendem", text: "Aprenda a gravar e roteirizar conteúdo de futebol que segura a atenção do início ao fim." },
    { icon: Scissors, title: "Editar de forma profissional", text: "Técnicas de edição práticas, do básico ao avançado, mesmo que você nunca tenha editado." },
    { icon: ImageIcon, title: "Thumbnails que geram cliques", text: "Como criar capas e títulos que aumentam as visualizações dos seus vídeos." },
    { icon: TrendingUp, title: "Crescer audiência", text: "Estratégias para atrair seguidores engajados e crescer de forma consistente." },
    { icon: Wallet, title: "Monetizar de verdade", text: "Conheça as fontes de renda reais por trás do conteúdo de futebol no digital." },
    { icon: Lock, title: "Bastidores (Caixa Preta)", text: "Atalhos e erros que economizam meses de tentativa e erro na prática." },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">O que você vai aprender</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.1] text-balance"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Do zero ao seu </span>
            <span className="text-[#d4af37] gold-glow-text">primeiro conteúdo que dá resultado.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="group p-6 lg:p-7 rounded-2xl card-shine"
              style={{
                background: "linear-gradient(165deg, rgba(18,18,14,0.8) 0%, rgba(8,8,6,0.95) 100%)",
                border: "1px solid rgba(212,175,55,0.07)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.12)" }}
              >
                <item.icon className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "'Clash Display', var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-white/45 leading-relaxed text-[15px]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
