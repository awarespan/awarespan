import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu,
  Camera,
  Thermometer,
  Radar,
  Mic,
  Radio,
  Battery,
  Network,
  ArrowUpRight,
} from "lucide-react";
import { PageTransition, Reveal, TerminalLabel } from "../components/PageTransition";

export const Route = createFileRoute("/hardware")({
  head: () => ({
    meta: [
      { title: "Hardware Architecture — AWARESPAN" },
      {
        name: "description",
        content:
          "An AI-Powered Safety Device. High-performance edge compute, multi-modal sensing arrays, and resilient network architecture powering AWARESPAN.",
      },
      { property: "og:title", content: "AWARESPAN Hardware Architecture" },
      {
        property: "og:description",
        content:
          "Detailed technical specifications for the AWARESPAN edge node, multi-modal sensors, and distributed network topology.",
      },
      { name: "twitter:title", content: "Hardware Architecture — AWARESPAN" },
      {
        name: "twitter:description",
        content:
          "An AI-Powered Safety Device. High-performance edge compute, multi-modal sensing arrays, and resilient network architecture powering AWARESPAN.",
      },
    ],
  }),
  component: HardwarePage,
});

type Part = {
  id: string;
  name: string;
  role: string;
  statusBadge: string;
  icon: typeof Cpu;
  span: string;
  specs: { k: string; v: string }[];
  note?: string;
};

const parts: Part[] = [
  {
    id: "rpi5",
    name: "Raspberry Pi 5 (4GB)",
    role: "edge_core",
    statusBadge: "IMPLEMENTED (PROTOTYPE)",
    icon: Cpu,
    span: "md:col-span-2 md:row-span-2",
    specs: [
      { k: "cpu", v: "Quad Cortex-A76 @ 2.4 GHz" },
      { k: "ram", v: "4 GB LPDDR4X" },
      { k: "io", v: "PCIe 2.0 · USB-C PD 27 W" },
      { k: "inference", v: "YOLOv8n/s · TFLite · PyTorch" },
      { k: "status", v: "Settled hardware baseline" },
    ],
    note: "Executes the on-device inference pipeline locally. Production upgrade path: Raspberry Pi AI HAT+ with Hailo-10H NPU (up to 40 TOPS).",
  },
  {
    id: "cam",
    name: "RPi Camera Module 3 Wide (NoIR)",
    role: "visual_input",
    statusBadge: "IMPLEMENTED (PROTOTYPE)",
    icon: Camera,
    span: "md:col-span-2",
    specs: [
      { k: "sensor", v: "Sony IMX708 · 12 MP" },
      { k: "fov", v: "120° wide angle" },
      { k: "interface", v: "CSI · 30 fps @ 1080p" },
      { k: "night", v: "External 850nm IR illuminator" },
    ],
  },
  {
    id: "thermal",
    name: "MLX90640 Thermal Sensor",
    role: "thermal_telemetry",
    statusBadge: "IMPLEMENTED (PROTOTYPE)",
    icon: Thermometer,
    span: "",
    specs: [
      { k: "res", v: "32 × 24 pixels" },
      { k: "fov", v: "110° field of view" },
      { k: "range", v: "0–80 °C · ±1.5 °C accuracy" },
      { k: "bus", v: "I2C · 4 Hz refresh" },
    ],
  },
  {
    id: "pir",
    name: "PIR Motion Sensor",
    role: "wake_trigger",
    statusBadge: "IMPLEMENTED (PROTOTYPE)",
    icon: Radar,
    span: "",
    specs: [
      { k: "type", v: "Passive infrared detector" },
      { k: "draw", v: "< 50 μA quiescent idle" },
      { k: "role", v: "Gated low-power standby" },
      { k: "wake", v: "GPIO hardware interrupt" },
    ],
  },
  {
    id: "mic",
    name: "ReSpeaker 2-Mic Pi HAT",
    role: "acoustic_sensing",
    statusBadge: "IN VALIDATION",
    icon: Mic,
    span: "md:col-span-2",
    specs: [
      { k: "type", v: "Dual MEMS · omnidirectional" },
      { k: "snr", v: "65 dB signal-to-noise" },
      { k: "interface", v: "I2S direct bus" },
      { k: "processing", v: "MFCC feature extraction" },
      { k: "target", v: "Acoustic anomaly verification" },
    ],
  },
  {
    id: "lte",
    name: "SIM7600E-H 4G HAT",
    role: "cellular_uplink",
    statusBadge: "IMPLEMENTED (PROTOTYPE)",
    icon: Radio,
    span: "",
    specs: [
      { k: "standard", v: "LTE Cat-4 + 3G/2G fallback" },
      { k: "bands", v: "B1/B3/B5/B8/B40/B41" },
      { k: "gnss", v: "High-precision GPS integrated" },
      { k: "protocol", v: "MQTT (QoS 1) + REST + SMS" },
    ],
  },
  {
    id: "deter",
    name: "Proportional Deterrent Module",
    role: "tier_1_actuator",
    statusBadge: "IMPLEMENTED (PROTOTYPE)",
    icon: Radio,
    span: "",
    specs: [
      { k: "audio", v: "Wide-frequency acoustic emitter" },
      { k: "visual", v: "High-lumen directional LED strobe" },
      { k: "drive", v: "MOSFET switch via GPIO" },
      { k: "trigger", v: "Proportional ML activation" },
    ],
  },
  {
    id: "power",
    name: "Solar & Battery Management Pack",
    role: "field_power",
    statusBadge: "FIELD TEST READY",
    icon: Battery,
    span: "md:col-span-2",
    specs: [
      { k: "battery", v: "Li-ion cell pack (swappable)" },
      { k: "solar", v: "20 W PV panel + MPPT controller" },
      { k: "duty", v: "PIR-gated standby minimizes draw" },
      { k: "uptime", v: "Designed for off-grid operations" },
    ],
  },
];

function HardwarePage() {
  return (
    <PageTransition>
      {/* HEADER */}
      <section className="border-b border-iron py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>hardware_architecture.md</TerminalLabel>
            <h1 className="max-w-4xl text-4xl text-paper md:text-6xl font-bold">
              The AWARESPAN
              <br />
              <span className="text-ember">Edge Node</span> Architecture.
            </h1>
            <p className="mt-6 max-w-3xl text-fog leading-relaxed">
              The physical node implementation serves as the foundational edge tier of the AWARESPAN
              intelligent safety ecosystem. Engineered with modular, accessible components, each
              node delivers localized AI inference, multi-modal sensor fusion, and autonomous threat
              mitigation while reporting status to the central platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://sip-video.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 border border-ember bg-ember px-6 py-3 text-sm font-bold text-void transition-all hover:bg-paper hover:border-paper"
              >
                <span>[ 3D HARDWARE VISUALIZATION ]</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/awarespan/awarespan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-iron bg-carbon px-6 py-3 text-sm text-paper transition-all hover:border-ember"
              >
                <span>[ HARDWARE SCHEMATICS & REPO ]</span>
                <span className="text-ember">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="border-b border-iron py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <Reveal>
              <TerminalLabel>bill_of_materials.md</TerminalLabel>
              <h2 className="text-2xl font-bold text-paper md:text-3xl">
                Edge Node Component Specifications
              </h2>
              <p className="mt-2 text-sm text-fog">
                Evaluated for real-time edge inference throughput, low-light night-vision fidelity,
                minimal standby current draw, and field repairability.
              </p>
            </Reveal>
          </div>

          <div className="grid auto-rows-[minmax(180px,_auto)] gap-px bg-iron md:grid-cols-4">
            {parts.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04} className={p.span}>
                <article className="flex h-full flex-col bg-graphite p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-iron bg-carbon">
                      <p.icon className="h-5 w-5 text-ember" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-steel">
                        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                        {p.role}
                      </span>
                      <span className="border border-iron bg-carbon px-1.5 py-0.5 text-[9px] font-mono text-ash">
                        {p.statusBadge}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-paper">{p.name}</h3>
                  <ul className="mt-4 space-y-1.5 text-xs font-mono">
                    {p.specs.map((s) => (
                      <li key={s.k} className="flex items-baseline gap-3 border-b border-iron pb-1">
                        <span className="w-20 shrink-0 text-steel">{s.k}</span>
                        <span className="text-fog">{s.v}</span>
                      </li>
                    ))}
                  </ul>
                  {p.note && (
                    <p className="mt-4 border-l-2 border-ember pl-3 text-xs text-ash">{p.note}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MESH RESILIENCE */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <TerminalLabel>distributed_network_resilience.md</TerminalLabel>
            <h2 className="text-3xl font-bold text-paper md:text-5xl">
              Distributed Nodes.
              <br />
              <span className="text-ember">Continuous</span> Protection.
            </h2>
            <p className="mt-6 text-fog leading-relaxed">
              In conventional systems, damaging a single camera creates an unmonitored dead zone.
              AWARESPAN is designed around distributed node communication. Connected edge nodes
              exchange periodic heartbeat telemetry with the shared backend infrastructure and
              neighbouring peers.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              If a node experiences sudden power termination, physical tampering, or network
              isolation, adjacent nodes recognize the failure and dynamically adjust sensing
              thresholds and reporting frequency to safeguard surrounding sectors.
            </p>
            <div className="mt-4 border border-iron bg-carbon p-3 text-xs text-ash">
              <span className="font-semibold text-paper">Engineering Note:</span> Periodic heartbeat
              monitoring and cloud event aggregation are operational; dynamic P2P sensitivity
              expansion algorithms are undergoing validation in simulated network testbenches.
            </div>
            <ul className="mt-6 space-y-2 text-sm font-mono">
              <li className="flex items-baseline gap-3 border-b border-iron pb-2">
                <span className="w-32 shrink-0 text-xs uppercase tracking-widest text-steel">
                  telemetry
                </span>
                <span className="text-paper">MQTT (QoS 1) + REST Fallback</span>
              </li>
              <li className="flex items-baseline gap-3 border-b border-iron pb-2">
                <span className="w-32 shrink-0 text-xs uppercase tracking-widest text-steel">
                  storage
                </span>
                <span className="text-paper">Local SQLite offline transaction queue</span>
              </li>
              <li className="flex items-baseline gap-3 border-b border-iron pb-2">
                <span className="w-32 shrink-0 text-xs uppercase tracking-widest text-steel">
                  heartbeat
                </span>
                <span className="text-paper">Periodic health telemetry & state-sync</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="w-32 shrink-0 text-xs uppercase tracking-widest text-steel">
                  cellular
                </span>
                <span className="text-paper">LTE Cat-4 via SIM7600E-H</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <MeshDiagram />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

function MeshDiagram() {
  const nodes = [
    { id: 1, x: 18, y: 22, dead: false },
    { id: 2, x: 50, y: 12, dead: false },
    { id: 3, x: 82, y: 22, dead: false },
    { id: 4, x: 50, y: 50, dead: true },
    { id: 5, x: 22, y: 78, dead: false },
    { id: 6, x: 78, y: 78, dead: false },
  ];
  const edges: [number, number, boolean][] = [
    [1, 2, false],
    [2, 3, false],
    [1, 4, true],
    [3, 4, true],
    [2, 4, true],
    [4, 5, true],
    [4, 6, true],
    [1, 5, false],
    [3, 6, false],
    [5, 6, false],
  ];

  return (
    <div className="border border-iron bg-carbon">
      <div className="flex items-center justify-between border-b border-iron px-4 py-2 text-xs text-steel font-mono">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ember" />
          network_mesh_topology.svg
        </span>
        <span>node_4 = OFFLINE · rerouting active</span>
      </div>
      <div className="relative aspect-square w-full grid-bg">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          {edges.map(([a, b, dashed], idx) => {
            const na = nodes.find((n) => n.id === a)!;
            const nb = nodes.find((n) => n.id === b)!;
            const isDead = na.dead || nb.dead;
            return (
              <line
                key={idx}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke={isDead ? "#3a3a3a" : "#da5c2c"}
                strokeWidth={isDead ? 0.2 : 0.35}
                strokeDasharray={dashed || isDead ? "1 1.5" : "0"}
                opacity={isDead ? 0.4 : 0.9}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>
        {nodes.map((n) => (
          <div
            key={n.id}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center font-mono"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center border ${
                n.dead ? "border-slate bg-void text-steel" : "border-ember bg-graphite text-ember"
              }`}
            >
              {n.dead ? <Network className="h-4 w-4" /> : <Cpu className="h-4 w-4" />}
            </div>
            <span
              className={`mt-1 text-[10px] uppercase tracking-widest ${
                n.dead ? "text-steel line-through" : "text-fog"
              }`}
            >
              node_{n.id}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-iron px-4 py-2 text-xs text-ash font-mono">
        <span className="text-ember">●</span> ember routes = active telemetry sync · dashed =
        traffic re-routed around simulated offline node
      </div>
    </div>
  );
}
