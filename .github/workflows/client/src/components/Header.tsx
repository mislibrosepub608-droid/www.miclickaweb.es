import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-2">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 flex-1">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/dDPSzMRyiD7cM1x1SNyLX5/sandbox/GFjRQyaGoFRJQsrSYKuCxl-img-1_1771664689000_na1fn_bWljbGlja2F3ZWItbG9nbw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZERQU3pNUnlpRDdjTTF4MVNOeUxYNS9zYW5kYm94L0dGalJReWFHb0ZSSlFzclNZS3VDeGwtaW1nLTFfMTc3MTY2NDY4OTAwMF9uYTFmbl9iV2xqYkdsamEyRjNaV0l0Ykc5bmJ3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GwsX2PFqszje43lX7z1e4ubhoC922SnXMpYGdGpY8vx-FR-DKh6TXLSK8pNGj2e1Nt2om8uOCtF4SoUIbX2GS2R2NXJ7-wwfBjO6LXN18VKES4ox2wIzLzVtOTta4DfpCF-MX1Dj25YYtjLkL8GbImaNR00ric5xzp0vPNTeWt0iS1q4pRTOFRqZ8aIbeW6bPP8e1hQjnUqlfIDmnueEg6wNy2eU1yEqfH10Oes47IxjomrElH1xKj1qF7XQBewjiOB6wEi8BNE1Szakiu2zVly5CY0Lc~U1IbjfmsyMZOkGRQZzSO1KCzvMRegoClvPdqdmcD4TrzyzKrmP1TMTPA__" 
            alt="MICLICKAWEB Logo" 
            className="h-16 w-auto"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-2xl font-bold text-foreground leading-tight">MICLICKAWEB</span>
            <span className="text-xs text-primary font-semibold">Diseño Web Profesional</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("portafolio")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Portafolio
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block flex-1 text-right">
          <Button
            className="bg-accent hover:opacity-90 text-accent-foreground font-semibold"
            onClick={() => scrollToSection("contacto")}
          >
            Solicitar Presupuesto
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2"
            >
              Contacto
            </button>
            <Button
              className="bg-accent hover:opacity-90 text-accent-foreground font-semibold w-full mt-2"
              onClick={() => scrollToSection("contacto")}
            >
              Solicitar Presupuesto
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
