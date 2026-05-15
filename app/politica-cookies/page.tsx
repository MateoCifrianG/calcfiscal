import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies — CalcFiscal",
  description: "Política de cookies de CalcFiscal. Qué cookies utilizamos, para qué y cómo puedes gestionarlas.",
  robots: { index: false },
}

export default function PoliticaCookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Cookies</h1>
      <p className="text-gray-500 text-sm mb-8">Última actualización: mayo 2026</p>

      <div className="prose max-w-none">
        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un
          sitio web. Permiten al sitio reconocerte en visitas posteriores y recordar tus preferencias.
        </p>

        <h2>Cookies que utilizamos</h2>

        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Tipo</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga, _ga_*</td>
              <td>Analítica</td>
              <td>Google Analytics 4 — mide el uso del sitio de forma anónima</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_gcl_au</td>
              <td>Publicidad</td>
              <td>Google AdSense — mejora la relevancia de los anuncios</td>
              <td>90 días</td>
            </tr>
            <tr>
              <td>cookieconsent</td>
              <td>Funcional</td>
              <td>Guarda tu preferencia sobre el consentimiento de cookies</td>
              <td>1 año</td>
            </tr>
          </tbody>
        </table>

        <h2>Cookies de terceros</h2>
        <p>
          Google Analytics y Google AdSense pueden establecer sus propias cookies. Consulta las políticas
          de privacidad de Google para más información:
        </p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Política de privacidad de Google
            </a>
          </li>
        </ul>

        <h2>Cómo gestionar las cookies</h2>
        <p>
          Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se
          envíe una cookie. Ten en cuenta que algunas funciones del sitio pueden dejar de funcionar si
          desactivas las cookies.
        </p>
        <p>Instrucciones para los navegadores más comunes:</p>
        <ul>
          <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
          <li>Firefox: Opciones → Privacidad y seguridad → Cookies</li>
          <li>Safari: Preferencias → Privacidad → Cookies</li>
          <li>Edge: Configuración → Privacidad, búsqueda y servicios → Cookies</li>
        </ul>

        <h2>Opt-out de Google Analytics</h2>
        <p>
          Puedes desactivar el seguimiento de Google Analytics instalando el{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            complemento de inhabilitación para navegadores
          </a>
          .
        </p>
      </div>
    </main>
  )
}
