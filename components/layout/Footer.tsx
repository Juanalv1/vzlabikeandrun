import Link from 'next/link'
import { Timer, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react'

// Footer con logo, links, contacto y redes sociales
export default function Footer() {
  return (
    <footer className="bg-gris-1 border-t border-gris-3" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-naranja rounded-lg flex items-center justify-center">
                <Timer className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-barlow font-black text-white text-lg">
                  VzlaBike<span className="text-naranja">®</span>
                </span>
                <span className="block text-[10px] text-gris-texto tracking-widest uppercase">and Run</span>
              </div>
            </div>
            <p className="text-gris-texto text-sm leading-relaxed">
              La organización de eventos deportivos más reconocida de Venezuela.
              Cronometraje profesional y experiencias atléticas desde hace más de 25 años.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gris-2 hover:bg-naranja rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-gris-texto group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-barlow font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {['Inicio', 'Nosotros', 'Servicios', 'Eventos', 'Resultados'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gris-texto hover:text-naranja text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-barlow font-bold text-white uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {['Cronometraje Deportivo', 'Organización de Eventos', 'Plataforma VBRWorks®', 'Registro en Línea'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gris-texto hover:text-naranja text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-barlow font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:venezuelabikeandrun@gmail.com" className="flex items-start gap-3 text-gris-texto hover:text-naranja text-sm transition-colors group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-naranja" />
                venezuelabikeandrun@gmail.com
              </a>
              <a href="https://wa.me/584120162685" className="flex items-center gap-3 text-gris-texto hover:text-naranja text-sm transition-colors group">
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-naranja" />
                +58-412-016-26-85
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gris-3 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gris-texto text-xs">
            © {new Date().getFullYear()} VzlaBike and Run®. Todos los derechos reservados.
          </p>
          <p className="text-gris-texto text-xs">
            Hecho con ❤ en Venezuela
          </p>
        </div>
      </div>
    </footer>
  )
}
