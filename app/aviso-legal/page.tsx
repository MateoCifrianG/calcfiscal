import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal — CalcFiscal",
  description: "Aviso legal de CalcFiscal. Información sobre el titular del sitio web, condiciones de uso y limitación de responsabilidad.",
  robots: { index: false },
}

export default function AvisoLegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Aviso Legal</h1>
      <p className="text-gray-500 text-sm mb-8">Última actualización: mayo 2026</p>

      <div className="prose max-w-none">
        <h2>1. Titular del sitio web</h2>
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
          y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web <strong>calcfiscal.es</strong> es
          operado como proyecto de contenido informativo fiscal y laboral.
        </p>
        <p>
          Para cualquier consulta puedes contactar a través de la{" "}
          <a href="/contacto">página de contacto</a>.
        </p>

        <h2>2. Objeto y ámbito de aplicación</h2>
        <p>
          El presente Aviso Legal regula el acceso y uso del sitio web CalcFiscal, que ofrece calculadoras
          orientativas y guías informativas sobre fiscalidad y legislación laboral en España.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web es gratuito. El usuario se compromete a utilizar los contenidos
          y servicios de forma lícita, sin vulnerar derechos de terceros ni infringir la normativa vigente.
        </p>
        <p>
          Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa, salvo
          para uso personal y no comercial.
        </p>

        <h2>4. Limitación de responsabilidad</h2>
        <p>
          Las calculadoras y guías de CalcFiscal tienen carácter <strong>meramente orientativo</strong>.
          No constituyen asesoramiento fiscal, laboral ni jurídico. CalcFiscal no se hace responsable de
          las decisiones tomadas basándose en la información de este sitio.
        </p>
        <p>
          Para casos concretos, consulta siempre con un asesor fiscal o laboral certificado.
        </p>

        <h2>5. Propiedad intelectual</h2>
        <p>
          Los textos, diseños, código y demás elementos del sitio web son propiedad de CalcFiscal o están
          licenciados para su uso. Queda prohibida su explotación comercial sin autorización.
        </p>

        <h2>6. Legislación aplicable</h2>
        <p>
          El presente Aviso Legal se rige por la legislación española. Para cualquier controversia, las
          partes se someten a la jurisdicción de los Juzgados y Tribunales competentes según la normativa
          aplicable.
        </p>
      </div>
    </main>
  )
}
