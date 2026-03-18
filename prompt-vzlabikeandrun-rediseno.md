# Prompt: Propuesta de Rediseño Web — VzlaBike and Run®
> Usar este prompt directamente en Claude Code para generar el proyecto Next.js completo.

---

Crea una propuesta de rediseño web completa en Next.js 14 (App Router) para la empresa venezolana VzlaBike and Run® — una de las organizadoras de eventos deportivos más reconocidas de Venezuela, especializada en carreras, cronometraje y timing deportivo.

## CONTEXTO DEL PROYECTO

El sitio actual (vzlabikeandrun.com) está construido en WordPress con un diseño anticuado, imágenes con lazy-load roto, formularios de inscripción con UX pésima, navegación con items sin título, y cero identidad visual coherente. La empresa es grande y reconocida, pero su web no lo refleja. Esta propuesta es un pitch comercial para convencerlos de contratar un rediseño.

## STACK TÉCNICO

- Next.js 14 con App Router
- TypeScript
- Tailwind CSS
- Framer Motion (para animaciones)
- React Hook Form + Zod (validaciones en formulario)
- Lucide React (iconos)
- next/image para optimización de imágenes

---

## PÁGINAS A CREAR

### 1. HOME PAGE `/`

Una landing page deportiva de alto impacto. Debe incluir:

**Hero Section:**
- Fondo oscuro (negro/gris oscuro) con overlay sobre imagen de carrera
- Nombre de marca "VzlaBike and Run®" con tipografía bold y moderna
- Tagline: "La experiencia deportiva más grande de Venezuela"
- Dos CTAs: "Ver Próximos Eventos" y "Solicitar Cronometraje"
- Animación de entrada con Framer Motion (fade + slide up)

**Navbar:**
- Logo + nombre de marca a la izquierda
- Links: Inicio | Nosotros | Servicios | Eventos | Resultados | Contacto
- CTA button "Inscríbete" en naranja/rojo al lado derecho
- Sticky con efecto blur en scroll
- Hamburger menu en mobile

**Próximos Eventos Section:**
- Grid de cards de eventos (3 columnas desktop, 1 mobile)
- Cada card muestra: nombre del evento, fecha, distancias disponibles (5K/10K), ciudad, y countdown timer en tiempo real
- Ejemplo de eventos: "Women's Run by Gravity - 8 Mar 2026", "Expo Fitness 10K", "Farmacia Luna 10K"
- Botón "Inscribirse" en cada card que lleva al formulario

**Servicios Section:**
- 3 cards con iconos: Cronometraje Deportivo | Organización de Eventos | Plataforma VBRWorks®
- Descripción breve de cada uno
- Fondo con gradiente oscuro

**Estadísticas Section (Social Proof):**
- Números animados con contadores: "+50 Eventos", "+15,000 Atletas", "+25 Años de Experiencia", "100% Venezuela"
- Fondo oscuro con texto blanco/naranja

**Resultados Recientes Section:**
- Lista de últimos eventos con resultados disponibles
- Cada item: nombre evento, fecha, botón "Ver Resultados"

**Footer:**
- Logo y descripción breve
- Links rápidos organizados
- Contacto: email (venezuelabikeandrun@gmail.com), WhatsApp (+58-412-016-26-85)
- Redes sociales con iconos

---

### 2. PÁGINA DE EVENTO + INSCRIPCIÓN `/eventos/womens-run`

Rediseño completo de la página del evento "Women's Run by Gravity". Debe incluir:

**Event Hero:**
- Banner full-width con overlay degradado
- Título del evento con tipografía grande
- Fecha: "8 de Marzo, 2026"
- Ubicación, distancias disponibles como badges (2K | 5K | 10K)
- Countdown timer prominente con días/horas/minutos/segundos en tiempo real
- Background con gradiente morado/rosa (tema femenino del evento)

**Info del Evento Section:**
- Premiación: tabla limpia mostrando 10K (1ro $80 | 2do $50 | 3ro Obsequio) y 5K (1ro $50 | 2do $30 | 3ro Obsequio)
- Categorías disponibles por modalidad
- Reglamento resumido en bullets claros

**FORMULARIO DE INSCRIPCIÓN MULTI-PASO:**

El formulario actual es una lista interminable de campos sin jerarquía. Rediseñarlo como un wizard de 4 pasos con barra de progreso.

**Paso 1 — Datos Personales:**
- Cédula de identidad
- Nombre y Apellidos (dos campos separados)
- Email + Confirmar Email
- Fecha de Nacimiento (date picker moderno)
- Teléfono
- Estado/Ciudad (selector con los 23 estados de Venezuela + Internacional)

**Paso 2 — Detalles del Evento:**
- Género (Masculino / Femenino) — botones visuales grandes, no dropdown
- Modalidad con cards visuales: "2K Infantil" | "5K Caminata Recreativa" | "5K Carrera" | "10K"
- Categoría (se filtra automáticamente según modalidad y género seleccionados)
- Nombre del Equipo (opcional)

**Paso 3 — Talla y Pago:**
- Selector visual de talla de franela (XS/S/M/L/XL) con aviso de no cambios
- Tipo de pago: Pago Móvil o Pago en Sede
- Si elige Pago Móvil: selector de banco (lista completa de bancos venezolanos incluyendo Bancolombia), número de transferencia, y campo para subir comprobante (hasta 3 archivos)
- Total calculado dinámicamente según modalidad seleccionada

**Paso 4 — Confirmación y Consentimiento:**
- Resumen visual de todos los datos ingresados
- Checkbox de política de privacidad con texto completo colapsable
- Texto legal de exoneración de responsabilidad colapsable
- Botón "Confirmar Inscripción" prominente
- Aviso: "Recibirás confirmación por email en 48 horas"

**Navegación entre pasos:**
- Botones Anterior / Siguiente
- Validación por paso con React Hook Form + Zod antes de avanzar
- Barra de progreso visual en la parte superior con nombres de pasos

**Estado de éxito:**
- Pantalla de confirmación con ícono de check animado
- Resumen de inscripción
- Mensaje: "Tu pre-inscripción fue enviada. Recibirás un email de confirmación en 48 horas."

---

## IDENTIDAD VISUAL

**Paleta de colores:**
- Primario: Negro `#0A0A0A` y Blanco `#FFFFFF`
- Acento principal: Naranja energético `#FF5500`
- Acento Women's Run: Morado/Rosa `#9333EA` a `#EC4899`
- Grises: `#1A1A1A`, `#2A2A2A`, `#6B7280`

**Tipografía:**
- Headings: Inter Black o Bebas Neue (bold, deportivo)
- Body: Inter Regular

**Estilo general:**
- Dark mode como base
- Cards con border sutil y hover effects
- Bordes redondeados modernos (`rounded-xl`)
- Sombras profundas
- Gradientes en secciones clave
- Sensación de velocidad y dinamismo deportivo

---

## DATOS MOCK PARA POBLAR LA UI

```typescript
const eventos = [
  {
    id: "womens-run-2026",
    nombre: "Women's Run by Gravity",
    fecha: "2026-03-08",
    ciudad: "Venezuela",
    distancias: ["2K", "5K", "10K"],
    categoria: "Atletismo",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: "expo-fitness-10k",
    nombre: "Expo Fitness 10K",
    fecha: "2026-04-15",
    ciudad: "Venezuela",
    distancias: ["5K", "10K"],
    categoria: "Running",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "farmacia-luna-10k",
    nombre: "Farmacia Luna 10K",
    fecha: "2026-05-20",
    ciudad: "Venezuela",
    distancias: ["10K"],
    categoria: "Running",
    color: "from-blue-500 to-cyan-500"
  }
]

const servicios = [
  {
    titulo: "Cronometraje Deportivo",
    descripcion: "Tecnología TAG Multisport y TAG Road MTB. Chips retornables y descartables para todo tipo de competencia.",
    icon: "Timer"
  },
  {
    titulo: "Organización de Eventos",
    descripcion: "Gestión integral de tu evento deportivo desde cero. Experiencia en grandes masas, comunicación y producción.",
    icon: "Trophy"
  },
  {
    titulo: "Plataforma VBRWorks®",
    descripcion: "Sistema de registro en línea para eventos de resistencia. Robusto, seguro y escalable.",
    icon: "Monitor"
  }
]

const bancos = [
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
```

---

## ESTRUCTURA DE ARCHIVOS ESPERADA

```
/app
  /page.tsx                        ← Home
  /eventos
    /[slug]
      /page.tsx                    ← Página dinámica de evento
  /layout.tsx
/components
  /layout
    /Navbar.tsx
    /Footer.tsx
  /home
    /HeroSection.tsx
    /EventosSection.tsx
    /ServiciosSection.tsx
    /StatsSection.tsx
    /ResultadosSection.tsx
  /eventos
    /EventHero.tsx
    /EventInfo.tsx
    /PremiacionTable.tsx
  /inscripcion
    /FormularioInscripcion.tsx     ← Wizard principal (estado global)
    /StepPersonalInfo.tsx
    /StepEventDetails.tsx
    /StepPayment.tsx
    /StepConfirmation.tsx
    /ProgressBar.tsx
    /SuccessScreen.tsx
  /ui
    /CountdownTimer.tsx
    /EventCard.tsx
    /StatCounter.tsx
    /Button.tsx
/lib
  /schemas.ts                      ← Zod schemas por paso
  /data.ts                         ← Mock data
  /utils.ts
```

---

## NOTAS IMPORTANTES

1. **El formulario de inscripción es el núcleo del pitch** — debe verse drásticamente mejor que el original de WordPress
2. Todos los countdowns deben ser funcionales en tiempo real usando `useEffect` + `setInterval`
3. El diseño debe ser **mobile-first** — los atletas se inscriben desde el celular
4. Usar imágenes placeholder de `https://picsum.photos` para simular fotos de eventos
5. El proyecto debe correr con `npm run dev` sin errores desde el primer intento
6. Incluir un archivo `README.md` con instrucciones de instalación y descripción del proyecto como propuesta comercial
7. Agregar un **banner sutil** fijo en la parte inferior de la UI que diga: `"Propuesta de Rediseño — Desarrollado por [Tu Nombre]"` con fondo oscuro semitransparente
8. El código debe estar bien comentado en español para facilitar la presentación al cliente
