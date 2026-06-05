"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#video", label: "Vídeo" },
    { href: "#metodo", label: "O Método" },
    { href: "#conteudo", label: "Conteúdo" },
    { href: "#resultados", label: "Resultados" },
    { href: "#planos", label: "Preço" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - FutMoney */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-futmoney.png"
              alt="FutMoney"
              width={140}
              height={50}
              className="h-10 lg:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-[13px] text-black transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #f0d060 0%, #d4af37 50%, #b8860b 100%)",
                boxShadow: "0 0 20px rgba(212,175,55,0.25)",
              }}
            >
              Garantir vaga
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/70"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.05]">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors py-3"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-sm text-black mt-3"
              style={{
                background: "linear-gradient(135deg, #f0d060 0%, #d4af37 50%, #b8860b 100%)",
              }}
            >
              Garantir vaga
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
