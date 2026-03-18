'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface SuccessScreenProps {
  nombre: string
  email: string
  evento: string
  modalidad: string
}

// Pantalla de éxito post-inscripción con animación
export default function SuccessScreen({ nombre, email, evento, modalidad }: SuccessScreenProps) {
  return (
    <div className="text-center py-10">
      {/* Check animado */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        className="mb-8"
      >
        <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-14 h-14 text-green-400" />
        </div>
      </motion.div>

      <motion.h2
        className="font-barlow font-black text-4xl text-white mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        ¡Inscripción Exitosa!
      </motion.h2>

      <motion.p
        className="text-gris-texto text-lg mb-8 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Gracias, <span className="text-white font-medium">{nombre}</span>. Tu registro ha sido recibido.
      </motion.p>

      <motion.div
        className="bg-gris-2 border border-gris-3 rounded-xl p-6 max-w-sm mx-auto mb-8 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gris-texto">Evento</span>
            <span className="text-white font-medium">{evento}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gris-texto">Modalidad</span>
            <span className="text-white font-medium">{modalidad}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gris-texto">Email</span>
            <span className="text-white font-medium">{email}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-2 text-sm text-gris-texto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Mail className="w-4 h-4 text-naranja" />
        <span>Recibirás confirmación por email en las próximas <strong className="text-white">48 horas</strong>.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-naranja hover:bg-naranja-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Inicio
        </Link>
      </motion.div>
    </div>
  )
}
