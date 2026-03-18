'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Hero section con animaciones Framer Motion, overlay oscuro y líneas de velocidad
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-negro">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/atletismo/1920/1080)' }}
      />
      {/* Overlay en capas */}
      <div className="absolute inset-0 bg-negro/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-negro/30 via-transparent to-negro" />
      <div className="absolute inset-0 bg-gradient-to-r from-negro/60 via-transparent to-negro/20" />

      {/* Líneas de velocidad decorativas */}
      <div className="absolute inset-0 speed-lines opacity-50" />

      {/* Acento naranja inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-naranja to-transparent" />

      {/* Contenido del Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-naranja/20 border border-naranja/40 text-naranja text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 bg-naranja rounded-full animate-pulse" />
              Venezuela Deportiva
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            className="font-barlow font-black text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            VZLA<span className="text-naranja">BIKE</span>
            <br />
            <span className="text-white">AND RUN</span>
            <span className="text-naranja text-4xl align-super">®</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-gray-300 text-xl md:text-2xl mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            La experiencia deportiva más grande de Venezuela.
            <br className="hidden md:block" />
            <span className="text-white font-medium"> Cronometraje profesional. Eventos épicos.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="#eventos"
              className="group inline-flex items-center justify-center gap-2 bg-naranja hover:bg-naranja-hover text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-naranja/30"
            >
              Ver Próximos Eventos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              Solicitar Cronometraje
            </Link>
          </motion.div>

          {/* Estadísticas rápidas */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { num: '+50', label: 'Eventos' },
              { num: '+15K', label: 'Atletas' },
              { num: '+25', label: 'Años' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-barlow font-black text-3xl text-naranja">{num}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  )
}
