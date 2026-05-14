import Link from "next/link";

const PRIMARY_COLOR = "#1a1a1a";
const SECONDARY_COLOR = "#B85C38";

// ── Heading renderer ──────────────────────────────────────────────────────────
function Heading({ segments, position }) {
    return (
        <h2
            className={`font-bold leading-tight capitalize ${position === "center" ? "md:w-200" : "md:w-225"}`}
            style={{
                fontSize: "42px",
                fontFamily: "'Playfair Display', Georgia, serif",
            }}
        >
            {segments.map((seg, i) => (
                <span
                    key={i}
                    style={{
                        color: seg.color === "secondary" ? SECONDARY_COLOR : PRIMARY_COLOR,
                        fontStyle: seg.italic || seg.color === "secondary" ? "italic" : "normal",
                    }}
                >
                    {seg.text}
                </span>
            ))}
        </h2>
    );
}

// ── Title with optional divider ───────────────────────────────────────────────
function Title({ text, showDivider }) {
    if (!text) return null;
    return (
        <div
            className={`flex items-center gap-3 ${showDivider ? "justify-center" : ""}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {showDivider && (
                <span className="block h-px w-10" style={{ background: SECONDARY_COLOR }} />
            )}
            <span
                className="tracking-[0.18em] text-xs font-semibold uppercase"
                style={{ color: SECONDARY_COLOR }}
            >
                {text}
            </span>
            {showDivider && (
                <span className="block h-px w-10" style={{ background: SECONDARY_COLOR }} />
            )}
        </div>
    );
}

// ── Button ────────────────────────────────────────────────────────────────────
function CTAButton({ label, href, variant }) {
    const base =
        "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer select-none";
    const solid = `text-white bg-primary hover:bg-secondary duration-200 active:scale-95`;
    const outline = `border hover:opacity-70 active:scale-95`;

    return (
        <Link
            href={href || "#"}
            className={`${base} ${variant === "solid" ? solid : outline}`}
            style={variant === "solid" ? {justifyContent: "center", alignItems: "center", display: "flex"} : { borderColor: "#d0cdc8", color: PRIMARY_COLOR }}
        >
            {label}
            {variant === "solid" && <span style={{ fontSize: "1rem", marginTop: "-4px" }}>→</span>}
        </Link>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function HeaderSection({
    position = "center",
    title,
    heading = [],
    subheading,
    paragraph,
    buttons = [],
    footer,
}) {
    const isCenter = position === "center";
    const alignClass = isCenter ? "items-center text-center" : "items-start text-left";
    const maxWClass = isCenter ? "max-w-2xl mx-auto" : "max-w-2xl";

    return (
        <section
            className="w-full py-24 px-6"
            style={{
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            <div className={`flex flex-col gap-6 ${alignClass} ${maxWClass}`}>
                {/* Title */}
                <Title text={title} showDivider={isCenter} />

                {/* Heading */}
                {heading.length > 0 && <Heading segments={heading} position={position} />}

                {/* Subheading */}
                {subheading && (
                    <p
                        className="font-semibold text-secondary"
                        style={{ fontSize: "20px", lineHeight: 1.5 }}
                    >
                        {subheading}
                    </p>
                )}

                {/* Paragraph */}
                {paragraph && (
                    <p
                        className="leading-relaxed"
                        style={{ fontSize: "18px", color: "#555", maxWidth: "750px" }}
                    >
                        {paragraph}
                    </p>
                )}

                {/* Buttons */}
                {buttons.length > 0 && (
                    <div
                        className={`flex flex-wrap gap-3 mt-2 ${isCenter ? "justify-center" : ""}`}
                    >
                        {buttons.slice(0, 2).map((btn, i) => (
                            <CTAButton key={i} {...btn} />
                        ))}
                    </div>
                )}

                {/* Footer */}
                {footer && (
                    <p className="text-xs mt-1" style={{ color: "#aaa", letterSpacing: "0.02em" }}>
                        {footer}
                    </p>
                )}
            </div>
        </section>
    );
}
