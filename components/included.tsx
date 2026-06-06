"use client"

import { motion } from "framer-motion"
import { PlayCircle, Users, RefreshCw, Headphones, Lock, FileDown, Check } from "lucide-react"

export function Included() {
  const items = [
    {
      icon: PlayCircle,
      title: "Curso completo em vídeo aulas",
      desc: "Do zero ao avançado: edição, thumbnail e algoritmo, passo a passo.",
    },
    {
      icon: Lock,
      title: "Módulo Caixa Preta",
      desc: "Os bastidores, atalhos e erros que economizam meses de tentativa.",
    },
    {
      icon: FileDown,
      title: "Templates e presets prontos",
      desc: "Modelos de thumbnail e presets de edição para usar de imediato.",
    },
    {
      icon: Users,
      title: "Comunidade de criadores",
      desc: "Networking, troca de experiências e suporte entre alunos.",
    },
    {
      icon: RefreshCw,
      title: "Atualizações vitalícias",
      desc: "Comprou uma vez, recebe todas as novas aulas e updates pra sempre.",
    },
    {
      icon: Headphones,
      title: "Suporte para dúvidas",
      desc: "Você não fica travado: tira suas dúvidas durante a jornada.",
    },
  ]

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="noise-overlay" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">O que está incluído</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.1] text-balance"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Tudo que você recebe </span>
            <span className="text-[#d4af37] gold-glow-text">ao entrar hoje.</span>
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
              className="group p-6 rounded-2xl card-shine flex items-start gap-4"
              style={{
                background: "linear-gradient(165deg, rgba(18,18,14,0.8) 0%, rgba(8,8,6,0.95) 100%)",
                border: "1px solid rgba(212,175,55,0.08)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <item.icon className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <h3
                  className="text-base font-bold text-white mb-1.5 leading-snug"
                  style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/55 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha de reforço */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70 font-medium"
        >
          <span className="inline-flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]" /> Acesso imediato após a compra
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]" /> 100% online, no seu ritmo
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]" /> Para qualquer dispositivo
          </span>
        </motion.div>
      </div>
    </section>
  )
}
