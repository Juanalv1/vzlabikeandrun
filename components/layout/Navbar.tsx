'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#eventos', label: 'Eventos' },
  { href: '/resultados', label: 'Resultados' },
  { href: '#contacto', label: 'Contacto' },
]

// Navbar sticky con efecto blur al hacer scroll y hamburger menu en mobile
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-negro/90 backdrop-blur-xl border-b border-gris-3 py-3'
        : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_white.png"
              alt="VzlaBike and Run"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Links desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-naranja text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <Link
              href="/eventos/womens-run-2026"
              className="bg-naranja hover:bg-naranja-hover text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-naranja/30"
            >
              Inscríbete
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-gris-2 transition-colors"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú"
          >
            {menuAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuAbierto && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gris-3 pt-4">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2.5 rounded-lg hover:bg-gris-2 text-sm font-medium transition-colors"
                  onClick={() => setMenuAbierto(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/eventos/womens-run-2026"
                className="mt-2 bg-naranja hover:bg-naranja-hover text-white font-bold px-5 py-3 rounded-xl text-sm text-center transition-colors"
                onClick={() => setMenuAbierto(false)}
              >
                Inscríbete
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
