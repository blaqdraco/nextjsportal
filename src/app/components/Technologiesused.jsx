'use client';

// src/app/components/Technologiesused.jsx

export default function Technologiesused({
    title = "Recently Used Technologies",
    tagline = "",
    items,
}) {
    const tech = items ?? [
        { name: "Python",  color: "rgb(74,222,128)",  icon: PythonIcon  },
        { name: "n8n",     color: "rgb(244,63,94)",   icon: N8NIcon     },
        { name: "OpenAI",  color: "rgb(59,130,246)",  icon: OpenAIIcon  },
        { name: "Azure",   color: "rgb(96,165,250)",  icon: AzureIcon   },
        { name: ".NET",    color: "rgb(147,197,253)", icon: DotNetIcon  },
        { name: "Docker",  color: "rgb(125,211,252)", icon: DockerIcon  },
        { name: "React",   color: "rgb(34,211,238)",  icon: ReactIcon   },
        { name: "Zap",     color: "rgb(250,204,21)",  icon: ZapIcon     },
    ];

    return (
        <section aria-label="Recently used technologies" className="py-14 lg:py-20">
            <div className="mb-8 md:mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/70 font-mono mb-2">Stack</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
                {tagline && <p className="mt-3 text-[#8892a4] text-sm max-w-xl">{tagline}</p>}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                {tech.map(({ name, color, icon: Icon }) => (
                    <article
                        key={name}
                        className="corner-frame group relative flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#0d1b2a] aspect-square overflow-hidden transition-all duration-300 hover:border-[color:var(--acc)] hover:-translate-y-1"
                        style={{ "--frame-accent": color.replace("rgb(","").replace(")",""), "--acc": color }}
                        aria-label={name}
                        title={name}
                    >
                        <span className="corner-frame__corner corner-frame__corner--tl" aria-hidden="true" />
                        <span className="corner-frame__corner corner-frame__corner--tr" aria-hidden="true" />
                        <span className="corner-frame__corner corner-frame__corner--bl" aria-hidden="true" />
                        <span className="corner-frame__corner corner-frame__corner--br" aria-hidden="true" />

                        {/* Radial glow on hover */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: `radial-gradient(60% 60% at 50% 50%, ${color.replace("rgb(", "rgba(").replace(")", ", 0.15)")}, transparent 70%)` }}
                        />

                        {/* Icon */}
                        <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-200">
                            <Icon />
                        </div>

                        {/* Label */}
                        <p className="relative z-10 mt-2 text-xs sm:text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors duration-200 px-2 text-center">
                            {name}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

/* ---- SVG Icons ---- */

function PythonIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24 6c-8 0-8 5-8 9v4h16v-4c0-4 0-9-8-9z" fill="currentColor" fillOpacity="0.15" />
            <path d="M16 19v-4c0-6 16-6 16 0v4" />
            <circle cx="19" cy="13" r="1.6" fill="currentColor" />
            <path d="M24 42c8 0 8-5 8-9v-4H16v4c0 4 0 9 8 9z" fill="currentColor" fillOpacity="0.15" />
            <path d="M32 29v4c0 6-16 6-16 0v-4" />
            <circle cx="29" cy="35" r="1.6" fill="currentColor" />
        </svg>
    );
}

function N8NIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="24" r="4" />
            <circle cx="24" cy="12" r="4" />
            <circle cx="24" cy="36" r="4" />
            <circle cx="36" cy="24" r="4" />
            <path d="M16 24h16M24 16v16" />
        </svg>
    );
}

function OpenAIIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24 10c6 0 12 6 12 12s-6 12-12 12-12-6-12-12 6-12 12-12z" fill="currentColor" fillOpacity="0.12" />
            <path d="M24 8l7 4v8l-7 4-7-4v-8l7-4z" />
            <path d="M17 20l7 4 7-4M17 28l7 4 7-4" />
        </svg>
    );
}

function AzureIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M26 10l12 28H30l-8-18-6 14H10L22 10h4z" />
        </svg>
    );
}

function DotNetIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <rect x="6" y="14" width="36" height="20" rx="5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
            <text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" fontFamily="ui-sans-serif,system-ui,-apple-system">
                .NET
            </text>
        </svg>
    );
}

function DockerIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="10" y="26" width="28" height="10" rx="3" fill="currentColor" fillOpacity="0.12" />
            <rect x="14" y="18" width="6" height="6" />
            <rect x="22" y="18" width="6" height="6" />
            <rect x="30" y="18" width="6" height="6" />
            <rect x="22" y="10" width="6" height="6" />
            <path d="M10 32c-3 0-4-2-4-4" />
        </svg>
    );
}

function ReactIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="24" cy="24" r="3.5" fill="currentColor" />
            <ellipse cx="24" cy="24" rx="16" ry="6.5" />
            <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(-60 24 24)" />
        </svg>
    );
}

function ZapIcon() {
    return (
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M26 6L12 28h10l-2 14 16-24H26z" />
        </svg>
    );
}
