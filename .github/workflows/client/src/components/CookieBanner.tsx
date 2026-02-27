import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-foreground text-white rounded-xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación. Puedes aceptar todas las cookies o configurar tus preferencias.{" "}
            <Link href="/cookies" className="text-accent hover:underline font-medium">
              Más información
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={reject}
            className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent text-xs"
          >
            Solo necesarias
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="bg-accent hover:opacity-90 text-accent-foreground font-semibold text-xs"
          >
            Aceptar todas
          </Button>
          <button onClick={reject} className="text-gray-400 hover:text-white transition-colors ml-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
