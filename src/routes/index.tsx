import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Cpu,
  Radio,
  ShieldAlert,
  Eye,
  Activity,
  Layers,
  Smartphone,
  CheckCircle2,
  Clock,
  Mail,
  GitBranch,
} from "lucide-react";
import { PageTransition, Reveal, TerminalLabel } from "../components/PageTransition";

const HERO_IMG =
  "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1920&q=80";

const REPO_URL = "https://github.com/awarespan/awarespan";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AWARESPAN — Awareness Without Boundaries" },
      {
        name: "description",
        content:
          "An AI-Powered Safety Device. AWARESPAN combines edge AI, connected devices, and distributed intelligence to deliver situational awareness without boundaries.",
      },
      {
        property: "og:title",
        content: "AWARESPAN — Awareness Without Boundaries",
      },
      {
        property: "og:description",
        content:
          "An AI-Powered Safety Device. A distributed intelligent safety ecosystem combining edge AI, multi-modal sensing, and proactive response.",
      },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:title", content: "AWARESPAN — Awareness Without Boundaries" },
      {
        name: "twitter:description",
        content:
          "An AI-Powered Safety Device. Scalable, human-centred edge AI situational awareness and proactive safety ecosystem.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { k: "25%", v: "conventional apprehension rate in unmonitored sectors" },
  { k: "15–30 min", v: "average emergency dispatch delay in isolated zones" },
  { k: "< 500 ms", v: "sensor-to-assessment edge processing target" },
];

const architecturePillars = [
  {
    num: "01",
    title: "Multi-Modal Detection",
    desc: "Synchronous capture across visual (1080p NoIR), thermal (MLX90640), and low-power PIR motion sensors.",
    status: "IMPLEMENTED (PROTOTYPE)",
    isImplemented: true,
    icon: Eye,
  },
  {
    num: "02",
    title: "Edge Intelligence",
    desc: "Local neural inference on Raspberry Pi 5 executing YOLOv8n/s models without mandatory cloud round-trips.",
    status: "IMPLEMENTED (PROTOTYPE)",
    isImplemented: true,
    icon: Cpu,
  },
  {
    num: "03",
    title: "Threat Assessment",
    desc: "Contextual two-stage evaluation validating entity classification, threat severity, and persistence prior to action.",
    status: "IMPLEMENTED (PROTOTYPE)",
    isImplemented: true,
    icon: ShieldAlert,
  },
  {
    num: "04",
    title: "Proportional Response",
    desc: "Localized acoustic/strobe deterrence for tier-1 triggers; structured alert dispatch for tier-2 emergencies.",
    status: "IN ACTIVE VALIDATION",
    isImplemented: false,
    icon: Activity,
  },
  {
    num: "05",
    title: "Connected Infrastructure",
    desc: "Distributed node telemetry over MQTT with offline SQLite queuing and Spring Boot / Neon PostgreSQL backend sync.",
    status: "IMPLEMENTED (PROTOTYPE)",
    isImplemented: true,
    icon: Layers,
  },
  {
    num: "06",
    title: "Operator Experience",
    desc: "Native Android application with live incident stream, offline Room caching, and centralized web operational portal.",
    status: "IMPLEMENTED (BETA)",
    isImplemented: true,
    icon: Smartphone,
  },
];

const sdgs = [
  {
    code: "SDG 11",
    title: "Sustainable Cities & Communities",
    desc: "Proactive situational awareness to protect vulnerable transit corridors and public spaces.",
  },
  {
    code: "SDG 03",
    title: "Good Health & Well-being",
    desc: "Accelerates emergency awareness for road accidents, physical assaults, and medical trauma.",
  },
  {
    code: "SDG 09",
    title: "Industry, Innovation & Infrastructure",
    desc: "Resilient edge compute and fault-tolerant communications designed to operate even during infrastructure dropouts.",
  },
];

function HomePage() {
  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] overflow-hidden border-b border-iron">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-void/85" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-24">
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-ember">
                &gt; AWARESPAN // intelligent-safety-ecosystem
              </span>
              <span className="border border-iron bg-carbon px-2 py-0.5 text-[10px] text-fog">
                PROBLEM STATEMENT: AN AI-POWERED SAFETY DEVICE
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-paper sm:text-6xl md:text-7xl">
              AWARENESS
              <br />
              WITHOUT
              <br />
              <span className="text-ember">BOUNDARIES</span>
              <span className="ml-2 inline-block h-[0.85em] w-[0.5em] translate-y-[0.05em] bg-ember align-baseline animate-pulse" />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-base text-fog md:text-lg leading-relaxed">
              Conventional systems record events after harm has already occurred.{" "}
              <strong className="text-paper font-semibold">AWARESPAN</strong> extends situational
              awareness across environments, physical locations, connected devices, and human
              operators. Combining edge AI, connected sensing, and human-centred deterrence,
              AWARESPAN establishes an extensible safety ecosystem built for proactive threat
              mitigation.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/response"
                className="inline-flex items-center justify-between gap-4 border border-ember bg-ember px-6 py-3 text-sm font-bold text-void transition-all hover:bg-paper hover:border-paper"
              >
                <span>[ THREAT RESPONSE WORKFLOW ]</span>
                <span className="text-void">→</span>
              </Link>
              <Link
                to="/hardware"
                className="inline-flex items-center justify-between gap-4 border border-iron bg-transparent px-6 py-3 text-sm text-paper transition-colors hover:border-paper"
              >
                <span>[ INSPECT HARDWARE ARCHITECTURE ]</span>
                <span className="text-ember">→</span>
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 border border-iron bg-carbon px-5 py-3 text-sm text-paper transition-all hover:border-ember"
              >
                <GitBranch className="h-4 w-4 text-ember" />
                <span>REPOSITORY</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-steel transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-steel">
              <span>
                <span className="text-ember">●</span> system_status: prototype_phase_2
              </span>
              <span>project_id: 24UTAI13</span>
              <span>institution: atria.edu</span>
              <span>contact: awarespan@bchbenjamin.in</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND PHILOSOPHY: AWARE + SPAN */}
      <section className="border-b border-iron py-20 bg-carbon/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>brand_philosophy.md</TerminalLabel>
            <h2 className="text-2xl font-bold text-paper sm:text-3xl">
              Understanding the AWARESPAN Paradigm
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-fog leading-relaxed">
              AWARESPAN is intentionally engineered beyond conventional CCTV recorders, isolated
              sensor boards, or weapon detectors. It unites edge intelligence, connected nodes,
              software platforms, and human judgment.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full border border-iron bg-void p-8">
                <div className="flex items-center gap-3">
                  <span className="border border-ember px-2 py-0.5 text-xs uppercase tracking-widest text-ember font-bold">
                    AWARE
                  </span>
                  <span className="text-xs uppercase tracking-widest text-steel">
                    intelligence & perception
                  </span>
                </div>
                <h3 className="mt-4 text-xl text-paper">Proactive Situational Awareness</h3>
                <p className="mt-3 text-sm text-fog leading-relaxed">
                  Real-time threat recognition, environmental perception, and multi-modal sensory
                  fusion. Rather than streaming raw unanalyzed video feeds to distant servers, each
                  node maintains local contextual intelligence, identifying abnormal events before
                  they escalate into severe harm.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full border border-iron bg-void p-8">
                <div className="flex items-center gap-3">
                  <span className="border border-ember px-2 py-0.5 text-xs uppercase tracking-widest text-ember font-bold">
                    SPAN
                  </span>
                  <span className="text-xs uppercase tracking-widest text-steel">
                    scale & extensibility
                  </span>
                </div>
                <h3 className="mt-4 text-xl text-paper">Extending Reach Across Environments</h3>
                <p className="mt-3 text-sm text-fog leading-relaxed">
                  The capability to bridge awareness across physical spaces, diverse hardware nodes,
                  software backends, and community stakeholders. Scalable beyond a single isolated
                  street corner to campus perimeters, transit lines, and municipal safety networks.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM STRIP */}
      <section className="border-b border-iron py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>problem_statement.md</TerminalLabel>
            <div className="border-l-2 border-ember pl-4">
              <span className="text-xs uppercase tracking-widest text-ember">
                OFFICIAL PROBLEM STATEMENT
              </span>
              <h2 className="mt-1 text-2xl font-bold text-paper md:text-3xl">
                An AI-Powered Safety Device.
              </h2>
            </div>
            <p className="mt-6 max-w-3xl text-fog leading-relaxed">
              Traditional municipal surveillance remains fundamentally{" "}
              <span className="text-ash line-through">passive</span>: footage is stored for forensic
              review after a crime has occurred. Operators face cognitive fatigue monitoring dozens
              of monitors, and damaged cameras leave critical corridors dark. AWARESPAN changes the
              operating posture from passive observation to proactive, human-centred situational
              awareness.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px bg-iron sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.05}>
                <div className="h-full bg-void p-6">
                  <p className="text-3xl text-ember md:text-4xl">{s.k}</p>
                  <p className="mt-3 text-sm text-fog">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6-PILLAR ECOSYSTEM ARCHITECTURE */}
      <section className="border-b border-iron py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>ecosystem_architecture.md</TerminalLabel>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-3xl text-paper md:text-4xl font-bold">
                  The Six Architectural Pillars
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-fog">
                  How detection, edge intelligence, threat assessment, proportional response,
                  connected infrastructure, and operator workflows integrate into a cohesive safety
                  technology platform.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-steel">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-ember" /> Implemented
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-ash" /> In Validation
                </span>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px bg-iron sm:grid-cols-2 lg:grid-cols-3">
            {architecturePillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.04}>
                <div className="flex h-full flex-col justify-between bg-void p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-steel">{p.num}</span>
                      <span
                        className={`text-[10px] font-mono tracking-wider px-2 py-0.5 border ${
                          p.isImplemented
                            ? "border-ember/40 bg-ember/10 text-ember"
                            : "border-slate bg-carbon text-ash"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center border border-iron bg-carbon">
                        <p.icon className="h-4 w-4 text-ember" />
                      </div>
                      <h3 className="text-lg font-semibold text-paper">{p.title}</h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-fog">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Reveal delay={0.2}>
              <div className="border border-iron bg-carbon">
                <div className="flex items-center justify-between border-b border-iron px-4 py-2 text-xs text-steel">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-ember" />
                    system_pipeline_flow.txt
                  </span>
                  <span>ecosystem_spec · read_only</span>
                </div>
                <pre className="overflow-x-auto p-6 text-xs leading-relaxed text-fog md:text-sm font-mono">
                  {`[ 01: MULTI-MODAL DETECTION ]
  ├── Visual: 1080p NoIR Camera + IR Illuminator (CSI)
  ├── Thermal: MLX90640 32x24 Array (I2C)
  ├── Low-Power Wake: PIR Motion Sensor (GPIO Interrupt)
  └── Audio: ReSpeaker Dual-MEMS Microphone (I2S)
                 │
                 ▼  sensor synchronization
[ 02: EDGE INTELLIGENCE CORE — Raspberry Pi 5 ]
  ├── YOLOv8n Object & Anomaly Inference (TFLite / PyTorch)
  └── Local Feature Verification (zero cloud dependency for detection)
                 │
                 ▼  confidence & context evaluation
[ 03: THREAT ASSESSMENT ENGINE ]
  ├── Evaluates threat severity, entity type, and persistence
  └── Selects proportional action pathway
                 │
        ┌────────┴────────┐
   deterrable        non-deterrable
        │                 │
        ▼                 ▼
[ 04: PROPORTIONAL RESPONSE ]
  ├── Tier 1: Localized Acoustic & LED Strobe Deterrence (On-site)
  └── Tier 2: Automated Structured Escalation Packaging (< 500ms target)
                 │
                 ▼
[ 05: CONNECTED INFRASTRUCTURE ]
  ├── MQTT Telemetry Broker (QoS 1) + REST Fallback
  ├── Offline SQLite Queue for Uninterrupted Resiliency
  └── Spring Boot + Neon PostgreSQL Central Event Repository
                 │
                 ▼
[ 06: OPERATOR EXPERIENCE ]
  ├── Native Android Operator Application (Real-time WebSockets & Room DB)
  └── Centralized Web Operational Portal & Verified Repositories`}
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SDG ALIGNMENT */}
      <section className="border-b border-iron py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>sdg_alignment.md</TerminalLabel>
            <h2 className="text-3xl text-paper md:text-4xl font-bold">
              Aligned to UN Sustainable Development Goals
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-fog">
              Engineering safety technologies that contribute directly to sustainable urban
              development and community well-being.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sdgs.map((s, i) => {
              const Icon = i === 0 ? ShieldAlert : i === 1 ? Radio : Cpu;
              return (
                <Reveal key={s.code} delay={i * 0.05}>
                  <article className="h-full border-l-2 border-ember bg-graphite p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-ember font-bold">
                        {s.code}
                      </span>
                      <Icon className="h-4 w-4 text-steel" />
                    </div>
                    <h3 className="mt-4 text-lg text-paper">{s.title}</h3>
                    <p className="mt-3 text-sm text-fog leading-relaxed">{s.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICIAL CONTACT & ENGAGEMENT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="border border-iron bg-carbon p-8 md:p-12">
            <Reveal>
              <TerminalLabel>collaboration_and_evaluation.md</TerminalLabel>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-paper md:text-3xl">
                    Engineered for Rigorous Evaluation
                  </h2>
                  <p className="mt-4 text-sm text-fog leading-relaxed">
                    AWARESPAN is built openly and systematically for technical evaluators, academic
                    faculty, prospective collaborators, and industry partners. We welcome inquiries
                    regarding our edge models, hardware testbenches, and deployment architecture.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="mailto:awarespan@bchbenjamin.in"
                      className="inline-flex items-center gap-2 border border-ember bg-ember px-5 py-2.5 text-xs font-bold text-void transition-all hover:bg-paper hover:border-paper"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>awarespan@bchbenjamin.in</span>
                    </a>
                    <a
                      href={REPO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-iron bg-void px-5 py-2.5 text-xs text-paper transition-all hover:border-ember"
                    >
                      <GitBranch className="h-3.5 w-3.5 text-ember" />
                      <span>github.com/awarespan/awarespan</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-steel" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-iron pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 text-xs text-fog space-y-3 font-mono">
                  <div className="flex items-baseline justify-between border-b border-iron pb-2">
                    <span className="text-steel">PROJECT_NAME:</span>
                    <span className="text-paper">AWARESPAN</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-iron pb-2">
                    <span className="text-steel">TAGLINE:</span>
                    <span className="text-ember">Awareness Without Boundaries.</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-iron pb-2">
                    <span className="text-steel">STATEMENT:</span>
                    <span className="text-paper">An AI-Powered Safety Device.</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-iron pb-2">
                    <span className="text-steel">INSTITUTION:</span>
                    <span className="text-paper">Atria Institute of Technology</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-steel">CONTACT:</span>
                    <span className="text-paper">awarespan@bchbenjamin.in</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
