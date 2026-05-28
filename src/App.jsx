import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, Clock3, DollarSign,
  FileText, Languages, LineChart, Menu, MessageCircle, Rocket, ShieldCheck,
  Target, Users, X,
} from "lucide-react";

const WHATSAPP_NUMBER = "971545397901";
const LINKEDIN_URL = "https://www.linkedin.com/in/gabriel-alonso-castellanos-restrepo-a23a9b1ba";

const content = {
  es: {
    langButton: "EN",
    brandSub: "Consultor de negocios",
    nav: [["Inicio", "#inicio"], ["Sobre mí", "#sobre-mi"], ["Sesión gratis", "#sesion"], ["Servicios", "#servicios"], ["Contacto", "#contacto"]],
    heroTag: "Ideas de negocio · Negocios en marcha · Rentabilidad",
    heroTitle: "Estructura tu idea o negocio en marcha para crecer con orden y rentabilidad.",
    heroText: "Ayudo a emprendedores y pequeñas empresas a ordenar su negocio, mejorar sus procesos, entender sus números y tomar mejores decisiones para crecer de forma sostenible.",
    primaryCta: "Agendar diagnóstico gratuito",
    secondaryCta: "Ver LinkedIn",
    stats: [["45 min", "Sesión gratis"], ["3 áreas", "Finanzas, procesos y estrategia"], ["2 etapas", "Idea o negocio en marcha"]],
    cardTag: "Diagnóstico gratuito",
    cardTitle: "Identifica qué está frenando tu crecimiento.",
    cardText: "Una sesión estratégica para revisar tu idea o negocio, detectar oportunidades y definir los próximos pasos con claridad.",
    strip: ["Planes de negocio", "Organización financiera", "Optimización de procesos", "Estrategia para crecer"],
    forWhomTag: "Para quién es",
    forWhomTitle: "Para emprendedores y pequeñas empresas que quieren crear, ordenar o rentabilizar su negocio.",
    forWhomText: "La sesión es útil si estás empezando con una idea o si ya vendes, pero necesitas más claridad financiera, procesos y dirección.",
    painPoints: [
      "Tienes una idea de negocio, pero no sabes cómo estructurarla.",
      "Quieres crear un plan de negocio claro y presentable.",
      "Ya vendes, pero no sabes si tu negocio es realmente rentable.",
      "No tienes claridad sobre costos, precios, ingresos o márgenes.",
      "Sientes desorden en procesos, tareas, tiempos o responsabilidades.",
      "Trabajas mucho, pero el negocio no crece con orden ni control.",
    ],
    aboutTag: "Sobre mí",
    aboutTitle: "No solo analizo negocios: identifico lo que frena su crecimiento.",
    about1: "Ayudo a emprendedores y pequeñas empresas que ya están generando ingresos, pero no logran crecer de forma ordenada o rentable. Muchos negocios venden, pero no tienen claridad financiera, control de costos o procesos definidos. Ahí es donde entro yo.",
    about2: "Mi objetivo es convertir problemas financieros, operativos y estratégicos en acciones concretas para ayudarte a tomar mejores decisiones, mejorar la rentabilidad y construir un negocio sostenible.",
    areasTag: "Áreas clave",
    areasTitle: "Trabajo en tres frentes para estructurar mejor tu negocio.",
    areas: [
      ["Organización financiera", "Control de ingresos, costos, precios, márgenes y rentabilidad para decidir con datos.", BarChart3],
      ["Optimización de procesos", "Mejora de tareas, tiempos, operación, seguimiento y puntos críticos del negocio.", LineChart],
      ["Estructuración del negocio", "Modelo de negocio, propuesta de valor, plan de acción y estrategia de crecimiento.", Target],
    ],
    sessionTag: "Sesión gratuita",
    sessionTitle: "Una sesión de diagnóstico para ver tu negocio con claridad.",
    sessionText: "En 45 minutos revisamos tu idea o negocio en marcha, identificamos bloqueos y definimos una ruta inicial para avanzar con más estructura.",
    benefits: [
      ["Cliente y propuesta", "Aclaramos a quién le vendes, qué problema resuelves y cómo diferenciarte.", Users],
      ["Números iniciales", "Revisamos costos, precios, ingresos, márgenes y oportunidades de rentabilidad.", DollarSign],
      ["Ruta de acción", "Definimos qué debes corregir, validar o construir primero.", Rocket],
      ["Plan de negocio", "Identificamos qué elementos necesitas para presentar o ejecutar mejor tu idea.", FileText],
    ],
    methodTag: "Método",
    methodTitle: "De la confusión a una ruta de acción concreta.",
    methodText: "El objetivo no es llenarte de teoría. Es ayudarte a entender qué está pasando, qué decisión tomar y qué paso ejecutar primero.",
    steps: [
      ["01", "Entendemos tu situación", "Revisamos tu idea, ventas actuales, retos, costos, procesos y objetivos de crecimiento."],
      ["02", "Detectamos bloqueos", "Identificamos qué está frenando la claridad, la operación, la rentabilidad o el avance del negocio."],
      ["03", "Definimos acciones", "Priorizamos los próximos pasos para avanzar con orden, control y enfoque comercial."],
    ],
    servicesTag: "Servicios pagos",
    servicesTitle: "Después de la sesión gratuita, puedes trabajar conmigo en una solución más completa.",
    servicesText: "Los precios están expresados en pesos colombianos y dólares para facilitar el pago desde Colombia o el exterior.",
    servicesCta: "Empezar con diagnóstico gratis",
    services: [
      { title: "Diagnóstico y Ruta de Acción", time: "1 semana", cop: "$390.000 COP", usd: "USD 97", description: "Para emprendedores que necesitan claridad rápida sobre su idea o negocio y un primer plan de prioridades.", items: ["Diagnóstico inicial", "Mapa de problemas", "Prioridades de mejora", "Primer plan de acción"] },
      { title: "Plan de Negocio Estratégico", time: "2 a 3 semanas", cop: "$1.200.000 COP", usd: "USD 297", description: "Para crear o estructurar un plan de negocio más completo, útil para ejecutar, presentar o buscar aliados.", items: ["Plan de negocio", "Modelo de ingresos", "Costos y precios", "Estrategia comercial", "Ruta de lanzamiento"] },
      { title: "Acompañamiento para Ordenar y Rentabilizar", time: "4 semanas", cop: "$2.000.000 COP", usd: "USD 497", description: "Para negocios que ya venden y quieren mejorar control financiero, procesos, rentabilidad y toma de decisiones.", items: ["Sesiones semanales", "Organización financiera", "Optimización de procesos", "Plan de acción", "Seguimiento estratégico"] },
    ],
    filterTag: "Filtro inicial",
    filterTitle: "Antes de la sesión, te haré 4 preguntas para entender tu caso.",
    filterText: "Esto permite que el diagnóstico gratuito sea más útil, directo y enfocado en lo que realmente necesitas.",
    questions: [
      "¿Tienes una idea de negocio o un negocio en marcha?",
      "¿Cuál es tu principal reto hoy?",
      "¿Ya estás generando ingresos? Si sí, ¿cuál es tu facturación aproximada?",
      "¿Quieres mejorar plan de negocio, finanzas, procesos, ventas o rentabilidad?",
    ],
    answerCta: "Responder y agendar gratis",
    faqTag: "Preguntas frecuentes",
    faqTitle: "Antes de agendar",
    faqs: [
      ["¿Para quién es esta sesión gratuita?", "Para emprendedores con una idea de negocio y para pequeñas empresas que ya venden, pero necesitan más estructura, claridad financiera o procesos."],
      ["¿La sesión realmente es gratis?", "Sí. La sesión de diagnóstico inicial es gratuita y dura aproximadamente 45 minutos."],
      ["¿Qué pasa después de la sesión?", "Si identificamos que puedo ayudarte, puedes continuar con un servicio pago según tu necesidad: diagnóstico, plan de negocio o acompañamiento."],
      ["¿Necesito tener documentos listos?", "No es obligatorio. Pero ayuda tener información básica de ventas, costos, gastos, procesos o una descripción clara de tu idea."],
    ],
    contactTag: "Contacto",
    contactTitle: "Da el primer paso para ordenar y rentabilizar tu negocio.",
    contactText: "Escríbeme por WhatsApp y cuéntame brevemente tu caso. Revisaremos si la sesión gratuita es el siguiente paso adecuado para ti.",
    contactBoxTitle: "Agendar diagnóstico gratuito",
    whatsappLabel: "Escribirme por WhatsApp",
    linkedinLabel: "Conectar en LinkedIn",
    footer: "Consultoría para emprendedores, pequeñas empresas, planes de negocio, procesos y rentabilidad.",
    whatsappMessage: `Hola Gabriel, quiero agendar una sesión gratuita de diagnóstico de negocio de 45 minutos.

Mi caso es: idea de negocio / negocio en marcha
Mi principal reto hoy es:
Estoy generando ingresos: sí / no
Quiero mejorar: plan de negocio / finanzas / procesos / ventas / rentabilidad.`,
  },
  en: {
    langButton: "ES",
    brandSub: "Business consultant",
    nav: [["Home", "#inicio"], ["About", "#sobre-mi"], ["Free session", "#sesion"], ["Services", "#servicios"], ["Contact", "#contacto"]],
    heroTag: "Business ideas · Operating businesses · Profitability",
    heroTitle: "Structure your business idea or operating business to grow with order and profitability.",
    heroText: "I help entrepreneurs and small businesses organize their business, improve processes, understand their numbers, and make better decisions for sustainable growth.",
    primaryCta: "Book a free diagnosis",
    secondaryCta: "View LinkedIn",
    stats: [["45 min", "Free session"], ["3 areas", "Finance, processes and strategy"], ["2 stages", "Idea or operating business"]],
    cardTag: "Free diagnosis",
    cardTitle: "Identify what is slowing down your growth.",
    cardText: "A strategic session to review your idea or business, detect opportunities, and define clear next steps.",
    strip: ["Business plans", "Financial organization", "Process optimization", "Growth strategy"],
    forWhomTag: "Who it is for",
    forWhomTitle: "For entrepreneurs and small businesses that want to create, organize, or make their business more profitable.",
    forWhomText: "The session is useful if you are starting with an idea or if you are already selling but need more financial clarity, processes, and direction.",
    painPoints: [
      "You have a business idea, but you do not know how to structure it.",
      "You want to create a clear and presentable business plan.",
      "You are already selling, but you do not know if your business is truly profitable.",
      "You lack clarity on costs, prices, revenue, or margins.",
      "Your processes, tasks, timing, or responsibilities feel disorganized.",
      "You work hard, but the business is not growing with order or control.",
    ],
    aboutTag: "About me",
    aboutTitle: "I do not just analyze businesses: I identify what is slowing their growth.",
    about1: "I help entrepreneurs and small businesses that are already generating revenue but are struggling to grow in an organized or profitable way. Many businesses sell, but they lack financial clarity, cost control, or defined processes. That is where I come in.",
    about2: "My goal is to turn financial, operational, and strategic problems into concrete actions so you can make better decisions, improve profitability, and build a sustainable business.",
    areasTag: "Key areas",
    areasTitle: "I work on three fronts to better structure your business.",
    areas: [
      ["Financial organization", "Control revenue, costs, prices, margins, and profitability to make decisions with data.", BarChart3],
      ["Process optimization", "Improve tasks, timing, operations, follow-up, and critical business points.", LineChart],
      ["Business structuring", "Business model, value proposition, action plan, and growth strategy.", Target],
    ],
    sessionTag: "Free session",
    sessionTitle: "A diagnostic session to see your business with clarity.",
    sessionText: "In 45 minutes, we review your idea or operating business, identify blockers, and define an initial path to move forward with more structure.",
    benefits: [
      ["Customer and offer", "We clarify who you sell to, what problem you solve, and how to differentiate your offer.", Users],
      ["Initial numbers", "We review costs, prices, revenue, margins, and profitability opportunities.", DollarSign],
      ["Action path", "We define what you should fix, validate, or build first.", Rocket],
      ["Business plan", "We identify what you need to present or execute your business idea better.", FileText],
    ],
    methodTag: "Method",
    methodTitle: "From confusion to a concrete action path.",
    methodText: "The goal is not to fill you with theory. It is to help you understand what is happening, what decision to make, and what step to execute first.",
    steps: [
      ["01", "We understand your situation", "We review your idea, current sales, challenges, costs, processes, and growth goals."],
      ["02", "We detect blockers", "We identify what is slowing clarity, operations, profitability, or business progress."],
      ["03", "We define actions", "We prioritize the next steps to move forward with order, control, and commercial focus."],
    ],
    servicesTag: "Paid services",
    servicesTitle: "After the free session, you can work with me on a more complete solution.",
    servicesText: "Prices are shown in Colombian pesos and US dollars to make payment easier from Colombia or abroad.",
    servicesCta: "Start with a free diagnosis",
    services: [
      { title: "Diagnosis and Action Roadmap", time: "1 week", cop: "$390,000 COP", usd: "USD 97", description: "For entrepreneurs who need quick clarity about their idea or business and an initial priority plan.", items: ["Initial diagnosis", "Problem map", "Improvement priorities", "First action plan"] },
      { title: "Strategic Business Plan", time: "2 to 3 weeks", cop: "$1,200,000 COP", usd: "USD 297", description: "To create or structure a more complete business plan, useful for execution, presentations, or finding partners.", items: ["Business plan", "Revenue model", "Costs and pricing", "Commercial strategy", "Launch roadmap"] },
      { title: "Business Organization and Profitability Support", time: "4 weeks", cop: "$2,000,000 COP", usd: "USD 497", description: "For businesses already selling that want to improve financial control, processes, profitability, and decision-making.", items: ["Weekly sessions", "Financial organization", "Process optimization", "Action plan", "Strategic follow-up"] },
    ],
    filterTag: "Initial filter",
    filterTitle: "Before the session, I will ask you 4 questions to understand your case.",
    filterText: "This makes the free diagnosis more useful, direct, and focused on what you really need.",
    questions: [
      "Do you have a business idea or an operating business?",
      "What is your main challenge today?",
      "Are you already generating revenue? If yes, what is your approximate monthly revenue?",
      "Do you want to improve your business plan, finances, processes, sales, or profitability?",
    ],
    answerCta: "Answer and book for free",
    faqTag: "FAQ",
    faqTitle: "Before booking",
    faqs: [
      ["Who is this free session for?", "For entrepreneurs with a business idea and small businesses that already sell but need more structure, financial clarity, or better processes."],
      ["Is the session really free?", "Yes. The initial diagnostic session is free and lasts approximately 45 minutes."],
      ["What happens after the session?", "If we identify that I can help you, you can continue with a paid service according to your needs: diagnosis, business plan, or support program."],
      ["Do I need to have documents ready?", "It is not mandatory. But it helps to have basic information about sales, costs, expenses, processes, or a clear description of your idea."],
    ],
    contactTag: "Contact",
    contactTitle: "Take the first step to organize and improve the profitability of your business.",
    contactText: "Write to me on WhatsApp and briefly tell me about your case. We will review if the free session is the right next step for you.",
    contactBoxTitle: "Book a free diagnosis",
    whatsappLabel: "Message me on WhatsApp",
    linkedinLabel: "Connect on LinkedIn",
    footer: "Consulting for entrepreneurs, small businesses, business plans, processes, and profitability.",
    whatsappMessage: `Hi Gabriel, I want to book a free 45-minute business diagnosis session.

My case is: business idea / operating business
My main challenge today is:
I am generating revenue: yes / no
I want to improve: business plan / finances / processes / sales / profitability.`,
  },
};

function SectionTag({ children }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">{children}</p>;
}

function Cta({ children, href, secondary = false }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition hover:scale-[1.02] ${secondary ? "border border-white/15 text-white hover:bg-white/10" : "bg-[#D4AF37] text-[#07111F] shadow-lg shadow-[#D4AF37]/20 hover:bg-[#F8D56B]"}`}>
      {children}
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const whatsappUrl = useMemo(() => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`, [t.whatsappMessage]);

  return (
    <main id="inicio" className="min-h-screen bg-[#07111F] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/gabriel-logo-corporativo.svg"
              alt="Logo Gabriel Castellanos"
              className="h-14 w-auto rounded-2xl object-contain shadow-lg shadow-black/20"
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {t.nav.map(([label, href]) => <a key={label} href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</a>)}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Languages size={16} /> {t.langButton}</button>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#07111F] shadow-lg shadow-[#D4AF37]/20 transition hover:bg-[#F8D56B]">{t.primaryCta} <ArrowRight size={16} /></a>
          </div>
          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 px-6 py-4 md:hidden"><div className="flex flex-col gap-4">
          {t.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-300">{label}</a>)}
          <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white"><Languages size={16} /> {t.langButton}</button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#07111F]">{t.primaryCta} <ArrowRight size={16} /></a>
        </div></div>}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,164,65,0.26),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#F2D27A]"><ShieldCheck size={16} /> {t.heroTag}</div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><Cta href={whatsappUrl}>{t.primaryCta} <ArrowRight size={18} /></Cta><Cta href={LINKEDIN_URL} secondary>{t.secondaryCta}</Cta></div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">{t.stats.map(([value, label]) => <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><p className="text-xl font-black text-[#D4AF37]">{value}</p><p className="mt-1 text-xs text-slate-400">{label}</p></div>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
              <img
                src="/hero-gabriel-corporativo-v4.webp"
                alt={lang === "es" ? "Gabriel Castellanos en consultoría de negocios" : "Gabriel Castellanos in business consulting"}
                className="h-[430px] w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.04] py-6"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-center text-sm font-semibold text-slate-300 lg:px-8">{t.strip.map((item, index) => <React.Fragment key={item}><span>{item}</span>{index < t.strip.length - 1 && <span className="hidden text-[#D4AF37] sm:inline">•</span>}</React.Fragment>)}</div></section>

      <section className="bg-[#07111F] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <SectionTag>{lang === "es" ? "Mi enfoque" : "My approach"}</SectionTag>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              {lang === "es"
                ? "Transformo datos en decisiones y decisiones en resultados."
                : "I turn data into decisions and decisions into results."}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {lang === "es"
                ? "Estrategia, procesos y rentabilidad como base para crecer con estructura y claridad."
                : "Strategy, processes, and profitability as the foundation for growing with structure and clarity."}
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
            <img
              src="/enfoque-corporativo-v4.webp"
              alt={lang === "es" ? "Enfoque corporativo de estrategia, procesos y rentabilidad" : "Corporate approach for strategy, processes and profitability"}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>


      <section className="bg-white py-20 text-[#07111F]"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><SectionTag>{t.forWhomTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.forWhomTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{t.forWhomText}</p></div><div className="grid gap-4 sm:grid-cols-2">{t.painPoints.map((item) => <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5"><CheckCircle2 className="mb-4 text-[#C9A227]" size={24} /><p className="font-medium leading-7 text-slate-700">{item}</p></div>)}</div></div></div></section>

      <section id="sobre-mi" className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8"><div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl"><img src="/gabriel-about-professional-v4.webp" alt="Foto profesional de Gabriel Castellanos" className="h-[520px] w-full rounded-[1.5rem] object-cover object-center" /><div className="mt-5 rounded-2xl bg-[#D4AF37]/10 p-4 text-center"><p className="font-black text-[#F2D27A]">Estrategia · Procesos · Rentabilidad</p></div></div><div><SectionTag>{t.aboutTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.aboutTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-300">{t.about1}</p><p className="mt-5 text-lg leading-8 text-slate-300">{t.about2}</p></div></div></section>

      <section className="bg-[#F4F6FA] py-20 text-[#07111F]"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><SectionTag>{t.areasTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.areasTitle}</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{t.areas.map(([title, text, Icon]) => <div key={title} className="rounded-[1.75rem] bg-white p-6 shadow-xl"><div className="mb-5 inline-flex rounded-2xl bg-[#07111F] p-4 text-[#D4AF37]"><Icon size={28} /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-700">{text}</p></div>)}</div></div></section>

      <section id="sesion" className="py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><SectionTag>{t.sessionTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.sessionTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{t.sessionText}</p><div className="mt-8"><Cta href={whatsappUrl}>{t.primaryCta} <ArrowRight size={18} /></Cta></div></div><div className="grid gap-4 sm:grid-cols-2">{t.benefits.map(([title, text, Icon]) => <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl"><div className="mb-5 inline-flex rounded-2xl bg-[#D4AF37]/15 p-4 text-[#D4AF37]"><Icon size={28} /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}</div></div></div></section>

      <section className="bg-white py-20 text-[#07111F]"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8"><div><SectionTag>{t.methodTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.methodTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{t.methodText}</p><div className="mt-8 space-y-5">{t.steps.map(([number, title, text]) => <div key={number} className="rounded-3xl bg-[#F4F6FA] p-6 shadow-xl"><div className="flex gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#07111F] text-lg font-black text-[#D4AF37]">{number}</div><div><h3 className="text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-slate-700">{text}</p></div></div></div>)}</div></div><div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl"><img src="/method-consultoria-corporativa-v4.webp" alt={lang === "es" ? "Método de diagnóstico y plan de acción" : "Diagnosis method and action roadmap"} className="h-auto w-full object-cover" /></div></div></section>

      <section id="servicios" className="py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><SectionTag>{t.servicesTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.servicesTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{t.servicesText}</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{t.services.map((service) => <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{service.time}</p><h3 className="mt-3 text-2xl font-black">{service.title}</h3><p className="mt-3 min-h-[112px] leading-7 text-slate-300">{service.description}</p><div className="mt-5 rounded-2xl bg-[#D4AF37]/10 p-4"><p className="text-2xl font-black text-[#D4AF37]">{service.cop}</p><p className="mt-1 text-lg font-bold text-white">{service.usd}</p></div><div className="mt-6 space-y-3">{service.items.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-[#D4AF37]" size={18} /><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10">{t.servicesCta} <ArrowRight size={18} /></a></div>)}</div></div></section>

      <section className="bg-[#F4F6FA] py-20 text-[#07111F]"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8"><div><SectionTag>{t.filterTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.filterTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{t.filterText}</p></div><div className="rounded-[2rem] bg-white p-6 shadow-2xl"><div className="space-y-4">{t.questions.map((question, index) => <div key={question} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#07111F] font-black text-[#D4AF37]">{index + 1}</div><p className="pt-2 font-semibold text-slate-700">{question}</p></div>)}</div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#07111F] px-6 py-4 font-bold text-white transition hover:scale-[1.01]">{t.answerCta} <MessageCircle size={18} /></a></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-5xl px-6 lg:px-8"><div className="text-center"><SectionTag>{t.faqTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.faqTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{t.faqs.map(([question, answer]) => <div key={question} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><h3 className="text-lg font-black">{question}</h3><p className="mt-3 leading-7 text-slate-300">{answer}</p></div>)}</div></div></section>

      <section id="contacto" className="relative overflow-hidden bg-[#D4AF37] py-20 text-[#07111F]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_30%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8"><div><p className="text-sm font-black uppercase tracking-[0.22em]">{t.contactTag}</p><h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{t.contactTitle}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[#111827]">{t.contactText}</p></div><div className="rounded-[2rem] bg-[#07111F] p-6 text-white shadow-2xl"><div className="flex items-center gap-4"><img src="/gabriel-contact-professional-v4.webp" alt="Gabriel Castellanos" className="h-16 w-16 rounded-2xl object-cover object-center" /><div><h3 className="text-2xl font-black">{t.contactBoxTitle}</h3><p className="mt-1 text-slate-300">WhatsApp: +971 54 539 7901</p></div></div><div className="mt-6 space-y-3"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-4 font-bold text-[#07111F] transition hover:bg-[#F8D56B]">{t.whatsappLabel} <MessageCircle size={18} /></a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10">{t.linkedinLabel} <ArrowRight size={18} /></a></div></div></div></section>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110" aria-label="WhatsApp"><MessageCircle size={28} /></a>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500"><p>© 2026 Gabriel Alonso Castellanos Restrepo. {t.footer}</p></footer>
    </main>
  );
}
