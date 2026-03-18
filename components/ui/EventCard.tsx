'use client'
import Link from 'next/link'
import { MapPin, Calendar, ChevronRight } from 'lucide-react'
import { Evento } from '@/lib/data'
import { formatearFecha } from '@/lib/utils'
import CountdownTimer from './CountdownTimer'

interface EventCardProps {
  evento: Evento
}

// Card de evento con countdown en tiempo real y efecto hover
export default function EventCard({ evento }: EventCardProps) {
  return (
    <div className="card-hover group relative bg-gris-1 border border-gris-3 rounded-2xl overflow-hidden flex flex-col">
      {/* Barra de color superior con gradiente del evento */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${evento.color}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Nombre del evento */}
        <h3 className="font-barlow font-bold text-xl text-white mb-3 leading-tight group-hover:text-naranja transition-colors">
          {evento.nombre}
        </h3>

        {/* Fecha y ciudad */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gris-texto text-sm">
            <Calendar className="w-4 h-4 text-naranja flex-shrink-0" />
            <span>{formatearFecha(evento.fecha)}</span>
          </div>
          <div className="flex items-center gap-2 text-gris-texto text-sm">
            <MapPin className="w-4 h-4 text-naranja flex-shrink-0" />
            <span>{evento.ciudad}</span>
          </div>
        </div>

        {/* Distancias disponibles */}
        <div className="flex flex-wrap gap-2 mb-4">
          {evento.distancias.map((dist) => (
            <span
              key={dist}
              className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${evento.color}`}
            >
              {dist}
            </span>
          ))}
        </div>

        {/* Countdown */}
        <div className="mb-5">
          <p className="text-xs text-gris-texto mb-2 uppercase tracking-wider">Tiempo restante</p>
          <CountdownTimer targetDate={evento.fecha} size="sm" />
        </div>

        {/* CTA Inscribirse */}
        <div className="mt-auto">
          <Link
            href={`/eventos/${evento.id}`}
            className="w-full flex items-center justify-center gap-2 bg-naranja hover:bg-naranja-hover text-white font-bold py-3 rounded-xl transition-all duration-200 group/btn"
          >
            Inscribirse
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
