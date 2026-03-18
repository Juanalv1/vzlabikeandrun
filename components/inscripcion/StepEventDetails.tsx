'use client'
import { UseFormReturn } from 'react-hook-form'
import { modalidades, categorias } from '@/lib/data'
import { cn } from '@/lib/utils'

interface Props {
  form: UseFormReturn<any>
}

// Paso 2: Detalles del evento — género, modalidad, categoría
export default function StepEventDetails({ form }: Props) {
  const { register, setValue, watch, formState: { errors } } = form
  const generoSeleccionado = watch('genero')
  const modalidadSeleccionada = watch('modalidad')

  // Obtener categorías según modalidad y género
  const categoriasDisponibles = modalidadSeleccionada && generoSeleccionado
    ? categorias[modalidadSeleccionada as keyof typeof categorias]?.[generoSeleccionado as 'masculino' | 'femenino'] ?? []
    : []

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-barlow font-bold text-white text-2xl mb-1">Detalles del Evento</h3>
        <p className="text-gris-texto text-sm">Selecciona tu categoría y modalidad de participación.</p>
      </div>

      {/* Selección de Género — botones visuales grandes */}
      <div>
        <label className="input-label">Género <span className="text-naranja">*</span></label>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {[
            { value: 'masculino', label: '♂ Masculino', emoji: '🏃' },
            { value: 'femenino', label: '♀ Femenino', emoji: '🏃‍♀️' }
          ].map(({ value, label, emoji }) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setValue('genero', value, { shouldValidate: true })
                setValue('categoria', '') // Reset categoría al cambiar género
              }}
              className={cn(
                'py-5 rounded-xl border-2 font-bold text-base transition-all duration-200',
                generoSeleccionado === value
                  ? 'border-naranja bg-naranja/10 text-naranja'
                  : 'border-gris-3 bg-gris-2 text-white hover:border-gris-4'
              )}
            >
              <span className="text-2xl block mb-1">{emoji}</span>
              {label}
            </button>
          ))}
        </div>
        {errors.genero && <p className="input-error">{errors.genero.message as string}</p>}
      </div>

      {/* Selección de Modalidad — cards visuales */}
      <div>
        <label className="input-label">Modalidad <span className="text-naranja">*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {modalidades.map((mod) => (
            <button
              key={mod.id}
              type="button"
              onClick={() => {
                setValue('modalidad', mod.id, { shouldValidate: true })
                setValue('categoria', '') // Reset categoría al cambiar modalidad
              }}
              className={cn(
                'p-4 rounded-xl border-2 text-left transition-all duration-200',
                watch('modalidad') === mod.id
                  ? 'border-naranja bg-naranja/10'
                  : 'border-gris-3 bg-gris-2 hover:border-gris-4'
              )}
            >
              <div className={cn(
                'font-bold text-sm',
                watch('modalidad') === mod.id ? 'text-naranja' : 'text-white'
              )}>
                {mod.nombre}
              </div>
              <div className="text-gris-texto text-xs mt-0.5">{mod.descripcion}</div>
              <div className="text-naranja text-xs font-bold mt-2">${mod.precio} USD</div>
            </button>
          ))}
        </div>
        {errors.modalidad && <p className="input-error">{errors.modalidad.message as string}</p>}
      </div>

      {/* Categoría (auto-filtrada) */}
      {categoriasDisponibles.length > 0 && (
        <div>
          <label className="input-label">Categoría <span className="text-naranja">*</span></label>
          <select {...register('categoria')} className="input-field">
            <option value="">Selecciona tu categoría</option>
            {categoriasDisponibles.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.categoria && <p className="input-error">{errors.categoria.message as string}</p>}
        </div>
      )}

      {/* Nombre de Equipo (opcional) */}
      <div>
        <label className="input-label">Nombre del Equipo <span className="text-gris-texto text-xs">(opcional)</span></label>
        <input
          {...register('nombreEquipo')}
          placeholder="Ej: Runners Caracas"
          className="input-field"
        />
      </div>
    </div>
  )
}
