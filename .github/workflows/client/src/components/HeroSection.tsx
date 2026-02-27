import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/dDPSzMRyiD7cM1x1SNyLX5/sandbox/p3x6JWQBx6IIGEsuFCofSx-img-1_1771624545000_na1fn_aGVyby1taWNsaWNrYXdlYg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZERQU3pNUnlpRDdjTTF4MVNOeUxYNS9zYW5kYm94L3AzeDZKV1FCeDZJSUdFc3VGQ29mU3gtaW1nLTFfMTc3MTYyNDU0NTAwMF9uYTFmbl9hR1Z5YnkxdGFXTnNhV05yWVhkbFlnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OTo1A66l2kCD1dFwL3M9RS1q2trxTgd84~KcBW5X6rZqD8GpCAiPaXFIHU5ovV9xy~c-ZX61zJUfzJIhubX8Hke8GlS4~aUSTt7hqqaKSNhb-29A59DwQKvUYafHwypeEHOz-woSmp2kwqixK-h~Ur8VzSP0tdLCOv3q4-TyB5ABCZPwKIrZDwS-xVBUul5hBO2tTKTQZ6hkrwTHZy7r2abSWI6sx~MpWFyFjkgVTqPAhQJ5zp2rZ0RgVTda8blfmv-vh459Uq5JhCfjg36srsmQJcpe4d9X2K2QS8ueyztx2I0fhXb0pjPQuOcrfQujWXq-l-8Un6mV760A5QKgEw__";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Diseño Web que <span className="text-primary">Genera Confianza</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Creamos páginas web profesionales, modernas y funcionales que transforman visitantes en clientes. Cada proyecto es único y está diseñado para tu negocio.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:opacity-90 text-white font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300 flex items-center gap-2 group"
                onClick={() => scrollToSection("portafolio")}
              >
                Ver Portafolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300"
                onClick={() => scrollToSection("contacto")}
              >
                Solicitar Presupuesto
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Proyectos Exitosos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Rápido</p>
                <p className="text-sm text-muted-foreground">Entrega Ágil</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-3xl opacity-10 blur-3xl" />
              <img
                src={HERO_IMAGE}
                alt="Diseño Web Profesional"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-muted-foreground">Desplázate para explorar</p>
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
