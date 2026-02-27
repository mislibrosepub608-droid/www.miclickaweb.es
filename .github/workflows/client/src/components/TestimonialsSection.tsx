import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Propietaria de La Florista",
    text: "MICLICKAWEB transformó completamente mi negocio online. La web quedó preciosa, moderna y mis clientes la adoran. En menos de una semana ya tenía pedidos online. ¡100% recomendable!",
    rating: 5,
    avatar: "MG",
    color: "bg-pink-500",
  },
  {
    name: "Carlos Rodríguez",
    role: "Gestor en TramiteClaro",
    text: "Necesitaba una web profesional para mi gestoría y MICLICKAWEB lo consiguió en tiempo récord. El diseño transmite exactamente la confianza que mis clientes necesitan. Muy satisfecho.",
    rating: 5,
    avatar: "CR",
    color: "bg-blue-600",
  },
  {
    name: "Ana Martínez",
    role: "Emprendedora de Entre Hilos",
    text: "Tenía miedo de dar el salto al mundo digital, pero el equipo de MICLICKAWEB me guió en todo momento. Mi tienda online superó mis expectativas. ¡Gracias por vuestra paciencia y profesionalidad!",
    rating: 5,
    avatar: "AM",
    color: "bg-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Aquí lo que nos cuentan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-border rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-sm">5.0 de 5</span>
            <span className="text-muted-foreground text-sm">· Basado en proyectos reales</span>
          </div>
        </div>
      </div>
    </section>
  );
}
