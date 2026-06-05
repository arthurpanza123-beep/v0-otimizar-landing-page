"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      
      if (scrollY > heroHeight * 0.8 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{
            background: "linear-gradient(to top, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.95) 100%)",
            borderTop: "1px solid rgba(212,175,55,0.2)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="px-4 py-4 flex items-center gap-3">
            <Link
              href="https://pay.kiwify.com.br/AA4gU1n?afid=6BwLcUwY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-black overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #f5dc6a 0%, #d4af37 45%, #b8860b 100%)",
                boxShadow: "0 0 30px rgba(212,175,55,0.4), 0 4px 15px rgba(0,0,0,0.4)",
                fontFamily: "var(--font-space), system-ui, sans-serif",
              }}
            >
              Garantir minha vaga agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white/80 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Urgency text */}
          <div className="px-4 pb-3 pt-0">
            <p className="text-center text-xs text-white/40">
              <span className="text-[#d4af37]">+500 criadores</span> já estão na Liga
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
