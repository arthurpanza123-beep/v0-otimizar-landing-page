"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/success-creator.png"
          alt="Sucesso"
          fill
          className="object-cover opacity-10"
        />
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #030303, rgba(3,3,3,0.9), #030303)" }}
        />
      </div>

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#d4af37]/[0.03] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        {/* Logo Liga dos Criadores */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/logo-liga-criadores.png"
            alt="Liga dos Criadores"
            width={200}
            height={60}
            className="h-12 w-auto opacity-80"
          />
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-[1.1]"
          style={{ fontFamily: "'Clash Display', var(--font-display)" }}
        >
          <span className="text-white">O próximo grande criador </span>
          <span className="text-[#d4af37] gold-glow-text">pode ser você.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/40 leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Você já ama futebol. Agora falta aprender o jogo por trás da audiência e da monetização.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-xl font-bold text-base text-black btn-premium"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            Entrar para o FutMoney agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white/40 text-xs"
        >
          Acesso imediato • Conteúdo prático • Garantia de 7 dias
        </motion.p>
      </div>
    </section>
  )
}
