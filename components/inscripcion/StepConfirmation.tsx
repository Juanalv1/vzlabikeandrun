'use client'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { modalidades } from '@/lib/data'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Props {
  form: UseFormReturn<any>
}

// Paso 4: Confirmacion y resumen de datos
export default function StepConfirmation({ form }: Props) {
  const { register, watch, formState: { errors } } = form
  const [showPrivacidad, setShowPrivacidad] = useState(false)
  const [showReglamento, setShowReglamento] = useState(false)

  const datos = watch()
  const modalidad = modalidades.find(m => m.id === datos.modalidad)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-barlow font-bold text-white text-2xl mb-1">Confirmar Inscripción</h3>
        <p className="text-gris-texto text-sm">Revisa tus datos antes de confirmar.</p>
      </div>

      {/* Resumen de datos personales */}
      <div className="bg-gris-2 border border-gris-3 rounded-xl p-5 space-y-3">
        <h4 className="text-naranja font-bold text-sm uppercase tracking-wider">Datos Personales</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gris-texto">Nombre: </span>
            <span className="text-white">{datos.nombre} {datos.apellido}</span>
          </div>
          <div>
            <span className="text-gris-texto">Cédula: </span>
            <span className="text-white">{datos.cedula}</span>
          </div>
          <div>
            <span className="text-gris-texto">Email: </span>
            <span className="text-white">{datos.email}</span>
          </div>
          <div>
            <span className="text-gris-texto">Teléfono: </span>
            <span className="text-white">{datos.telefono}</span>
          </div>
          <div>
            <span className="text-gris-texto">Estado: </span>
            <span className="text-white">{datos.estado}</span>
          </div>
          <div>
            <span className="text-gris-texto">Nacimiento: </span>
            <span className="text-white">{datos.fechaNacimiento}</span>
          </div>
        </div>
      </div>

      {/* Resumen de evento */}
      <div className="bg-gris-2 border border-gris-3 rounded-xl p-5 space-y-3">
        <h4 className="text-naranja font-bold text-sm uppercase tracking-wider">Detalles del Evento</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gris-texto">Modalidad: </span>
            <span className="text-white">{modalidad?.nombre ?? '-'}</span>
          </div>
          <div>
            <span className="text-gris-texto">Categoría: </span>
            <span className="text-white">{datos.categoria}</span>
          </div>
          <div>
            <span className="text-gris-texto">Género: </span>
            <span className="text-white capitalize">{datos.genero}</span>
          </div>
          {datos.nombreEquipo && (
            <div>
              <span className="text-gris-texto">Equipo: </span>
              <span className="text-white">{datos.nombreEquipo}</span>
            </div>
          )}
        </div>
      </div>

      {/* Resumen de pago */}
      <div className="bg-gris-2 border border-gris-3 rounded-xl p-5 space-y-3">
        <h4 className="text-naranja font-bold text-sm uppercase tracking-wider">Pago y Talla</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gris-texto">Talla: </span>
            <span className="text-white">{datos.talla}</span>
          </div>
          <div>
            <span className="text-gris-texto">Método: </span>
            <span className="text-white">{datos.tipoPago === 'movil' ? 'Pago Móvil' : 'Pago en Sede'}</span>
          </div>
          {datos.tipoPago === 'movil' && datos.banco && (
            <div>
              <span className="text-gris-texto">Banco: </span>
              <span className="text-white">{datos.banco}</span>
            </div>
          )}
          {datos.tipoPago === 'movil' && datos.numeroTransferencia && (
            <div>
              <span className="text-gris-texto">Referencia: </span>
              <span className="text-white">{datos.numeroTransferencia}</span>
            </div>
          )}
        </div>
        <div className="pt-3 border-t border-gris-3 flex justify-between items-center">
          <span className="text-white font-medium">Total</span>
          <span className="font-barlow font-black text-2xl text-naranja">${modalidad?.precio ?? 0} USD</span>
        </div>
      </div>

      {/* Política de privacidad colapsable */}
      <div className="border border-gris-3 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => setShowPrivacidad(!showPrivacidad)}
          className="w-full flex items-center justify-between p-4 bg-gris-2 text-white text-sm font-medium hover:bg-gris-3 transition-colors"
        >
          Política de Privacidad
          {showPrivacidad ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showPrivacidad && (
          <div className="p-4 text-gris-texto text-xs leading-relaxed bg-gris-1">
            Tus datos personales serán utilizados exclusivamente para la gestión de tu inscripción.
            No compartiremos tu información con terceros sin tu consentimiento.
            Al inscribirte aceptas recibir comunicaciones relacionadas con el evento y futuros
            eventos de VzlaBike and Run®.
          </div>
        )}
      </div>

      {/* Reglamento colapsable */}
      <div className="border border-gris-3 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => setShowReglamento(!showReglamento)}
          className="w-full flex items-center justify-between p-4 bg-gris-2 text-white text-sm font-medium hover:bg-gris-3 transition-colors"
        >
          Reglamento del Evento
          {showReglamento ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showReglamento && (
          <div className="p-4 text-gris-texto text-xs leading-relaxed bg-gris-1 space-y-1">
            <p>1. Todos los participantes deben portar su dorsal visible durante la carrera.</p>
            <p>2. El chip de cronometraje es personal e intransferible.</p>
            <p>3. La organización puede descalificar participantes que incumplan el reglamento.</p>
            <p>4. No se realizan reembolsos una vez confirmada la inscripción.</p>
            <p>5. Menores de 18 años requieren autorización de representante legal.</p>
          </div>
        )}
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('aceptaPrivacidad')}
            className="mt-1 w-5 h-5 rounded border-gris-3 bg-gris-2 accent-[#FF5500]"
          />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            Acepto la <strong className="text-naranja">Política de Privacidad</strong> y el tratamiento de mis datos personales.
          </span>
        </label>
        {errors.aceptaPrivacidad && <p className="input-error">{errors.aceptaPrivacidad.message as string}</p>}

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('aceptaReglamento')}
            className="mt-1 w-5 h-5 rounded border-gris-3 bg-gris-2 accent-[#FF5500]"
          />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            Acepto el <strong className="text-naranja">Reglamento del Evento</strong> y declaro estar apto físicamente.
          </span>
        </label>
        {errors.aceptaReglamento && <p className="input-error">{errors.aceptaReglamento.message as string}</p>}
      </div>
    </div>
  )
}
