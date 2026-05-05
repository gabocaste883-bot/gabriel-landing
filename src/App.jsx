import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileText,
  Lightbulb,
  Menu,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "971545397901";
const LINKEDIN_URL = "https://www.linkedin.com/in/gabriel-alonso-castellanos-restrepo-a23a9b1ba";

const whatsappMessage = encodeURIComponent(`Hola Gabriel, quiero agendar una sesión gratuita de claridad de negocio de 45 minutos.

Mi idea de negocio es:
Estoy en esta etapa: idea / empezando / ya vendiendo
Mi principal reto hoy es:
Quiero ayuda con: plan de negocio / modelo de negocio / validación / números / estrategia de ventas.`);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const painPoints = [
  "Tienes una idea de negocio, pero no sabes por dónde empezar.",
  "Quieres crear un plan de negocio, pero no sabes qué debe incluir.",
  "No tienes claridad sobre tu cliente ideal, precios, costos o forma de vender.",
  "Te cuesta convertir tu idea en una propuesta concreta y presentable.",
  "Quieres validar si tu idea puede ser rentable antes de invertir más tiempo o dinero.",
  "Necesitas una ruta clara para pasar de idea a acción.",
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Claridad de idea",
    text: "Ordena tu idea de negocio y conviértela en una propuesta clara, entendible y accionable.",
  },
  {
    icon: Users,
    title: "Cliente ideal",
    text: "Define a quién le vas a vender, qué problema resuelves y por qué deberían elegirte.",
  },
  {
    icon: BarChart3,
    title: "Números iniciales",
    text: "Identifica costos, precios, ingresos esperados y puntos clave para evaluar rentabilidad.",
  },
  {
    icon: Target,
    title: "Plan de acción",
    text: "Sales con próximos pasos concretos para avanzar en tu plan de negocio o lanzamiento.",
  },
];

const steps = [
  {
    number: "01",
    title: "Entendemos tu idea",
    text: "Revisamos qué quieres crear, qué problema buscas resolver, a quién quieres ayudar y en qué etapa estás.",
  },
  {
    number: "02",
    title: "Estructuramos el modelo",
    text: "Organizamos la propuesta de valor, cliente ideal, canales de venta, costos, ingresos y recursos necesarios.",
  },
  {
    number: "03",
    title: "Creamos una ruta inicial",
    text: "Definimos qué debes validar primero y qué pasos seguir para construir un plan de negocio claro.",
  },
];

const deliverables = [
  "Diagnóstico de tu idea o proyecto de negocio.",
  "Claridad sobre tu cliente ideal y propuesta de valor.",
  "Revisión inicial de modelo de negocio, precios, costos y canales.",
  "Lista de puntos que debe incluir tu plan de negocio.",
  "Ruta de acción para validar, estructurar o lanzar tu negocio.",
];

const qualificationQuestions = [
  "¿Cuál es tu idea de negocio?",
  "¿En qué etapa estás: idea, empezando o ya vendiendo?",
  "¿Cuál es tu principal reto hoy?",
  "¿Quieres ayuda con plan de negocio, modelo de negocio, validación, números o estrategia de ventas?",
];

const paidServices = [
  {
    title: "Plan de Negocio Express",
    time: "1 semana",
    price: "Desde $390.000 COP",
    description: "Para emprendedores que necesitan ordenar rápidamente su idea y tener una ruta básica para empezar.",
    items: ["Modelo de negocio inicial", "Cliente ideal", "Propuesta de valor", "Primer plan de acción"],
  },
  {
    title: "Plan de Negocio Estratégico",
    time: "2 a 3 semanas",
    price: "Desde $1.200.000 COP",
    description: "Para emprendedores que quieren un documento más completo para ejecutar, presentar o buscar aliados.",
    items: ["Plan de negocio completo", "Modelo de ingresos", "Costos y precios", "Estrategia comercial", "Ruta de lanzamiento"],
  },
  {
    title: "Acompañamiento Emprendedor",
    time: "4 semanas",
    price: "Desde $2.000.000 COP",
    description: "Para emprendedores que quieren construir el plan contigo y recibir acompañamiento para tomar acción.",
    items: ["Sesiones semanales", "Plan de negocio", "Validación de idea", "Números iniciales", "Seguimiento estratégico"],
  },
];

const faqs = [
  {
    question: "¿Para quién es esta sesión gratuita?",
    answer:
      "Para emprendedores que quieren crear un negocio, ordenar una idea o construir un plan de negocio claro antes de invertir más tiempo o dinero.",
  },
  {
    question: "¿Necesito tener mi idea completamente definida?",
    answer:
      "No. Puedes llegar con una idea inicial, una idea avanzada o un negocio que apenas está empezando. La sesión te ayuda a ordenar lo que ya tienes.",
  },
  {
    question: "¿Qué es un plan de negocio?",
    answer:
      "Es una guía que organiza tu idea, cliente, propuesta de valor, forma de vender, costos, ingresos, recursos y pasos para ejecutar el proyecto.",
  },
  {
    question: "¿Cuánto dura la sesión?",
    answer:
      "La sesión es gratuita y dura aproximadamente 45 minutos. Es directa, práctica y enfocada en darte claridad para avanzar.",
  },
];

function SectionTag({ children }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D9A441]">
      {children}
    </p>
  );
}

function CtaButton({ children, variant = "primary", href = whatsappUrl }) {
  const styles =
    variant === "primary"
      ? "bg-[#D9A441] text-[#090B12] hover:bg-[#F1C45F] shadow-lg shadow-[#D9A441]/20"
      : "border border-white/15 text-white hover:bg-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition hover:scale-[1.02] ${styles}`}
    >
      {children}
    </a>
  );
}

export default function GabrielCastellanosLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      ["Inicio", "#inicio"],
      ["Sesión gratis", "#sesion"],
      ["Método", "#metodo"],
      ["Plan de negocio", "#plan"],
      ["Contacto", "#contacto"],
    ],
    []
  );

  return (
    <main id="inicio" className="min-h-screen bg-[#090B12] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090B12]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D9A441] font-black text-[#090B12]">
              GC
            </div>
            <div>
              <p className="text-sm font-bold leading-tight">Gabriel Castellanos</p>
              <p className="text-xs text-slate-400">Consultor para emprendedores</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-slate-300 transition hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#090B12] transition hover:bg-[#D9A441]"
            >
              Agendar gratis <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-slate-300"
                >
                  {label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D9A441] px-5 py-3 text-sm font-bold text-[#090B12]"
              >
                Agendar sesión gratis <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,164,65,0.26),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-4 py-2 text-sm font-semibold text-[#F5D28E]">
              <ShieldCheck size={16} /> Ideas de negocio · Plan de negocio · Estrategia
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Convierte tu idea en un <span className="text-[#D9A441]">plan de negocio claro</span> y accionable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ayudo a emprendedores que quieren crear un negocio a ordenar su idea, definir su modelo, entender sus números y construir una ruta para empezar con claridad.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaButton>
                Agendar sesión gratuita de 45 min <ArrowRight size={18} />
              </CtaButton>
              <CtaButton variant="secondary" href={LINKEDIN_URL}>
                Ver perfil en LinkedIn
              </CtaButton>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["45 min", "Sesión gratis"],
                ["Idea", "Estructura"],
                ["Plan", "Acción"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xl font-black text-[#D9A441]">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#D9A441]/20 blur-2xl" />
              <div className="rounded-[1.5rem] bg-[#111827] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-slate-200 text-2xl font-black text-[#090B12]">
                    GC
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Consultor para emprendedores</p>
                    <h2 className="text-2xl font-black">Gabriel Alonso Castellanos</h2>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-[#090B12] p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#D9A441]">Sesión gratuita</p>
                  <h3 className="mt-3 text-3xl font-black">Diseña las bases de tu negocio.</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    Una conversación estratégica para ordenar tu idea, validar prioridades y saber qué debes construir primero.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    [Clock3, "45 minutos", "Sesión gratuita"],
                    [Rocket, "Emprender", "De idea a acción"],
                    [FileText, "Plan de negocio", "Estructura clara"],
                    [MessageCircle, "WhatsApp", "+971 54 539 7901"],
                  ].map(([Icon, title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                      <Icon className="mb-3 text-[#D9A441]" size={22} />
                      <p className="font-bold">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.04] py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-center text-sm font-semibold text-slate-300 lg:px-8">
          <span>Ideas de negocio</span>
          <span className="hidden text-[#D9A441] sm:inline">•</span>
          <span>Planes de negocio</span>
          <span className="hidden text-[#D9A441] sm:inline">•</span>
          <span>Modelos de negocio</span>
          <span className="hidden text-[#D9A441] sm:inline">•</span>
          <span>Estrategia para emprendedores</span>
        </div>
      </section>

      <section className="bg-white py-20 text-[#090B12]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTag>Para quién es</SectionTag>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Para emprendedores que quieren crear un negocio o construir un plan de negocio profesional.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Si tienes una idea, pero necesitas estructura, claridad y dirección, esta sesión te ayuda a organizar lo esencial antes de avanzar.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mb-4 text-[#B8862E]" size={24} />
                  <p className="font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sesion" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTag>Sesión gratuita</SectionTag>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Una sesión para darle forma a tu idea y saber cómo avanzar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              En 45 minutos revisamos tu idea, tu cliente, tu propuesta de valor, tus números iniciales y los primeros pasos para construir tu plan de negocio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-[#D9A441]/15 p-4 text-[#D9A441]">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#F6F0E6] py-20 text-[#090B12]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionTag>Método</SectionTag>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                De una idea suelta a un proyecto con estructura.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                El objetivo es ayudarte a aterrizar tu idea para que puedas tomar mejores decisiones, evitar errores comunes y avanzar con una ruta clara.
              </p>
              <div className="mt-8">
                <CtaButton href={whatsappUrl}>Quiero mi sesión gratis <ArrowRight size={18} /></CtaButton>
              </div>
            </div>

            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.number} className="rounded-3xl bg-white p-6 shadow-xl">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#090B12] text-lg font-black text-[#D9A441]">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{step.title}</h3>
                      <p className="mt-2 leading-7 text-slate-700">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionTag>Plan de negocio</SectionTag>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Qué puedes empezar a construir después de la sesión.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Tendrás más claridad sobre los elementos básicos que necesita tu plan de negocio para presentar, validar o ejecutar tu idea.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
            <div className="space-y-5">
              {deliverables.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#D9A441]" size={22} />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#090B12]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <SectionTag>Oferta principal</SectionTag>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Agenda tu sesión gratuita de claridad de negocio.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Si tienes una idea o quieres crear un plan de negocio, revisemos juntos cómo estructurarla y cuál debería ser tu próximo paso.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-slate-200 bg-[#090B12] p-8 text-left text-white shadow-2xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#D9A441]">Sesión estratégica gratuita</p>
                <h3 className="mt-2 text-3xl font-black">Claridad de negocio</h3>
              </div>
              <div className="rounded-2xl bg-white/[0.06] px-5 py-4 text-center">
                <p className="text-3xl font-black text-[#D9A441]">45</p>
                <p className="text-xs text-slate-400">minutos</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Idea de negocio", "Cliente ideal", "Modelo de negocio", "Plan de acción"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <CheckCircle2 className="mb-3 text-[#D9A441]" size={22} />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D9A441] px-6 py-4 font-bold text-[#090B12] transition hover:scale-[1.01] hover:bg-[#F1C45F]"
            >
              Agendar gratis por WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F0E6] py-20 text-[#090B12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <SectionTag>Filtro de clientes</SectionTag>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Antes de la sesión, te haré 4 preguntas para entender tu idea.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Esto permite que la sesión gratuita sea más útil, directa y enfocada en lo que realmente necesitas para avanzar.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="space-y-4">
              {qualificationQuestions.map((question, index) => (
                <div key={question} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#090B12] font-black text-[#D9A441]">
                    {index + 1}
                  </div>
                  <p className="pt-2 font-semibold text-slate-700">{question}</p>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#090B12] px-6 py-4 font-bold text-white transition hover:scale-[1.01]"
            >
              Responder y agendar gratis <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTag>Después de la sesión gratuita</SectionTag>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Si quieres avanzar, puedes trabajar conmigo en tu plan de negocio.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              La sesión gratuita te da claridad inicial. Si decides continuar, estos son los servicios pagos para construir tu idea con más estructura.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {paidServices.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
                <div className="flex min-h-[180px] flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A441]">{service.time}</p>
                    <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                  </div>
                  <p className="mt-5 text-3xl font-black text-[#D9A441]">{service.price}</p>
                </div>

                <div className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-[#D9A441]" size={18} />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Empezar con sesión gratis <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preguntas" className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <SectionTag>Preguntas frecuentes</SectionTag>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">Antes de agendar</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <h3 className="text-lg font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#D9A441] py-20 text-[#090B12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em]">Contacto</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Da el primer paso para convertir tu idea en un negocio con estructura.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#2A210D]">
              Escríbeme por WhatsApp y cuéntame brevemente tu idea. Revisaremos cómo ordenarla y qué necesitas para crear un plan de negocio claro.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#090B12] p-6 text-white shadow-2xl">
            <h3 className="text-2xl font-black">Agendar sesión gratuita</h3>
            <p className="mt-3 leading-7 text-slate-300">
              WhatsApp: +971 54 539 7901
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D9A441] px-6 py-4 font-bold text-[#090B12] transition hover:bg-[#F1C45F]"
              >
                Escribirme por WhatsApp <MessageCircle size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Conectar en LinkedIn <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Gabriel Alonso Castellanos Restrepo. Consultoría para emprendedores, ideas de negocio y planes de negocio.</p>
      </footer>
    </main>
  );
}
