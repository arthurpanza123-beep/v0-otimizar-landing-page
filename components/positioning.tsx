"use client"

import Image from "next/image"
import { Video, Users, DollarSign } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"
import { motion } from "framer-motion"

export function Positioning() {
  const cards = [
    {
      icon: Video,
      title: "Criar conteúdo",
      description: "Aprenda a produzir vídeos que prendem atenção e viralizam.",
      stat: "100M+",
      statLabel: "views",
    },
    {
      icon: Users,
      title: "Crescer audiência",
      description: "Domine as estratégias para atrair seguidores engajados.",
      stat: "500+",
      statLabel: "alunos",
    },
    {
      icon: DollarSign,
      title: "Monetizar",
      description: "Transforme views em renda com múltiplas fontes de receita.",
      stat: "7+",
      statLabel: "fontes",
    },
  ]

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Noise */}
      <div className="noise-overlay" />
      
      {/* Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#d4af37]/[0.025] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <ScrollReveal direction="left">
            <div>
              <h2 
                className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold mb-6 leading-[1.12]"
                style={{ fontFamily: "'Clash Display', var(--font-display)", letterSpacing: "-0.01em", wordSpacing: "0.08em" }}
              >
                <span className="text-white">O futebol já prende sua atenção. </span>
                <span className="text-[#d4af37] gold-glow-text">
                  Agora ele trabalha por você.
                </span>
              </h2>
              <p className="text-lg text-white/45 leading-relaxed">
                Enquanto a maioria só assiste e torce, alguns transformam essa atenção em conteúdo, audiência e oportunidade.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ 
                  border: "1px solid rgba(212,175,55,0.12)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)"
                }}
              >
                <Image
                  src="/images/creator-setup.png"
                  alt="Setup profissional de criador de conteúdo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-70" />
              </motion.div>
              {/* Floating stat */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-5 -left-5 px-5 py-3.5 rounded-xl backdrop-blur-2xl"
                style={{
                  background: "rgba(8,8,6,0.9)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
                }}
              >
                <div className="text-2xl font-black text-[#d4af37]">
                  +100M
                </div>
                <div className="text-xs text-white/45">views geradas</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
          {cards.map((card, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative p-7 lg:p-8 rounded-2xl h-full card-shine"
                style={{
                  background: "linear-gradient(165deg, rgba(18,18,14,0.8) 0%, rgba(8,8,6,0.95) 100%)",
                  border: "1px solid rgba(212,175,55,0.08)",
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "0 0 50px rgba(212,175,55,0.06), inset 0 1px 0 rgba(212,175,55,0.08)" }}
                />
                
                {/* Icon */}
                <div 
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: "rgba(212,175,55,0.08)", 
                    border: "1px solid rgba(212,175,55,0.12)" 
                  }}
                >
                  <card.icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                
                {/* Stat */}
                <div className="relative mb-4">
                  <span 
                    className="text-3xl lg:text-4xl font-black text-[#d4af37]"
                    style={{ textShadow: "0 0 30px rgba(212,175,55,0.25)" }}
                  >
                    {card.stat}
                  </span>
                  <span className="text-xs text-white/30 ml-1.5">{card.statLabel}</span>
                </div>

                <h3 
                  className="relative text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                >
                  {card.title}
                </h3>
                <p className="relative text-white/40 leading-relaxed text-[15px]">{card.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
