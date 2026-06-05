"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Caio Arantes",
      role: "Criador de conteúdo",
      image: "/images/testimonial-1.png",
      content: "O FutMoney mudou completamente minha visão. Em 3 meses, saí de 500 para 50 mil seguidores.",
      rating: 5,
      highlight: "500 para 50k",
    },
    {
      name: "Patryck Sander",
      role: "Editor de vídeos",
      image: "/images/testimonial-2.png",
      content: "Antes editava por horas sem resultado. Agora entendo o que funciona e meus vídeos nunca engajaram tanto.",
      rating: 5,
      highlight: "Engajamento recorde",
    },
    {
      name: "Ramon",
      role: "Criador de conteúdo",
      image: "/images/testimonial-3.png",
      content: "A Caixa Preta sozinha já valeu o investimento. Economizei meses de erro com os bastidores.",
      rating: 5,
      highlight: "Economizou meses",
    },
  ]

  return (
    <section id="resultados" className="relative py-28 lg:py-36 overflow-hidden scroll-mt-20">
      {/* Noise */}
      <div className="noise-overlay" />
      
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Resultados</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Resultados de quem </span>
            <span className="text-[#d4af37] gold-glow-text">entrou em campo.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group p-6 lg:p-7 rounded-2xl card-shine"
              style={{
                background: "linear-gradient(165deg, rgba(18,18,14,0.8) 0%, rgba(8,8,6,0.95) 100%)",
                border: "1px solid rgba(212,175,55,0.06)",
              }}
            >
              {/* Highlight */}
              <div 
                className="inline-flex items-center px-3 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.1)" }}
              >
                <span className="text-[11px] text-[#d4af37] font-semibold">{t.highlight}</span>
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-[#d4af37]/10 mb-4" />

              <p className="text-white/60 leading-relaxed text-[15px] mb-6">
                {`"${t.content}"`}
              </p>

              {/* Rating */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>

              {/* Author */}
              <div className="pt-5 border-t border-white/[0.04] flex items-center gap-3.5">
                <div 
                  className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: "2px solid rgba(212,175,55,0.2)" }}
                >
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white text-[15px]">{t.name}</p>
                  <p className="text-white/35 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
