import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  HeartPulse,
  Apple,
  Scale,
  Salad,
  Brain,
  Baby,
  Dumbbell,
  Stethoscope,
  MessageCircle,
  ArrowRight,
  Check,
  Star,
  Instagram,
  Quote,
  User,
} from "lucide-react";

import heroOrganic from "@/assets/hero-organic.jpg";
import nutritionBowl from "@/assets/nutrition-bowl.jpg";
import glassLeaf from "@/assets/glass-leaf.png";
import martaPortrait from "@/assets/marta-portrait.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Marta Batista — Nutricionista | Nutrição que transforma" },
      {
        name: "description",
        content:
          "Nutrição clínica personalizada com Marta Batista: acompanhamento humano, ciência e resultados reais para uma vida mais saudável, leve e equilibrada.",
      },
      { property: "og:title", content: "Marta Batista — Nutricionista" },
      {
        property: "og:description",
        content:
          "Uma jornada personalizada para uma vida mais saudável, leve e equilibrada.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%20Marta%2C%20quero%20agendar%20minha%20consulta%20nutricional%20";

/* -------- Reveal on scroll -------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 1, 
        delay: delay / 1000, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------- Primary CTA -------- */
function CTAButton({
  children,
  large = false,
  variant = "primary",
}: {
  children: React.ReactNode;
  large?: boolean;
  variant?: "primary" | "ghost";
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-tight transition-all duration-500 hover:-translate-y-0.5";
  const size = large ? "px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-lg" : "px-6 py-3 text-sm sm:text-base";
  const styles =
    variant === "primary"
      ? "text-cream shadow-[0_15px_30px_-10px_color-mix(in_oklab,var(--leaf)_50%,transparent)] hover:shadow-[0_25px_50px_-12px_color-mix(in_oklab,var(--leaf)_60%,transparent)] overflow-hidden"
      : "text-[color:var(--moss)] border border-[color:var(--leaf)]/25 bg-white/50 backdrop-blur-md hover:bg-white/80";
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${base} ${size} ${styles}`}>
      {variant === "primary" && (
        <>
          <span
            className="absolute inset-0 rounded-full"
            style={{ background: "var(--gradient-cta)" }}
          />
          <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.25)_50%,transparent_100%)] bg-[length:200%_100%] animate-[shimmer_2.5s_infinite]" />
          <span className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
            style={{ background: "var(--gradient-cta)" }} />
        </>
      )}
      <span className="relative flex items-center gap-3">
        {children}
      </span>
    </a>
  );
}

/* -------- Organic decorative blobs -------- */
function Blobs() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] blob breathe opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--sage) 90%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-40 h-[600px] w-[600px] blob-2 float-slow opacity-50"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, color-mix(in oklab, var(--leaf) 55%, transparent), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
    </>
  );
}

/* ================= HEADER ================= */
function Header() {
  return (
    <header className="absolute left-1/2 top-6 z-50 flex w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 items-center justify-between px-2 sm:px-4">
      <div className="flex items-center gap-2.5">
        <div className="leading-tight">
          <div className="font-display text-[20px] font-medium sm:text-[22px] text-[color:var(--moss)]">Marta Batista</div>
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[color:var(--leaf)]/80">
            Nutricionista
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-8 text-sm text-[color:var(--moss)]/80 md:flex">
        <a href="#sobre" className="hover:text-[color:var(--leaf)] transition-colors">Sobre</a>
        <a href="#abordagem" className="hover:text-[color:var(--leaf)] transition-colors">Abordagem</a>
        <a href="#especialidades" className="hover:text-[color:var(--leaf)] transition-colors">Especialidades</a>
        <a href="#processo" className="hover:text-[color:var(--leaf)] transition-colors">Processo</a>
      </div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-2 rounded-full border border-[color:var(--leaf)]/20 bg-white/40 px-5 py-2.5 text-sm text-[color:var(--moss)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/60 sm:inline-flex"
      >
        <MessageCircle className="h-4 w-4" />
        Agendar
      </a>
    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-6" style={{ background: "var(--gradient-hero)" }}>
      <Blobs />

      {/* Decorative floating background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Reveal delay={400}>
          <img
            src={glassLeaf}
            alt=""
            className="absolute left-[5%] top-[15%] h-24 w-24 -rotate-12 opacity-50 float-slow drop-shadow-[0_20px_40px_rgba(60,100,60,0.15)] sm:h-40 sm:w-40 lg:left-[12%] lg:top-[20%]"
          />
        </Reveal>
        <Reveal delay={600}>
          <img
            src={glassLeaf}
            alt=""
            className="absolute right-[2%] top-[40%] h-20 w-20 scale-x-[-1] rotate-45 opacity-40 float-slower drop-shadow-[0_20px_40px_rgba(60,100,60,0.15)] sm:h-32 sm:w-32 lg:right-[10%] lg:top-[45%]"
          />
        </Reveal>
        {/* Soft abstract orbs */}
        <div className="absolute bottom-[10%] left-[15%] h-64 w-64 rounded-full opacity-40 float-slow" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--sage) 80%, transparent), transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute right-[15%] top-[10%] h-80 w-80 rounded-full opacity-30 float-slower" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--leaf) 50%, transparent), transparent 70%)", filter: "blur(50px)" }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center text-center px-5 py-24 sm:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--moss)]">
            <Sparkles className="h-3.5 w-3.5" />
            Nutrição clínica &amp; funcional
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-[52px] leading-[0.95] tracking-tight text-[color:var(--moss)] text-balance sm:text-[76px] lg:text-[104px]">
            Uma nutrição que{" "}
            <span className="relative inline-block">
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg, var(--leaf), var(--gold))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                respira
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8 C 50 2, 150 2, 198 8"
                  stroke="var(--leaf)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </span>{" "}
            com você.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[color:var(--moss)]/75 sm:text-2xl">
            Um acompanhamento nutricional humano, científico e sob medida —
            construído para transformar sua rotina, seu corpo e sua relação com a comida.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <CTAButton large>
              <MessageCircle className="h-5 w-5" />
              Agendar consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CTAButton>
            <a href="#sobre" className="text-sm font-medium text-[color:var(--moss)] underline-offset-4 hover:underline">
              Conhecer a abordagem
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-sm text-[color:var(--moss)]/70 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.78 0.09 ${120 + i * 20}), oklch(0.55 0.11 ${140 + i * 15}))`,
                    }}
                  />
                ))}
              </div>
              <span>+3.400 pacientes</span>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-[color:var(--moss)]/30 sm:block" />
            <div className="flex items-center gap-1.5">
              <div className="flex text-[color:var(--gold)]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>4.9 · avaliações reais</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust marquee */}
      <div className="relative z-10 flex w-[105%] left-1/2 -translate-x-1/2 flex-col items-center justify-center overflow-hidden py-10">
        {/* Ribbon 1 - Left */}
        <div className="relative z-10 flex w-full flex-col border-y border-white/90 bg-white/60 py-4 shadow-[0_20px_40px_-15px_color-mix(in_oklab,var(--moss)_40%,transparent)] backdrop-blur-xl">
          <div className="marquee flex w-max items-center gap-10 whitespace-nowrap px-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[color:var(--moss)]/80">
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={`m1-${r}`} className="flex items-center gap-10">
                <span>Nutrição Clínica</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Emagrecimento Saudável</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Nutrição Esportiva</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Saúde da Mulher</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Comportamento Alimentar</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Performance Mental</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Qualidade de Sono</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Autonomia Alimentar</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2 - Right */}
        <div className="relative z-0 flex w-full flex-col border-b border-white/50 bg-white/30 py-4 shadow-[0_15px_40px_-15px_color-mix(in_oklab,var(--moss)_20%,transparent)] backdrop-blur-md">
          <div className="marquee-reverse flex w-max items-center gap-10 whitespace-nowrap px-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[color:var(--moss)]/70">
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={`m2-${r}`} className="flex items-center gap-10">
                <span>Foco & Disposição</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Reeducação Alimentar</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Nutrição Funcional</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Saúde Intestinal</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Longevidade</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Equilíbrio Metabólico</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Acompanhamento Personalizado</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
                <span>Rotina Leve</span><Leaf className="h-3.5 w-3.5 text-[color:var(--leaf)]/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SOBRE ================= */
function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] blob opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--sage) 85%, transparent), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden shadow-float"
              style={{ borderRadius: "58% 42% 45% 55% / 40% 55% 45% 60%" }}
            >
              <img
                src={martaPortrait}
                alt="Retrato de Marta Batista, nutricionista"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1008}
                height={1312}
              />
            </div>
            <div className="absolute -bottom-6 -right-2 glass rounded-3xl p-5 sm:-right-6 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-display text-[color:var(--leaf)]">10+</div>
                <div className="text-sm leading-tight text-[color:var(--moss)]/80">
                  anos<br />de prática<br />clínica
                </div>
              </div>
            </div>
            <div
              className="absolute -left-6 top-10 h-20 w-20 rounded-full float-slow"
              style={{ background: "var(--gradient-cta)", opacity: 0.9 }}
              aria-hidden
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
              <span className="h-px w-8 bg-[color:var(--leaf)]" />
              Sobre Marta
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--moss)] text-balance sm:text-5xl lg:text-6xl">
              Ciência, escuta e uma nutrição que{" "}
              <em className="font-normal" style={{ color: "var(--leaf)" }}>cabe na sua vida</em>.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--moss)]/75">
              Sou <strong className="font-medium text-[color:var(--moss)]">Marta Batista</strong>, nutricionista graduada e
              pós-graduada em Nutrição Esportiva, Clínica e Saúde da Família. Acredito que
              cuidar da alimentação é cuidar de tudo o que sustenta você — sono, energia,
              autoestima, foco e presença.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--moss)]/75">
              Meu trabalho une evidência científica atualizada, um olhar humano para
              cada história e planos possíveis de sustentar por toda a vida. Nada de
              dietas rígidas: aqui construímos uma relação nova, leve e definitiva com a comida.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "Pós", v: "Nutrição Esportiva" },
                { k: "Especialista", v: "Clínica &amp; Funcional" },
                { k: "Foco", v: "Saúde da Família" },
                { k: "Método", v: "Personalizado e humano" },
              ].map((it) => (
                <div key={it.k} className="glass rounded-2xl p-4">
                  <div className="text-[11px] uppercase tracking-widest text-[color:var(--moss)]/60">{it.k}</div>
                  <div
                    className="mt-1 text-sm font-medium text-[color:var(--moss)]"
                    dangerouslySetInnerHTML={{ __html: it.v }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= ABORDAGEM ================= */
function Approach() {
  const pillars = [
    {
      icon: Brain,
      title: "Ciência aplicada",
      text: "Protocolos baseados em evidência atualizada, adaptados à sua realidade e histórico.",
    },
    {
      icon: HeartPulse,
      title: "Cuidado humano",
      text: "Escuta ativa, acolhimento e planos que consideram sua rotina, gostos e emoções.",
    },
    {
      icon: Leaf,
      title: "Sustentável",
      text: "Nada de dietas restritivas. Hábitos leves que se mantêm pela vida toda.",
    },
    {
      icon: Sparkles,
      title: "Resultado real",
      text: "Foco em saúde e composição corporal com transformação visível e duradoura.",
    },
  ];
  return (
    <section id="abordagem" className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] blob-2 opacity-40"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--leaf) 40%, transparent), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
              <span className="h-px w-8 bg-[color:var(--leaf)]" /> Abordagem
              <span className="h-px w-8 bg-[color:var(--leaf)]" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--moss)] sm:text-5xl">
              Quatro princípios que sustentam <em className="font-normal" style={{ color: "var(--leaf)" }}>sua jornada</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:pb-24">
          {pillars.map((p, i) => (
            <div key={p.title} className={`h-full ${i % 2 === 1 ? 'lg:translate-y-20' : ''}`}>
              <Reveal delay={i * 100}>
                <div className="h-full" style={{ animation: `float-y 6s ease-in-out ${i * -1.5}s infinite` }}>
                  <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[32px] glass p-7 transition-all duration-700 hover:shadow-float lg:min-h-[380px]">
                    
                    {/* Subtle ambient glow inside the glass card */}
                    <div 
                      className="absolute -inset-10 opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:scale-110" 
                      style={{ 
                        background: `radial-gradient(circle at ${i % 2 === 0 ? '80% 80%' : '20% 80%'}, var(--sage) 0%, transparent 60%)`, 
                        filter: 'blur(30px)' 
                      }} 
                    />
                    
                    {/* Top Pill */}
                    <div className="relative z-10 w-max rounded-full border border-[color:var(--moss)]/10 bg-white/40 px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[color:var(--moss)]/80 backdrop-blur-md">
                      Princípio 0{i + 1}
                    </div>

                    {/* Bottom Content */}
                    <div className="relative z-10 mt-auto flex flex-col gap-4">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-cream transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm" 
                        style={{ background: "var(--gradient-cta)" }}
                      >
                        <p.icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-[color:var(--moss)] leading-[1.1] tracking-tight">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--moss)]/70">
                          {p.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ESPECIALIDADES ================= */
function Specialties() {
  const items = [
    { icon: Scale, title: "Emagrecimento saudável", text: "Redução de gordura com preservação de massa magra." },
    { icon: Dumbbell, title: "Nutrição esportiva", text: "Performance, força e recuperação para quem treina." },
    { icon: Stethoscope, title: "Nutrição clínica", text: "Diabetes, colesterol, hipertensão e saúde metabólica." },
    { icon: Salad, title: "Reeducação alimentar", text: "Comportamento e relação saudável com a comida." },
    { icon: Baby, title: "Saúde da família", text: "Crianças, gestantes e mulheres em todas as fases." },
    { icon: Apple, title: "Nutrição funcional", text: "Intestino, hormônios, sono e energia em equilíbrio." },
  ];
  return (
    <section id="especialidades" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
                <span className="h-px w-8 bg-[color:var(--leaf)]" /> Especialidades
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--moss)] sm:text-5xl lg:text-[56px] text-balance">
                Cuidado que atravessa <em className="font-normal" style={{ color: "var(--leaf)" }}>cada fase da sua vida</em>.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--moss)]/70">
                Uma abordagem completa que se adapta ao seu momento — do primeiro passo à
                manutenção definitiva dos seus resultados.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="relative mt-10 aspect-square max-w-sm overflow-hidden shadow-float"
                   style={{ borderRadius: "58% 42% 48% 52% / 52% 45% 55% 48%" }}>
                <img src={nutritionBowl} alt="Bowl saudável de quinoa, abacate e vegetais"
                     className="h-full w-full object-cover" loading="lazy" width={1200} height={1408} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={i * 70}>
                  <div className="group relative h-full overflow-hidden rounded-[24px] border border-[color:var(--moss)]/10 bg-white/80 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--leaf)]/40 hover:shadow-float">
                    <div
                      className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{ background: "var(--gradient-cta)" }}
                      aria-hidden
                    />
                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--sage)]/30 text-[color:var(--leaf)] transition-all group-hover:bg-[color:var(--leaf)] group-hover:text-cream">
                        <it.icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-4 font-display text-xl text-[color:var(--moss)]">{it.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--moss)]/65">{it.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BENEFÍCIOS ================= */
function Benefits() {
  const list = [
    "Mais energia e disposição no dia a dia",
    "Sono mais profundo e reparador",
    "Emagrecimento sem sofrimento nem restrição",
    "Digestão leve e intestino em equilíbrio",
    "Autoestima e confiança em transformação",
    "Exames laboratoriais em melhora contínua",
    "Foco, clareza mental e produtividade",
    "Liberdade real na sua relação com a comida",
  ];
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, color-mix(in oklab, var(--sage) 40%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
              <span className="h-px w-8 bg-[color:var(--leaf)]" /> Benefícios
              <span className="h-px w-8 bg-[color:var(--leaf)]" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--moss)] sm:text-5xl text-balance">
              O que muda quando a nutrição <em className="font-normal" style={{ color: "var(--leaf)" }}>volta ao seu favor</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {list.map((b, i) => (
            <Reveal key={b} delay={i * 50}>
              <div className="group flex items-center gap-4 rounded-2xl glass px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glass">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-cream transition-transform duration-500 group-hover:rotate-12"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <span className="text-base leading-snug text-[color:var(--moss)]/85">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESSO ================= */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Avaliação profunda",
      text: "Anamnese detalhada, histórico, exames, rotina, gostos e objetivos. Aqui, você é ouvida por inteiro.",
    },
    {
      n: "02",
      title: "Plano sob medida",
      text: "Um protocolo alimentar único, com receitas, quantidades e estratégias que cabem na sua vida real.",
    },
    {
      n: "03",
      title: "Acompanhamento contínuo",
      text: "Ajustes, suporte por mensagem e retornos regulares. Você nunca caminha sozinha.",
    },
    {
      n: "04",
      title: "Transformação duradoura",
      text: "Autonomia, resultados sustentáveis e uma nova relação, definitiva, com a alimentação.",
    },
  ];
  return (
    <section id="processo" className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
              <span className="h-px w-8 bg-[color:var(--leaf)]" /> Como funciona
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--moss)] sm:text-5xl text-balance">
              Uma jornada guiada, do primeiro <em className="font-normal" style={{ color: "var(--leaf)" }}>oi</em> à sua nova versão.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-[28px] glass p-7 transition-all duration-500 hover:-translate-y-2">
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "var(--gradient-cta)" }}
                  aria-hidden
                />
                <div
                  className="font-display text-6xl leading-none"
                  style={{
                    background: "linear-gradient(180deg, var(--leaf), color-mix(in oklab, var(--leaf) 20%, transparent))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="relative mt-4 font-display text-xl text-[color:var(--moss)]">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[color:var(--moss)]/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= DEPOIMENTOS ================= */
function Testimonials() {
  const items = [
    {
      name: "Camila R.",
      role: "Emagrecimento saudável",
      text: "“Perdi 14kg em 8 meses sem passar fome. A Marta me ensinou a comer, não a me punir. Recuperei minha autoestima e minha energia.”",
    },
    {
      name: "Bruna L.",
      role: "Nutrição esportiva",
      text: "“Meu desempenho nos treinos mudou completamente. Ganhei massa magra, muito mais forte e mais leve ao mesmo tempo.”",
    },
    {
      name: "Isabela M.",
      role: "Saúde da mulher",
      text: "“Minha TPM, meu intestino e meu sono melhoraram muito. Sinto que finalmente entendi o meu corpo.”",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAF7] py-32 font-sans">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0E5A2E]">
              <span className="h-px w-8 bg-[#0E5A2E]/30" /> Depoimentos
              <span className="h-px w-8 bg-[#0E5A2E]/30" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[2.75rem] leading-[1.1] tracking-tight text-[#0E5A2E] sm:text-5xl text-balance">
              Histórias reais de quem <em className="font-normal text-[#5DAA72] italic">voltou a respirar leveza</em>.
            </h2>
          </Reveal>
        </div>

        {/* CARDS CAROUSEL */}
        <div className="relative mt-24 flex flex-col items-center justify-center gap-10 lg:-mx-12 lg:flex-row lg:gap-0">
          {items.map((t, i) => {
            const isCenter = i === 1;

            return (
              <div
                key={t.name}
                className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] lg:w-[38%] ${
                  isCenter ? "z-20 lg:scale-[1.15]" : "z-0 lg:scale-[0.9] lg:opacity-95"
                }`}
              >
                <div
                  className={`group relative flex h-full min-h-[440px] flex-col justify-between rounded-[40px] p-8 sm:p-10 transition-all duration-700 ${
                    isCenter
                      ? "bg-gradient-to-br from-[#c5dec9] via-[#8bb999] to-[#4c8a62] shadow-[0_40px_100px_-20px_rgba(45,122,72,0.4),inset_0_2px_5px_rgba(255,255,255,0.9),inset_0_-2px_5px_rgba(0,0,0,0.05)] border border-white/60 backdrop-blur-2xl"
                      : "bg-[#FFFFFF] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] border border-[#EEF2EF] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  {/* GLARE EFFECT FOR CENTER CARD */}
                  {isCenter && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]">
                      {/* Sharp diagonal glass glare exactly like screenshot-3 */}
                      <div className="absolute -top-[30%] left-[35%] h-[160%] w-[150%] origin-top-left rotate-[22deg] bg-gradient-to-r from-white/70 via-white/10 to-transparent blur-[1px]" />
                      {/* Edge highlight */}
                      <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/30" />
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* TOP ICON BADGE */}
                    <div
                      className={`flex h-[72px] w-[72px] items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-105 ${
                        isCenter
                          ? "bg-white shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] text-[#0E5A2E]"
                          : "bg-white border border-[#EEF2EF] shadow-[0_4px_15px_-5px_rgba(0,0,0,0.03)] text-[#0E5A2E]"
                      }`}
                    >
                      <User className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    {/* TITLE & TEXT */}
                    <div className="mt-10">
                      <h3
                        className={`font-display text-[2.5rem] leading-[1.1] tracking-tight text-[#0E5A2E] ${
                          isCenter ? "drop-shadow-sm" : ""
                        }`}
                      >
                        {t.name}
                      </h3>
                      <p
                        className={`mt-4 text-[15px] leading-[1.65] text-[#0E5A2E] ${
                          isCenter ? "opacity-90" : "opacity-60"
                        }`}
                      >
                        {t.text}
                      </p>
                    </div>
                  </div>

                  {/* FOOTER CAPSULE */}
                  <div
                    className={`relative z-10 mt-12 flex items-center justify-between rounded-[24px] p-2.5 transition-all duration-500 ${
                      isCenter
                        ? "bg-white/95 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-white/80"
                        : "bg-white border border-[#EEF2EF] shadow-[0_5px_20px_-5px_rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {/* LEFT PILL */}
                    <div className="flex items-center gap-2.5 rounded-[18px] border border-[#EEF2EF] bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0E5A2E]/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]">
                      <User className="h-3.5 w-3.5 text-[#0E5A2E]" strokeWidth={2.5} />
                      <span className="truncate">{t.role}</span>
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-2">
                      {/* Quote button */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-[18px] border border-[#EEF2EF] bg-white text-[#0E5A2E]/40 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] transition-colors hover:text-[#5DAA72]">
                        <Quote className="h-4 w-4" strokeWidth={2.5} />
                      </div>
                      
                      {/* Star button */}
                      <div
                        className={`flex shrink-0 items-center gap-2 rounded-[18px] px-5 py-2.5 text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${
                          isCenter
                            ? "bg-[#0E5A2E] text-white shadow-[0_8px_20px_-6px_rgba(14,90,46,0.5)] border border-[#0E5A2E]"
                            : "bg-white text-[#0E5A2E] border border-[#EEF2EF] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        <Star className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                        5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= FINAL CTA ================= */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[36px] px-6 py-16 text-center sm:rounded-[48px] sm:px-14 sm:py-24"
            style={{ background: "var(--gradient-cta)" }}
          >
            {/* Decorative blobs */}
            <div
              aria-hidden
              className="absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-40 blob breathe"
              style={{ background: "color-mix(in oklab, white 30%, transparent)", filter: "blur(20px)" }}
            />
            <div
              aria-hidden
              className="absolute -right-20 bottom-0 h-80 w-80 rounded-full opacity-30 blob-2 float-slow"
              style={{ background: "color-mix(in oklab, var(--gold) 60%, transparent)", filter: "blur(30px)" }}
            />
            <img
              src={glassLeaf}
              alt=""
              aria-hidden
              className="absolute -left-6 top-1/2 hidden h-40 w-40 -translate-y-1/2 opacity-70 float-slow md:block"
            />
            <img
              src={glassLeaf}
              alt=""
              aria-hidden
              className="absolute -right-4 top-1/2 hidden h-40 w-40 -translate-y-1/2 scale-x-[-1] opacity-70 float-slower md:block"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Vagas limitadas por semana
              </div>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
                Sua próxima versão <em className="font-normal" style={{ color: "var(--sage)" }}>começa hoje</em>.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Agende sua consulta pelo WhatsApp e receba, em poucos minutos, uma resposta
                pessoal para dar o primeiro passo da sua jornada.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-[color:var(--moss)] shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] sm:px-10 sm:py-5 sm:text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar pelo WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] text-white/70">
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5" />
                  Atendimento presencial &amp; online
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5" />
                  Resposta em minutos
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--moss)]/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-cream"
            style={{ background: "var(--gradient-cta)" }}
          >
            <Leaf className="h-4 w-4" strokeWidth={1.8} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[color:var(--moss)]">Marta Batista</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--moss)]/50">
              Nutricionista
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-[color:var(--moss)]/60 md:text-left">
          © {new Date().getFullYear()} Marta Batista Nutrição · Todos os direitos reservados
        </div>
        <a
          href="https://instagram.com/nutri.martabatista"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-[color:var(--moss)] transition-all hover:-translate-y-0.5"
        >
          <Instagram className="h-4 w-4" />
          @nutri.martabatista
        </a>
      </div>
    </footer>
  );
}

/* ================= PAGE ================= */
function LandingPage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Approach />
      <Specialties />
      <Benefits />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}