# AWARESPAN — Awareness Without Boundaries

> **Official Problem Statement:** An AI-Powered Safety Device.  
> **Repository:** [https://github.com/awarespan/awarespan](https://github.com/awarespan/awarespan)  
> **Official Contact Email:** [awarespan@bchbenjamin.in](mailto:awarespan@bchbenjamin.in)  
> **Academic Project ID:** 24UTAI13 · Atria Institute of Technology

The official landing page and public technical showcase for **AWARESPAN**, an intelligent, human-centred safety ecosystem combining edge AI, connected devices, software platforms, and distributed situational awareness.

---

## 🧭 About AWARESPAN

The name **AWARESPAN** reflects the project's dual focus:

- **AWARE:** Situational perception, real-time threat recognition, multi-modal sensing, and localized intelligence.
- **SPAN:** Extending situational awareness seamlessly across environments, connected devices, edge nodes, and communities.

AWARESPAN is not merely a CCTV product, a weapon detector, or a standalone Raspberry Pi gadget. It is an extensible safety technology platform engineered to transition safety infrastructure from passive post-incident recording to proactive, low-latency awareness.

### The Six Architectural Pillars

1. **Multi-Modal Detection:** CSI night-vision imaging (NoIR + IR illumination), thermal sensor arrays (MLX90640), and low-power PIR motion gating.
2. **Edge Intelligence:** On-device neural inference on Raspberry Pi 5 executing YOLOv8n/s models without mandatory cloud round-trips.
3. **Threat Assessment:** Two-stage contextual evaluation distinguishing actionable threats from ambient noise before triggering action.
4. **Proportional Response:** Proportional two-tier intervention balancing localized acoustic/visual deterrence with structured emergency escalation.
5. **Connected Infrastructure:** Distributed nodes syncing telemetry over MQTT (QoS 1) with offline SQLite queuing and Spring Boot / Neon PostgreSQL backend synchronization.
6. **Operator Experience:** Real-time native Android operator client (Kotlin, Jetpack Compose, Room cache) and web operational portal.

---

## ⚡ Getting Started & Local Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (Node.js 18+ or 20+ recommended).

### 1. Install Dependencies

Install project dependencies using `--legacy-peer-deps` to ensure compatibility across Vite, TanStack Start, and Nitro plugins:

```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server

Run the local Vite development server:

```bash
npm run dev
```

Open the local preview URL displayed in your terminal (typically `http://localhost:3000` or `http://localhost:5173`).

### 3. Build & Preview for Production

To produce a production build and preview it locally:

```bash
# Build the application (runs Vite build and the AWARESPAN SSR index patch)
npm run build

# Preview the built application
npm run preview
```

### 4. Code Quality & Formatting

```bash
# Run ESLint across TypeScript and React code
npm run lint

# Format code with Prettier
npm run format

# Run TypeScript typecheck
npx tsc --noEmit
```

---

## 📂 Project Structure

- **`src/routes/`** - File-based routing with TanStack Router:
  - [`__root.tsx`](src/routes/__root.tsx) - Root application layout, global head metadata, JSON-LD Schema.org structured data, and navigation.
  - [`index.tsx`](src/routes/index.tsx) - Homepage outlining the AWARESPAN vision, problem space, 6-pillar architecture, and official channels.
  - [`hardware.tsx`](src/routes/hardware.tsx) - Edge node hardware BOM, sensor specs, and distributed network resilience.
  - [`response.tsx`](src/routes/response.tsx) - Two-tier proportional threat assessment, active on-site deterrence, and emergency escalation.
  - [`team.tsx`](src/routes/team.tsx) - Project team, academic faculty guide, star faculty, and industry mentor details.
- **`src/components/`** - Reusable UI elements, navigation bar, and footer.
- **`src/lib/`** - Server utilities, error handling, and API helper functions.
- **`src/styles.css`** - Global CSS adhering strictly to the brutalist cybernetic terminal design system.
- **`public/`** - Static SEO assets (`llms.txt`, `robots.txt`, `sitemap.xml`, `favicon.svg`).
- **`scripts/patch-index.mjs`** - Post-build script ensuring TanStack Start SSR pipeline functions seamlessly on Vercel.

---

## 🛠️ Tech Stack & Design System

- **Framework:** [TanStack Start](https://tanstack.com/router/latest/docs/start/overview) (React 19)
- **Bundler / Server:** Vite + Nitro (Vercel Serverless SSR Preset)
- **Styling:** Tailwind CSS v4 with custom dark terminal tokens:
  - JetBrains Mono monospace typography.
  - Void (`#000000`), Carbon (`#111111`), Graphite (`#191919`), Iron (`#202020`), and Ember (`#da5c2c`) palette.
  - Zero-radius brutalist card aesthetics and subtle grid overlays.
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📬 Contact & Inquiries

For technical evaluation, academic review, and collaboration inquiries:

- **Email:** [awarespan@bchbenjamin.in](mailto:awarespan@bchbenjamin.in)
- **Repository:** [https://github.com/awarespan/awarespan](https://github.com/awarespan/awarespan)
