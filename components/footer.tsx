import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

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

          <p className="text-white/30 text-sm max-w-sm leading-relaxed mb-8">
            Transformando paixão por futebol em conteúdo, audiência e renda.
          </p>

          {/* WhatsApp para dúvidas */}
          <a
            href="https://wa.me/5519988552541?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20FutMoney."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/70 hover:text-[#d4af37] transition-colors mb-12"
            style={{ border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <MessageCircle className="w-4 h-4 text-[#d4af37]" />
            Dúvidas? Fale no WhatsApp
          </a>

          <p className="text-[11px] text-white/15">
            © {new Date().getFullYear()} FutMoney. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
