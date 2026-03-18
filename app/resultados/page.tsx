'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Users, Calendar, ChevronRight, Trophy, ArrowLeft, ExternalLink } from 'lucide-react'
import { formatearFecha } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Datos extendidos de resultados históricos
const todosLosResultados = [
  {
    id: 1,
    nombre: "Women's Run by Gravity 2025",
    fecha: "2025-03-08",
    participantes: 920,
    distancias: ["2K", "5K", "10K"],
    ciudad: "Caracas",
    color: "from-purple-600 to-pink-500",
    categoria: "Running Femenino",
    ganadoraGeneral: "Ana Martínez",
    tiempoGanadora: "38:24",
    link: "#"
  },
  {
    id: 2,
    nombre: "Media Maratón Caracas 2025",
    fecha: "2025-11-15",
    participantes: 1240,
    distancias: ["21K"],
    ciudad: "Caracas",
    color: "from-naranja to-orange-400",
    categoria: "Running",
    ganadoraGeneral: "Carlos Pérez",
    tiempoGanadora: "1:12:45",
    link: "#"
  },
  {
    id: 3,
    nombre: "Triatlón del Llano 2025",
    fecha: "2025-10-05",
    participantes: 380,
    distancias: ["Sprint", "Olímpico"],
    ciudad: "Guanare",
    color: "from-blue-600 to-cyan-500",
    categoria: "Triatlón",
    ganadoraGeneral: "Luis Torres",
    tiempoGanadora: "2:03:11",
    link: "#"
  },
  {
    id: 4,
    nombre: "10K Bancaribe 2025",
    fecha: "2025-09-21",
    participantes: 850,
    distancias: ["5K", "10K"],
    ciudad: "Caracas",
    color: "from-green-600 to-emerald-500",
    categoria: "Running",
    ganadoraGeneral: "María Gómez",
    tiempoGanadora: "35:50",
    link: "#"
  },
  {
    id: 5,
    nombre: "Vuelta al Lago Maracaibo 2025",
    fecha: "2025-08-10",
    participantes: 620,
    distancias: ["10K", "21K"],
    ciudad: "Maracaibo",
    color: "from-teal-600 to-cyan-400",
    categoria: "Running",
    ganadoraGeneral: "Roberto Silva",
    tiempoGanadora: "32:18",
    link: "#"
  },
  {
    id: 6,
    nombre: "Farmacia Luna 10K 2024",
    fecha: "2024-05-19",
    participantes: 540,
    distancias: ["10K"],
    ciudad: "Maracaibo",
    color: "from-blue-500 to-cyan-500",
    categoria: "Running",
    ganadoraGeneral: "Jorge Ramírez",
    tiempoGanadora: "33:42",
    link: "#"
  },
  {
    id: 7,
    nombre: "Expo Fitness 10K 2024",
    fecha: "2024-04-14",
    participantes: 720,
    distancias: ["5K", "10K"],
    ciudad: "Valencia",
    color: "from-orange-500 to-red-600",
    categoria: "Running",
    ganadoraGeneral: "Pedro Morales",
    tiempoGanadora: "31:55",
    link: "#"
  },
  {
    id: 8,
    nombre: "Women's Run by Gravity 2024",
    fecha: "2024-03-08",
    participantes: 780,
    distancias: ["2K", "5K", "10K"],
    ciudad: "Caracas",
    color: "from-purple-600 to-pink-500",
    categoria: "Running Femenino",
    ganadoraGeneral: "Gabriela Herrera",
    tiempoGanadora: "39:10",
    link: "#"
  },
]

const categorias = ["Todos", "Running", "Running Femenino", "Triatlón"]

// Página completa de resultados históricos
export default function ResultadosPage() {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const resultadosFiltrados = todosLosResultados.filter(r => {
    const coincideBusqueda = r.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.ciudad.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaActiva === 'Todos' || r.categoria === categoriaActiva
    return coincideBusqueda && coincideCategoria
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-negro pt-24 pb-16">
        {/* Header de la página */}
        <section className="relative py-16 bg-gris-1 border-b border-gris-3 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, #FF5500 30px, #FF5500 31px)'
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link href="/" className="inline-flex items-center gap-2 text-gris-texto hover:text-naranja text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-naranja font-bold text-sm uppercase tracking-widest">Historial Deportivo</span>
              <h1 className="font-barlow font-black text-white mt-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                RESULTADOS
              </h1>
              <p className="text-gris-texto mt-3 max-w-xl text-lg">
                Consulta los resultados de todos nuestros eventos. Más de 25 años de historia deportiva venezolana.
              </p>
            </motion.div>

            {/* Stats rápidos */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { num: todosLosResultados.length, label: "Eventos registrados" },
                { num: todosLosResultados.reduce((a, r) => a + r.participantes, 0).toLocaleString(), label: "Atletas totales" },
                { num: "2024-2025", label: "Temporadas" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-barlow font-black text-3xl text-naranja">{num}</div>
                  <div className="text-gris-texto text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filtros y búsqueda */}
        <section className="py-8 bg-negro border-b border-gris-3 sticky top-16 z-40 backdrop-blur-xl bg-negro/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Búsqueda */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gris-texto" />
                <input
                  type="text"
                  placeholder="Buscar evento o ciudad..."
                  value={busqueda}
                  onChange={e => setBusqueda(e.target.value)}
                  className="w-full bg-gris-2 border border-gris-3 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gris-texto focus:outline-none focus:border-naranja text-sm"
                />
              </div>

              {/* Filtros de categoría */}
              <div className="flex flex-wrap gap-2">
                {categorias.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaActiva(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                      categoriaActiva === cat
                        ? 'bg-naranja text-white'
                        : 'bg-gris-2 border border-gris-3 text-gris-texto hover:border-naranja hover:text-naranja'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lista de resultados */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {resultadosFiltrados.length === 0 ? (
              <div className="text-center py-20">
                <Trophy className="w-12 h-12 text-gris-texto mx-auto mb-4" />
                <p className="text-gris-texto text-lg">No se encontraron resultados para "{busqueda}"</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {resultadosFiltrados.map((resultado, i) => (
                  <motion.div
                    key={resultado.id}
                    className="group bg-gris-1 border border-gris-3 rounded-2xl overflow-hidden hover:border-gris-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {/* Barra de color */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${resultado.color}`} />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="text-xs font-bold text-naranja uppercase tracking-wider">{resultado.categoria}</span>
                          <h3 className="font-barlow font-bold text-xl text-white mt-1 leading-tight group-hover:text-naranja transition-colors">
                            {resultado.nombre}
                          </h3>
                        </div>
                        <span className="flex-shrink-0 px-3 py-1 bg-gris-2 border border-gris-3 rounded-full text-xs text-gris-texto font-medium">
                          {resultado.ciudad}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex flex-wrap gap-4 mb-5 text-sm text-gris-texto">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-naranja" />
                          {formatearFecha(resultado.fecha)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-naranja" />
                          {resultado.participantes.toLocaleString()} atletas
                        </div>
                      </div>

                      {/* Distancias */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {resultado.distancias.map(d => (
                          <span key={d} className={`px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${resultado.color}`}>
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Ganador */}
                      <div className="flex items-center justify-between bg-gris-2 rounded-xl px-4 py-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-400" />
                          <span className="text-white text-sm font-medium">{resultado.ganadoraGeneral}</span>
                        </div>
                        <span className="font-barlow font-bold text-naranja">{resultado.tiempoGanadora}</span>
                      </div>

                      {/* CTA */}
                      <a
                        href={resultado.link}
                        className="flex items-center justify-center gap-2 w-full border border-gris-3 hover:border-naranja text-gris-texto hover:text-naranja py-3 rounded-xl text-sm font-medium transition-all duration-200 group/btn"
                      >
                        Ver Resultados Completos
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
