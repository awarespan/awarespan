import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageTransition, Reveal, TerminalLabel } from "../components/PageTransition";

import raghunandanImg from "../images/Raghunandan.jpg";
import benjaminImg from "../images/Benjamin.jpg";
import saniyaImg from "../images/Saniya.png";
import naveenImg from "../images/Naveen.jpg";
import anipriyaImg from "../images/Anipriya.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Project Team — AWARESPAN" },
      {
        name: "description",
        content:
          "Academic guidance, student researchers, and industry mentorship behind the AWARESPAN safety ecosystem at Atria Institute of Technology.",
      },
      { property: "og:title", content: "AWARESPAN Project Team & Institution" },
      {
        property: "og:description",
        content:
          "Faculty mentors, core researchers, and industry advisors behind AWARESPAN — Awareness Without Boundaries.",
      },
      { name: "twitter:title", content: "Project Team — AWARESPAN" },
      {
        name: "twitter:description",
        content:
          "Academic guidance, student researchers, and industry mentorship behind the AWARESPAN safety ecosystem at Atria Institute of Technology.",
      },
    ],
  }),
  component: TeamPage,
});

const guide = {
  name: "Dr. Raghunandan G H",
  role: "Faculty Guide · Professor and Assoc. Dean, CDC",
  linkedin: "https://www.linkedin.com/in/dr-raghunandan-g-h-64479014/",
  avatar: raghunandanImg,
};

const coreTeam = [
  {
    name: "B C H Benjamin",
    role: "Team Lead · CSE",
    linkedin: "https://www.linkedin.com/in/bchbenjamin/",
    avatar: benjaminImg,
  },
  {
    name: "Saniya J",
    role: "CSE",
    linkedin: "https://www.linkedin.com/in/saniya-j-saniya-44b656355/",
    avatar: saniyaImg,
  },
];

const otherMembers = [
  { name: "Chetan S", role: "ECE" },
  { name: "Aydin Hasan K S", role: "ECE" },
  { name: "Chandan B D", role: "ECE" },
];

const starFaculty = {
  name: "Dr. Naveen Kumar B",
  role: "Star Faculty · Professor, ISE",
  linkedin: "https://www.linkedin.com/in/dr-naveen-kumar-b-35b83980/",
  avatar: naveenImg,
};

const industryMentor = {
  name: "Mrs. Anipriya N",
  role: "Industry Mentor",
  linkedin: "https://www.linkedin.com/in/anipriya/",
  avatar: anipriyaImg,
};

type ProfileMember = {
  name: string;
  role: string;
  linkedin?: string;
  avatar: string;
};

function HorizontalProfile({ member }: { member: ProfileMember }) {
  return (
    <div className="border border-iron bg-carbon p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
      <img
        src={member.avatar}
        alt={member.name}
        className="w-24 h-24 rounded-full border border-slate bg-void object-cover"
        loading="lazy"
      />
      <div className="flex-1">
        <h4 className="text-xl text-paper">{member.name}</h4>
        <p className="mt-1 text-base text-steel">{member.role}</p>
      </div>
      {member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto md:mt-0 flex items-center gap-2 border-b border-ember pb-1 text-sm text-paper hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors group font-mono"
        >
          <svg
            className="w-5 h-5 fill-current group-hover:fill-[#0a66c2] transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="group-hover:text-[#0a66c2] transition-colors">LinkedIn</span>{" "}
          <span className="text-ember group-hover:text-[#0a66c2] transition-colors">→</span>
        </a>
      ) : (
        <span className="mt-auto md:mt-0 text-sm text-steel font-mono">[ Profile ]</span>
      )}
    </div>
  );
}

function TeamPage() {
  return (
    <PageTransition>
      <section className="border-b border-iron py-24 min-h-[92vh]">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <TerminalLabel>team_and_institution.md</TerminalLabel>
            <h2 className="max-w-3xl text-3xl text-paper md:text-4xl font-bold">
              Project Team & Institution
            </h2>
            <div className="mt-6 border-l-2 border-ember pl-6">
              <p className="text-xl font-bold text-paper">Atria Institute of Technology</p>
              <p className="mt-2 text-sm text-fog">An Autonomous Institution, Bengaluru — 560024</p>
              <p className="mt-1 text-sm font-mono text-ember">
                AWARESPAN · Academic Project ID: 24UTAI13
              </p>
              <p className="mt-1 text-xs text-fog">
                Problem Statement: An AI-Powered Safety Device.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
              <a
                href="mailto:awarespan@bchbenjamin.in"
                className="inline-flex items-center gap-2 border border-iron bg-carbon px-4 py-2 text-paper hover:border-ember transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-ember" />
                <span>awarespan@bchbenjamin.in</span>
              </a>
              <a
                href="https://github.com/awarespan/awarespan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-iron bg-carbon px-4 py-2 text-paper hover:border-ember transition-colors"
              >
                <span>github.com/awarespan/awarespan</span>
                <ArrowUpRight className="h-3 w-3 text-steel" />
              </a>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal delay={0.1}>
              <h3 className="text-xl text-paper mb-6 font-mono">&gt; faculty_guide</h3>
            </Reveal>
            <Reveal delay={0.15}>
              <HorizontalProfile member={guide} />
            </Reveal>
          </div>

          <div className="mt-16 pt-8 border-t border-iron">
            <Reveal delay={0.2}>
              <h3 className="text-xl text-paper mb-6 font-mono">&gt; team_members</h3>
            </Reveal>
            <div className="flex flex-col gap-6">
              {coreTeam.map((member, i) => (
                <Reveal key={member.name} delay={0.25 + i * 0.05}>
                  <HorizontalProfile member={member} />
                </Reveal>
              ))}
            </div>

            <div className="mt-6">
              <Reveal delay={0.35}>
                <ul className="grid gap-4 sm:grid-cols-3 text-sm text-fog font-mono">
                  {otherMembers.map((m) => (
                    <li key={m.name} className="flex gap-4 border border-iron bg-void p-4">
                      <span className="text-paper">{m.name}</span>
                      <span className="text-steel ml-auto">{m.role}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-iron">
            <Reveal delay={0.4}>
              <h3 className="text-xl text-paper mb-6 font-mono">&gt; star_faculty</h3>
            </Reveal>
            <Reveal delay={0.45}>
              <HorizontalProfile member={starFaculty} />
            </Reveal>
          </div>

          <div className="mt-16 pt-8 border-t border-iron">
            <Reveal delay={0.5}>
              <h3 className="text-xl text-paper mb-6 font-mono">&gt; industry_mentor</h3>
            </Reveal>
            <Reveal delay={0.55}>
              <HorizontalProfile member={industryMentor} />
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
