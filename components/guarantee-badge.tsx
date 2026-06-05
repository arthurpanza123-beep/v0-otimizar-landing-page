import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function GuaranteeBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto"
      style={{
        background: "linear-gradient(145deg, rgba(20,25,15,0.9) 0%, rgba(10,12,8,0.95) 100%)",
        border: "1px solid rgba(212,175,55,0.15)",
        boxShadow: "0 0 60px rgba(212,175,55,0.08)",
      }}
    >
      {/* Shield Icon */}
      <div 
        className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at 40% 35%, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 70%)",
          border: "2px solid rgba(212,175,55,0.3)",
          boxShadow: "0 0 40px rgba(212,175,55,0.15), inset 0 0 30px rgba(212,175,55,0.05)",
        }}
      >
        <ShieldCheck 
          className="w-12 h-12 sm:w-14 sm:h-14 text-[#d4af37]" 
          strokeWidth={1.5}
        />
        {/* 7 Days text */}
        <div 
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #b8860b 100%)",
            color: "#000",
            boxShadow: "0 0 20px rgba(212,175,55,0.4)",
          }}
        >
          7 DIAS
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left">
        <h4 
          className="text-xl sm:text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "'Clash Display', 'Space Grotesk', system-ui, sans-serif" }}
        >
          Garantia Incondicional
        </h4>
        <p className="text-white/50 text-sm sm:text-base leading-relaxed">
          Se em 7 dias você sentir que o FutMoney não é para você, 
          basta pedir reembolso. Devolvemos 100% do seu investimento, 
          <span className="text-[#d4af37] font-medium"> sem perguntas</span>.
        </p>
      </div>
    </div>
  )
}
