import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-10">Última actualización: Febrero 2026</p>

          <div className="space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-bold mb-3">1. Responsable del Tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que el responsable del tratamiento de sus datos personales es:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Nombre comercial:</strong> MICLICKAWEB</li>
                <li><strong className="text-foreground">Correo electrónico:</strong> <a href="mailto:miclickaweb@gmail.com" className="text-primary hover:underline">miclickaweb@gmail.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Datos que Recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                A través del formulario de contacto de nuestro sitio web, podemos recopilar los siguientes datos personales:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono (opcional)</li>
                <li>Información sobre el proyecto o consulta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Finalidad del Tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los datos personales que nos facilite serán tratados con las siguientes finalidades:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Gestionar y responder a las consultas y solicitudes de presupuesto enviadas a través del formulario de contacto.</li>
                <li>Mantener la relación comercial y prestar los servicios contratados.</li>
                <li>Enviar información sobre nuestros servicios, siempre que haya dado su consentimiento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Base Legal del Tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                La base legal para el tratamiento de sus datos es el consentimiento del interesado, otorgado al rellenar y enviar el formulario de contacto, así como el interés legítimo de MICLICKAWEB para gestionar las consultas recibidas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Conservación de los Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los datos personales proporcionados se conservarán durante el tiempo necesario para atender su consulta y, en su caso, durante la vigencia de la relación comercial. Una vez finalizada, los datos serán bloqueados y posteriormente eliminados conforme a los plazos legales aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Derechos del Interesado</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puede ejercer los siguientes derechos en relación con sus datos personales:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li><strong className="text-foreground">Acceso:</strong> Conocer qué datos personales tratamos sobre usted.</li>
                <li><strong className="text-foreground">Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                <li><strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de sus datos.</li>
                <li><strong className="text-foreground">Limitación:</strong> Solicitar la limitación del tratamiento de sus datos.</li>
                <li><strong className="text-foreground">Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
                <li><strong className="text-foreground">Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactarnos en: <a href="mailto:miclickaweb@gmail.com" className="text-primary hover:underline">miclickaweb@gmail.com</a>. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Seguridad</h2>
              <p className="text-muted-foreground leading-relaxed">
                MICLICKAWEB ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales que trata, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
