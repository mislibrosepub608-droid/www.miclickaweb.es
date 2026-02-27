import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Aviso Legal</h1>
          <p className="text-muted-foreground mb-10">Última actualización: Febrero 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-bold mb-3 text-foreground">1. Datos del Titular</h2>
              <p className="text-muted-foreground leading-relaxed">
                En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa de los siguientes datos identificativos del titular del sitio web:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Nombre comercial:</strong> MICLICKAWEB</li>
                <li><strong className="text-foreground">Actividad:</strong> Diseño y desarrollo de páginas web profesionales</li>
                <li><strong className="text-foreground">Correo electrónico:</strong> <a href="mailto:miclickaweb@gmail.com" className="text-primary hover:underline">miclickaweb@gmail.com</a></li>
                <li><strong className="text-foreground">Sitio web:</strong> miclickaweb.manus.space</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-foreground">2. Objeto y Ámbito de Aplicación</h2>
              <p className="text-muted-foreground leading-relaxed">
                El presente Aviso Legal regula el acceso y uso del sitio web de MICLICKAWEB, así como los servicios ofrecidos a través del mismo. El acceso y uso de este sitio web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-foreground">3. Propiedad Intelectual e Industrial</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los contenidos del sitio web de MICLICKAWEB, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de MICLICKAWEB o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de este sitio web sin autorización previa y por escrito de MICLICKAWEB.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-foreground">4. Responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                MICLICKAWEB no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio web, incluyendo los producidos en los sistemas informáticos o los introducidos por virus informáticos.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                MICLICKAWEB no garantiza que el sitio web y el servidor estén libres de virus y no se hace responsable de los daños causados por el acceso al sitio web o por la imposibilidad de acceder al mismo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-foreground">5. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las relaciones entre MICLICKAWEB y los usuarios de sus servicios telemáticos, presentes en este sitio web, están sometidas a la legislación y jurisdicción españolas. Para la resolución de cualquier controversia derivada del uso de este sitio web, las partes se someten a los Juzgados y Tribunales competentes conforme a la legislación española vigente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-foreground">6. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier consulta relacionada con este Aviso Legal, puede contactarnos a través del correo electrónico: <a href="mailto:miclickaweb@gmail.com" className="text-primary hover:underline">miclickaweb@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
