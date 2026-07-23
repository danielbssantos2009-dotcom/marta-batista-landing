import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState, Fragment } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
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
  const copy1 = "Sou Marta Batista, nutricionista graduada e pós-graduada em Nutrição Esportiva, Clínica e Saúde da Família. Acredito que cuidar da alimentação é cuidar de tudo o que sustenta você — sono, energia, autoestima, foco e presença.";
  const copy2 = "Meu trabalho une evidência científica atualizada, um olhar humano para cada história e planos possíveis de sustentar por toda a vida. Nada de dietas rígidas: aqui construímos uma relação nova, leve e definitiva com a comida.";

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0.15, filter: "blur(4px)", y: 5 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } 
    },
  };

  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32 flex flex-col items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 blob opacity-30"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--sage) 85%, transparent), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center gap-12 px-5 sm:px-8">
        
        {/* Centralized Image */}
        <Reveal>
          <div className="relative aspect-[4/5] w-[260px] sm:w-[320px] overflow-hidden shadow-float mx-auto"
            style={{ borderRadius: "58% 42% 45% 55% / 40% 55% 45% 60%" }}>
            <img
              src={martaPortrait}
              alt="Retrato de Marta Batista, nutricionista"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1008}
              height={1312}
            />
          </div>
        </Reveal>

        {/* Text Content */}
        <div className="flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
              Sobre Marta
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-[color:var(--moss)] text-balance sm:text-5xl lg:text-6xl max-w-3xl">
              Ciência, escuta e uma nutrição que{" "}
              <em className="font-normal" style={{ color: "var(--leaf)" }}>cabe na sua vida</em>.
            </h2>
          </Reveal>

          {/* Staggered Word Reveal */}
          <div className="mt-12 flex flex-col gap-8">
            {[copy1, copy2].map((text, pIndex) => (
              <motion.p
                key={pIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={containerVariant}
                className="text-[1.3rem] sm:text-[1.5rem] leading-[1.7] text-gray-500 font-medium max-w-3xl text-balance"
              >
                {text.split(" ").map((word, wIndex) => (
                  <Fragment key={wIndex}>
                    <motion.span variants={wordVariant} className="inline-block text-gray-600">
                      {word}
                    </motion.span>
                    {" "}
                  </Fragment>
                ))}
              </motion.p>
            ))}
          </div>

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

const TESTIMONIAL_ITEMS = [
  {
    name: "Camila R.",
    role: "Emagrecimento Saudável",
    text: "“Perdi 14kg em 8 meses sem dietas restritivas e sem passar fome. A Marta não me passou apenas um cardápio, ela me ensinou a entender a comida, não a me punir com ela. Recuperei minha autoestima, minha energia para brincar com meus filhos e finalmente fiz as pazes com o espelho. É uma transformação que vai muito além do peso corporal, é liberdade.”",
  },
  {
    name: "Bruna L.",
    role: "Nutrição Esportiva",
    text: "“Meu desempenho nos treinos mudou completamente depois que ajustamos a alimentação. Eu achava que precisava comer menos para secar, mas estava perdendo massa magra. Com o plano estratégico da Marta, ganhei massa muscular, fiquei muito mais forte e incrivelmente mais leve ao mesmo tempo. Minha recuperação muscular agora é simplesmente outra.”",
  },
  {
    name: "Isabela M.",
    role: "Saúde da Mulher",
    text: "“Sempre sofri com dores absurdas na TPM, meu intestino nunca funcionava direito e meu sono era péssimo. Achava que era o 'normal' do meu corpo. A nutrição me mostrou que não. Minha TPM praticamente sumiu, meu intestino virou um relógio e durmo a noite toda. Sinto que finalmente entendo e respeito o funcionamento do meu corpo.”",
  },
];

const Particles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["100%", "-20%"],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          className="absolute bottom-0 h-4 w-4 rounded-full bg-white blur-[4px]"
        />
      ))}
    </div>
  );
};

function TestimonialCard({ t, isActive, index, activeIdx }) {
  // 3D Motion Tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Amplified 3D Tilt for Active Card
  const rotateX = useTransform(smoothY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255,255,255,0.3), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Inactive card rotation (4 degrees back)
  const isLeftOfActive = index < activeIdx;
  const isRightOfActive = index > activeIdx;
  const idleRotateY = isLeftOfActive ? 4 : isRightOfActive ? -4 : 0;

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={false}
      animate={{
        flex: isActive ? 3.5 : 1,
        scale: isActive ? 1 : [0.996, 1, 0.996], // Inactive breathing (99.6% -> 100%)
        y: isActive ? [0, -3, 0] : 0, // Active breathing (0 -> -3px)
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{
        layout: { type: "spring", bounce: 0.15, duration: 1.2 }, 
        scale: isActive ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : { repeat: Infinity, duration: 9, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
        opacity: { duration: 0.8 }
      }}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : idleRotateY,
        transformStyle: "preserve-3d",
        transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"
      }}
      className={`group relative flex w-full flex-col overflow-hidden rounded-[48px] lg:h-full lg:w-auto origin-center will-change-transform ${
        isActive
          ? "h-auto shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6),inset_0_12px_35px_rgba(255,255,255,0.9),inset_0_-5px_20px_rgba(0,0,0,0.06),0_60px_120px_-20px_rgba(20,80,40,0.35)] bg-gradient-to-br from-white/60 via-white/30 to-[#8bb999]/20 backdrop-blur-2xl z-20"
          : "h-[300px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_4px_15px_rgba(255,255,255,0.7),inset_0_-2px_10px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(20,80,40,0.15)] bg-white/40 backdrop-blur-md z-10"
      }`}
    >
      {/* Dynamic Mouse Tracking Glare */}
      {isActive && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 rounded-[48px] mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}

      {/* Drifting Glass Reflection (Reflexo andando) */}
      <motion.div
        animate={{ left: ["-150%", "250%"] }}
        transition={{ duration: isActive ? 5 : 15, repeat: Infinity, ease: "linear", delay: isActive ? 0.65 : 0 }}
        className="pointer-events-none absolute top-0 bottom-0 w-[80%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 mix-blend-overlay"
      />

      {/* Content Container */}
      <div className="relative z-20 flex h-full w-full flex-col justify-between p-8 sm:p-12 lg:absolute lg:inset-0 lg:w-[900px]">
        {/* Quote & Text */}
        <div className="flex flex-col">
          <motion.div
            initial={false}
            animate={{ rotate: isActive ? 8 : 0, scale: isActive ? 1.1 : 1, opacity: isActive ? 0.8 : 0.4, y: isActive ? [0, -3, 0] : 0 }}
            transition={{ duration: 0.8, delay: isActive ? 0.15 : 0, type: "spring", y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
            style={{ transformOrigin: "top left" }}
          >
            <Quote className="h-12 w-12 text-[color:var(--leaf)] drop-shadow-md" strokeWidth={1.5} />
          </motion.div>
          
          <motion.blockquote
            initial={false}
            animate={{ y: isActive ? 0 : 40, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.8, delay: isActive ? 0.35 : 0, type: "spring", bounce: 0.2 }}
            className="mt-8 max-w-[650px] text-[1.1rem] leading-[1.85] text-[color:var(--moss)] drop-shadow-sm font-medium"
          >
            {t.text}
          </motion.blockquote>
        </div>

        {/* Footer (Avatar, Name, Stars) */}
        <div className="mt-10 flex max-w-[650px] items-center gap-5 border-t border-[color:var(--moss)]/10 pt-8">
          <motion.div
            initial={false}
            animate={isActive ? { scale: [1, 1.25, 1.1] } : { scale: 1 }}
            transition={{ duration: 0.8, delay: isActive ? 0.5 : 0, type: "spring" }}
            className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full font-display text-3xl text-cream transition-all duration-700 ${
              isActive ? "shadow-[0_15px_30px_-5px_rgba(20,80,40,0.5),inset_0_2px_5px_rgba(255,255,255,0.7)]" : "shadow-md"
            }`}
            style={{ background: "var(--gradient-cta)" }}
          >
            {t.name[0]}
          </motion.div>
          
          <div className="min-w-0 flex-1">
            <motion.div 
               initial={false}
               animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0.7 }}
               transition={{ duration: 0.6, delay: isActive ? 0.2 : 0 }}
               className="truncate font-display text-2xl text-[color:var(--moss)] drop-shadow-sm"
            >
               {t.name}
            </motion.div>
            <motion.div 
              initial={false}
              animate={{ x: isActive ? 0 : -15, opacity: isActive ? 1 : 0.6 }}
              transition={{ duration: 0.6, delay: isActive ? 0.25 : 0 }}
              className="truncate text-[12px] font-extrabold uppercase tracking-[0.25em] text-[color:var(--moss)]/70 mt-1"
            >
              {t.role}
            </motion.div>
          </div>
          
          <div className="ml-auto hidden shrink-0 text-[color:var(--gold)] sm:flex">
            {[0, 1, 2, 3, 4].map((s, starIdx) => (
              <motion.div
                key={s}
                initial={false}
                animate={{ scale: isActive ? [0, 1.3, 1] : 0, opacity: isActive ? 1 : 0 }}
                transition={{ delay: isActive ? 0.42 + starIdx * 0.08 : 0, duration: 0.5, type: "spring", bounce: 0.6 }}
              >
                <Star className={`h-[22px] w-[22px] fill-current ${isActive ? "drop-shadow-md" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  // Proximity-based Hover Logic
  const handleContainerMouseMove = (e: React.MouseEvent) => {
    isHovered.current = true;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x < width * 0.33) setActiveIdx(0);
    else if (x < width * 0.66) setActiveIdx(1);
    else setActiveIdx(2);
  };

  const handleContainerMouseLeave = () => {
    isHovered.current = false;
  };

  // Autoplay Logic (8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setActiveIdx((prev) => (prev + 1) % TESTIMONIAL_ITEMS.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-[#F4F7F5]">
      {/* Dust Particles */}
      <Particles />

      {/* AMBIENT INTELLIGENT BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Glow Tracking Active Card with Pulse */}
        <motion.div
          initial={false}
          animate={{ x: `${activeIdx * 100}%`, scale: [1, 1.08, 1] }}
          transition={{ 
            x: { type: "spring", damping: 40, stiffness: 60, delay: 0.1 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[10%] left-0 h-[80%] w-[50%] rounded-full bg-gradient-to-br from-[#8bb999]/50 to-[#3a7550]/20 blur-[120px] mix-blend-multiply opacity-70 will-change-transform"
        />
        {/* Slow Background Panning Light */}
        <motion.div
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-full bg-gradient-to-br from-transparent via-white/40 to-transparent blur-[100px] mix-blend-overlay will-change-transform"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--leaf)]">
              <motion.span animate={{ width: ["2rem", "1rem", "2rem"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-px bg-[color:var(--leaf)]" />
              Depoimentos
              <motion.span animate={{ width: ["2rem", "1rem", "2rem"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="h-px bg-[color:var(--leaf)]" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--moss)] sm:text-5xl text-balance drop-shadow-sm">
              Histórias reais de quem <em className="font-normal" style={{ color: "var(--leaf)" }}>voltou a respirar leveza</em>.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {/* Container with Proximity Tracker */}
          <div 
            ref={containerRef}
            onMouseMove={handleContainerMouseMove}
            onMouseLeave={handleContainerMouseLeave}
            className="mt-16 flex flex-col gap-6 lg:flex-row lg:h-[560px]"
          >
            {TESTIMONIAL_ITEMS.map((t, i) => (
              <TestimonialCard
                key={t.name}
                t={t}
                index={i}
                activeIdx={activeIdx}
                isActive={activeIdx === i}
              />
            ))}
          </div>
          
          {/* Progress Indicators */}
          <div className="mt-10 flex justify-center gap-3">
            {TESTIMONIAL_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Ver depoimento ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  activeIdx === idx ? "w-10 bg-[color:var(--leaf)] shadow-md" : "w-2.5 bg-[color:var(--moss)]/20 hover:bg-[color:var(--moss)]/40"
                }`}
              />
            ))}
          </div>
        </Reveal>
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