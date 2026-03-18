'use client'
import { UseFormReturn } from 'react-hook-form'
import { estadosVenezuela } from '@/lib/data'

interface Props {
  form: UseFormReturn<any>
}

// Paso 1: Datos personales del atleta
export default function StepPersonalInfo({ form }: Props) {
  const { register, formState: { errors } } = form

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-barlow font-bold text-white text-2xl mb-1">Datos Personales</h3>
        <p className="text-gris-texto text-sm">Ingresa tu información personal para completar el registro.</p>
      </div>

      {/* Cédula */}
      <div>
        <label className="input-label">Cédula de Identidad <span className="text-naranja">*</span></label>
        <input
          {...register('cedula')}
          placeholder="Ej: 12345678"
          className="input-field"
          type="text"
          inputMode="numeric"
        />
        {errors.cedula && <p className="input-error">{errors.cedula.message as string}</p>}
      </div>

      {/* Nombre y Apellido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Nombre <span className="text-naranja">*</span></label>
          <input {...register('nombre')} placeholder="Tu nombre" className="input-field" />
          {errors.nombre && <p className="input-error">{errors.nombre.message as string}</p>}
        </div>
        <div>
          <label className="input-label">Apellido <span className="text-naranja">*</span></label>
          <input {...register('apellido')} placeholder="Tu apellido" className="input-field" />
          {errors.apellido && <p className="input-error">{errors.apellido.message as string}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="input-label">Email <span className="text-naranja">*</span></label>
        <input {...register('email')} type="email" placeholder="tucorreo@email.com" className="input-field" />
        {errors.email && <p className="input-error">{errors.email.message as string}</p>}
      </div>

      {/* Confirmar Email */}
      <div>
        <label className="input-label">Confirmar Email <span className="text-naranja">*</span></label>
        <input {...register('confirmarEmail')} type="email" placeholder="Repite tu correo" className="input-field" />
        {errors.confirmarEmail && <p className="input-error">{errors.confirmarEmail.message as string}</p>}
      </div>

      {/* Fecha de Nacimiento y Teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Fecha de Nacimiento <span className="text-naranja">*</span></label>
          <input {...register('fechaNacimiento')} type="date" className="input-field" />
          {errors.fechaNacimiento && <p className="input-error">{errors.fechaNacimiento.message as string}</p>}
        </div>
        <div>
          <label className="input-label">Teléfono <span className="text-naranja">*</span></label>
          <input {...register('telefono')} placeholder="+58 412 000 0000" className="input-field" />
          {errors.telefono && <p className="input-error">{errors.telefono.message as string}</p>}
        </div>
      </div>

      {/* Estado / Ciudad */}
      <div>
        <label className="input-label">Estado / Ciudad <span className="text-naranja">*</span></label>
        <select {...register('estado')} className="input-field">
          <option value="">Selecciona tu estado</option>
          {estadosVenezuela.map((estado) => (
            <option key={estado} value={estado}>{estado}</option>
          ))}
        </select>
        {errors.estado && <p className="input-error">{errors.estado.message as string}</p>}
      </div>
    </div>
  )
}
