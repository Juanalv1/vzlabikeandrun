'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowLeft, Trophy, Medal, Filter, ChevronUp, ChevronDown } from 'lucide-react'

// Datos reales del Women's Run by Gravity 10K — 8 Marzo 2026, Acarigua, Portuguesa
const atletas = [
  { pos:1,  nombre:"Davila Escalona, Jose Rafael",    dorsal:311, control:"16:23", llegada:"16:23", gun:"32:48.2", chip:"32:47.1", pace:"3:17", sexo:"M", edad:35, ciudad:"Portuguesa Guanare" },
  { pos:2,  nombre:"Trons Salcedo, Yohan Alis",       dorsal:120, control:"16:22", llegada:"16:24", gun:"32:48.7", chip:"32:46.3", pace:"3:16", sexo:"M", edad:39, ciudad:"Yaracuy San Felipe" },
  { pos:3,  nombre:"Virguez Lucena, Jhoeeber",        dorsal:302, control:"16:51", llegada:"17:37", gun:"34:30.1", chip:"34:28.4", pace:"3:27", sexo:"M", edad:24, ciudad:"Portuguesa Guanare" },
  { pos:4,  nombre:"Rodriguez, Ysrael",               dorsal:169, control:"16:51", llegada:"18:19", gun:"35:12.2", chip:"35:10.8", pace:"3:31", sexo:"M", edad:46, ciudad:"Yaracuy San Felipe" },
  { pos:5,  nombre:"Perez, Alfredo Antonio",          dorsal:197, control:"17:00", llegada:"19:02", gun:"36:05.1", chip:"36:03.5", pace:"3:36", sexo:"M", edad:60, ciudad:"Lara Sanare" },
  { pos:6,  nombre:"Garcia, Javier",                  dorsal:80,  control:"16:57", llegada:"19:21", gun:"36:20.2", chip:"36:18.8", pace:"3:38", sexo:"M", edad:25, ciudad:"Portuguesa Guanare" },
  { pos:7,  nombre:"Camacaro, Jhonny",                dorsal:182, control:"18:14", llegada:"20:01", gun:"38:17.8", chip:"38:15.2", pace:"3:49", sexo:"M", edad:51, ciudad:"Portuguesa Guanare" },
  { pos:8,  nombre:"Osuna, Reinaldo",                 dorsal:187, control:"18:40", llegada:"19:58", gun:"38:39.3", chip:"38:38.2", pace:"3:52", sexo:"M", edad:53, ciudad:"Portuguesa Guanare" },
  { pos:9,  nombre:"Calles, Francis",                 dorsal:87,  control:"18:48", llegada:"19:54", gun:"38:44.1", chip:"38:43.1", pace:"3:52", sexo:"F", edad:36, ciudad:"Portuguesa Guanare" },
  { pos:10, nombre:"Hernandez, Deixy",                dorsal:195, control:"19:09", llegada:"21:49", gun:"41:00.8", chip:"40:59.3", pace:"4:06", sexo:"F", edad:44, ciudad:"Barinas Barinas" },
  { pos:11, nombre:"Andueza, Alberto",                dorsal:138, control:"21:26", llegada:"21:16", gun:"42:51.9", chip:"42:42.8", pace:"4:16", sexo:"M", edad:32, ciudad:"Portuguesa Guanare" },
  { pos:12, nombre:"Martinez, Giovanni",              dorsal:308, control:"20:51", llegada:"22:47", gun:"43:41.3", chip:"43:38.4", pace:"4:22", sexo:"M", edad:59, ciudad:"Portuguesa Guanare" },
  { pos:13, nombre:"Campos, Manuel",                  dorsal:137, control:"21:26", llegada:"22:27", gun:"43:57.0", chip:"43:53.7", pace:"4:23", sexo:"M", edad:31, ciudad:"Portuguesa Guanare" },
  { pos:14, nombre:"Castillo, Alberto",               dorsal:48,  control:"20:20", llegada:"22:05", gun:"43:58.0", chip:"42:26.0", pace:"4:15", sexo:"M", edad:29, ciudad:"Portuguesa Guanare" },
  { pos:15, nombre:"Escobar E, Marco A",              dorsal:172, control:"21:30", llegada:"23:05", gun:"44:38.3", chip:"44:36.0", pace:"4:28", sexo:"M", edad:40, ciudad:"Portuguesa Guanare" },
  { pos:16, nombre:"Alvarez Vargas, Alejandro",       dorsal:76,  control:"21:48", llegada:"22:46", gun:"44:42.5", chip:"44:34.6", pace:"4:27", sexo:"M", edad:29, ciudad:"Lara Barquisimeto" },
  { pos:17, nombre:"Barazarte, Hugo",                 dorsal:75,  control:"20:05", llegada:"24:53", gun:"45:03.7", chip:"44:58.9", pace:"4:30", sexo:"M", edad:19, ciudad:"Portuguesa Guanare" },
  { pos:18, nombre:"Castillo, Antonieta",             dorsal:159, control:"21:48", llegada:"24:00", gun:"45:50.0", chip:"45:48.4", pace:"4:35", sexo:"F", edad:40, ciudad:"Barinas Barinas" },
  { pos:19, nombre:"Toro, Nancy",                     dorsal:160, control:"21:54", llegada:"24:03", gun:"45:59.3", chip:"45:58.0", pace:"4:36", sexo:"F", edad:47, ciudad:"Portuguesa Guanare" },
  { pos:20, nombre:"Rodriguez, Victor",               dorsal:43,  control:"23:22", llegada:"23:13", gun:"46:39.2", chip:"46:35.8", pace:"4:40", sexo:"M", edad:20, ciudad:"Portuguesa Guanare" },
  { pos:21, nombre:"Rodriguez, Luis",                 dorsal:162, control:"21:20", llegada:"25:16", gun:"46:41.0", chip:"46:37.6", pace:"4:40", sexo:"M", edad:47, ciudad:"Portuguesa Guanare" },
  { pos:22, nombre:"Lozano, Doris",                   dorsal:174, control:"22:32", llegada:"24:35", gun:"47:09.6", chip:"47:07.8", pace:"4:43", sexo:"F", edad:50, ciudad:"" },
  { pos:23, nombre:"Cesar Rodriguez, Cesar",          dorsal:73,  control:"22:21", llegada:"24:49", gun:"47:14.7", chip:"47:10.9", pace:"4:43", sexo:"M", edad:26, ciudad:"Portuguesa Guanare" },
  { pos:24, nombre:"Zabaleta, Adriana",               dorsal:177, control:"22:41", llegada:"24:34", gun:"47:18.5", chip:"47:16.1", pace:"4:43", sexo:"F", edad:54, ciudad:"Portuguesa Guanare" },
  { pos:25, nombre:"Hernandez, Jose",                 dorsal:163, control:"22:46", llegada:"24:47", gun:"47:40.8", chip:"47:34.6", pace:"4:45", sexo:"M", edad:44, ciudad:"Portuguesa Guanare" },
  { pos:26, nombre:"Castro Escalona, Horacio Javier", dorsal:72,  control:"23:54", llegada:"24:06", gun:"48:04.4", chip:"48:00.7", pace:"4:48", sexo:"M", edad:18, ciudad:"Portuguesa Guanare" },
  { pos:27, nombre:"Segovia, Jose",                   dorsal:58,  control:"23:24", llegada:"24:51", gun:"48:18.2", chip:"48:15.9", pace:"4:50", sexo:"M", edad:22, ciudad:"Portuguesa Guanare" },
  { pos:28, nombre:"Gutierrez, Victor",               dorsal:121, control:"23:09", llegada:"25:14", gun:"48:27.5", chip:"48:23.2", pace:"4:50", sexo:"M", edad:35, ciudad:"Portuguesa Guanare" },
  { pos:29, nombre:"Torres, Antonio",                 dorsal:115, control:"23:42", llegada:"24:36", gun:"48:28.2", chip:"48:18.6", pace:"4:50", sexo:"M", edad:34, ciudad:"Portuguesa Guanare" },
  { pos:30, nombre:"Mendez, Luis",                    dorsal:70,  control:"23:56", llegada:"24:22", gun:"48:30.9", chip:"48:19.7", pace:"4:50", sexo:"M", edad:26, ciudad:"Portuguesa Guanare" },
  { pos:31, nombre:"Suarez, Orlanye",                 dorsal:134, control:"23:42", llegada:"24:48", gun:"48:33.2", chip:"48:31.2", pace:"4:51", sexo:"M", edad:39, ciudad:"Portuguesa Guanare" },
  { pos:32, nombre:"Rodriguez, Marianny",             dorsal:104, control:"23:41", llegada:"24:49", gun:"48:33.4", chip:"48:30.7", pace:"4:51", sexo:"F", edad:35, ciudad:"Portuguesa Guanare" },
  { pos:33, nombre:"Gudino, Daniel",                  dorsal:123, control:"23:35", llegada:"24:59", gun:"48:40.0", chip:"48:35.5", pace:"4:51", sexo:"M", edad:31, ciudad:"Portuguesa Guanare" },
  { pos:34, nombre:"Gonzalez, Jonathan",              dorsal:54,  control:"24:14", llegada:"24:22", gun:"48:40.9", chip:"48:36.4", pace:"4:51", sexo:"M", edad:21, ciudad:"Portuguesa Guanare" },
  { pos:35, nombre:"Sousa, Luis",                     dorsal:183, control:"23:23", llegada:"25:21", gun:"48:52.9", chip:"48:45.0", pace:"4:53", sexo:"M", edad:58, ciudad:"Portuguesa Guanare" },
  { pos:36, nombre:"Jimenez, Sanyembert",             dorsal:116, control:"24:28", llegada:"24:16", gun:"48:58.1", chip:"48:45.3", pace:"4:53", sexo:"M", edad:35, ciudad:"Portuguesa Guanare" },
  { pos:37, nombre:"Lopez, Miguel",                   dorsal:135, control:"23:29", llegada:"25:28", gun:"49:01.4", chip:"48:58.4", pace:"4:54", sexo:"M", edad:38, ciudad:"Portuguesa Guanare" },
  { pos:38, nombre:"Vela, Luggi",                     dorsal:53,  control:"24:14", llegada:"25:07", gun:"49:26.1", chip:"49:21.7", pace:"4:56", sexo:"M", edad:26, ciudad:"Portuguesa Guanare" },
  { pos:39, nombre:"Castillo Oviedo, Jesus Enrique",  dorsal:49,  control:"23:25", llegada:"26:30", gun:"50:00.5", chip:"49:55.6", pace:"5:00", sexo:"M", edad:19, ciudad:"Portuguesa Guanare" },
  { pos:40, nombre:"Puente, Yoly Del Carmen",         dorsal:161, control:"22:45", llegada:"27:13", gun:"50:01.4", chip:"49:59.6", pace:"5:00", sexo:"F", edad:44, ciudad:"Portuguesa Guanare" },
  { pos:41, nombre:"Monsalve, Angel David",           dorsal:79,  control:"23:38", llegada:"26:22", gun:"50:04.4", chip:"50:00.8", pace:"5:00", sexo:"M", edad:19, ciudad:"Portuguesa Guanare" },
  { pos:42, nombre:"Colina, Jose",                    dorsal:185, control:"24:22", llegada:"25:39", gun:"50:05.6", chip:"50:02.4", pace:"5:00", sexo:"M", edad:55, ciudad:"Portuguesa Guanare" },
  { pos:43, nombre:"Rivas, Zoraida",                  dorsal:145, control:"24:18", llegada:"26:00", gun:"50:21.6", chip:"50:19.0", pace:"5:02", sexo:"F", edad:47, ciudad:"Portuguesa Guanare" },
  { pos:44, nombre:"Ramones, Jesus",                  dorsal:56,  control:"24:42", llegada:"25:48", gun:"50:52.4", chip:"50:31.7", pace:"5:03", sexo:"M", edad:22, ciudad:"Portuguesa Guanare" },
  { pos:45, nombre:"Jimenez, Santos",                 dorsal:44,  control:"24:56", llegada:"25:53", gun:"51:03.5", chip:"50:50.7", pace:"5:05", sexo:"M", edad:29, ciudad:"Portuguesa Guanare" },
  { pos:46, nombre:"Marquez, Samuel",                 dorsal:46,  control:"24:50", llegada:"26:14", gun:"51:07.8", chip:"51:04.7", pace:"5:06", sexo:"M", edad:17, ciudad:"" },
  { pos:47, nombre:"Pacheco, Kimberling",             dorsal:105, control:"24:48", llegada:"26:23", gun:"51:18.0", chip:"51:11.8", pace:"5:07", sexo:"F", edad:33, ciudad:"Portuguesa Guanare" },
  { pos:48, nombre:"Rivas, Manuel",                   dorsal:51,  control:"25:55", llegada:"25:19", gun:"51:25.3", chip:"51:15.6", pace:"5:08", sexo:"M", edad:21, ciudad:"Portuguesa Guanare" },
  { pos:49, nombre:"Moreno, Arnoldo",                 dorsal:126, control:"25:22", llegada:"26:00", gun:"51:33.5", chip:"51:22.4", pace:"5:08", sexo:"M", edad:36, ciudad:"Portuguesa Guanare" },
  { pos:50, nombre:"Peraza Arjona, Gabriel Jose",     dorsal:63,  control:"24:59", llegada:"26:18", gun:"51:40.1", chip:"51:18.4", pace:"5:08", sexo:"M", edad:26, ciudad:"Portuguesa Guanare" },
  { pos:51, nombre:"Infante, Nestor",                 dorsal:124, control:"26:58", llegada:"24:45", gun:"51:48.3", chip:"51:44.0", pace:"5:11", sexo:"M", edad:31, ciudad:"Portuguesa Guanare" },
  { pos:52, nombre:"Hernandez, Jose",                 dorsal:52,  control:"24:12", llegada:"27:33", gun:"51:50.9", chip:"51:46.4", pace:"5:11", sexo:"M", edad:17, ciudad:"Portuguesa Guanare" },
  { pos:53, nombre:"Duran, Juan",                     dorsal:132, control:"25:15", llegada:"26:29", gun:"51:52.3", chip:"51:45.2", pace:"5:11", sexo:"M", edad:30, ciudad:"Portuguesa Guanare" },
  { pos:54, nombre:"Blanco, Darwin",                  dorsal:119, control:"25:35", llegada:"26:05", gun:"51:53.2", chip:"51:40.9", pace:"5:10", sexo:"M", edad:33, ciudad:"Portuguesa Guanare" },
  { pos:55, nombre:"Castillo, Jan",                   dorsal:186, control:"25:57", llegada:"25:45", gun:"51:58.6", chip:"51:52.0", pace:"5:11", sexo:"M", edad:22, ciudad:"Portuguesa Guanare" },
]

const medallaPodio = [
  { icono: '🥇', bg: 'from-yellow-500 to-amber-400', texto: 'text-yellow-400', label: '1er Lugar' },
  { icono: '🥈', bg: 'from-gray-400 to-slate-300',  texto: 'text-gray-300',  label: '2do Lugar' },
  { icono: '🥉', bg: 'from-orange-700 to-amber-600', texto: 'text-orange-400', label: '3er Lugar' },
]

type SortKey = 'pos' | 'nombre' | 'chip' | 'pace' | 'edad'

export default function WomensRun10KResultados() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroSexo, setFiltroSexo] = useState<'todos' | 'M' | 'F'>('todos')
  const [sortKey, setSortKey] = useState<SortKey>('pos')
  const [sortAsc, setSortAsc] = useState(true)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(true) }
  }

  const datos = useMemo(() => {
    let result = atletas.filter(a => {
      const coincideNombre = a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        String(a.dorsal).includes(busqueda)
      const coincideSexo = filtroSexo === 'todos' || a.sexo === filtroSexo
      return coincideNombre && coincideSexo
    })
    result = [...result].sort((a, b) => {
      let av: string | number = a[sortKey]
      let bv: string | number = b[sortKey]
      if (typeof av === 'string') av = av.toLowerCase()
      if (typeof bv === 'string') bv = bv.toLowerCase()
      return sortAsc ? (av < bv ? -1 : 1) : (av > bv ? -1 : 1)
    })
    return result
  }, [busqueda, filtroSexo, sortKey, sortAsc])

  const top3 = atletas.slice(0, 3)

  const SortIcon = ({ col }: { col: SortKey }) =>
    sortKey === col
      ? sortAsc ? <ChevronUp className="w-3 h-3 inline ml-1" /> : <ChevronDown className="w-3 h-3 inline ml-1" />
      : null

  return (
    <main className="min-h-screen bg-negro pt-20 pb-20">

        {/* Hero del evento */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-negro" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px)'
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-negro to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resultados" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Todos los resultados
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-white text-xs font-bold">10K</span>
                <span className="px-3 py-1 bg-purple-500/30 border border-purple-400/40 rounded-full text-purple-200 text-xs font-bold">General</span>
              </div>
              <h1 className="font-barlow font-black text-white leading-none mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                WOMEN'S RUN BY GRAVITY
              </h1>
              <p className="text-white/70 text-lg">Acarigua, Estado Portuguesa &nbsp;·&nbsp; 8 de Marzo, 2026</p>
              <p className="text-white/50 text-sm mt-1">Resultados por <strong className="text-white/70">www.venezuelabike.com</strong> · Software: ChuckScore</p>
            </motion.div>

            {/* Podio Top 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {top3.map((a, i) => (
                <motion.div
                  key={a.pos}
                  className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl mb-2">{medallaPodio[i].icono}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${medallaPodio[i].texto}`}>
                    {medallaPodio[i].label}
                  </div>
                  <div className="text-white font-bold text-sm leading-tight mb-2">{a.nombre}</div>
                  <div className="font-barlow font-black text-2xl text-white">{a.chip}</div>
                  <div className="text-white/50 text-xs mt-1">Dorsal #{a.dorsal}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabla de resultados */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Filtros */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gris-texto" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o dorsal..."
                  value={busqueda}
                  onChange={e => setBusqueda(e.target.value)}
                  className="w-full bg-gris-2 border border-gris-3 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gris-texto focus:outline-none focus:border-purple-500 text-sm transition-colors"
                />
              </div>
              <div className="flex gap-2">
                {(['todos', 'M', 'F'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setFiltroSexo(s)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                      filtroSexo === s
                        ? 'bg-purple-600 text-white'
                        : 'bg-gris-2 border border-gris-3 text-gris-texto hover:border-purple-500 hover:text-purple-300'
                    }`}
                  >
                    {s === 'todos' ? 'Todos' : s === 'M' ? '♂ Masculino' : '♀ Femenino'}
                  </button>
                ))}
              </div>
            </div>

            {/* Counter */}
            <div className="text-gris-texto text-sm mb-4">
              Mostrando <span className="text-white font-medium">{datos.length}</span> de {atletas.length} atletas
            </div>

            {/* Tabla */}
            <div className="bg-gris-1 border border-gris-3 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gris-3 bg-gris-2">
                      {([
                        { key: 'pos',    label: '#',       w: 'w-12' },
                        { key: 'nombre', label: 'Atleta',  w: 'min-w-[180px]' },
                        { key: null,     label: 'Dorsal',  w: 'w-20' },
                        { key: null,     label: 'Control', w: 'w-24' },
                        { key: null,     label: 'Llegada', w: 'w-24' },
                        { key: null,     label: 'Gun',     w: 'w-24' },
                        { key: 'chip',   label: 'Chip',    w: 'w-24' },
                        { key: 'pace',   label: 'Ritmo',   w: 'w-20' },
                        { key: null,     label: 'Sexo',    w: 'w-16' },
                        { key: 'edad',   label: 'Edad',    w: 'w-16' },
                        { key: null,     label: 'Ciudad',  w: 'min-w-[140px]' },
                      ] as { key: SortKey | null; label: string; w: string }[]).map(({ key, label, w }) => (
                        <th
                          key={label}
                          onClick={key ? () => handleSort(key) : undefined}
                          className={`px-4 py-3 text-left font-bold text-gris-texto uppercase tracking-wider text-xs ${w} ${key ? 'cursor-pointer hover:text-white transition-colors select-none' : ''}`}
                        >
                          {label}
                          {key && <SortIcon col={key} />}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {datos.map((a, i) => (
                      <tr
                        key={a.dorsal}
                        className={`border-b border-gris-3/50 transition-colors ${
                          i % 2 === 0 ? 'bg-negro/30' : 'bg-gris-2/30'
                        } hover:bg-purple-950/30`}
                      >
                        <td className="px-4 py-3">
                          <span className={`font-barlow font-black text-lg ${
                            a.pos === 1 ? 'text-yellow-400' :
                            a.pos === 2 ? 'text-gray-300' :
                            a.pos === 3 ? 'text-orange-400' :
                            'text-gris-texto'
                          }`}>
                            {a.pos === 1 ? '🥇' : a.pos === 2 ? '🥈' : a.pos === 3 ? '🥉' : a.pos}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-white font-medium">{a.nombre}</span>
                        </td>
                        <td className="px-4 py-3 text-gris-texto text-center">#{a.dorsal}</td>
                        <td className="px-4 py-3 text-gris-texto font-mono text-center">{a.control}</td>
                        <td className="px-4 py-3 text-gris-texto font-mono text-center">{a.llegada}</td>
                        <td className="px-4 py-3 text-gris-texto font-mono text-center">{a.gun}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="font-barlow font-bold text-base text-white">{a.chip}</span>
                        </td>
                        <td className="px-4 py-3 text-purple-300 font-mono text-center">{a.pace}/km</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${a.sexo === 'M' ? 'bg-blue-900/50 text-blue-300' : 'bg-pink-900/50 text-pink-300'}`}>
                            {a.sexo}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gris-texto text-center">{a.edad}</td>
                        <td className="px-4 py-3 text-gris-texto text-sm">{a.ciudad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {datos.length === 0 && (
                <div className="py-16 text-center text-gris-texto">
                  <Trophy className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  No se encontraron atletas para "{busqueda}"
                </div>
              )}
            </div>

            <p className="text-gris-texto text-xs text-center mt-6">
              Resultados oficiales — VzlaBike and Run® · Software de cronometraje: ChuckScore
            </p>
          </div>
        </section>
    </main>
  )
}
