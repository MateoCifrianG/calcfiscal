import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre CalcFiscal — Calculadoras Fiscales para España",
  description: "CalcFiscal es un proyecto de herramientas fiscales y laborales gratuitas para trabajadores y autónomos en España. Conoce nuestro objetivo.",
}

export default function SobreNosotrosPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Sobre CalcFiscal</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          CalcFiscal nació de una frustración simple: calcular el sueldo neto, la cuota de autónomos o un
          finiquito debería ser fácil. En España, no lo es.
        </p>

        <h2>¿Qué es CalcFiscal?</h2>
        <p>
          CalcFiscal es un conjunto de <strong>calculadoras fiscales y laborales gratuitas</strong> para
          trabajadores, autónomos y empresas en España. Todas las herramientas funcionan directamente en
          tu navegador — sin registrarte, sin dar tu email, sin que tus datos salgan de tu dispositivo.
        </p>

        <h2>¿Por qué existe?</h2>
        <p>
          La fiscalidad española es compleja: tramos de IRPF, cuotas de autónomos por rendimientos,
          cálculos de finiquito con indemnizaciones, pagas extras proporcionales... Muchas personas acaban
          tomando decisiones financieras sin entender bien su situación real.
        </p>
        <p>
          Queremos que cualquier persona pueda, en menos de 2 minutos, entender cuánto va a cobrar
          realmente, cuánto va a pagar a Hacienda y cuáles son sus derechos laborales.
        </p>

        <h2>¿Son fiables los cálculos?</h2>
        <p>
          Todas las calculadoras están basadas en la normativa vigente en España para 2026 y se actualizan
          cuando hay cambios legislativos relevantes. Los valores fiscales (tramos IRPF, porcentajes SS,
          tramos de autónomos) se revisan periódicamente.
        </p>
        <p>
          Dicho esto, los cálculos son <strong>orientativos</strong>. Tu situación real puede variar según
          tu comunidad autónoma, complementos salariales, deducciones específicas o convenio colectivo.
          Para decisiones importantes, consulta siempre con un asesor fiscal.
        </p>

        <h2>Herramientas disponibles</h2>
        <ul>
          <li><Link href="/herramientas/calculadora-sueldo-neto">Calculadora de sueldo neto</Link></li>
          <li><Link href="/herramientas/calculadora-iva">Calculadora de IVA</Link></li>
          <li><Link href="/herramientas/calculadora-cuota-autonomos">Calculadora de cuota de autónomos</Link></li>
          <li><Link href="/herramientas/calculadora-irpf-autonomos">Calculadora de IRPF para autónomos</Link></li>
          <li><Link href="/herramientas/calculadora-finiquito">Calculadora de finiquito</Link></li>
        </ul>

        <h2>Contacto</h2>
        <p>
          ¿Tienes una sugerencia, has encontrado un error en algún cálculo o quieres proponer una nueva
          herramienta?{" "}
          <Link href="/contacto">Escríbenos</Link>. Leemos todos los mensajes.
        </p>
      </div>
    </main>
  )
}
