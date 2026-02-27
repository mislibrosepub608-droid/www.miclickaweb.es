import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consulta Gratuita",
    description: "Nos cuentas tu idea, tu negocio y lo que necesitas. Analizamos tu proyecto y te ofrecemos un presupuesto personalizado sin compromiso.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-200",
  },
  {
    icon: Palette,
    number: "02",
    title: "Diseño Personalizado",
    description: "Creamos el diseño único de tu web adaptado a tu marca e identidad. Tú apruebas el diseño antes de que empecemos a desarrollarlo.",
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-200",
  },
  {
    icon: Code,
    number: "03",
    title: "Desarrollo y Revisiones",
    description: "Desarrollamos tu web con las últimas tecnologías. Puedes solicitar cambios y revisiones hasta que quedes completamente satisfecho.",
    color: "bg-green-50 text-green-600",
    border: "border-green-200",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega y Lanzamiento",
    description: "Tu web lista para el mundo. Te entregamos todos los accesos y te explicamos cómo gestionarla. ¡A por los clientes!",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-200",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un proceso claro, transparente y sin sorpresas. Así es como convertimos tu idea en una web profesional.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 via-green-200 to-purple-200 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className={`w-20 h-20 rounded-2xl ${step.color} border-2 ${step.border} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-9 h-9" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                  Paso {step.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
