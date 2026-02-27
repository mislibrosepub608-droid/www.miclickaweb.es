import { Card } from "@/components/ui/card";
import { Globe, ShoppingBag, Briefcase, Star, Scissors, FileText } from "lucide-react";

const PORTFOLIO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/dDPSzMRyiD7cM1x1SNyLX5/sandbox/p3x6JWQBx6IIGEsuFCofSx-img-2_1771624540000_na1fn_cG9ydGZvbGlvLXNlY3Rpb24tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZERQU3pNUnlpRDdjTTF4MVNOeUxYNS9zYW5kYm94L3AzeDZKV1FCeDZJSUdFc3VGQ29mU3gtaW1nLTJfMTc3MTYyNDU0MDAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWE5sWTNScGIyNHRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=F9i2xO27yL-L0~NbHVVWPEnIUElxsnWeyLQww1UmhQCohqpmezy0KtZHJUhfYlTQ7qnjzUQVlTvMC-VNQ2v-iAs4LCSYnKg1tlYYo98~YosYauCtSK7EDIdTq-n6vU7d9XlvPw0BplLq415yY~0z7VigGqAWTgEQ9Zd-vVoBNcGtwYVP-kHSRQGrLfKrRCUCHrWAuav7RU~bw6BriEFIA3OOOeY55ZIol3OmnxuuUW6Lby4z1Sy8p7XaWpr1sObRyXZ3PItsj16HqB6m~qs1rQvXYeCs8rK96fq4iCSiqDIusYfTLWJgrt5VyubyUS~wQQ8w~0ekrQ73HTAsFIB6UA__";

const portfolioProjects = [
  {
    id: 1,
    title: "CaminoWeb",
    category: "Servicios Profesionales",
    description: "Plataforma web para servicios profesionales con diseño limpio, navegación intuitiva y estructura orientada a captar clientes.",
    color: "from-blue-500 to-blue-700",
    icon: Briefcase,
    tag: "Web Corporativa",
  },
  {
    id: 2,
    title: "TramiteClaro",
    category: "Gestión Administrativa",
    description: "Solución web para gestión de trámites con interfaz clara, funcional y accesible para todo tipo de usuarios.",
    color: "from-emerald-500 to-emerald-700",
    icon: FileText,
    tag: "Web Corporativa",
  },
  {
    id: 3,
    title: "La Florista",
    category: "Negocio Local",
    description: "E-commerce elegante para negocio de flores con diseño estético, catálogo de productos y experiencia de compra optimizada.",
    color: "from-pink-500 to-rose-600",
    icon: ShoppingBag,
    tag: "E-commerce",
  },
  {
    id: 4,
    title: "Reina Tarot",
    category: "Servicios Especializados",
    description: "Web con identidad visual muy marcada para servicios de tarot y consultoría. Diseño místico y elegante que transmite confianza.",
    color: "from-violet-500 to-purple-700",
    icon: Star,
    tag: "Landing Page",
  },
  {
    id: 5,
    title: "Entre Hilos",
    category: "E-commerce",
    description: "Tienda online sofisticada para artesanía textil con diseño cálido, catálogo visual y proceso de compra sencillo.",
    color: "from-amber-500 to-orange-600",
    icon: Scissors,
    tag: "E-commerce",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portafolio"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('${PORTFOLIO_BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/97" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyectos Realizados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Webs diseñadas con éxito para negocios muy distintos. Cada proyecto, una identidad única.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className="group overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                {/* Visual Header */}
                <div className={`h-44 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-4 border-white/40" />
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-4 border-white/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/30" />
                  </div>
                  {/* Icon + Title */}
                  <div className="relative z-10 text-center text-white">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xl font-bold tracking-wide">{project.title}</p>
                  </div>
                  {/* Tag */}
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    {project.tag}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {/* Realizado badge */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs text-green-600 font-semibold">Proyecto completado</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Quieres que tu negocio sea el próximo?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada proyecto es único y personalizado según tus necesidades. Estamos listos para transformar tu idea en una web profesional que genere resultados.
          </p>
          <a href="#contacto">
            <button className="bg-accent hover:opacity-90 text-accent-foreground font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Solicitar Presupuesto
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
