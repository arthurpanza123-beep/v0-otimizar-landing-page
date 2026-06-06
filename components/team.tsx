"use client"

import { motion } from "framer-motion"
import { Globe, BadgeCheck } from "lucide-react"

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.07v12.43a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .73-5.07V9.73a5.66 5.66 0 0 0-.73-.05A5.66 5.66 0 1 0 15.54 15V8.69a7.3 7.3 0 0 0 4.27 1.36V6.99a4.28 4.28 0 0 1-3.21-1.17Z" />
    </svg>
  )
}

export function Team() {
  const stats = [
    { value: "100M+", label: "Views gerados" },
    { value: "6 dígitos", label: "Faturados no YouTube" },
    { value: "+10 anos", label: "De experiência real" },
  ]

  const members = [
    {
      name: "Panza Footy Magic",
      role: "Edição & Produção",
      result: "100M+ views na trajetória",
      handle: "@panza.footy.magic",
      image: "/images/logo-panza.png",
      imgClass: "object-contain p-2",
      initials: "PF",
      links: [
        { type: "youtube", url: "https://www.youtube.com/@PanzaFootyMagic" },
        { type: "instagram", url: "https://www.instagram.com/panza.footy.magic/" },
        { type: "tiktok", url: "https://www.tiktok.com/@panzafootymagic_oficial" },
      ],
    },
    {
      name: "L7",
      role: "Thumbnail & Design",
      result: "+10 anos de carreira",
      handle: "Portfólio L7",
      image: "/images/team-l7.png",
      imgClass: "object-cover",
      initials: "L7",
      links: [{ type: "portfolio", url: "https://l7alproducoes.myportfolio.com/" }],
    },
    {
      name: "Falso 9",
      role: "SEO & Algoritmo",
      result: "6 dígitos faturados",
      handle: "@f9parodias",
      image: "/images/logo-falso9.png",
      imgClass: "object-contain p-6",
      initials: "F9",
      links: [
        { type: "youtube", url: "https://www.youtube.com/@f9parodias" },
        { type: "tiktok", url: "https://www.tiktok.com/@f9parodias" },
      ],
    },
  ]

  const iconFor = (type: string, className: string) => {
    switch (type) {
      case "youtube":
        return <YoutubeIcon className={className} />
      case "instagram":
        return <InstagramIcon className={className} />
      case "tiktok":
        return <TiktokIcon className={className} />
      case "portfolio":
        return <Globe className={className} />
      default:
        return null
    }
  }

  const labelFor = (type: string, name: string) => {
    switch (type) {
      case "youtube":
        return `YouTube de ${name}`
      case "instagram":
        return `Instagram de ${name}`
      case "tiktok":
        return `TikTok de ${name}`
      case "portfolio":
        return `Portfólio de ${name}`
      default:
        return name
    }
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="noise-overlay" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#d4af37]/[0.025] rounded-full blur-[160px] ambient-light" />

      <div className="relative max-w-[1140px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 badge-premium">
            <BadgeCheck className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
              Os 3 maiores do nicho
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.1] text-balance mb-5"
            style={{ fontFamily: "'Clash Display', var(--font-display)", letterSpacing: "-0.01em", wordSpacing: "0.06em" }}
          >
            <span className="text-white">Você não vai aprender com teóricos.</span>
            <br className="hidden sm:block" />
            <span className="text-[#d4af37] gold-glow-text"> Vai aprender com quem vive disso.</span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg max-w-[640px] mx-auto leading-relaxed">
            Um trio que construiu carreiras inteiras no futebol digital. Cada um é referência
            no que faz — e agora juntaram tudo num só lugar.
          </p>
        </motion.div>

        {/* Barra de stats agregadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden mb-12 max-w-[760px] mx-auto"
          style={{ border: "1px solid rgba(212,175,55,0.15)", background: "rgba(212,175,55,0.08)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-6 px-3 text-center flex flex-col items-center justify-center"
              style={{ background: "linear-gradient(165deg, rgba(16,16,12,0.96) 0%, rgba(8,8,6,0.98) 100%)" }}
            >
              <span
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#d4af37] gold-glow-text leading-none"
                style={{ fontFamily: "'Clash Display', var(--font-display)" }}
              >
                {stat.value}
              </span>
              <span className="text-white/50 text-[11px] sm:text-xs mt-2 leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Cards dos membros */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-7 lg:p-8 rounded-2xl card-shine flex flex-col items-center text-center overflow-hidden transition-colors duration-300 hover:border-[rgba(212,175,55,0.3)]"
              style={{
                background: "linear-gradient(165deg, rgba(20,20,15,0.9) 0%, rgba(8,8,6,0.97) 100%)",
                border: "1px solid rgba(212,175,55,0.12)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              }}
            >
              {/* Número grande de fundo */}
              <span
                className="absolute -top-4 -right-1 text-[7rem] font-black leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "'Clash Display', var(--font-display)",
                  color: "rgba(212,175,55,0.05)",
                }}
                aria-hidden="true"
              >
                {index + 1}
              </span>

              {/* Glow ambiente no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#d4af37]/[0.03] pointer-events-none" />

              {/* Círculo da foto/logo */}
              <div
                className="relative w-28 h-28 rounded-full mb-5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.2), rgba(8,8,6,1))",
                  border: "2px solid rgba(212,175,55,0.4)",
                  boxShadow: "0 0 35px rgba(212,175,55,0.2)",
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

              <div className="relative flex items-center gap-1.5 mb-1">
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Clash Display', var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <BadgeCheck className="w-[18px] h-[18px] text-[#d4af37]" />
              </div>
              <p className="relative text-white/55 text-sm mb-4">{member.role}</p>

              <div
                className="relative px-3.5 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <span className="text-[#d4af37] text-[13px] font-semibold">{member.result}</span>
              </div>

              <div className="relative flex flex-wrap items-center justify-center gap-3 text-white/45 mt-auto">
                {member.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={labelFor(link.type, member.name)}
                    className="hover:text-[#d4af37] hover:scale-110 transition-all duration-200"
                  >
                    {iconFor(link.type, "w-5 h-5")}
                  </a>
                ))}
                <span className="text-xs">{member.handle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
