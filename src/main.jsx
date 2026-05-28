import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WHATSAPP_NUMBER = "971545397901";
const LINKEDIN_URL = "https://www.linkedin.com/in/gabriel-alonso-castellanos-restrepo-a23a9b1ba";

const content = {
  es: {
    lang: "EN",
    nav: [["Inicio", "#inicio"], ["Servicios", "#servicios"], ["Sobre mí", "#sobre-mi"], ["Método", "#metodo"], ["Contacto", "#contacto"]],
    tag: "Consultoría · Estrategia · Rentabilidad",
    heroTitle: "Estrategia clara. Resultados reales.",
    heroAlt: "Estructura tu idea o negocio en marcha para crecer con orden y rentabilidad.",
    heroText: "Ayudo a emprendedores y pequeñas empresas a ordenar su negocio, mejorar sus procesos, entender sus números y tomar mejores decisiones para crecer de forma sostenible.",
    primary: "Quiero agendar una asesoría",
    secondary: "Conoce mis servicios",
    proof: [["45 min", "Diagnóstico gratuito"], ["3 áreas", "Estrategia, procesos y rentabilidad"], ["1 a 1", "Acompañamiento cercano"]],
    servicesTag: "Servicios",
    servicesTitle: "Soluciones para ordenar, crecer y rentabilizar tu negocio.",
    servicesText: "Trabajo con emprendedores y pequeñas empresas que necesitan claridad, foco y una ruta de acción práctica.",
    services: [
      ["Estrategia de negocio", "Definimos el rumbo de tu negocio con prioridades claras, propuesta de valor y objetivos accionables.", "◎"],
      ["Marketing digital", "Aterrizamos acciones comerciales y digitales para atraer clientes ideales y medir resultados.", "◔"],
      ["Sistemas y procesos", "Organizamos tareas, tiempos, responsabilidades y controles para que el negocio funcione mejor.", "⚙"],
      ["Mentoría y asesoría", "Acompañamiento 1 a 1 para tomar mejores decisiones y avanzar con estructura.", "◇"],
    ],
    aboutTag: "Sobre mí",
    aboutTitle: "No solo analizo negocios: identifico lo que frena su crecimiento.",
    aboutText1: "Ayudo a emprendedores y pequeñas empresas que ya están generando ingresos, pero no logran crecer de forma ordenada o rentable.",
    aboutText2: "Mi objetivo es convertir problemas financieros, operativos y estratégicos en acciones concretas para mejorar la rentabilidad y construir un negocio sostenible.",
    areas: ["Organización financiera", "Optimización de procesos", "Estructuración del negocio"],
    methodTag: "Método",
    methodTitle: "De la confusión a una ruta de acción concreta.",
    methodText: "El objetivo no es llenarte de teoría. Es ayudarte a entender qué está pasando, qué decisión tomar y qué paso ejecutar primero.",
    steps: [
      ["01", "Entendemos tu situación", "Revisamos tu idea, ventas actuales, retos, costos, procesos y objetivos de crecimiento."],
      ["02", "Detectamos bloqueos", "Identificamos qué está frenando la claridad, la operación, la rentabilidad o el avance del negocio."],
      ["03", "Definimos acciones", "Priorizamos los próximos pasos para avanzar con orden, control y enfoque comercial."],
    ],
    ctaTag: "Diagnóstico gratuito",
    ctaTitle: "Agenda tu diagnóstico gratuito.",
    ctaText: "Escríbeme por WhatsApp y cuéntame brevemente tu caso. Revisaremos si la sesión gratuita es el siguiente paso adecuado para ti.",
    ctaButton: "Hablar por WhatsApp",
    whatsapp: "WhatsApp: +971 54 539 7901",
    footer: "Gabriel Castellanos · Consultor de negocios · Estrategia, procesos y rentabilidad",
    msg: `Hola Gabriel, quiero agendar una asesoría gratuita de diagnóstico de negocio.\n\nMi caso es:\nMi principal reto hoy es:\nQuiero mejorar: estrategia / procesos / rentabilidad / ventas / finanzas.`
  },
  en: {
    lang: "ES",
    nav: [["Home", "#inicio"], ["Services", "#servicios"], ["About", "#sobre-mi"], ["Method", "#metodo"], ["Contact", "#contacto"]],
    tag: "Consulting · Strategy · Profitability",
    heroTitle: "Clear strategy. Real results.",
    heroAlt: "Structure your business idea or operating business to grow with order and profitability.",
    heroText: "I help entrepreneurs and small businesses organize their business, improve processes, understand their numbers and make better decisions for sustainable growth.",
    primary: "Book a free consultation",
    secondary: "Explore services",
    proof: [["45 min", "Free diagnosis"], ["3 areas", "Strategy, processes and profitability"], ["1:1", "Close support"]],
    servicesTag: "Services",
    servicesTitle: "Solutions to organize, grow and improve your business profitability.",
    servicesText: "I work with entrepreneurs and small businesses that need clarity, focus and a practical action plan.",
    services: [
      ["Business strategy", "We define your business direction with clear priorities, value proposition and actionable goals.", "◎"],
      ["Digital marketing", "We translate commercial and digital actions into client attraction and measurable results.", "◔"],
      ["Systems and processes", "We organize tasks, timing, responsibilities and controls so the business works better.", "⚙"],
      ["Mentoring and advisory", "1:1 support to make better decisions and move forward with structure.", "◇"],
    ],
    aboutTag: "About me",
    aboutTitle: "I do not just analyze businesses: I identify what is slowing their growth.",
    aboutText1: "I help entrepreneurs and small businesses that are already generating revenue but are struggling to grow in an organized or profitable way.",
    aboutText2: "My goal is to turn financial, operational and strategic problems into concrete actions to improve profitability and build a sustainable business.",
    areas: ["Financial organization", "Process optimization", "Business structuring"],
    methodTag: "Method",
    methodTitle: "From confusion to a concrete action roadmap.",
    methodText: "The goal is not to fill you with theory. It is to help you understand what is happening, what decision to make and what step to execute first.",
    steps: [
      ["01", "We understand your situation", "We review your idea, current sales, challenges, costs, processes and growth goals."],
      ["02", "We detect blockers", "We identify what is slowing clarity, operations, profitability or business progress."],
      ["03", "We define actions", "We prioritize the next steps to move forward with order, control and commercial focus."],
    ],
    ctaTag: "Free diagnosis",
    ctaTitle: "Book your free diagnosis.",
    ctaText: "Message me on WhatsApp and briefly tell me about your case. We will review if the free session is the right next step for you.",
    ctaButton: "Message on WhatsApp",
    whatsapp: "WhatsApp: +971 54 539 7901",
    footer: "Gabriel Castellanos · Business consultant · Strategy, processes and profitability",
    msg: `Hi Gabriel, I want to book a free business diagnosis consultation.\n\nMy case is:\nMy main challenge today is:\nI want to improve: strategy / processes / profitability / sales / finance.`
  }
};

function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <a className="logoLink" href="#inicio" aria-label="Gabriel Castellanos">
          <img src="/gabriel-logo-corporativo.svg" alt="Gabriel Castellanos" />
        </a>
        <nav className="desktopNav">
          {t.nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="navActions">
          <button className="langBtn" onClick={() => setLang(lang === "es" ? "en" : "es")}>⌘ {t.lang}</button>
          <a className="topCta" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.msg)}`} target="_blank" rel="noreferrer">{t.ctaButton}</a>
          <button className="menuBtn" onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
        </div>
      </div>
      {open && <div className="mobileMenu">{t.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="heroVisual heroDashboard" aria-label="Dashboard corporativo de estrategia, procesos y rentabilidad">
      <div className="halo halo1" />
      <div className="halo halo2" />
      <div className="dashboardImageShell">
        <img src="/hero-corporativo-dashboard.webp" alt="Dashboard corporativo con análisis financiero y plan de acción" />
        <div className="dashboardOverlay">
          <span>Diagnóstico estratégico</span>
          <strong>Claridad para decidir</strong>
          <small>Estrategia · Procesos · Rentabilidad</small>
        </div>
      </div>
    </div>
  );
}

function MethodVisual() {
  return (
    <div className="methodImageFrame" aria-label="Diagnóstico, análisis y plan de acción para consultoría de negocios">
      <img src="/method-corporativo.webp" alt="Dashboard corporativo con análisis financiero y plan de acción" />
    </div>
  );
}

function App() {
  const [lang, setLang] = useState("es");
  const t = content[lang];
  const whatsappUrl = useMemo(() => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.msg)}`, [t.msg]);

  return (
    <main id="inicio">
      <Header t={t} lang={lang} setLang={setLang} />

      <section className="hero sectionDark">
        <div className="container heroGrid">
          <div className="heroTextBlock">
            <div className="eyebrow">{t.tag}</div>
            <h1>{t.heroTitle}</h1>
            <p className="heroAlt">{t.heroAlt}</p>
            <p className="lead">{t.heroText}</p>
            <div className="buttonRow">
              <a className="primaryBtn" href={whatsappUrl} target="_blank" rel="noreferrer">{t.primary} →</a>
              <a className="secondaryBtn" href="#servicios">{t.secondary} →</a>
            </div>
            <div className="proofGrid">
              {t.proof.map(([a,b], index) => (
                <div className="proof" key={a}>
                  <div className="proofIcon">{["◷", "◎", "◌"][index]}</div>
                  <div><strong>{a}</strong><span>{b}</span></div>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section id="servicios" className="sectionLight">
        <div className="container centerIntro">
          <span className="sectionTag">{t.servicesTag}</span>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesText}</p>
        </div>
        <div className="container serviceGrid">
          {t.services.map(([title, text, icon]) => (
            <article className="serviceCard" key={title}>
              <div className="serviceIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="sectionDark aboutSection">
        <div className="container aboutGrid">
          <div className="aboutCard">
            <img src="/gabriel-foto-real.jpg" alt="Gabriel Castellanos" />
            <div className="aboutBadge">
              <strong>Gabriel Castellanos</strong>
              <span>Consultor de negocios</span>
            </div>
          </div>
          <div>
            <span className="sectionTag gold">{t.aboutTag}</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
            <div className="areaList">
              {t.areas.map(area => <span key={area}>✓ {area}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="sectionLight methodSection">
        <div className="container methodGrid">
          <div>
            <span className="sectionTag">{t.methodTag}</span>
            <h2>{t.methodTitle}</h2>
            <p>{t.methodText}</p>
            <div className="steps">
              {t.steps.map(([num, title, text]) => (
                <div className="step" key={num}>
                  <span>{num}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <MethodVisual />
        </div>
      </section>

      <section id="contacto" className="ctaSection sectionDark">
        <div className="container ctaGrid">
          <div>
            <span className="sectionTag gold">{t.ctaTag}</span>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <p className="whatsappLine">{t.whatsapp}</p>
          </div>
          <div className="ctaBox">
            <h3>Gabriel Castellanos</h3>
            <p>Consultor de negocios</p>
            <a className="primaryBtn full" href={whatsappUrl} target="_blank" rel="noreferrer">{t.ctaButton} →</a>
            <a className="secondaryBtn full" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn →</a>
          </div>
        </div>
      </section>

      <a className="floatWhats" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">☘</a>
      <footer>{t.footer}</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
