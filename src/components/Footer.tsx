import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-iron bg-void">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-steel">&gt; project_identity</p>
            <p className="mt-3 text-lg font-bold tracking-wider text-paper">AWARESPAN</p>
            <p className="mt-1 text-xs text-ember font-medium">Awareness Without Boundaries.</p>
            <p className="mt-2 text-xs text-fog">Problem Statement: An AI-Powered Safety Device.</p>
            <p className="mt-1 text-xs text-ash">
              Academic ID: 24UTAI13 · Atria Institute of Technology
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-steel">&gt; official_channels</p>
            <div className="mt-3 space-y-2 text-xs">
              <a
                href="mailto:awarespan@bchbenjamin.in"
                className="group flex items-center gap-2 text-paper transition-colors hover:text-ember"
              >
                <Mail className="h-3.5 w-3.5 text-ember" />
                <span>awarespan@bchbenjamin.in</span>
              </a>
              <a
                href="https://github.com/awarespan/awarespan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-paper transition-colors hover:text-ember"
              >
                <span>github.com/awarespan/awarespan</span>
                <ArrowUpRight className="h-3 w-3 text-steel transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between gap-4">
            <Link
              to="/team"
              className="inline-flex items-center justify-between gap-4 border border-iron bg-carbon px-6 py-3 text-sm text-paper transition-colors hover:border-paper"
            >
              <span>[ VIEW TEAM & INSTITUTE DETAILS ]</span>
              <span className="text-ember">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-iron pt-6 text-xs text-steel sm:flex-row">
          <span>© 2026 AWARESPAN · All rights reserved.</span>
          <span>
            <span className="text-ember">●</span> system_status: prototype_phase_2
          </span>
        </div>
      </div>
    </footer>
  );
}
