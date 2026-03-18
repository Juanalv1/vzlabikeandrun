import { z } from 'zod'

// Schema del Paso 1 — Datos Personales
export const schemaPaso1 = z.object({
  cedula: z.string().min(6, 'Cédula requerida (mínimo 6 dígitos)').max(10, 'Cédula inválida').regex(/^\d+$/, 'Solo números'),
  nombre: z.string().min(2, 'Nombre requerido'),
  apellido: z.string().min(2, 'Apellido requerido'),
  email: z.string().email('Email inválido'),
  confirmarEmail: z.string().email('Email inválido'),
  fechaNacimiento: z.string().min(1, 'Fecha de nacimiento requerida'),
  telefono: z.string().min(10, 'Teléfono requerido').regex(/^\+?[\d\s\-()]+$/, 'Teléfono inválido'),
  estado: z.string().min(1, 'Selecciona tu estado/ciudad'),
}).refine((data) => data.email === data.confirmarEmail, {
  message: 'Los emails no coinciden',
  path: ['confirmarEmail'],
})

// Schema del Paso 2 — Detalles del Evento
export const schemaPaso2 = z.object({
  genero: z.enum(['masculino', 'femenino'], { required_error: 'Selecciona tu género' }),
  modalidad: z.string().min(1, 'Selecciona una modalidad'),
  categoria: z.string().min(1, 'Selecciona una categoría'),
  nombreEquipo: z.string().optional(),
})

// Schema del Paso 3 — Talla y Pago
export const schemaPaso3 = z.object({
  talla: z.enum(['XS', 'S', 'M', 'L', 'XL'], { required_error: 'Selecciona tu talla' }),
  tipoPago: z.enum(['movil', 'sede'], { required_error: 'Selecciona tipo de pago' }),
  banco: z.string().optional(),
  numeroTransferencia: z.string().optional(),
  comprobante: z.any().optional(),
}).refine((data) => {
  if (data.tipoPago === 'movil') {
    return data.banco && data.banco.length > 0
  }
  return true
}, {
  message: 'Selecciona tu banco',
  path: ['banco'],
}).refine((data) => {
  if (data.tipoPago === 'movil') {
    return data.numeroTransferencia && data.numeroTransferencia.length > 0
  }
  return true
}, {
  message: 'Ingresa el número de transferencia',
  path: ['numeroTransferencia'],
})

// Schema del Paso 4 — Confirmación
export const schemaPaso4 = z.object({
  aceptaPrivacidad: z.boolean().refine(val => val === true, 'Debes aceptar la política de privacidad'),
  aceptaReglamento: z.boolean().refine(val => val === true, 'Debes aceptar el reglamento'),
})

// Tipo del formulario completo
export type FormData = z.infer<typeof schemaPaso1> &
  z.infer<typeof schemaPaso2> &
  z.infer<typeof schemaPaso3> &
  z.infer<typeof schemaPaso4>
