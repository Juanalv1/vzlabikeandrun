'use client'
import { useState, useEffect } from 'react'
import { getTimeLeft } from '@/lib/utils'

interface CountdownTimerProps {
  targetDate: string
  size?: 'sm' | 'lg'
}

// Countdown timer en tiempo real usando useEffect + setInterval
export default function CountdownTimer({ targetDate, size = 'sm' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (timeLeft.terminado) {
    return <span className="text-naranja font-bold text-sm">¡Evento finalizado!</span>
  }

  const boxes = [
    { valor: timeLeft.dias, etiqueta: 'DÍAS' },
    { valor: timeLeft.horas, etiqueta: 'HRS' },
    { valor: timeLeft.minutos, etiqueta: 'MIN' },
    { valor: timeLeft.segundos, etiqueta: 'SEG' },
  ]

  if (size === 'lg') {
    return (
      <div className="flex gap-4 justify-center">
        {boxes.map(({ valor, etiqueta }) => (
          <div key={etiqueta} className="flex flex-col items-center">
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 min-w-[70px] text-center">
              <span className="text-3xl md:text-4xl font-black font-barlow tabular-nums text-white leading-none">
                {String(valor).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-gray-400 mt-1.5 font-medium tracking-widest">{etiqueta}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex gap-2 items-center">
      {boxes.map(({ valor, etiqueta }, i) => (
        <div key={etiqueta} className="flex items-center gap-2">
          <div className="text-center">
            <div className="bg-gris-2 rounded-lg px-2 py-1 min-w-[36px] text-center">
              <span className="text-base font-black font-barlow tabular-nums text-naranja">
                {String(valor).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[9px] text-gris-texto">{etiqueta}</span>
          </div>
          {i < 3 && <span className="text-naranja font-bold mb-3">:</span>}
        </div>
      ))}
    </div>
  )
}
