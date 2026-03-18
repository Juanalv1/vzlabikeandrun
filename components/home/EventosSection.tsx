'use client'
import { motion } from 'framer-motion'
import { eventos } from '@/lib/data'
import EventCard from '@/components/ui/EventCard'

// Sección de próximos eventos con grid de cards
export default function EventosSection() {
  return (
    <section id="eventos" className="py-24 bg-negro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-naranja font-bold text-sm uppercase tracking-widest">Calendario 2026</span>
          <h2 className="font-barlow font-black text-white mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            PRÓXIMOS EVENTOS
          </h2>
          <p className="text-gris-texto mt-3 max-w-xl">
            Únete a la competencia. Registrate hoy y vive la experiencia deportiva más grande de Venezuela.
          </p>
        </motion.div>

        {/* Grid de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento, i) => (
            <motion.div
              key={evento.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <EventCard evento={evento} />
            </motion.div>
          ))}
        </div>

        {/* CTA ver todos */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="border border-gris-4 hover:border-naranja text-gris-texto hover:text-naranja px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200">
            Ver Todos los Eventos →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
