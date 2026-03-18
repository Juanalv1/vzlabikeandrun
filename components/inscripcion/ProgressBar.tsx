'use client'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface ProgressBarProps {
  pasoActual: number
  totalPasos: number
}

const nombresPasos = ['Datos Personales', 'Detalles Evento', 'Talla y Pago', 'Confirmación']

// Barra de progreso visual con nombres de pasos
export default function ProgressBar({ pasoActual, totalPasos }: ProgressBarProps) {
  return (
    <div className="w-full mb-10">
      {/* Barra de progreso */}
      <div className="relative flex items-center justify-between mb-4">
        {/* Línea de fondo */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gris-3" />
        {/* Línea de progreso */}
        <div
          className="absolute top-4 left-0 h-0.5 bg-naranja transition-all duration-500"
          style={{ width: `${((pasoActual - 1) / (totalPasos - 1)) * 100}%` }}
        />

        {/* Pasos */}
        {nombresPasos.map((nombre, i) => {
          const paso = i + 1
          const completado = paso < pasoActual
          const activo = paso === pasoActual

          return (
            <div key={nombre} className="relative flex flex-col items-center z-10">
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                completado && 'bg-naranja text-white',
                activo && 'bg-naranja text-white ring-4 ring-naranja/30',
                !completado && !activo && 'bg-gris-3 text-gris-texto'
              )}>
                {completado ? <Check className="w-4 h-4" /> : paso}
              </div>
              <span className={cn(
                'absolute top-10 text-xs font-medium whitespace-nowrap transition-colors hidden sm:block',
                activo ? 'text-naranja' : 'text-gris-texto'
              )}>
                {nombre}
              </span>
            </div>
          )
        })}
      </div>

      {/* Nombre del paso actual en mobile */}
      <div className="sm:hidden text-center mt-2">
        <span className="text-naranja text-sm font-medium">{nombresPasos[pasoActual - 1]}</span>
        <span className="text-gris-texto text-sm"> — Paso {pasoActual} de {totalPasos}</span>
      </div>
    </div>
  )
}
