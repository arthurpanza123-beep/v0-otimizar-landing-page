import Image from "next/image"
import { Lock, Sparkles, Eye, Zap } from "lucide-react"

export function BlackBox() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#050505] overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/[0.03] rounded-full blur-[200px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(28,26,15,0.9) 0%, rgba(12,11,8,0.95) 100%)",
              border: "2px solid rgba(212,175,55,0.2)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/images/caixa-preta.png"
                  alt="Caixa Preta - Bonus Exclusivo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c0b08] lg:bg-gradient-to-l" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b08] via-transparent to-transparent lg:hidden" />
              </div>

              {/* Content Side */}
              <div className="relative p-10 lg:p-16">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#d4af37]/30 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#d4af37]/30 rounded-bl-3xl lg:hidden" />
                
                {/* Glow */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#d4af37]/[0.08] rounded-full blur-[100px]" />

                <div className="relative">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                    style={{ 
                      background: "rgba(212,175,55,0.12)", 
                      border: "1px solid rgba(212,175,55,0.2)",
                      boxShadow: "0 0 60px rgba(212,175,55,0.15)"
                    }}
                  >
                    <Lock className="w-8 h-8 text-[#d4af37]" />
                  </div>

                  {/* Title */}
                  <h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight"
                    style={{ fontFamily: "'Clash Display', 'Space Grotesk', system-ui, sans-serif" }}
                  >
                    <span className="text-white">A </span>
                    <span className="text-[#d4af37]" style={{ textShadow: "0 0 60px rgba(212,175,55,0.5)" }}>
                      Caixa Preta
                    </span>
                  </h2>

                  <p className="text-lg text-[#d4af37] font-semibold mb-4">
                    O bônus com os bastidores que quase ninguém revela.
                  </p>

                  <p className="text-white/50 leading-relaxed mb-10">
                    Estratégias, atalhos, erros e aprendizados que podem economizar meses de tentativa e erro. Acesso exclusivo aos bastidores dos maiores criadores de conteúdo de futebol.
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: Eye, text: "Segredos revelados" },
                      { icon: Zap, text: "Atalhos validados" },
                      { icon: Sparkles, text: "Erros para evitar" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors hover:bg-[rgba(212,175,55,0.12)]"
                        style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)" }}
                      >
                        <item.icon className="w-4 h-4 text-[#d4af37]" />
                        <span className="text-white font-semibold text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
