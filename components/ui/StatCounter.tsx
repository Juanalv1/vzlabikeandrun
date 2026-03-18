'use client'
import { useState, useEffect, useRef } from 'react'

interface StatCounterProps {
  numero: number
  sufijo: string
  etiqueta: string
  duracion?: number
}

// Contador animado que se dispara cuando el elemento entra en el viewport
export default function StatCounter({ numero, sufijo, etiqueta, duracion = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duracion, 1)
      // Easing función para desaceleración suave
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numero))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, numero, duracion])

  return (
    <div ref={ref} className="text-center group">
      <div className="font-barlow font-black text-5xl md:text-6xl text-naranja tabular-nums">
        {count.toLocaleString('es-VE')}{sufijo}
      </div>
      <div className="text-gray-400 mt-2 text-sm font-medium tracking-wider uppercase">
        {etiqueta}
      </div>
    </div>
  )
}
