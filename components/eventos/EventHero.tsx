'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, Trophy } from 'lucide-react'
import { Evento } from '@/lib/data'
import { formatearFecha } from '@/lib/utils'
import CountdownTimer from '@/components/ui/CountdownTimer'

interface EventHeroProps {
  evento: Evento
}

// Hero banner específico del evento con countdown prominente
export default function EventHero({ evento }: EventHeroProps) {
  const isPast = new Date(evento.fecha) < new Date()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente del evento */}
      <div className={`absolute inset-0 bg-gradient-to-br ${evento.color} opacity-90`} />
      <div className="absolute inset-0 bg-negro/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-negro via-transparent to-transparent" />

      {/* Patrón decorativo de líneas diagonales */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        {/* Badges de distancia */}
        <motion.div
          className="flex justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {evento.distancias.map((dist) => (
            <span
              key={dist}
              className="px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold text-sm tracking-wide"
            >
              {dist}
            </span>
          ))}
        </motion.div>

        {/* Nombre del evento */}
        <motion.h1
          className="font-barlow font-black text-white leading-none mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {evento.nombre.toUpperCase()}
        </motion.h1>

        {/* Fecha y ubicación */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-lg font-medium">{formatearFecha(evento.fecha)}</span>
          </div>
          <span className="hidden sm:block text-white/40">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">{evento.ciudad}</span>
          </div>
        </motion.div>

        {/* Countdown o badge finalizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {isPast ? (
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 font-bold uppercase tracking-widest text-sm">
              Evento Finalizado
            </span>
          ) : (
            <>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Faltan</p>
              <CountdownTimer targetDate={evento.fecha} size="lg" />
            </>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {isPast ? (
            <Link
              href={evento.resultadosSlug ? `/resultados/${evento.resultadosSlug}` : '/resultados'}
              className="inline-flex items-center gap-3 bg-white text-negro font-bold px-10 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-2xl"
            >
              <Trophy className="w-5 h-5" />
              Ver Resultados
            </Link>
          ) : (
            <a
              href="#inscripcion"
              className="inline-flex items-center gap-2 bg-white text-negro font-bold px-10 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-2xl"
            >
              Inscríbete Ahora
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
