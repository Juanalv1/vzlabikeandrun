import { eventos } from '@/lib/data'
import { notFound } from 'next/navigation'
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

  return (
    <>
      <EventHero evento={evento} />
      <EventInfo evento={evento} />
      <PremiacionTable />

      {/* Sección de inscripción */}
      <section id="inscripcion" className="py-16 bg-negro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-barlow font-bold text-4xl text-white mb-2">Formulario de Inscripción</h2>
            <p className="text-gris-texto">Completa los 4 pasos para registrarte en {evento.nombre}.</p>
          </div>
          <FormularioInscripcion eventoNombre={evento.nombre} />
        </div>
      </section>
    </>
  )
}
