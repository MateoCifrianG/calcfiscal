import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad — CalcFiscal",
  description: "Política de privacidad de CalcFiscal. Cómo tratamos tus datos, qué cookies usamos y cuáles son tus derechos.",
  robots: { index: false },
}

export default function PoliticaPrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
      <p className="text-gray-500 text-sm mb-8">Última actualización: mayo 2026</p>

      <div className="prose max-w-none">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales recogidos a través de este sitio web es
          el titular de <strong>calcfiscal.es</strong>. Puedes contactar a través de la{" "}
          <a href="/contacto">página de contacto</a>.
        </p>

        <h2>2. Datos que recogemos</h2>
        <p>CalcFiscal no recoge datos personales identificativos de forma activa. Podemos recibir:</p>
        <ul>
          <li>
            <strong>Datos de navegación</strong> a través de Google Analytics (páginas visitadas, tiempo en
            sitio, dispositivo, país). Estos datos son anónimos y agregados.
          </li>
          <li>
            <strong>Datos de contacto</strong> (nombre y email) únicamente si nos escribes voluntariamente
            a través del formulario de contacto.
          </li>
        </ul>
        <p>
          Las calculadoras funcionan íntegramente en tu navegador. Los datos que introduces (salarios,
          fechas, importes) <strong>no se envían a ningún servidor</strong>.
        </p>

        <h2>3. Finalidad del tratamiento</h2>
        <ul>
          <li>Analítica web para mejorar el servicio (Google Analytics 4).</li>
          <li>Responder consultas enviadas por formulario de contacto.</li>
          <li>Mostrar publicidad relevante a través de Google AdSense.</li>
        </ul>

        <h2>4. Base legal</h2>
        <p>
          El tratamiento se basa en el interés legítimo (analítica anónima) y en el consentimiento del
          usuario (cookies de publicidad y analítica detallada), conforme al RGPD y la LOPDGDD.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Utilizamos cookies propias y de terceros. Consulta nuestra{" "}
          <a href="/politica-cookies">Política de Cookies</a> para más detalles.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento, portabilidad y oposición
          al tratamiento de tus datos. Para ejercerlos, contacta con nosotros a través de la{" "}
          <a href="/contacto">página de contacto</a>.
        </p>
        <p>
          También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)
          en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
        </p>

        <h2>7. Transferencias internacionales</h2>
        <p>
          Google Analytics y Google AdSense pueden transferir datos a servidores fuera del EEE bajo las
          salvaguardas previstas en el RGPD (cláusulas contractuales tipo).
        </p>
      </div>
    </main>
  )
}
