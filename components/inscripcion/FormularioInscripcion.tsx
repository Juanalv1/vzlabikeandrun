'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send } from 'lucide-react'
import { schemaPaso1, schemaPaso2, schemaPaso3, schemaPaso4 } from '@/lib/schemas'
import { modalidades } from '@/lib/data'
import ProgressBar from './ProgressBar'
import StepPersonalInfo from './StepPersonalInfo'
import StepEventDetails from './StepEventDetails'
import StepPayment from './StepPayment'
import StepConfirmation from './StepConfirmation'
import SuccessScreen from './SuccessScreen'

// Schemas para cada paso del formulario
const schemas = [schemaPaso1, schemaPaso2, schemaPaso3, schemaPaso4]

// Controlador principal del formulario multi-paso
export default function FormularioInscripcion({ eventoNombre }: { eventoNombre: string }) {
  const [paso, setPaso] = useState(1)
  const [completado, setCompletado] = useState(false)

  // Un único form para todos los pasos — sin resolver global
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      cedula: '', nombre: '', apellido: '', email: '', confirmarEmail: '',
      fechaNacimiento: '', telefono: '', estado: '',
      genero: '', modalidad: '', categoria: '', nombreEquipo: '',
      talla: '', tipoPago: '', banco: '', numeroTransferencia: '',
      aceptaPrivacidad: false, aceptaReglamento: false,
    },
  })

  // Validar el paso actual contra su schema y avanzar
  const siguiente = async () => {
    const valores = form.getValues()
    const schema = schemas[paso - 1]
    const resultado = schema.safeParse(valores)

    if (resultado.success) {
      form.clearErrors()
      if (paso < 4) {
        setPaso(paso + 1)
      } else {
        setCompletado(true)
      }
    } else {
      // Registrar cada error en el campo correspondiente
      resultado.error.issues.forEach((issue) => {
        const campo = issue.path[0] as string
        form.setError(campo as any, { type: 'manual', message: issue.message })
      })
    }
  }

  // Retroceder al paso anterior
  const anterior = () => {
    if (paso > 1) setPaso(paso - 1)
  }

  // Pantalla de éxito
  if (completado) {
    const datos = form.getValues()
    const mod = modalidades.find(m => m.id === datos.modalidad)
    return (
      <SuccessScreen
        nombre={datos.nombre}
        email={datos.email}
        evento={eventoNombre}
        modalidad={mod?.nombre ?? ''}
      />
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Barra de progreso */}
      <ProgressBar pasoActual={paso} totalPasos={4} />

      {/* Paso actual con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={paso}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {paso === 1 && <StepPersonalInfo form={form} />}
          {paso === 2 && <StepEventDetails form={form} />}
          {paso === 3 && <StepPayment form={form} />}
          {paso === 4 && <StepConfirmation form={form} />}
        </motion.div>
      </AnimatePresence>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-8 gap-4">
        {paso > 1 ? (
          <button
            type="button"
            onClick={anterior}
            className="flex items-center gap-2 px-6 py-3 bg-gris-2 border border-gris-3 text-white rounded-xl hover:bg-gris-3 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={siguiente}
          className="flex items-center gap-2 px-8 py-3 bg-naranja hover:bg-naranja-hover text-white rounded-xl transition-colors font-bold shadow-lg hover:shadow-naranja/30"
        >
          {paso === 4 ? (
            <>
              <Send className="w-4 h-4" />
              Confirmar Inscripción
            </>
          ) : (
            <>
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
