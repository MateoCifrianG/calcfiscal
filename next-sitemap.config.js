/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://calcfiscal.es",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/aviso-legal",
    "/politica-privacidad",
    "/politica-cookies",
  ],
  additionalPaths: async (config) => [
    { loc: "/herramientas/calculadora-sueldo-neto", priority: 1.0, changefreq: "monthly" },
    { loc: "/herramientas/calculadora-iva", priority: 0.9, changefreq: "monthly" },
    { loc: "/herramientas/calculadora-cuota-autonomos", priority: 0.9, changefreq: "monthly" },
    { loc: "/herramientas/calculadora-irpf-autonomos", priority: 0.9, changefreq: "monthly" },
    { loc: "/herramientas/calculadora-finiquito", priority: 0.9, changefreq: "monthly" },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/aviso-legal", "/politica-privacidad", "/politica-cookies"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://calcfiscal.es"}/sitemap.xml`,
    ],
  },
}
