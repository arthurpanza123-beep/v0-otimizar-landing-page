"use client"

import { Compass, ImageIcon, Video, Sparkles, Rocket, Lock, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function Journey() {
  const chapters = [
    { number: "01", title: "Por onde começar", icon: Compass },
    { number: "02", title: "Criação de thumbnail", icon: ImageIcon },
    { number: "03", title: "Edição de vídeo", icon: Video },
    { number: "04", title: "Conteúdos de sucesso", icon: Sparkles },
    { number: "05", title: "Destravando monetização", icon: Rocket },
    { number: "06", title: "Caixa Preta", icon: Lock, special: true },
  ]

  return (
    <section id="conteudo" className="relative py-28 lg:py-36 overflow-hidden scroll-mt-20">
      {/* Noise */}
      <div className="noise-overlay" />
      
      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[120px] ambient-light" />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Conteúdo</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Sua jornada no </span>
            <span className="text-[#d4af37] gold-glow-text">FutMoney</span>
          </h2>
        </motion.div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group relative p-5 lg:p-6 rounded-xl overflow-hidden card-shine cursor-pointer ${chapter.special ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{
                background: chapter.special 
                  ? "linear-gradient(165deg, rgba(28,26,16,0.9) 0%, rgba(12,11,8,0.98) 100%)"
                  : "linear-gradient(165deg, rgba(16,16,12,0.8) 0%, rgba(8,8,6,0.95) 100%)",
                border: `1px solid rgba(212,175,55,${chapter.special ? 0.18 : 0.06})`,
              }}
            >
              {/* Special badge */}
              {chapter.special && (
                <div 
                  className="absolute top-0 right-4 px-2.5 py-1 text-[9px] font-bold tracking-widest rounded-b"
                  style={{ background: "linear-gradient(135deg, #f0d060, #d4af37)", color: "#030303" }}
                >
                  EXCLUSIVO
                </div>
              )}

              <div className="flex items-center gap-4">
                <div 
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: chapter.special ? "rgba(212,175,55,0.12)" : "rgba(212,175,55,0.06)", 
                    border: `1px solid rgba(212,175,55,${chapter.special ? 0.2 : 0.1})` 
                  }}
                >
                  <chapter.icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#d4af37]/50 text-[10px] font-bold tracking-widest block mb-0.5">
                    CAPÍTULO {chapter.number}
                  </span>
                  <h3 
                    className="text-base font-semibold text-white truncate"
                    style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                  >
                    {chapter.title}
                  </h3>
                </div>
                <ChevronRight className="w-4 h-4 text-[#d4af37]/40 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* End indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ 
              background: "rgba(212,175,55,0.08)", 
              border: "1.5px solid rgba(212,175,55,0.2)",
              boxShadow: "0 0 40px rgba(212,175,55,0.15)"
            }}
          >
            <Rocket className="w-5 h-5 text-[#d4af37]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
