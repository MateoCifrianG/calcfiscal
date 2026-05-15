import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto — CalcFiscal",
  description: "Contacta con el equipo de CalcFiscal. Sugerencias, errores en cálculos o nuevas herramientas que quieras ver.",
}

export default function ContactoPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacto</h1>
      <p className="text-gray-600 mb-8">
        ¿Has encontrado un error? ¿Tienes una sugerencia? ¿Quieres que añadamos una calculadora? Escríbenos.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-amber-800 text-sm">
          <strong>Nota:</strong> No ofrecemos asesoría fiscal ni laboral personalizada. Para consultas
          específicas sobre tu situación, contacta con un asesor o gestor certificado.
        </p>
      </div>

      <form
        action="https://formsubmit.co/contacto@calcfiscal.es"
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="Contacto CalcFiscal" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://calcfiscal.es/contacto?enviado=1" />

        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
            Asunto
          </label>
          <select
            id="asunto"
            name="asunto"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="error-calculo">Error en un cálculo</option>
            <option value="sugerencia">Sugerencia o mejora</option>
            <option value="nueva-herramienta">Propuesta de nueva herramienta</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Describe tu consulta o sugerencia..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
        >
          Enviar mensaje
        </button>
      </form>
    </main>
  )
}
