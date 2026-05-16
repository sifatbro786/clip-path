// HeroSection.jsx
/**
 * HeroSection — Reusable split-layout hero component (Tailwind CSS)
 *
 * Props:
 * ─────────────────────────────────────────────────────────────
 * eyebrow        {string}             Small label above heading (with left-line divider)
 * heading        {string|ReactNode}   Main h1 – supports JSX for <em> italic/colored spans
 * subheading     {string|ReactNode}   Optional h2 below heading
 * paragraph      {string}             Body copy
 *
 * primaryBtn     { label, href, onClick }
 * secondaryBtn   { label, href, onClick }
 *
 * afterButtons   {"paragraph"|"stats"|"divider"|null}
 *   "paragraph"  → afterParagraph prop rendered below buttons   (case 2)
 *   "stats"      → afterStats[] rendered below buttons           (case 3)
 *   "divider"    → thin hr rendered below buttons
 *
 * afterParagraph {string}             Used when afterButtons="paragraph"
 * afterStats     [{value, label}]     Used when afterButtons="stats", max 3
 *
 * imageSlot      {ReactNode}          Right-side content; defaults to dark placeholder
 *
 * bottomBorder   {boolean=true}       Thin rule at the very bottom of the section
 *
 * className      {string}             Extra class on the section wrapper
 * ─────────────────────────────────────────────────────────────
 */

import React from "react";

function Eyebrow({ text }) {
    if (!text) return null;
    return (
        <p className="flex items-center gap-2 text-[9px] md:text-[10px] font-medium tracking-[0.14em] md:tracking-[0.18em] uppercase text-secondary mb-4 md:mb-5">
            <span className="block w-5 md:w-7 h-[1.5px] bg-secondary shrink-0" />
            {text}
        </p>
    );
}

function Heading({ children }) {
    if (!children) return null;
    return (
        <h1 className="text-[clamp(28px,5vw,58px)] font-bold leading-[1.2] md:leading-[1.08] tracking-[-0.01em] text-foreground mb-2 [&_em]:italic [&_em]:text-secondary max-w-full md:max-w-150">
            {children}
        </h1>
    );
}

function Subheading({ children }) {
    if (!children) return null;
    return (
        <h2 className="font-heading text-[clamp(18px,3vw,34px)] font-bold leading-tight text-foreground mb-3 md:mb-4 [&_em]:text-secondary">
            {children}
        </h2>
    );
}

function Paragraph({ text }) {
    if (!text) return null;
    return (
        <p className="text-[12px] md:text-[13.5px] leading-[1.6] md:leading-[1.7] text-ink-mute max-w-full md:max-w-120 mb-6 md:mb-8">
            {text}
        </p>
    );
}

function Btn({ config, variant }) {
    if (!config) return null;
    const Tag = config.href ? "a" : "button";

    const base =
        "inline-flex items-center gap-1.5 px-4 md:px-[22px] py-2 md:py-[11px] rounded-full text-[11px] md:text-[13px] font-medium cursor-pointer no-underline transition-all duration-150 border-[1.5px] whitespace-nowrap hover:-translate-y-px";

    const styles =
        variant === "primary"
            ? "bg-primary text-background bg-primary hover:bg-secondary duration-200"
            : "bg-transparent text-ink-mute border-ink-mute hover:text-secondary hover:border-secondary";

    return (
        <Tag className={`${base} ${styles}`} href={config.href} onClick={config.onClick}>
            {config.label}
            {variant === "primary" && (
                <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                    →
                </span>
            )}
        </Tag>
    );
}

function AfterButtons({ type, paragraph, stats }) {
    if (!type) return null;

    if (type === "paragraph") {
        return (
            <div className="mt-4 md:mt-5">
                <p className="text-[10px] md:text-[11px] text-ink-mute leading-relaxed">
                    {paragraph}
                </p>
            </div>
        );
    }

    if (type === "divider") {
        return (
            <div className="mt-4 md:mt-5">
                <hr className="border-0 border-t border-rule" />
            </div>
        );
    }

    if (type === "stats" && stats?.length) {
        return (
            <div className="mt-4 md:mt-5">
                <div className="flex flex-wrap items-start gap-5 md:gap-9">
                    {stats.map((stat, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && (
                                <div className="hidden sm:block w-px h-9 bg-rule self-center shrink-0" />
                            )}
                            <div>
                                <h4
                                    className={`font-heading text-xl md:text-[26px] font-bold leading-none mb-1 ${
                                        i === 0 ? "text-secondary" : "text-foreground"
                                    }`}
                                >
                                    {stat.value}
                                </h4>
                                <p className="text-[8px] md:text-[9.5px] font-medium tracking-widest md:tracking-[0.12em] uppercase text-ink-mute m-0">
                                    {stat.label}
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}

function Placeholder() {
    return (
        <div className="w-full h-full min-h-65 md:min-h-85 flex flex-col items-center justify-center gap-1.5">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="3"
                    stroke="rgba(255,255,255,.2)"
                    strokeWidth="1.5"
                />
                <path
                    d="M2 22L10 14L15 19L21 12L30 22"
                    stroke="rgba(255,255,255,.2)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <circle cx="10" cy="10" r="3" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" />
            </svg>
            <p className="text-[9px] md:text-[11px] text-white/25 tracking-[0.06em] md:tracking-[0.08em] text-center leading-relaxed">
                Real image
                <br />
                goes here
            </p>
        </div>
    );
}

/* ─── Main Component ─── */

export default function HeroSection({
    eyebrow,
    heading,
    subheading,
    paragraph,
    primaryBtn,
    secondaryBtn,
    afterButtons = null,
    afterParagraph,
    afterStats,
    imageSlot,
    bottomBorder = true,
    className = "",
}) {
    return (
        <section
            className={`relative flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:gap-10 bg-background overflow-hidden min-h-0 lg:min-h-120 ${
                bottomBorder ? "border-b border-rule" : ""
            } ${className}`}
        >
            {/* ── LEFT ── */}
            <div className="flex-1 lg:flex-[0_0_50%] lg:max-w-[50%] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0 py-12 md:py-16 lg:pr-14 box-border lg:pl-20">
                <Eyebrow text={eyebrow} />
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
                <Paragraph text={paragraph} />

                {(primaryBtn || secondaryBtn) && (
                    <div className="flex flex-wrap items-center gap-3 md:gap-3.5">
                        <Btn config={primaryBtn} variant="primary" />
                        <Btn config={secondaryBtn} variant="secondary" />
                    </div>
                )}

                <AfterButtons type={afterButtons} paragraph={afterParagraph} stats={afterStats} />
            </div>

            {/* ── RIGHT ── */}
            <div className="flex-1 relative bg-background-dark overflow-hidden min-h-64 md:min-h-80 lg:min-h-0 lg:flex-1 *:w-full *:h-full [&>img]:object-cover">
                {imageSlot ?? <Placeholder />}
            </div>
        </section>
    );
}
