import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web?",
    a: "Nuestros precios varían según el tipo de proyecto: Landing Pages desde 150€, Webs Corporativas desde 500€ y E-commerce desde 1.000€. Cada proyecto es único, por lo que te ofrecemos un presupuesto personalizado sin compromiso. ¡Contáctanos!",
  },
  {
    q: "¿Cuánto tiempo tardan en entregar la web?",
    a: "Los tiempos de entrega dependen del proyecto: Landing Pages en 3-5 días, Webs Corporativas en 7-10 días y E-commerce en 15-20 días. Estos plazos comienzan desde la confirmación del proyecto y el pago inicial.",
  },
  {
    q: "¿Necesito tener los textos e imágenes listos?",
    a: "No es imprescindible, pero sí recomendable. Podemos ayudarte con la redacción de textos y la selección de imágenes profesionales. Si tienes tu propio contenido, mucho mejor, ya que la web reflejará mejor tu negocio.",
  },
  {
    q: "¿La web funcionará bien en móviles?",
    a: "Absolutamente. Todas nuestras webs son 100% responsive, lo que significa que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y ordenador. Hoy en día más del 60% del tráfico web proviene de móviles.",
  },
  {
    q: "¿Incluye posicionamiento SEO?",
    a: "Sí, todas nuestras webs incluyen optimización SEO básica: estructura correcta de títulos, meta descripciones, velocidad de carga optimizada y código limpio. Para campañas SEO avanzadas, ofrecemos servicios adicionales.",
  },
  {
    q: "¿Qué pasa si quiero hacer cambios después de la entrega?",
    a: "Durante el proceso de desarrollo incluimos revisiones hasta tu satisfacción. Tras la entrega final, ofrecemos soporte técnico y puedes solicitar cambios adicionales. Consulta nuestros planes de mantenimiento.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Trabajamos con un sistema sencillo: 50% al inicio del proyecto y 50% al finalizar y aprobar el resultado. Aceptamos transferencia bancaria. No pagas el resto hasta que estés 100% satisfecho.",
  },
  {
    q: "¿Puedo ver ejemplos de webs que habéis hecho?",
    a: "¡Claro! Puedes ver nuestro portafolio completo en esta misma web. Hemos trabajado con negocios muy variados: floristerías, gestorías, tiendas online, servicios especializados... cada web con su propia identidad.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Resolvemos las dudas más comunes sobre nuestros servicios de diseño web.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "border-primary/30 shadow-md" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className={`font-semibold text-sm md:text-base pr-4 ${openIndex === i ? "text-primary" : "text-foreground"}`}>
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-2">¿Tienes más preguntas?</h3>
            <p className="text-white/80 mb-5 text-sm">
              Nuestro equipo está disponible para resolver todas tus dudas.
            </p>
            <a
              href="mailto:miclickaweb@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm"
            >
              Escríbenos a miclickaweb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
