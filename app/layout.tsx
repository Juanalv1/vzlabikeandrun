import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Tipografías del proyecto: Barlow Condensed para títulos, DM Sans para cuerpo
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VzlaBike and Run\u00AE | La experiencia deportiva m\u00E1s grande de Venezuela',
  description:
    'Organizaci\u00F3n de eventos deportivos, cronometraje profesional y plataforma de inscripci\u00F3n en l\u00EDnea. M\u00E1s de 25 a\u00F1os impulsando el deporte venezolano.',
  keywords: ['eventos deportivos', 'cronometraje', 'Venezuela', 'running', 'ciclismo', 'VzlaBike'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${barlow.variable} ${dmSans.variable}`}>
      <body className="bg-negro text-white font-dm antialiased">
        {/* Barra de navegaci\u00F3n sticky */}
        <Navbar />

        {/* Contenido principal */}
        <main className="min-h-screen">{children}</main>

        {/* Pie de p\u00E1gina */}
        <Footer />

        {/* Banner fijo inferior: propuesta de redise\u00F1o */}
        <div className="fixed bottom-0 left-0 right-0 z-[60] bg-naranja text-white text-center text-xs py-2 font-medium tracking-wide">
          Propuesta de Rediseño; Desarrollado por Juan Alvarado
        </div>
      </body>
    </html>
  )
}
