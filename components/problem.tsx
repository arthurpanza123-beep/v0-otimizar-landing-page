"use client"

import Image from "next/image"
import { Lightbulb, Eye, Film, TrendingUp, Wallet, Clock, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Problem() {
  const problems = [
    { icon: Lightbulb, text: "Você tem ideias, mas não sabe transformar em conteúdo." },
    { icon: Eye, text: "Você posta, mas ninguém vê." },
    { icon: Film, text: "Você edita, mas o vídeo não prende." },
    { icon: TrendingUp, text: "Você vê outros crescendo e não entende o motivo." },
    { icon: Wallet, text: "Você não sabe como monetizar." },
    { icon: Clock, text: "Você sente que está começando atrasado." },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Noise */}
      <div className="noise-overlay" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.012]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Ambient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/[0.015] rounded-full blur-[180px]" />

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div 
              className="relative aspect-square max-w-[450px] mx-auto rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <Image
                src="/images/frustrated-creator.png"
                alt="Criador frustrado"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 badge-premium"
            >
              <AlertCircle className="w-3.5 h-3.5 text-white/35" />
              <span className="text-xs text-white/45 font-medium uppercase tracking-wider">O problema</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[3rem] font-bold mb-10 tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Clash Display', var(--font-display)" }}
            >
              <span className="text-white">Você não está sem talento. </span>
              <span className="text-[#d4af37] gold-glow-text">
                Você está sem estratégia.
              </span>
            </motion.h2>

            {/* Problems */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: -4 }}
                  className="group flex items-center gap-4 p-3.5 rounded-xl transition-colors duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.03)",
                  }}
                >
                  <div 
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <problem.icon className="w-4 h-4 text-white/25 group-hover:text-white/40 transition-colors duration-300" />
                  </div>
                  <p className="text-white/55 text-[15px] group-hover:text-white/70 transition-colors duration-300">
                    {problem.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
