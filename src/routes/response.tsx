import { createFileRoute } from "@tanstack/react-router";
import {
  Siren,
  Volume2,
  AlertTriangle,
  ShieldAlert,
  Radio,
  PhoneCall,
  Activity,
  Zap,
} from "lucide-react";
import { PageTransition, Reveal, TerminalLabel } from "../components/PageTransition";

export const Route = createFileRoute("/response")({
  head: () => ({
    meta: [
      { title: "Threat Response System — AWARESPAN" },
      {
        name: "description",
        content:
          "An AI-Powered Safety Device. Proportional two-tier threat assessment and response workflow: on-site active deterrence and low-latency emergency escalation.",
      },
      { property: "og:title", content: "AWARESPAN Threat Response System" },
      {
        property: "og:description",
        content:
          "Proportional threat assessment and response workflows balancing human-centred on-site deterrence with structured emergency escalation.",
      },
      { name: "twitter:title", content: "Threat Response System — AWARESPAN" },
      {
        name: "twitter:description",
        content:
          "An AI-Powered Safety Device. Proportional two-tier threat assessment and response workflow: on-site active deterrence and low-latency emergency escalation.",
      },
    ],
  }),
  component: ResponsePage,
});

function ResponsePage() {
  return (
    <PageTransition>
      {/* HEADER */}
      <section className="border-b border-iron py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>threat_assessment_and_response.md</TerminalLabel>
            <h1 className="max-w-4xl text-4xl text-paper md:text-6xl font-bold">
              Two tiers.
              <br />
              <span className="text-ember">Proportional</span> intervention.
            </h1>
            <p className="mt-6 max-w-3xl text-fog leading-relaxed">
              Every sensory event passes through AWARESPAN&apos;s edge assessment engine. The
              pipeline evaluates entity classification, environmental context, and threat
              persistence before selecting an intervention pathway — preventing alarm fatigue while
              ensuring rapid, structured escalation during severe incidents.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIER 1 */}
      <section className="border-b border-iron py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <article className="border-l-2 border-ember bg-graphite p-8">
              <div className="flex items-center gap-3">
                <span className="border border-ember px-2 py-0.5 text-xs uppercase tracking-widest text-ember font-bold">
                  tier_1
                </span>
                <span className="text-xs uppercase tracking-widest text-ash">
                  localized deterrence
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-paper">Active On-Site Deterrence</h2>
              <p className="mt-4 text-fog leading-relaxed">
                Wildlife incursions, perimeter loitering, and restricted-zone trespass. The edge
                node confirms the entity signature locally, then triggers targeted acoustic bursts
                and directional strobe warnings directly from the hardware — resolving localized
                anomalies without unnecessary authority dispatch.
              </p>

              <ul className="mt-6 space-y-2 text-sm font-mono">
                <SpecRow k="trigger" v="Perimeter trespass / loitering / animal intrusion" />
                <SpecRow k="model" v="YOLOv8n edge classifier" />
                <SpecRow k="actuation" v="GPIO-driven directional strobe + acoustic emitter" />
                <SpecRow k="latency" v="~ 200 ms localized trigger" />
                <SpecRow k="status" v="Implemented in hardware prototype" />
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <FlowStep
                icon={Activity}
                title="DETECT"
                body="Multi-sensor telemetry crosses confidence baseline."
              />
              <FlowStep
                icon={AlertTriangle}
                title="ASSESS"
                body="Classifier verifies entity signature, filtering environmental false positives."
              />
              <FlowStep
                icon={Volume2}
                title="DETER"
                body="Localized acoustic pulse activated to discourage unauthorized intrusion."
              />
              <FlowStep
                icon={Siren}
                title="WARN"
                body="Directional LED strobe signals proactive awareness."
              />
              <FlowStep
                icon={Zap}
                title="ESCALATE?"
                body="If threat persists or severity escalates → transitions to Tier 2."
                last
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIER 2 */}
      <section className="border-b border-iron py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-4">
              <FlowStep
                icon={Activity}
                title="IDENTIFY"
                body="Assessment engine classifies high-severity actionable threat."
              />
              <FlowStep
                icon={ShieldAlert}
                title="PACKAGE"
                body="Encodes GPS coordinates, timestamped clip, class ID, and confidence."
              />
              <FlowStep
                icon={Radio}
                title="STREAM"
                body="Transmits incident package over MQTT (QoS 1) with offline SQLite backup."
              />
              <FlowStep
                icon={PhoneCall}
                title="DISPATCH"
                body="Real-time WebSocket alerts delivered to Android operator application."
              />
              <FlowStep
                icon={Siren}
                title="RESOLVE"
                body="Event permanently recorded in central database for incident audit."
                last
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="border-l-2 border-ember bg-graphite p-8">
              <div className="flex items-center gap-3">
                <span className="border border-ember px-2 py-0.5 text-xs uppercase tracking-widest text-ember font-bold">
                  tier_2
                </span>
                <span className="text-xs uppercase tracking-widest text-ash">
                  emergency escalation
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-paper">
                Structured Emergency Escalation
              </h2>
              <p className="mt-4 text-fog leading-relaxed">
                Armed threats, physical violence, vehicular accidents, and critical emergencies. The
                node bundles verifiable forensic telemetry and dispatches structured alerts to
                system operators, shrinking conventional response delays through immediate,
                actionable situational awareness.
              </p>

              <ul className="mt-6 space-y-2 text-sm font-mono">
                <SpecRow
                  k="trigger"
                  v="Visual weapons / violence / road accidents / medical emergencies"
                />
                <SpecRow k="pipeline" v="YOLOv8s + acoustic feature verification" />
                <SpecRow k="channels" v="MQTT + REST API + WebSocket real-time broadcast" />
                <SpecRow
                  k="payload"
                  v="Timestamp, geolocation, bounding box snapshot, confidence"
                />
                <SpecRow k="status" v="Backend & Android operator app operational (Phase 2)" />
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>tier_comparison.tbl</TerminalLabel>
            <h2 className="text-3xl text-paper md:text-4xl font-bold">
              Tier 1 vs Tier 2 Comparison
            </h2>
            <p className="mt-2 text-sm text-fog">
              Comparing operational scopes, actuation mechanisms, and response latency targets.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10 overflow-x-auto border border-iron font-mono">
              <table className="w-full text-left text-sm">
                <thead className="bg-carbon text-xs uppercase tracking-widest text-steel">
                  <tr>
                    <th className="border-b border-iron p-4">attribute</th>
                    <th className="border-b border-l border-iron p-4 text-paper">
                      tier_1 · localized deterrence
                    </th>
                    <th className="border-b border-l border-iron p-4 text-paper">
                      tier_2 · emergency escalation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "trigger",
                      "Animal intrusion, loitering, perimeter trespass",
                      "Weapons, assault, vehicle collisions, fire",
                    ],
                    ["model", "YOLOv8n edge anomaly model", "YOLOv8s + multi-modal verification"],
                    [
                      "actuation",
                      "Directional strobe & acoustic warning",
                      "Structured alert dispatch & operator streaming",
                    ],
                    [
                      "networking",
                      "On-device edge actuation (fully local)",
                      "Cellular LTE Cat-4 + MQTT + REST fallback",
                    ],
                    [
                      "target latency",
                      "~ 200 ms local response",
                      "< 500 ms structured packaging target",
                    ],
                    [
                      "implementation",
                      "Validated on RPi 5 hardware testbed",
                      "Validated with Spring Boot backend & Android client",
                    ],
                  ].map(([a, b, c]) => (
                    <tr key={a} className="border-b border-iron last:border-b-0">
                      <td className="p-4 text-ember font-semibold">{a}</td>
                      <td className="border-l border-iron p-4 text-fog">{b}</td>
                      <td className="border-l border-iron p-4 text-fog">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex flex-col gap-1 border-b border-iron pb-2 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="w-28 shrink-0 text-xs uppercase tracking-widest text-steel">{k}</span>
      <span className="text-paper">{v}</span>
    </li>
  );
}

function FlowStep({
  icon: Icon,
  title,
  body,
  last,
}: {
  icon: typeof Activity;
  title: string;
  body: string;
  last?: boolean;
}) {
  return (
    <div className="relative font-mono">
      <div className="flex gap-4 border border-iron bg-carbon p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-iron bg-graphite">
          <Icon className="h-4 w-4 text-ember" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-ember font-bold">{title}</p>
          <p className="mt-1 text-sm text-fog font-sans">{body}</p>
        </div>
      </div>
      {!last && <div className="ml-9 h-4 w-px bg-iron" aria-hidden />}
    </div>
  );
}
