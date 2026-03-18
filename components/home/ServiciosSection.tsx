'use client'
import { motion } from 'framer-motion'
import { Timer, Trophy, Monitor } from 'lucide-react'
import { servicios } from '@/lib/data'

const iconos = { Timer, Trophy, Monitor }

// Sección de servicios con cards en fondo degradado oscuro
export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gris-1 to-negro relative overflow-hidden">
      {/* Acento decorativo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-naranja/40 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-naranja/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-naranja font-bold text-sm uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="font-barlow font-black text-white mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            NUESTROS SERVICIOS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => {
            const IconComponent = iconos[servicio.icon as keyof typeof iconos]
            return (
              <motion.div
                key={servicio.titulo}
                className="group bg-gris-2 border border-gris-3 hover:border-naranja/50 rounded-2xl p-8 transition-all duration-300 hover:bg-gris-2/80"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 bg-naranja/10 group-hover:bg-naranja rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-naranja group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-barlow font-bold text-white text-xl mb-3 group-hover:text-naranja transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-gris-texto text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
