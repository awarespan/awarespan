import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-widest text-ember">&gt; error_404</p>
        <h1 className="mt-4 text-6xl text-paper">NOT_FOUND</h1>
        <p className="mt-3 text-sm text-ash">
          the requested path is not registered in the route table.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block border border-ember bg-ember px-5 py-2 text-sm text-void hover:bg-paper hover:border-paper"
        >
          [ RETURN_HOME ]
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    if (error instanceof Error) {
      reportLovableError(error, { boundary: "tanstack_root_error_component" });
    }
  }, [error]);
  const errorMessage = error instanceof Error ? error.message : String(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-widest text-ember">&gt; runtime_exception</p>
        <h1 className="mt-4 text-2xl text-paper">page_failed_to_load</h1>
        <p className="mt-2 text-sm text-ash">{errorMessage}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 border border-ember bg-ember px-5 py-2 text-sm text-void hover:bg-paper hover:border-paper"
        >
          [ RETRY ]
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AWARESPAN — Awareness Without Boundaries" },
      {
        name: "description",
        content:
          "An AI-Powered Safety Device. AWARESPAN combines edge AI, connected devices, and distributed intelligence to deliver situational awareness without boundaries.",
      },
      { name: "theme-color", content: "#000000" },
      { property: "og:site_name", content: "AWARESPAN" },
      { property: "og:title", content: "AWARESPAN — Awareness Without Boundaries" },
      {
        property: "og:description",
        content:
          "An AI-Powered Safety Device. Scalable, human-centred edge AI situational awareness and proactive safety ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sip.bchbenjamin.in" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AWARESPAN — Awareness Without Boundaries" },
      {
        name: "twitter:description",
        content:
          "An AI-Powered Safety Device. Scalable, human-centred edge AI situational awareness and proactive safety ecosystem.",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "canonical", href: "https://sip.bchbenjamin.in" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AWARESPAN",
          applicationCategory: "SafetyApplication",
          operatingSystem: "Linux, Android, Web",
          description:
            "An AI-Powered Safety Device. AWARESPAN combines edge AI, connected devices, and distributed intelligence to deliver situational awareness without boundaries.",
          url: "https://sip.bchbenjamin.in",
          email: "awarespan@bchbenjamin.in",
          author: {
            "@type": "Organization",
            name: "AWARESPAN",
            email: "awarespan@bchbenjamin.in",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-void text-paper">
        <Nav />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <div key={pathname}>
              <Outlet />
            </div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
