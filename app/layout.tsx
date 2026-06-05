import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FutMoney - Ganhe dinheiro com futebol sem ser jogador',
  description: 'Curso prático que ensina do zero a transformar sua paixão por futebol em conteúdo, audiência e renda no digital. Não é aposta, não é bet. Acesso imediato e garantia de 7 dias.',
  generator: 'v0.app',
  keywords: ['futebol', 'criação de conteúdo', 'renda extra', 'monetização', 'youtube', 'instagram', 'tiktok', 'futmoney', 'curso de futebol'],
  openGraph: {
    title: 'FutMoney - Ganhe dinheiro com futebol sem ser jogador',
    description: 'Aprenda do zero a transformar futebol em conteúdo, audiência e renda no digital. Curso prático, acesso imediato, garantia de 7 dias.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030303',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
