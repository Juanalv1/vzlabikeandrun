import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utilidad para combinar clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Calcula el tiempo restante hasta una fecha objetivo
export function getTimeLeft(targetDate: string) {
  const target = new Date(targetDate).getTime()
  const now = new Date().getTime()
  const diff = target - now

  if (diff <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, terminado: true }
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diff % (1000 * 60)) / 1000)

  return { dias, horas, minutos, segundos, terminado: false }
}

// Formatea fecha a español
export function formatearFecha(fechaISO: string): string {
  const fecha = new Date(fechaISO + 'T00:00:00')
  return fecha.toLocaleDateString('es-VE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Formatea número con separadores de miles
export function formatearNumero(num: number): string {
  return num.toLocaleString('es-VE')
}
