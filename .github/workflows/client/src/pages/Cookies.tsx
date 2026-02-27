import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Política de Cookies</h1>
          <p className="text-muted-foreground mb-10">Última actualización: Febrero 2026</p>

          <div className="space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-bold mb-3">1. ¿Qué son las Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Cookies que Utilizamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En MICLICKAWEB utilizamos los siguientes tipos de cookies:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-3 text-left font-semibold">Tipo</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Nombre</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Finalidad</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border px-4 py-3">Técnicas</td>
                      <td className="border border-border px-4 py-3">cookie_consent</td>
                      <td className="border border-border px-4 py-3">Recordar preferencias de cookies del usuario</td>
                      <td className="border border-border px-4 py-3">1 año</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border px-4 py-3">Sesión</td>
                      <td className="border border-border px-4 py-3">session_id</td>
                      <td className="border border-border px-4 py-3">Mantener la sesión activa durante la navegación</td>
                      <td className="border border-border px-4 py-3">Sesión</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">Analíticas</td>
                      <td className="border border-border px-4 py-3">_analytics</td>
                      <td className="border border-border px-4 py-3">Estadísticas de uso del sitio web (anónimas)</td>
                      <td className="border border-border px-4 py-3">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Cookies Técnicas (Necesarias)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas. Generalmente se establecen en respuesta a acciones realizadas por usted, como establecer sus preferencias de privacidad o rellenar formularios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Cookies Analíticas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Toda la información que recogen estas cookies es agregada y, por tanto, anónima. Si no permite estas cookies, no sabremos cuándo visitó nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Cómo Gestionar las Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, si rechaza las cookies, es posible que no pueda utilizar algunas partes de nuestro sitio web.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                A continuación encontrará información sobre cómo gestionar las cookies en los navegadores más comunes:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en: <a href="mailto:miclickaweb@gmail.com" className="text-primary hover:underline">miclickaweb@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
