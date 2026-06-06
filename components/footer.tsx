import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 sm:py-24" style={{ background: "linear-gradient(180deg, #030303 0%, #000 100%)" }}>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Decorative line */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12" />
          
          {/* Logo Panza */}
          <Link href="/" className="mb-6 group">
            <Image
              src="/images/logo-panza.png"
              alt="Panza Footy Magic"
              width={180}
              height={180}
              className="h-20 sm:h-24 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <p className="text-white/30 text-sm max-w-sm leading-relaxed mb-12">
            Transformando paixão por futebol em conteúdo, audiência e renda.
          </p>

          <p className="text-[11px] text-white/15">
            © {new Date().getFullYear()} FutMoney. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
