import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 sm:py-24" style={{ background: "linear-gradient(180deg, #030303 0%, #000 100%)" }}>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Decorative line */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12" />
          
          {/* Logo Central Play Plus */}
          <Link href="/" className="mb-6 group">
            <Image
              src="/images/logo-central-play-plus.png"
              alt="Central Play Plus"
              width={320}
              height={213}
              className="h-16 sm:h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
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
