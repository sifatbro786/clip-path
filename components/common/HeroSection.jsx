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
        <p className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-secondary mb-5">
            <span className="block w-7 h-[1.5px] bg-secondary shrink-0" />
            {text}
        </p>
    );
}

function Heading({ children }) {
    if (!children) return null;
    return (
        <h1 className="text-[clamp(36px,4vw,58px)] font-bold leading-[1.08] tracking-[-0.01em] text-foreground mb-2.5 [&_em]:italic [&_em]:text-secondary max-w-150">
            {children}
        </h1>
    );
}

function Subheading({ children }) {
    if (!children) return null;
    return (
        <h2 className="font-heading text-[clamp(22px,2.4vw,34px)] font-bold leading-tight text-foreground mb-4 [&_em]:text-secondary">
            {children}
        </h2>
    );
}

function Paragraph({ text }) {
    if (!text) return null;
    return <p className="text-[13.5px] leading-[1.7] text-ink-mute max-w-120 mb-8">{text}</p>;
}

function Btn({ config, variant }) {
    if (!config) return null;
    const Tag = config.href ? "a" : "button";

    const base =
        "inline-flex items-center gap-1.5 px-[22px] py-[11px] rounded-full text-[13px] font-medium cursor-pointer no-underline transition-all duration-150 border-[1.5px] whitespace-nowrap hover:-translate-y-px";

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
            <div className="mt-5">
                <p className="text-[11px] text-ink-mute leading-relaxed">{paragraph}</p>
            </div>
        );
    }

    if (type === "divider") {
        return (
            <div className="mt-5">
                <hr className="border-0 border-t border-rule" />
            </div>
        );
    }

    if (type === "stats" && stats?.length) {
        return (
            <div className="mt-5">
                <div className="flex items-start gap-9 max-md:gap-5">
                    {stats.map((stat, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <div className="w-px h-9 bg-rule self-center shrink-0" />}
                            <div>
                                <h4
                                    className={`font-heading text-[26px] font-bold leading-none mb-1 ${
                                        i === 0 ? "text-secondary" : "text-foreground"
                                    }`}
                                >
                                    {stat.value}
                                </h4>
                                <p className="text-[9.5px] font-medium tracking-[0.12em] uppercase text-ink-mute m-0">
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
        <div className="w-full h-full min-h-85 flex flex-col items-center justify-center gap-1.5">
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
            <p className="text-[11px] text-white/25 tracking-[0.08em] text-center leading-relaxed">
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
            className={`relative flex items-stretch gap-10 bg-background overflow-hidden min-h-120px ${
                bottomBorder ? "border-b border-rule" : ""
            } ${className}`}
        >
            {/* ── LEFT ── */}
            <div className="flex-[0_0_50%] max-w-[50%] flex flex-col justify-center px-2 md:px-0 py-16 pr-14 box-border max-md:flex-none max-md:max-w-full max-md:px-7 max-md:py-12 md:pl-10">
                <Eyebrow text={eyebrow} />
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
                <Paragraph text={paragraph} />

                {(primaryBtn || secondaryBtn) && (
                    <div className="flex items-center gap-3.5 flex-wrap">
                        <Btn config={primaryBtn} variant="primary" />
                        <Btn config={secondaryBtn} variant="secondary" />
                    </div>
                )}

                <AfterButtons type={afterButtons} paragraph={afterParagraph} stats={afterStats} />
            </div>

            {/* ── RIGHT ── */}
            <div className="flex-1 relative bg-background-dark overflow-hidden max-md:min-h-65 *:w-full *:h-full [&>img]:object-cover">
                {imageSlot ?? <Placeholder />}
            </div>
        </section>
    );
}

/**
 * ─────────────────────────────────────────────────────────────
 * USAGE EXAMPLES
 * ─────────────────────────────────────────────────────────────
 *
 * // Case 1 – Basic
 * <HeroSection
 *   eyebrow="Book a free 30-minute call"
 *   heading={<>Professional Photo Editing for <em>eCommerce & Brands</em></>}
 *   paragraph="Discuss your project directly with our co-founder, Fizz."
 *   primaryBtn={{ label: "Start Free Trial", href: "/trial" }}
 *   secondaryBtn={{ label: "View Services", href: "/services" }}
 *   imageSlot={<img src="/hero.jpg" alt="Before / After" />}
 * />
 *
 * // Case 2 – After-buttons paragraph
 * <HeroSection
 *   eyebrow="Book a free 30-minute call"
 *   heading={<>A conversation,<br />before <em>a quote.</em></>}
 *   paragraph="Discuss your project directly with our co-founder, Fizz."
 *   primaryBtn={{ label: "Schedule a Call", href: "/call" }}
 *   secondaryBtn={{ label: "Or email directly", href: "mailto:hello@example.com" }}
 *   afterButtons="paragraph"
 *   afterParagraph="Free · No obligation · 30 minutes · Available across all major time zones."
 *   imageSlot={<img src="/fizz.jpg" alt="Md Fozlur Rahman – Fizz" />}
 * />
 *
 * // Case 3 – After-buttons stats
 * <HeroSection
 *   eyebrow="Photo Editing · Service 01"
 *   heading={<>Hand-drawn cutouts.<br />Pixel-perfect <em>edges.</em></>}
 *   paragraph="Professional clipping path services for e-commerce, catalogs, and product photography."
 *   primaryBtn={{ label: "Try 3 images free", href: "/trial" }}
 *   secondaryBtn={{ label: "See pricing", href: "/pricing" }}
 *   afterButtons="stats"
 *   afterStats={[
 *     { value: "$0.39", label: "From, per image" },
 *     { value: "24hr",  label: "Standard turnaround" },
 *     { value: "4M+",   label: "Paths drawn since 2014" },
 *   ]}
 *   imageSlot={<img src="/clipping.jpg" alt="Before / After" />}
 * />
 * ─────────────────────────────────────────────────────────────
 */
