import { premiacion } from '@/lib/data'
import { Trophy } from 'lucide-react'

// Tabla de premiación para las categorías principales
export default function PremiacionTable() {
  return (
    <section className="py-16 bg-gris-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-7 h-7 text-naranja" />
          <h2 className="font-barlow font-bold text-3xl text-white">Premiación</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(premiacion).map(([distancia, premios]) => (
            <div key={distancia} className="bg-negro border border-gris-3 rounded-2xl overflow-hidden">
              {/* Header de la tabla */}
              <div className="bg-naranja/10 border-b border-gris-3 px-6 py-4">
                <h3 className="font-barlow font-bold text-xl text-naranja">{distancia}</h3>
              </div>

              {/* Tabla */}
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-gris-texto text-xs uppercase tracking-wider">
                      <th className="text-left pb-3">Posición</th>
                      <th className="text-center pb-3">Masculino</th>
                      <th className="text-center pb-3">Femenino</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {premios.map((premio, i) => (
                      <tr key={premio.posicion} className={i < premios.length - 1 ? 'border-b border-gris-3' : ''}>
                        <td className="py-3 text-white font-medium">{premio.posicion}</td>
                        <td className="py-3 text-center text-naranja font-bold">{premio.masculino}</td>
                        <td className="py-3 text-center text-naranja font-bold">{premio.femenino}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gris-texto text-sm mt-6 text-center">
          * La premiación aplica para las categorías Open/Elite. Premios sujetos a participación mínima.
        </p>
      </div>
    </section>
  )
}
