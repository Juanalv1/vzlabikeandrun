'use client'
import { UseFormReturn } from 'react-hook-form'
import { bancosVenezuela, modalidades } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Smartphone, Building2, Upload } from 'lucide-react'

interface Props {
  form: UseFormReturn<any>
}

const tallas = ['XS', 'S', 'M', 'L', 'XL']

// Paso 3: Selección de talla, método de pago y datos de transferencia
export default function StepPayment({ form }: Props) {
  const { register, setValue, watch, formState: { errors } } = form
  const tallaSeleccionada = watch('talla')
  const tipoPago = watch('tipoPago')
  const modalidadId = watch('modalidad')

  // Calcular precio según la modalidad seleccionada
  const modalidad = modalidades.find(m => m.id === modalidadId)
  const precio = modalidad?.precio ?? 0

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-barlow font-bold text-white text-2xl mb-1">Talla y Pago</h3>
        <p className="text-gris-texto text-sm">Selecciona tu talla de franela y método de pago.</p>
      </div>

      {/* Selector visual de tallas */}
      <div>
        <label className="input-label">Talla de Franela <span className="text-naranja">*</span></label>
        <div className="flex gap-3 mt-1">
          {tallas.map((talla) => (
            <button
              key={talla}
              type="button"
              onClick={() => setValue('talla', talla, { shouldValidate: true })}
              className={cn(
                'w-14 h-14 rounded-xl border-2 font-bold text-sm transition-all duration-200',
                tallaSeleccionada === talla
                  ? 'border-naranja bg-naranja/10 text-naranja'
                  : 'border-gris-3 bg-gris-2 text-white hover:border-gris-4'
              )}
            >
              {talla}
            </button>
          ))}
        </div>
        {errors.talla && <p className="input-error">{errors.talla.message as string}</p>}
      </div>

      {/* Tipo de pago */}
      <div>
        <label className="input-label">Método de Pago <span className="text-naranja">*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {[
            { value: 'movil', label: 'Pago Móvil', desc: 'Transferencia inmediata', icon: Smartphone },
            { value: 'sede', label: 'Pago en Sede', desc: 'Pagar al retirar kit', icon: Building2 },
          ].map(({ value, label, desc, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => setValue('tipoPago', value, { shouldValidate: true })}
              className={cn(
                'p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-4',
                tipoPago === value
                  ? 'border-naranja bg-naranja/10'
                  : 'border-gris-3 bg-gris-2 hover:border-gris-4'
              )}
            >
              <Icon className={cn('w-6 h-6 mt-0.5', tipoPago === value ? 'text-naranja' : 'text-gris-texto')} />
              <div>
                <div className={cn('font-bold text-sm', tipoPago === value ? 'text-naranja' : 'text-white')}>
                  {label}
                </div>
                <div className="text-gris-texto text-xs mt-0.5">{desc}</div>
              </div>
            </button>
          ))}
        </div>
        {errors.tipoPago && <p className="input-error">{errors.tipoPago.message as string}</p>}
      </div>

      {/* Datos de Pago Móvil (condicional) */}
      {tipoPago === 'movil' && (
        <div className="space-y-4 p-5 bg-gris-2 border border-gris-3 rounded-xl">
          <div className="text-sm text-white font-medium mb-2">Datos del Pago Móvil</div>

          {/* Información de la cuenta destino */}
          <div className="bg-naranja/10 border border-naranja/30 rounded-lg p-4 text-sm space-y-1">
            <p className="text-naranja font-bold">Datos para transferir:</p>
            <p className="text-gray-300">Banco: <strong>Banesco</strong></p>
            <p className="text-gray-300">Teléfono: <strong>0412-000-0000</strong></p>
            <p className="text-gray-300">Cédula: <strong>V-00000000</strong></p>
          </div>

          {/* Banco */}
          <div>
            <label className="input-label">Banco emisor <span className="text-naranja">*</span></label>
            <select {...register('banco')} className="input-field">
              <option value="">Selecciona tu banco</option>
              {bancosVenezuela.map((banco) => (
                <option key={banco} value={banco}>{banco}</option>
              ))}
            </select>
            {errors.banco && <p className="input-error">{errors.banco.message as string}</p>}
          </div>

          {/* Número de referencia */}
          <div>
            <label className="input-label">Número de referencia <span className="text-naranja">*</span></label>
            <input
              {...register('numeroTransferencia')}
              placeholder="Ej: 0000 0000 0000"
              className="input-field"
            />
            {errors.numeroTransferencia && <p className="input-error">{errors.numeroTransferencia.message as string}</p>}
          </div>

          {/* Subir comprobante */}
          <div>
            <label className="input-label">Comprobante de pago <span className="text-gris-texto text-xs">(opcional)</span></label>
            <label className="flex flex-col items-center justify-center w-full h-28 bg-gris-1 border-2 border-dashed border-gris-3 rounded-xl cursor-pointer hover:border-naranja/50 transition-colors">
              <Upload className="w-6 h-6 text-gris-texto mb-2" />
              <span className="text-gris-texto text-sm">Arrastra o haz clic para subir</span>
              <span className="text-gris-texto text-xs mt-1">PNG, JPG o PDF</span>
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </label>
          </div>
        </div>
      )}

      {/* Pago en sede info */}
      {tipoPago === 'sede' && (
        <div className="p-5 bg-gris-2 border border-gris-3 rounded-xl">
          <p className="text-sm text-gray-300">
            Puedes realizar el pago directamente en la sede del evento al momento de retirar tu kit.
            Se aceptan pagos en efectivo (USD/Bs), Pago Móvil y punto de venta.
          </p>
        </div>
      )}

      {/* Total dinámico */}
      <div className="bg-gris-1 border border-gris-3 rounded-xl p-5 flex items-center justify-between">
        <div>
          <p className="text-gris-texto text-sm">Total a pagar</p>
          <p className="text-sm text-gris-texto">{modalidad?.nombre ?? 'Sin seleccionar'}</p>
        </div>
        <div className="text-right">
          <p className="font-barlow font-black text-3xl text-naranja">${precio}</p>
          <p className="text-gris-texto text-xs">USD</p>
        </div>
      </div>
    </div>
  )
}
