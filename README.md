# VzlaBike and Run® — Propuesta de Rediseño Web

> La experiencia deportiva más grande de Venezuela

## 🏃 Sobre el Proyecto

Propuesta de rediseño web completo para **VzlaBike and Run®**, una de las organizadoras de eventos deportivos más reconocidas de Venezuela. Este proyecto demuestra una visión moderna, rápida y mobile-first para la plataforma de inscripción y eventos.

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 14** | Framework con App Router |
| **TypeScript** | Tipado estático |
| **Tailwind CSS** | Estilos utilitarios |
| **Framer Motion** | Animaciones fluidas |
| **React Hook Form** | Manejo de formularios |
| **Zod** | Validación de schemas |
| **Lucide React** | Iconografía |

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/vzlabikeandrun.git
cd vzlabikeandrun

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
/app
  /page.tsx                    # Home page
  /eventos/[slug]/page.tsx     # Página dinámica de evento
  /layout.tsx                  # Layout raíz
  /globals.css                 # Estilos globales
/components
  /layout/Navbar.tsx, Footer.tsx
  /home/HeroSection, EventosSection, ServiciosSection, StatsSection, ResultadosSection
  /eventos/EventHero, EventInfo, PremiacionTable
  /inscripcion/FormularioInscripcion, StepPersonalInfo, StepEventDetails, StepPayment, StepConfirmation, ProgressBar, SuccessScreen
  /ui/CountdownTimer, EventCard, StatCounter, Button
/lib
  /data.ts                     # Datos mock
  /schemas.ts                  # Validaciones Zod
  /utils.ts                    # Utilidades
```

## ✨ Características Principales

- **Formulario multi-paso** con validación en tiempo real y transiciones animadas
- **Countdown timers** funcionales en tiempo real
- **Diseño dark mode** con acentos naranja, estética deportiva/velocidad
- **Mobile-first** — optimizado para inscripciones desde celular
- **Animaciones Framer Motion** con staggered reveals y transiciones fluidas

---

**Propuesta de Rediseño Web** — Desarrollado por VzlaBike Dev Team
