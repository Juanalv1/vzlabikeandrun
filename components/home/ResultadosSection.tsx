'use client'
import { motion } from 'framer-motion'
import { resultadosRecientes } from '@/lib/data'
import { formatearFecha } from '@/lib/utils'
import { ExternalLink, Users } from 'lucide-react'

// Sección de resultados recientes de eventos pasados
export default function ResultadosSection() {
  return (
    <section id="resultados" className="py-24 bg-gris-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-naranja font-bold text-sm uppercase tracking-widest">Historial</span>
          <h2 className="font-barlow font-black text-white mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            RESULTADOS RECIENTES
          </h2>
          <p className="text-gris-texto mt-3">Consulta los resultados de nuestros últimos eventos</p>
        </motion.div>

        <div className="space-y-3">
          {resultadosRecientes.map((resultado, i) => (
            <motion.div
              key={resultado.nombre}
              className="group flex items-center justify-between bg-gris-2 hover:bg-gris-3 border border-gris-3 hover:border-gris-4 rounded-xl px-6 py-4 transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-naranja font-barlow font-black text-2xl w-8 text-center opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-naranja transition-colors">
                    {resultado.nombre}
                  </h3>
                  <span className="text-gris-texto text-sm">{formatearFecha(resultado.fecha)}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1.5 text-gris-texto text-sm">
                  <Users className="w-4 h-4" />
                  <span>{resultado.participantes.toLocaleString()} atletas</span>
                </div>
                <button className="flex items-center gap-1.5 text-naranja text-sm font-medium hover:underline">
                  Ver Resultados
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
