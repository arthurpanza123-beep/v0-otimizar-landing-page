"use client"

import { motion } from "framer-motion"
import { AtSign, Tv } from "lucide-react"

export function Team() {
  // Para o Thumbmaker: preencha "name", "result" e "handle", e adicione a
  // logo em /public/images, apontando o campo "image".
  const members = [
    {
      name: "Panza Footy Magic",
      role: "Edição & Produção",
      result: "+X milhões de views",
      handle: "@panzafootymagic",
      image: "/images/logo-panza.png",
      imgClass: "object-contain p-1.5",
      initials: "PF",
    },
    {
      name: "A definir",
      role: "Thumbnail & Design",
      result: "+X canais escalados",
      handle: "@usuario",
      image: "",
      imgClass: "object-contain p-1.5",
      initials: "TM",
    },
    {
      name: "Falso 9",
      role: "SEO & Algoritmo",
      result: "+X milhões de views",
      handle: "@falso9",
      image: "/images/logo-falso9.png",
      imgClass: "object-contain p-5",
      initials: "F9",
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="noise-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] ambient-light" />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">Quem vai te ensinar</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Clash Display', var(--font-display)" }}
          >
            <span className="text-white">Por trás de quem já fez </span>
            <span className="text-[#d4af37] gold-glow-text">milhões de views.</span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg max-w-[600px] mx-auto leading-relaxed">
            Não é teoria de quem nunca postou. É o método de quem vive de
            conteúdo de futebol todos os dias.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-7 rounded-2xl card-shine flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(165deg, rgba(18,18,14,0.85) 0%, rgba(8,8,6,0.96) 100%)",
                border: "1px solid rgba(212,175,55,0.1)",
              }}
            >
              {/* Círculo da foto/logo */}
              <div
                className="relative w-24 h-24 rounded-full mb-5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.18), rgba(8,8,6,1))",
                  border: "2px solid rgba(212,175,55,0.35)",
                  boxShadow: "0 0 30px rgba(212,175,55,0.15)",
                }}
              >
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className={`w-full h-full ${member.imgClass}`} />
                ) : (
                  <span
                    className="text-2xl font-black text-[#d4af37]"
                    style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                  >
                    {member.initials}
                  </span>
                )}
              </div>

              <h3
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "'Clash Display', var(--font-display)" }}
              >
                {member.name}
              </h3>
              <p className="text-white/55 text-sm mb-3">{member.role}</p>

              <div
                className="px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <span className="text-[#d4af37] text-xs font-semibold">{member.result}</span>
              </div>

              <div className="flex items-center gap-3 text-white/40 mt-auto">
                <AtSign className="w-4 h-4 hover:text-[#d4af37] transition-colors cursor-pointer" />
                <Tv className="w-4 h-4 hover:text-[#d4af37] transition-colors cursor-pointer" />
                <span className="text-xs">{member.handle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
