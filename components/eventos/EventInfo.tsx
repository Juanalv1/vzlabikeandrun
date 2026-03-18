import { Evento, modalidades } from '@/lib/data'
import { formatearFecha } from '@/lib/utils'
import { MapPin, Calendar, Shirt, Timer, Droplets, Award } from 'lucide-react'

interface EventInfoProps {
  evento: Evento
}

// Sección de información del evento: descripción, incluye kit, detalles
export default function EventInfo({ evento }: EventInfoProps) {
  const incluyeItems = [
    { icon: Shirt, label: 'Franela del evento' },
    { icon: Award, label: 'Medalla de finalista' },
    { icon: Droplets, label: 'Hidratación en ruta' },
    { icon: Timer, label: 'Chip de cronometraje' },
  ]

  return (
    <section className="py-16 bg-negro">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Descripción */}
        <div className="mb-12">
          <h2 className="font-barlow font-bold text-3xl text-white mb-4">Sobre el Evento</h2>
          <p className="text-gris-texto text-lg leading-relaxed max-w-3xl">
            {evento.categoria === 'Atletismo'
              ? 'Únete a la carrera femenina más emblemática de Venezuela. Celebra el Día Internacional de la Mujer corriendo, caminando o acompañando. Un evento para todas las edades y niveles.'
              : `Participa en ${evento.nombre}, uno de los eventos deportivos más esperados del calendario venezolano. Distancias disponibles: ${evento.distancias.join(', ')}.`
            }
          </p>
        </div>

        {/* Detalles en grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gris-1 border border-gris-3 rounded-2xl p-6">
            <h3 className="font-barlow font-bold text-xl text-white mb-4">Detalles</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gris-texto">
                <Calendar className="w-5 h-5 text-naranja" />
                <span>{formatearFecha(evento.fecha)}</span>
              </div>
              <div className="flex items-center gap-3 text-gris-texto">
                <MapPin className="w-5 h-5 text-naranja" />
                <span>{evento.ciudad}</span>
              </div>
              <div className="flex items-center gap-3 text-gris-texto">
                <Timer className="w-5 h-5 text-naranja" />
                <span>Salida: 7:00 AM</span>
              </div>
            </div>
          </div>

          <div className="bg-gris-1 border border-gris-3 rounded-2xl p-6">
            <h3 className="font-barlow font-bold text-xl text-white mb-4">Modalidades y Precios</h3>
            <div className="space-y-3">
              {modalidades
                .filter(m => evento.distancias.some(d => m.nombre.includes(d) || (d === '2K' && m.id === '2k-infantil')))
                .map((mod) => (
                  <div key={mod.id} className="flex items-center justify-between text-gris-texto">
                    <span>{mod.nombre}</span>
                    <span className="text-naranja font-bold">${mod.precio} USD</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* Kit incluye */}
        <div>
          <h3 className="font-barlow font-bold text-xl text-white mb-4">Tu inscripción incluye</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {incluyeItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center bg-gris-1 border border-gris-3 rounded-xl p-5">
                <Icon className="w-8 h-8 text-naranja mb-3" />
                <span className="text-sm text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
