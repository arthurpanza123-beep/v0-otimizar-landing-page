"use client"

import { Scissors, ImageIcon, TrendingUp, Check } from "lucide-react"
import { motion } from "framer-motion"

export function Curriculum() {
  const pillars = [
    {
      icon: Scissors,
      tag: "Pilar 01",
      title: "Edição que prende do início ao fim",
      desc: "Do corte básico ao avançado — mesmo que você nunca tenha aberto um editor.",
      topics: [
        "Cortes, ritmo e timing que seguram a retenção",
        "Efeitos, transições e zoom dinâmico no estilo viral",
        "Sincronização de áudio, trilha e impacto sonoro",
        "Legendas e textos que aumentam o tempo de tela",
        "Presets e atalhos para editar muito mais rápido",
      ],
    },
    {
      icon: ImageIcon,
      tag: "Pilar 02",
      title: "Thumbnails e capas que geram cliques",
      desc: "A capa decide se o vídeo bomba ou morre. Aqui você domina isso.",
      topics: [
        "Anatomia de uma thumb que para o dedo da pessoa",
        "Psicologia de cores, contraste e expressões",
        "Títulos magnéticos que multiplicam o CTR",
        "Templates prontos para adaptar em minutos",
        "Testes A/B para descobrir o que mais converte",
      ],
    },
    {
      icon: TrendingUp,
      tag: "Pilar 03",
      title: "SEO e algoritmo para viralizar",
      desc: "Entenda como o algoritmo distribui e faça seus vídeos alcançarem mais gente.",
      topics: [
        "Como o algoritmo do YouTube, TikTok e Reels decide quem aparece",
        "Palavras-chave, tags e descrições otimizadas",
        "Estratégia de postagem e frequência ideal",
        "Ganchos nos primeiros 3 segundos para reter",
        "Como transformar views em audiência fiel e renda",
      ],
    },
  ]

  return (
    <section id="conteudo" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="noise-overlay" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">O conteúdo completo</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Você domina os </span>
            <span className="text-[#d4af37] gold-glow-text">3 pilares</span>
            <span className="text-white"> de quem vive de futebol no digital.</span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg max-w-[640px] mx-auto leading-relaxed">
            Edição, thumbnail e algoritmo. Tudo passo a passo, do absoluto zero,
            com a mesma estratégia usada para gerar <span className="text-white font-semibold">milhões de views.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-7 rounded-2xl card-shine flex flex-col"
              style={{
                background: "linear-gradient(165deg, rgba(18,18,14,0.85) 0%, rgba(8,8,6,0.96) 100%)",
                border: "1px solid rgba(212,175,55,0.1)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.18)" }}
                >
                  <pillar.icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <span className="text-[#d4af37]/70 text-[11px] font-bold tracking-[0.18em] uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-white mb-2 leading-snug"
                style={{ fontFamily: "'Clash Display', var(--font-display)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{pillar.desc}</p>

              <ul className="space-y-2.5 mt-auto">
                {pillar.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(212,175,55,0.12)" }}
                    >
                      <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                    </div>
                    <span className="text-white/70 text-[13px] leading-snug">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
