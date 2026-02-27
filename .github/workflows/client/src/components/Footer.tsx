import { Heart, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/dDPSzMRyiD7cM1x1SNyLX5/sandbox/GFjRQyaGoFRJQsrSYKuCxl-img-1_1771664689000_na1fn_bWljbGlja2F3ZWItbG9nbw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZERQU3pNUnlpRDdjTTF4MVNOeUxYNS9zYW5kYm94L0dGalJReWFHb0ZSSlFzclNZS3VDeGwtaW1nLTFfMTc3MTY2NDY4OTAwMF9uYTFmbl9iV2xqYkdsamEyRjNaV0l0Ykc5bmJ3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GwsX2PFqszje43lX7z1e4ubhoC922SnXMpYGdGpY8vx-FR-DKh6TXLSK8pNGj2e1Nt2om8uOCtF4SoUIbX2GS2R2NXJ7-wwfBjO6LXN18VKES4ox2wIzLzVtOTta4DfpCF-MX1Dj25YYtjLkL8GbImaNR00ric5xzp0vPNTeWt0iS1q4pRTOFRqZ8aIbeW6bPP8e1hQjnUqlfIDmnueEg6wNy2eU1yEqfH10Oes47IxjomrElH1xKj1qF7XQBewjiOB6wEi8BNE1Szakiu2zVly5CY0Lc~U1IbjfmsyMZOkGRQZzSO1KCzvMRegoClvPdqdmcD4TrzyzKrmP1TMTPA__"
                alt="MICLICKAWEB"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Diseño web profesional que genera confianza y resultados para tu negocio.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="mailto:miclickaweb@gmail.com" className="text-accent hover:underline text-sm">
                miclickaweb@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+34658373862" className="text-accent hover:underline text-sm">
                +34 658 373 862
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-accent transition-colors">Portafolio</a></li>
              <li><a href="#testimonios" className="hover:text-accent transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Landing Pages</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Web Corporativa</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">E-commerce</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Proyecto Personalizado</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/aviso-legal" className="hover:text-accent transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-accent transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-accent transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} MICLICKAWEB. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para tu negocio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
