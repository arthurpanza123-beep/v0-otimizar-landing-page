"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Caio Arantes",
      role: "Criador de conteúdo de futebol",
      image: "/images/testimonial-1.png",
      content: "Eu postava direto e não passava de 500 seguidores. Apliquei o método de thumb e edição e em 3 meses bati 50 mil. Mudou meu jogo.",
      rating: 5,
      highlight: "500 → 50k seguidores",
    },
    {
      name: "Larissa Mendes",
      role: "Editora de vídeos",
      image: "/images/testimonial-2.png",
      content: "Eu editava horas e o vídeo morria com 200 views. Depois que entendi os cortes e o ritmo que eles ensinam, meus Reels começaram a estourar.",
      rating: 5,
      highlight: "Reels viralizando",
    },
    {
      name: "Ramon Teixeira",
      role: "Criador de conteúdo",
      image: "/images/testimonial-3.png",
      content: "A Caixa Preta sozinha já pagou o curso. Os bastidores me pouparam meses de tentativa e erro que eu ia gastar sozinho.",
      rating: 5,
      highlight: "Economizou meses",
    },
  ]

  return (
    <section id="resultados" className="relative py-16 lg:py-24 overflow-hidden scroll-mt-20">
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
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div             className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Resultados</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1.12]"
            style={{ fontFamily: "'Clash Display', var(--font-display)", letterSpacing: "-0.01em" }}
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
              className="group p-6 lg:p-7 rounded-2xl card-shine transition-colors duration-300 hover:border-[rgba(212,175,55,0.25)]"
              style={{
                background: "linear-gradient(165deg, rgba(20,20,15,0.85) 0%, rgba(8,8,6,0.96) 100%)",
                border: "1px solid rgba(212,175,55,0.12)",
                boxShadow: "0 0 40px rgba(0,0,0,0.4)",
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
              <Quote className="w-8 h-8 text-[#d4af37]/25 mb-4" />

              <p className="text-white/80 leading-relaxed text-[15px] mb-6">
                {`"${t.content}"`}
              </p>

              {/* Rating */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>

              {/* Author */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center gap-3.5">
                <div 
                  className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: "2px solid rgba(212,175,55,0.35)", boxShadow: "0 0 16px rgba(212,175,55,0.18)" }}
                >
                  <Image src={t.image || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white text-[15px]">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
