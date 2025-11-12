'use client';

// src/app/components/Technologiesused.jsx
// Reusable section for a "Recently used technologies" grid.
// Usage: import Technologiesused from "@/app/components/Technologiesused"; and place <Technologiesused /> on any page.

export default function Technologiesused({
    title = "Recently used technologies",
    tagline = "AI-powered automation with intelligent agents for next-level workflows.",
    items,
}) {
    const tech = items ?? [
        { name: "Python", color: "74,222,128", icon: PythonIcon },
        { name: "n8n", color: "244,63,94", icon: N8NIcon },
        { name: "OpenAI", color: "59,130,246", icon: OpenAIIcon },
        { name: "Azure", color: "96,165,250", icon: AzureIcon },
        { name: ".NET", color: "147,197,253", icon: DotNetIcon },
        { name: "Docker", color: "125,211,252", icon: DockerIcon },
        { name: "React", color: "34,197,94", icon: ReactIcon },
        { name: "Zap", color: "250,204,21", icon: ZapIcon },
    ];

    return (
        <section aria-label="Recently used technologies" className="tech-section">
            <h2 className="title">{title}</h2>

            <div className="grid">
                {tech.map(({ name, color, icon: Icon }) => (
                    <article
                        key={name}
                        className="card"
                        style={{ ["--acc"]: color }}
                        aria-label={name}
                        title={name}
                    >
                        <div className="icon-wrap">
                            <Icon />
                        </div>
                        <div className="label">{name}</div>
                    </article>
                ))}
            </div>

            <p className="tagline">{tagline}</p>

            {/* Minimal: removed decorative chevrons */}

            <style jsx>{`
                .tech-section {
                    --bg: #0b0c10;
                    --panel: #0e1016;
                    --border: #1b1f2a;
                    --text: #e8e9ee;
                    --muted: #a1a7b3;
                    padding: 56px 16px 72px;
                    background: transparent;
                    color: var(--text);
                    text-align: center;
                }
                .title {
                    font-size: clamp(24px, 3vw, 36px);
                    font-weight: 800;
                    letter-spacing: 0.2px;
                    margin: 0 0 28px;
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                @media (min-width: 720px) {
                    .grid {
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                        gap: 22px;
                    }
                }
                .card {
                    position: relative;
                    border-radius: 16px;
                    background: radial-gradient(100% 100% at 0% 0%, #0c0f15 0%, #0a0c11 100%);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    aspect-ratio: 1/1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    transition: transform 180ms ease, border-color 180ms ease;
                    box-shadow: none;
                    isolation: isolate;
                }
                .card::after {
                    /* subtle gradient glow */
                    content: "";
                    position: absolute;
                    inset: -30%;
                    background: radial-gradient(
                        60% 60% at 50% 50%,
                        rgba(var(--acc), 0.18) 0%,
                        transparent 60%
                    );
                    opacity: 0;
                    transition: opacity 200ms ease;
                    z-index: 0;
                }
                .card:hover,
                .card:focus-visible {
                    transform: translateY(-2px);
                    border-color: rgba(var(--acc), 0.4);
                }
                .card:hover::after,
                .card:focus-visible::after {
                    opacity: 0.8;
                }
                .icon-wrap {
                    position: relative;
                    z-index: 1;
                    width: 64%;
                    max-width: 124px;
                    aspect-ratio: 1/1;
                    display: grid;
                    place-items: center;
                    color: #fff;
                }
                .icon-wrap :global(svg) {
                    width: 72%;
                    height: 72%;
                    opacity: 0.85;
                    filter: none;
                }
                .label {
                    position: absolute;
                    bottom: 12px;
                    left: 0;
                    right: 0;
                    font-size: 13px;
                    letter-spacing: 0.3px;
                    color: #f5f7fb;
                    opacity: 0.9;
                    z-index: 1;
                    user-select: none;
                }
                .tagline {
                    margin: 26px auto 8px;
                    max-width: 860px;
                    color: var(--muted);
                    font-size: 15px;
                }
                /* minimal: removed bobbing chevrons */
            `}</style>
        </section>
    );
}

/* ---- Minimal inline SVG icons (generic, no trademarks) ---- */

function PythonIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24 6c-8 0-8 5-8 9v4h16v-4c0-4 0-9-8-9z" fill="currentColor" opacity="0.12" />
            <path d="M16 19v-4c0-6 16-6 16 0v4" />
            <circle cx="19" cy="13" r="1.6" />
            <path d="M24 42c8 0 8-5 8-9v-4H16v4c0 4 0 9 8 9z" fill="currentColor" opacity="0.12" />
            <path d="M32 29v4c0 6-16 6-16 0v-4" />
            <circle cx="29" cy="35" r="1.6" />
        </svg>
    );
}

function N8NIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
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
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24 10c6 0 12 6 12 12s-6 12-12 12-12-6-12-12 6-12 12-12z" opacity="0.12" fill="currentColor"/>
            <path d="M24 8l7 4v8l-7 4-7-4v-8l7-4z" />
            <path d="M17 20l7 4 7-4" />
            <path d="M17 28l7 4 7-4" />
        </svg>
    );
}

function AzureIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M26 10l12 28H30l-8-18-6 14H10L22 10h4z" />
        </svg>
    );
}

function DotNetIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none">
            <rect x="6" y="12" width="36" height="24" rx="6" fill="currentColor" opacity="0.12" />
            <text x="24" y="30" textAnchor="middle" fontSize="12" fill="currentColor" fontFamily="ui-sans-serif, system-ui, -apple-system">
                .NET
            </text>
        </svg>
    );
}

function DockerIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="10" y="26" width="28" height="10" rx="3" fill="currentColor" opacity="0.12" />
            <g>
                <rect x="14" y="18" width="6" height="6" />
                <rect x="22" y="18" width="6" height="6" />
                <rect x="30" y="18" width="6" height="6" />
                <rect x="22" y="10" width="6" height="6" />
            </g>
            <path d="M10 32c-3 0-4-2-4-4" />
        </svg>
    );
}

function ReactIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="24" cy="24" r="3.5" fill="currentColor" />
            <ellipse cx="24" cy="24" rx="16" ry="6.5" />
            <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(-60 24 24)" />
        </svg>
    );
}

function ZapIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M26 6L12 28h10l-2 14 16-24H26z" />
        </svg>
    );
}