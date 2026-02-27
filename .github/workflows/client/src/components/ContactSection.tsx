import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.project ||
      !formData.message
    ) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "¡Mensaje enviado! Nos pondremos en contacto pronto.",
        {
          description:
            "Gracias por tu interés. Revisaremos tu solicitud y te responderemos en breve.",
        }
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Contacta con Nosotros</h2>
          <p className="section-subtitle">
            Cuéntanos sobre tu proyecto y recibe un presupuesto personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-6">
                Estamos disponibles para responder tus preguntas y ayudarte con tu proyecto web.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:miclickaweb@gmail.com" className="text-primary hover:underline font-medium">
                    miclickaweb@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Teléfono / WhatsApp</h4>
                  <a href="tel:+34658373862" className="text-primary hover:underline font-medium">
                    +34 658 373 862
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Disponible en horario laboral
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Ubicación
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Disponible en línea
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Diseño profesional y moderno</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Entrega rápida y eficiente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Soporte técnico incluido</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Precios competitivos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-border p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 XXX XX XX XX"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          project: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="landing">Landing Page</option>
                      <option value="corporativa">Web Corporativa</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="personalizada">Proyecto Personalizado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tu idea, objetivos y cualquier detalle importante..."
                    className="w-full min-h-32"
                    required
                  />
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-900">
                    <span className="font-semibold">✓ Contacto Directo:</span> Escríbenos a <a href="mailto:miclickaweb@gmail.com" className="font-semibold hover:underline">miclickaweb@gmail.com</a> o llámanos al <a href="tel:+34658373862" className="font-semibold hover:underline">+34 658 373 862</a>. ¡Nos encantaría escuchar tu proyecto!
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:opacity-90 text-white font-semibold py-6 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Nos pondremos en contacto dentro de 24 horas hábiles.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
