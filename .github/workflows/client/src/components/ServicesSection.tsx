import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES_BG = "https://private-us-east-1.manuscdn.com/sessionFile/dDPSzMRyiD7cM1x1SNyLX5/sandbox/p3x6JWQBx6IIGEsuFCofSx-img-3_1771624543000_na1fn_c2VydmljZXMtc2VjdGlvbi1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZERQU3pNUnlpRDdjTTF4MVNOeUxYNS9zYW5kYm94L3AzeDZKV1FCeDZJSUdFc3VGQ29mU3gtaW1nLTNfMTc3MTYyNDU0MzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRjMlZqZEdsdmJpMWlady5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I-9cK9BQE1YEnT-d~bnSOFDR8D2Ad0O2fP3P2sW~y0F9RHEgH1S5Hzcmxy-7WCgVeBByaM-eHshuX4OxCp8OaKe47Y-BN9lOYbaCFg4dpDSu4x~108x9wtWlvl9Lf5~-55tWXCklaUTPIRQjz91527I7fD0fxpHBTjA7l~BBxqIUtQ0xKVC2g2HynLBOOWY8aJvxB1Q~hNh4I1XO5CaxUOE5krSdfx2H-olfj478D5~tPGpRAZgDkVy5GsFU58Ca0wnGprfkMPwBGdUjYreKQHiK0XKi1461E20GXCF41LB9ncSL79IXScebAGGcJSp~ZsZgUnbz-4rkgxbCKRHgig__";

const services = [
  {
    id: 1,
    title: "Landing Page",
    description: "Página única optimizada para convertir visitantes en clientes. Perfecta para promociones, lanzamientos o campañas específicas.",
    price: "150€ - 400€",
    time: "3-5 días",
    features: [
      "Diseño responsivo",
      "Optimizado para conversión",
      "Formulario de contacto",
      "SEO básico",
      "Hosting incluido",
    ],
    highlighted: false,
  },
  {
    id: 2,
    title: "Web Corporativa",
    description: "Sitio web profesional para tu negocio. Incluye múltiples secciones, portafolio y toda la información que necesitas.",
    price: "500€ - 1.200€",
    time: "7-10 días",
    features: [
      "Hasta 5-8 páginas",
      "Diseño personalizado",
      "Responsive y moderno",
      "SEO optimizado",
      "Panel de administración",
      "Hosting y dominio",
      "Soporte técnico",
    ],
    highlighted: true,
  },
  {
    id: 3,
    title: "Web Personalizada",
    description: "Solución completa a medida. Tiendas online, plataformas, o proyectos complejos con funcionalidades avanzadas.",
    price: "1.000€ - 3.000€+",
    time: "15-20 días",
    features: [
      "Diseño completamente personalizado",
      "Funcionalidades avanzadas",
      "E-commerce completo",
      "Integración de APIs",
      "Base de datos",
      "Estrategia SEO completa",
      "Mantenimiento incluido",
    ],
    highlighted: false,
  },
];

export default function ServicesSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="servicios"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('${SERVICES_BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones web adaptadas a tu presupuesto y necesidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                service.highlighted
                  ? "md:scale-105 border-2 border-primary shadow-lg"
                  : "border border-border"
              }`}
            >
              {/* Highlighted Badge */}
              {service.highlighted && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Más Popular
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Price and Time */}
                <div className="space-y-3 py-4 border-y border-border">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Precio</p>
                      <p className="text-lg font-bold text-foreground">
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Entrega</p>
                      <p className="text-lg font-bold text-foreground">
                        {service.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">
                    Incluye:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold py-6 rounded-lg transition-all duration-300 ${
                    service.highlighted
                  ? "bg-primary hover:opacity-90 text-white"
                  : "bg-accent hover:opacity-90 text-accent-foreground"
                  }`}
                  onClick={() => scrollToSection("contacto")}
                >
                  Solicitar Presupuesto
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-muted-foreground mb-6">
            Todos nuestros proyectos son personalizables. Contacta con nosotros para discutir tus necesidades específicas y recibir un presupuesto ajustado a tu proyecto.
          </p>
          <Button
            className="bg-primary hover:opacity-90 text-white font-semibold"
            onClick={() => scrollToSection("contacto")}
          >
            Cuéntanos tu Proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
