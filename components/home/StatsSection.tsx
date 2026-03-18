'use client'
import { motion } from 'framer-motion'
import { estadisticas } from '@/lib/data'
import StatCounter from '@/components/ui/StatCounter'

// Sección de estadísticas con contadores animados
export default function StatsSection() {
  return (
    <section className="py-24 bg-naranja relative overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)'
      }} />
      <div className="absolute inset-0 bg-gradient-to-r from-naranja-hover via-naranja to-orange-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-barlow font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            NUESTRA TRAYECTORIA
          </h2>
          <p className="text-white/80 mt-2">Más de dos décadas impulsando el deporte venezolano</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {estadisticas.map((stat, i) => (
            <motion.div
              key={stat.etiqueta}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-center">
                <div className="font-barlow font-black text-white tabular-nums" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  <StatCounterWhite numero={stat.numero} sufijo={stat.sufijo} />
                </div>
                <div className="text-white/80 mt-1 text-sm font-medium tracking-wider uppercase">
                  {stat.etiqueta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Versión blanca del StatCounter para el fondo naranja
function StatCounterWhite({ numero, sufijo }: { numero: number, sufijo: string }) {
  return <StatCounter numero={numero} sufijo={sufijo} etiqueta="" colorClass="text-white" />
}
