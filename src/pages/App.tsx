import { useState } from "react";

const STRINGS = {
  es: {
    navServicios: "Servicios",
    navProyectos: "Proyectos",
    navContacto: "Contacto",

    heroEyebrow: "Fábrica de software · Datos · IA · Automatización",
    heroTitle1: "Construimos plataformas, agentes y ",
    heroTitleHighlight: "sistemas inteligentes",
    heroTitle2: " para tu negocio.",
    heroSubtitle:
      "Krodev es una fábrica de software y agentes inteligentes. Diseñamos y construimos plataformas SaaS, integraciones y automatizaciones a la medida. Creadores de KroBi, plataforma de datos e IA para empresas con facturación electrónica y sistemas transaccionales.",

    heroPrimaryBtn: "Hablar con Krodev",
    heroSecondaryBtn: "Ver KroBi",

    heroCardProductFeatured: "Producto destacado",
    heroCardProductName: "KroBi",
    heroCardProductText:
      "Plataforma SaaS de datos, automatización e IA sobre facturación electrónica, ventas e inventarios. Diseñada para organizaciones que quieren decidir con información en tiempo real, sin vivir en Excel.",
    heroCardQuestion: "“¿Cómo se movieron los ingresos este mes por sede o canal?”",
    heroCardAnswer:
      "KroBi responde con dashboards, filtros avanzados y un agente IA entrenado sobre los datos reales de tu negocio.",

    serviciosTitle: "Servicios",
    serviciosDevTitle: "Fábrica de software",
    serviciosDevText:
      "Diseño y desarrollo de plataformas web y APIs usando React, React Native, .NET y Node. Arquitecturas limpias, escalables y listas para nube (Azure, AWS u on-premise).",

    serviciosDataTitle: "Datos & analítica",
    serviciosDataText:
      "Modelado de datos, vistas analíticas, construcción de data stores y dashboards. Unificamos fuentes como ERP, CRM, facturación electrónica, e-commerce y bases internas para que tengas una única versión de la verdad.",

    serviciosIATitle: "Automatización & Agentes IA",
    serviciosIAText:
      "Diseño de flujos automáticos, orquestación con n8n y construcción de agentes IA que consultan directamente tus sistemas (APIs, bases de datos, archivos). Copilotos para procesos internos, soporte, análisis y operación.",

    proyectosTitle: "Proyectos",
    proyectosKroBiTitle: "KroBi",
    proyectosKroBiText:
      "Plataforma SaaS de datos, automatización e IA para empresas con facturación electrónica. Consolida ventas, inventarios y otras fuentes en dashboards y un agente inteligente.",
    proyectosKroBiLink: "Ver proyecto →",

    proyectosInerfitTitle: "Inerfit",
    proyectosInerfitText:
      "Landing page moderna y soporte digital para un gimnasio especializado. Enfoque en velocidad, experiencia de usuario y conversión de leads a clientes.",

    proyectosAguaMariaTitle: "Agua María",
    proyectosAguaMariaText:
      "Implementación de KroBi: unificación de ventas por tienda y canal, homologación de productos, dashboards operativos y automatización de reportes para la dirección.",

    contactoTitle: "Contacto",
    contactoText:
      "¿Quieres construir una plataforma SaaS, un agente IA sobre tus datos o automatizar procesos críticos de tu negocio? Hablemos y definimos juntos el alcance técnico y funcional.",

    footerRights: "Todos los derechos reservados.",
    footerDevelopedBy: "Desarrollado por Krodev",
  },
  en: {
    navServicios: "Services",
    navProyectos: "Projects",
    navContacto: "Contact",

    heroEyebrow: "Software factory · Data · AI · Automation",
    heroTitle1: "We build platforms, agents and ",
    heroTitleHighlight: "intelligent systems",
    heroTitle2: " for your business.",
    heroSubtitle:
      "Krodev is a software and AI agents factory. We design and build custom SaaS platforms, integrations and automations. Creators of KroBi, a data & AI platform for companies with e-invoicing and transactional systems.",

    heroPrimaryBtn: "Talk with Krodev",
    heroSecondaryBtn: "See KroBi",

    heroCardProductFeatured: "Featured product",
    heroCardProductName: "KroBi",
    heroCardProductText:
      "SaaS platform for data, automation and AI over e-invoicing, sales and inventory. Designed for organizations that want to make decisions in real time, without living inside Excel.",
    heroCardQuestion: "“How did our revenue move this month by location or channel?”",
    heroCardAnswer:
      "KroBi answers with dashboards, advanced filters and an AI agent trained on your real business data.",

    serviciosTitle: "Services",
    serviciosDevTitle: "Software factory",
    serviciosDevText:
      "Design and development of web platforms and APIs using React, React Native, .NET and Node. Clean, scalable architectures, ready for cloud environments (Azure, AWS or on-premise).",

    serviciosDataTitle: "Data & analytics",
    serviciosDataText:
      "Data modeling, analytical views, data stores and dashboards. We unify ERP, CRM, e-invoicing, e-commerce and internal sources so you can work with a single source of truth.",

    serviciosIATitle: "Automation & AI agents",
    serviciosIAText:
      "Design of automated flows, orchestration with n8n and AI agents that talk directly to your systems (APIs, databases, files). Copilots for internal processes, support, analysis and operations.",

    proyectosTitle: "Projects",
    proyectosKroBiTitle: "KroBi",
    proyectosKroBiText:
      "SaaS platform for data, automation and AI for companies with e-invoicing. It consolidates sales, inventory and other sources into dashboards and an intelligent agent.",
    proyectosKroBiLink: "See project →",

    proyectosInerfitTitle: "Inerfit",
    proyectosInerfitText:
      "Modern landing page and digital support for a specialized gym. Focused on speed, user experience and converting visitors into members.",

    proyectosAguaMariaTitle: "Agua María",
    proyectosAguaMariaText:
      "KroBi implementation: unified sales by store and channel, product harmonization, operational dashboards and automated reporting for management.",

    contactoTitle: "Contact",
    contactoText:
      "Do you want to build a SaaS platform, an AI agent over your data or automate critical processes in your company? Let's talk and define the technical and functional scope together.",

    footerRights: "All rights reserved.",
    footerDevelopedBy: "Developed by Krodev",
  },
} as const;

type Lang = keyof typeof STRINGS;

function App() {
  const [lang, setLang] = useState<Lang>("es");
  const t = STRINGS[lang];

  const handleChangeLang = (newLang: Lang) => {
    setLang(newLang);
    // si quieres persistir:
    // localStorage.setItem("krodev-lang", newLang);
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <img
              src="/logo-krodev.png"
              alt="Krodev Logo"
              className="brand-logo"
            />
            <span className="brand-name">Krodev</span>
          </div>

          {/* derecha: nav + selector idioma */}
          <div className="header-right">
            <nav className="nav">
              <a href="#servicios" className="nav-link">
                {t.navServicios}
              </a>
              <a href="#proyectos" className="nav-link">
                {t.navProyectos}
              </a>
              <a href="#contacto" className="nav-link">
                {t.navContacto}
              </a>
            </nav>

            {/* toggle ES / EN */}
            <div className="lang-toggle">
              <button
                type="button"
                className={`lang-toggle-btn ${lang === "es" ? "lang-toggle-btn-active" : ""
                  }`}
                onClick={() => handleChangeLang("es")}
              >
                ES
              </button>
              <button
                type="button"
                className={`lang-toggle-btn ${lang === "en" ? "lang-toggle-btn-active" : ""
                  }`}
                onClick={() => handleChangeLang("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-text">
              <p className="hero-eyebrow">{t.heroEyebrow}</p>
              <h1 className="hero-title">
                {t.heroTitle1}
                <span className="hero-title-highlight">
                  {t.heroTitleHighlight}
                </span>
                {t.heroTitle2}
              </h1>
              <p className="hero-subtitle">{t.heroSubtitle}</p>

              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">
                  {t.heroPrimaryBtn}
                </a>
                <a href="https://krobi.io" className="btn btn-secondary">
                  {t.heroSecondaryBtn}
                </a>
              </div>
            </div>

            <div className="hero-card">
              <h3 className="hero-card-title">
                {t.heroCardProductFeatured}
              </h3>
              <h2 className="hero-card-name">{t.heroCardProductName}</h2>
              <p className="hero-card-text">{t.heroCardProductText}</p>
              <div className="hero-card-bubble">
                <p className="hero-card-question">
                  {t.heroCardQuestion}
                </p>
                <p className="hero-card-answer">
                  {t.heroCardAnswer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section section-light">
          <div className="section-inner">
            <h2 className="section-title">{t.serviciosTitle}</h2>
            <div className="cards">
              <div className="card">
                <h3 className="card-title">{t.serviciosDevTitle}</h3>
                <p className="card-text">{t.serviciosDevText}</p>
              </div>
              <div className="card">
                <h3 className="card-title">{t.serviciosDataTitle}</h3>
                <p className="card-text">{t.serviciosDataText}</p>
              </div>
              <div className="card">
                <h3 className="card-title">{t.serviciosIATitle}</h3>
                <p className="card-text">{t.serviciosIAText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="section section-muted">
          <div className="section-inner">
            <h2 className="section-title">{t.proyectosTitle}</h2>
            <div className="cards">
              <div className="card">
                <h3 className="card-title">{t.proyectosKroBiTitle}</h3>
                <p className="card-text">{t.proyectosKroBiText}</p>
                <a href="https://krobi.io" className="card-link">
                  {t.proyectosKroBiLink}
                </a>
              </div>

              <div className="card">
                <h3 className="card-title">{t.proyectosInerfitTitle}</h3>
                <p className="card-text">{t.proyectosInerfitText}</p>
              </div>

              <div className="card">
                <h3 className="card-title">{t.proyectosAguaMariaTitle}</h3>
                <p className="card-text">{t.proyectosAguaMariaText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section section-light">
          <div className="section-inner">
            <h2 className="section-title">{t.contactoTitle}</h2>
            <p className="section-text">{t.contactoText}</p>
            <a href="mailto:contacto@krodev.com" className="btn btn-primary">
              contacto@krodev.com
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Krodev. {t.footerRights}
          </span>
          <span>{t.footerDevelopedBy}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
