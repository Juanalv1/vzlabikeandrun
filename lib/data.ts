// Datos mock para poblar la UI de VzlaBike and Run®

export interface Evento {
  id: string
  nombre: string
  fecha: string
  ciudad: string
  distancias: string[]
  categoria: string
  color: string
  imagen: string
  precio?: { [distancia: string]: number }
  resultadosSlug?: string
}

export const eventos: Evento[] = [
  {
    id: "womens-run-2026",
    nombre: "Women's Run by Gravity",
    fecha: "2026-03-08",
    ciudad: "Caracas, Venezuela",
    distancias: ["2K", "5K", "10K"],
    categoria: "Atletismo",
    color: "from-purple-600 to-pink-500",
    imagen: "https://picsum.photos/seed/womensrun/800/600",
    precio: { "2K": 5, "5K": 8, "10K": 12 },
    resultadosSlug: "womens-run-10k-2026"
  },
  {
    id: "expo-fitness-10k",
    nombre: "Expo Fitness 10K",
    fecha: "2026-04-15",
    ciudad: "Valencia, Venezuela",
    distancias: ["5K", "10K"],
    categoria: "Running",
    color: "from-orange-500 to-red-600",
    imagen: "https://picsum.photos/seed/expofitness/800/600",
    precio: { "5K": 8, "10K": 12 }
  },
  {
    id: "farmacia-luna-10k",
    nombre: "Farmacia Luna 10K",
    fecha: "2026-05-20",
    ciudad: "Maracaibo, Venezuela",
    distancias: ["10K"],
    categoria: "Running",
    color: "from-blue-500 to-cyan-500",
    imagen: "https://picsum.photos/seed/farmacialuna/800/600",
    precio: { "10K": 12 }
  }
]

export const servicios = [
  {
    titulo: "Cronometraje Deportivo",
    descripcion: "Tecnología TAG Multisport y TAG Road MTB. Chips retornables y descartables para todo tipo de competencia deportiva.",
    icon: "Timer",
    color: "#FF5500"
  },
  {
    titulo: "Organización de Eventos",
    descripcion: "Gestión integral de tu evento deportivo desde cero. Experiencia en grandes masas, comunicación y producción.",
    icon: "Trophy",
    color: "#FF5500"
  },
  {
    titulo: "Plataforma VBRWorks®",
    descripcion: "Sistema de registro en línea para eventos de resistencia. Robusto, seguro y escalable para miles de atletas.",
    icon: "Monitor",
    color: "#FF5500"
  }
]

export const estadisticas = [
  { numero: 50, sufijo: "+", etiqueta: "Eventos Realizados" },
  { numero: 15000, sufijo: "+", etiqueta: "Atletas Registrados" },
  { numero: 25, sufijo: "+", etiqueta: "Años de Experiencia" },
  { numero: 100, sufijo: "%", etiqueta: "Venezuela" }
]

export const resultadosRecientes = [
  { nombre: "Media Maratón Caracas 2025", fecha: "2025-11-15", participantes: 1240 },
  { nombre: "Triatlón del Llano 2025", fecha: "2025-10-05", participantes: 380 },
  { nombre: "10K Bancaribe 2025", fecha: "2025-09-21", participantes: 850 },
  { nombre: "Vuelta al Lago Maracaibo 2025", fecha: "2025-08-10", participantes: 620 },
  { nombre: "Women's Run Gravity 2025", fecha: "2025-03-08", participantes: 920 }
]

export const estadosVenezuela = [
  "Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas",
  "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón",
  "Guárico", "Lara", "Mérida", "Miranda", "Monagas",
  "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo",
  "La Guaira (Vargas)", "Yaracuy", "Zulia",
  "Distrito Capital (Caracas)", "Internacional"
]

export const bancosVenezuela = [
  "Bancolombia",
  "100% Banco",
  "Banco Activo",
  "Banco Agrícola de Venezuela",
  "Banco Bicentenario",
  "Banco de Venezuela",
  "Banco del Caribe (Bancaribe)",
  "Banco Exterior",
  "Banco Nacional de Crédito",
  "Banco Occidental de Descuento",
  "Banco Provincial",
  "Banesco Banco Universal",
  "Mercantil",
  "Venezolano de Crédito"
]

export const modalidades = [
  { id: "2k-infantil", nombre: "2K Infantil", descripcion: "Para niños hasta 12 años", precio: 5 },
  { id: "5k-caminata", nombre: "5K Caminata Recreativa", descripcion: "Caminata recreativa sin límite de edad", precio: 8 },
  { id: "5k-carrera", nombre: "5K Carrera", descripcion: "Carrera competitiva categorizada", precio: 8 },
  { id: "10k", nombre: "10K", descripcion: "Carrera de alto rendimiento", precio: 12 }
]

export const categorias = {
  "2k-infantil": {
    masculino: ["Sub-6", "Sub-8", "Sub-10", "Sub-12"],
    femenino: ["Sub-6", "Sub-8", "Sub-10", "Sub-12"]
  },
  "5k-caminata": {
    masculino: ["General", "Master 40+", "Master 50+", "Master 60+"],
    femenino: ["General", "Master 40+", "Master 50+", "Master 60+"]
  },
  "5k-carrera": {
    masculino: ["Sub-18", "18-29", "30-39", "40-49", "50-59", "60+"],
    femenino: ["Sub-18", "18-29", "30-39", "40-49", "50-59", "60+"]
  },
  "10k": {
    masculino: ["Elite", "Sub-18", "18-29", "30-39", "40-49", "50-59", "60+"],
    femenino: ["Elite", "Sub-18", "18-29", "30-39", "40-49", "50-59", "60+"]
  }
}

export const premiacion = {
  "10K": [
    { posicion: "1er Lugar", masculino: "$80", femenino: "$80" },
    { posicion: "2do Lugar", masculino: "$50", femenino: "$50" },
    { posicion: "3er Lugar", masculino: "Obsequio", femenino: "Obsequio" }
  ],
  "5K": [
    { posicion: "1er Lugar", masculino: "$50", femenino: "$50" },
    { posicion: "2do Lugar", masculino: "$30", femenino: "$30" },
    { posicion: "3er Lugar", masculino: "Obsequio", femenino: "Obsequio" }
  ]
}
