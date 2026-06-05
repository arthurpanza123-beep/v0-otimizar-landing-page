"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  endDate?: Date
  hoursFromNow?: number
}

export function CountdownTimer({ endDate, hoursFromNow = 24 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = endDate || new Date(Date.now() + hoursFromNow * 60 * 60 * 1000)
    
    // Store in localStorage to persist across refreshes
    const storedEnd = localStorage.getItem("futmoney-countdown-end")
    const finalTarget = storedEnd ? new Date(storedEnd) : target
    
    if (!storedEnd) {
      localStorage.setItem("futmoney-countdown-end", target.toISOString())
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = finalTarget.getTime() - now

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24) + Math.floor(difference / (1000 * 60 * 60 * 24)) * 24,
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Reset timer when it ends
        localStorage.removeItem("futmoney-countdown-end")
        setTimeLeft({ hours: hoursFromNow, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate, hoursFromNow])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, rgba(30,28,20,0.95) 0%, rgba(15,14,10,0.98) 100%)",
          border: "1px solid rgba(212,175,55,0.25)",
          boxShadow: "0 0 30px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <span
          className="text-2xl sm:text-3xl font-bold tabular-nums"
          style={{
            fontFamily: "'Clash Display', 'Space Grotesk', system-ui, sans-serif",
            color: "#d4af37",
            textShadow: "0 0 20px rgba(212,175,55,0.5)",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-2 font-medium">
        {label}
      </span>
    </div>
  )

  const Separator = () => (
    <div className="flex flex-col items-center justify-center gap-2 px-1 sm:px-2 pb-6">
      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-white/50 text-sm">
        <Clock className="w-4 h-4 text-[#d4af37]" />
        <span>Oferta expira em:</span>
      </div>
      <div className="flex items-center">
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <Separator />
        <TimeBlock value={timeLeft.minutes} label="Min" />
        <Separator />
        <TimeBlock value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  )
}
