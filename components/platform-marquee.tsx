"use client"

import { motion } from "framer-motion"

const platforms = [
  { name: "YouTube", icon: YouTubeIcon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "TikTok", icon: TikTokIcon },
  { name: "Twitter/X", icon: XIcon },
  { name: "Kwai", icon: KwaiIcon },
  { name: "Threads", icon: ThreadsIcon },
]

export function PlatformMarquee() {
  return (
    <div className="py-10 overflow-hidden relative">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent" />
      
      {/* Section label */}
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium">
          Domine todas as plataformas
        </span>
      </div>

      {/* Marquee container */}
      <div className="flex">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-16 items-center"
        >
          {[...platforms, ...platforms, ...platforms, ...platforms].map((platform, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] group"
              style={{
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <platform.icon className="w-10 h-10 text-white/30 group-hover:text-[#d4af37] transition-colors duration-300" />
              <span className="text-lg font-semibold text-white/40 group-hover:text-white/70 transition-colors whitespace-nowrap">
                {platform.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// Platform Icons
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function KwaiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5zm-9 0c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5zm4.5 0c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5z"/>
    </svg>
  )
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.115-1.165 3.476-1.225.928-.04 1.828.043 2.687.26l.086.02c-.015-.853-.096-1.593-.266-2.183-.28-.963-.828-1.642-1.63-2.015-.862-.4-1.972-.44-3.11-.11l-.57-1.924c1.604-.475 3.2-.385 4.5.253 1.206.592 2.07 1.6 2.498 2.913.298.913.422 1.97.422 3.14v.263c.806.461 1.432 1.097 1.855 1.893.64 1.205.94 2.818.201 4.621C20.76 21.905 18.189 23.97 13.2 24h-.014zm1.677-8.486c-.678-.028-1.265.07-1.744.295-.57.266-.909.664-.956 1.12-.047.458.153.89.563 1.217.413.33.995.502 1.635.465 1.028-.055 1.802-.443 2.3-1.153.338-.48.584-1.126.713-1.903-.835-.098-1.697-.085-2.511-.04z"/>
    </svg>
  )
}
