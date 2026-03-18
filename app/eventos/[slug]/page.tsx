import { eventos } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Trophy } from 'lucide-react'
import EventHero from '@/components/eventos/EventHero'
import EventInfo from '@/components/eventos/EventInfo'
import PremiacionTable from '@/components/eventos/PremiacionTable'
import FormularioInscripcion from '@/components/inscripcion/FormularioInscripcion'

// Genera rutas estáticas para cada evento
export function generateStaticParams() {
  return eventos.map((evento) => ({ slug: evento.id }))
}

// Página dinámica del evento con hero, info, premiación y formulario
export default function EventoPage({ params }: { params: { slug: string } }) {
  const evento = eventos.find((e) => e.id === params.slug)
  if (!evento) return notFound()

  const isPast = new Date(evento.fecha) < new Date()

  return (
    <>
      <EventHero evento={evento} />
      <EventInfo evento={evento} />
      <PremiacionTable />

      {/* Sección de inscripción o resultados */}
      {isPast ? (
        <section className="py-16 bg-negro">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Trophy className="w-14 h-14 text-naranja mx-auto mb-4" />
            <h2 className="font-barlow font-bold text-4xl text-white mb-3">Evento Finalizado</h2>
            <p className="text-gris-texto mb-8 max-w-md mx-auto">
              Las inscripciones para este evento están cerradas. Consulta los resultados oficiales.
            </p>
            <Link
              href={evento.resultadosSlug ? `/resultados/${evento.resultadosSlug}` : '/resultados'}
              className="inline-flex items-center gap-2 bg-naranja hover:bg-naranja-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Trophy className="w-5 h-5" />
              Ver Resultados Oficiales
            </Link>
          </div>
        </section>
      ) : (
        <section id="inscripcion" className="py-16 bg-negro">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-barlow font-bold text-4xl text-white mb-2">Formulario de Inscripción</h2>
              <p className="text-gris-texto">Completa los 4 pasos para registrarte en {evento.nombre}.</p>
            </div>
            <FormularioInscripcion eventoNombre={evento.nombre} />
          </div>
        </section>
      )}
    </>
  )
}
