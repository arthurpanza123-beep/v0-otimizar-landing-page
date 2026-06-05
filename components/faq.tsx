"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQ() {
  const faqs = [
    { question: "O que é o FutMoney?", answer: "Um método completo para transformar a paixão por futebol em conteúdo de qualidade, audiência engajada e renda." },
    { question: "Preciso aparecer nos vídeos?", answer: "Não. Você pode criar conteúdo sem mostrar o rosto. O método ensina diversas abordagens." },
    { question: "O FutMoney é sobre bet/apostas?", answer: "Não. O foco é 100% em criação de conteúdo, estratégia de audiência e monetização através de canais e parcerias." },
    { question: "Preciso saber editar vídeos?", answer: "Não. O método inclui módulos completos de edição, do básico ao avançado." },
    { question: "Por quanto tempo terei acesso?", answer: "O acesso é vitalício. Você terá acesso a todas as atualizações futuras sem custo adicional." },
    { question: "Como funciona a garantia?", answer: "Em até 7 dias, se não gostar, devolvemos 100% do valor sem perguntas." },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      {/* Noise */}
      <div className="noise-overlay" />
      
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[700px] mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">FAQ</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Perguntas </span>
            <span className="text-[#d4af37] gold-glow-text">frequentes</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="rounded-xl overflow-hidden"
              style={{
                background: openIndex === index 
                  ? "linear-gradient(165deg, rgba(22,21,15,0.95) 0%, rgba(10,10,8,1) 100%)"
                  : "linear-gradient(165deg, rgba(15,15,12,0.7) 0%, rgba(8,8,6,0.9) 100%)",
                border: `1px solid ${openIndex === index ? "rgba(212,175,55,0.18)" : "rgba(255,255,255,0.03)"}`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 lg:p-5 text-left"
              >
                <span 
                  className="font-medium text-white text-[15px] pr-4"
                  style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                >
                  {faq.question}
                </span>
                <div 
                  className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center transition-all duration-300"
                  style={{ 
                    background: openIndex === index ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.03)",
                  }}
                >
                  <ChevronDown
                    className={`w-4 h-4 ${openIndex === index ? "text-[#d4af37]" : "text-white/40"} transition-all duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 lg:px-5 pb-4 lg:pb-5 text-white/45 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
