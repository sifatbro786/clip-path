"use client";

import { useState } from "react";

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="8" fill="#CC0000" />
        <path
            d="M4.5 8l2.5 2.5 4.5-4.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const deliverables = [
    {
        num: "01",
        title: "Campaign Strategy & Implementation Plan",
        desc: "Comprehensive strategy aligned with EU visibility guidelines and project communication standards.",
    },
    {
        num: "02",
        title: "Digital Campaign Materials",
        desc: "Social media posts, infographics, short videos, fact-checking guides, and verification tools.",
    },
    {
        num: "03",
        title: "Online Fact-Checking Platform",
        desc: "Fully operational, mobile-friendly web platform with myth vs. fact section and self-learning modules.",
    },
    {
        num: "04",
        title: "Youth Orientation & Training Sessions",
        desc: "Capacity-building sessions on responsible social media use, fact-checking, and countering misinformation.",
    },
    {
        num: "05",
        title: "Campaign Performance Analytics",
        desc: "Reach, engagement, and behavior change data with full summary report.",
    },
    {
        num: "06",
        title: "Final Impact Report",
        desc: "Outcomes, lessons learned, and recommendations for scaling the initiative beyond the project period.",
    },
];

const scopeItems = [
    {
        letter: "A",
        title: "Campaign Design & Strategy",
        points: [
            "Rapid context analysis on misinformation trends in target communities",
            "Campaign strategy aligned with EU visibility guidelines",
            "Key messaging design — #ThinkBeforeYouShare",
            "Platform identification and outreach approach for target groups",
        ],
    },
    {
        letter: "B",
        title: "Content Development",
        points: [
            "Social media posts — graphics, captions, and short videos",
            "Fact-checking guides and simple verification tools",
            "Infographics and storytelling content on digital responsibility",
            "Inclusive, gender-sensitive, conflict-sensitive materials",
        ],
    },
    {
        letter: "C",
        title: "Campaign Implementation",
        points: [
            "Rollout across selected social media platforms and youth networks",
            "Coordination with youth-led organizations and peacebuilders",
            "Engagement of influencers, community journalists, and youth leaders",
        ],
    },
    {
        letter: "D",
        title: "Online Fact-Checking Platform",
        points: [
            "Simple, user-friendly online platform or web-based page",
            "Myth vs. Fact / rumour verification section",
            "Repository of campaign materials and trusted information links",
            "Mobile-friendly, low-bandwidth accessible, and self-learning modules",
        ],
    },
    {
        letter: "E",
        title: "Capacity Strengthening",
        points: [
            "Orientation and training on responsible social media use",
            "Fact-checking techniques and countering misinformation safely",
            "Support for youth-led engagement in campaign activities",
        ],
    },
    {
        letter: "F",
        title: "Monitoring & Reporting",
        points: [
            "Simple monitoring tools covering reach and behavior change indicators",
            "Documentation of campaign outputs and lessons learned",
            "Final report with impact analysis and scaling recommendations",
        ],
    },
];

const qualifications = [
    "Proven experience in media campaigns, digital communication, or fact-checking initiatives",
    "Strong understanding of misinformation, digital literacy, and online behavior change",
    "Experience working with youth, CSOs, or community-based organizations",
    "Knowledge of conflict-sensitive communication and gender-responsive approaches",
    "Strong content development and storytelling skills",
];

const targetGroups = [
    { label: "Youth Peacebuilders", sub: "& Youth-Led Organizations" },
    { label: "Rohingya & Host", sub: "Community Youth Groups" },
    { label: "Local Communities", sub: "Engaged via Digital Platforms" },
    { label: "500,000+", sub: "Wider Online Audience (TG4)" },
];

const timeline = [
    {
        month: "May 2026",
        phase: "Phase 1",
        task: "Kickoff, Context Analysis & Strategy Development",
        pct: 25,
        color: "#CC0000",
    },
    {
        month: "June 2026",
        phase: "Phase 2",
        task: "Content Development & Platform Design",
        pct: 50,
        color: "#CC0000",
    },
    {
        month: "July 2026",
        phase: "Phase 3",
        task: "Campaign Rollout, Training Sessions & Platform Launch",
        pct: 80,
        color: "#CC0000",
    },
    {
        month: "August 2026",
        phase: "Phase 4",
        task: "Monitoring, Documentation & Final Reporting",
        pct: 100,
        color: "#CC0000",
    },
];

const payments = [
    { pct: "40%", label: "Upon submission of campaign strategy and initial content" },
    { pct: "30%", label: "Upon mid-term implementation progress" },
    { pct: "30%", label: "Upon final deliverables and reporting" },
];

export default function ActionAidProposal() {
    const [activeScope, setActiveScope] = useState(0);

    return (
        <div
            style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                background: "#fafaf8",
                minHeight: "100vh",
                color: "#1a1a1a",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        .proposal-root { font-family: 'DM Sans', sans-serif; }
        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #CC0000;
        }
        .display-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          line-height: 1.15;
        }
        .body-sans {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
        }
        .red-line {
          width: 40px; height: 3px; background: #CC0000; border-radius: 2px;
        }
        .scope-tab {
          cursor: pointer;
          padding: 10px 16px;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
          border: 1.5px solid transparent;
          text-align: left;
        }
        .scope-tab.active {
          background: #CC0000;
          color: white;
          border-color: #CC0000;
        }
        .scope-tab:not(.active) {
          background: white;
          color: #444;
          border-color: #e8e8e8;
        }
        .scope-tab:not(.active):hover {
          border-color: #CC0000;
          color: #CC0000;
        }
        .deliverable-card {
          background: white;
          border: 1px solid #f0ece8;
          border-radius: 12px;
          padding: 22px 24px;
          display: flex;
          gap: 18px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .deliverable-card:hover {
          box-shadow: 0 8px 32px rgba(204,0,0,0.08);
          transform: translateY(-2px);
        }
        .tg-card {
          background: white;
          border: 1px solid #f0ece8;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          flex: 1;
        }
        .timeline-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }
        .payment-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: white;
          border-radius: 10px;
          border: 1px solid #f0ece8;
          margin-bottom: 10px;
        }
        .hero-stat {
          text-align: center;
          padding: 20px 16px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
      `}</style>

            <div className="proposal-root">
                {/* ── HERO ── */}
                <div style={{ background: "#0d1117", position: "relative", overflow: "hidden" }}>
                    {/* textured bg */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "radial-gradient(ellipse at 20% 50%, rgba(204,0,0,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(204,0,0,0.08) 0%, transparent 50%)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        }}
                    />

                    <div
                        style={{
                            position: "relative",
                            maxWidth: 900,
                            margin: "0 auto",
                            padding: "60px 32px 56px",
                        }}
                    >
                        {/* Logo area */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                marginBottom: 48,
                            }}
                        >
                            <div>
                                <span
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 22,
                                        color: "#CC0000",
                                        letterSpacing: "-0.5px",
                                    }}
                                >
                                    act<span style={{ color: "#CC0000" }}>!</span>onaid
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 11,
                                        color: "rgba(255,255,255,0.4)",
                                        display: "block",
                                        letterSpacing: "1px",
                                        marginTop: 2,
                                    }}
                                >
                                    BANGLADESH
                                </span>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 11,
                                        color: "rgba(255,255,255,0.4)",
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Technical Proposal
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 11,
                                        color: "rgba(255,255,255,0.3)",
                                        marginTop: 4,
                                    }}
                                >
                                    May 2026
                                </div>
                            </div>
                        </div>

                        {/* EU badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(204,0,0,0.12)",
                                border: "1px solid rgba(204,0,0,0.3)",
                                borderRadius: 100,
                                padding: "6px 14px",
                                marginBottom: 24,
                            }}
                        >
                            <div
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#CC0000",
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 11,
                                    color: "rgba(255,255,255,0.7)",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                EU-Funded Initiative · Youth-Led Peacebuilding
                            </span>
                        </div>

                        <h1
                            className="display-heading"
                            style={{
                                fontSize: 42,
                                color: "white",
                                marginBottom: 16,
                                lineHeight: 1.1,
                            }}
                        >
                            Media Awareness,
                            <br />
                            <span style={{ color: "#CC0000" }}>Fact-Checking Campaign</span>
                            <br />& Online Platform Development
                        </h1>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 15,
                                color: "rgba(255,255,255,0.55)",
                                maxWidth: 560,
                                lineHeight: 1.7,
                                marginBottom: 40,
                            }}
                        >
                            A comprehensive initiative to promote responsible digital behaviour,
                            strengthen critical thinking, and reduce misinformation among youth and
                            communities in Bangladesh and Myanmar.
                        </p>

                        {/* Stats row */}
                        <div
                            style={{
                                display: "flex",
                                gap: 0,
                                background: "rgba(255,255,255,0.04)",
                                borderRadius: 12,
                                border: "1px solid rgba(255,255,255,0.08)",
                                overflow: "hidden",
                            }}
                        >
                            {[
                                { value: "4", unit: "Months", label: "Duration" },
                                { value: "BDT 750K", unit: "Max Budget", label: "incl. VAT & TAX" },
                                { value: "500K+", unit: "Individuals", label: "Estimated Reach" },
                                { value: "6", unit: "Deliverables", label: "Key Outputs" },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="hero-stat"
                                    style={{
                                        flex: 1,
                                        borderRight:
                                            i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 22,
                                            fontWeight: 700,
                                            color: "white",
                                        }}
                                    >
                                        {s.value}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 11,
                                            color: "#CC0000",
                                            fontWeight: 600,
                                            letterSpacing: "0.5px",
                                            marginTop: 2,
                                        }}
                                    >
                                        {s.unit}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 10,
                                            color: "rgba(255,255,255,0.3)",
                                            marginTop: 3,
                                        }}
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── BACKGROUND ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 40,
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <div className="section-label" style={{ marginBottom: 12 }}>
                                01 — Background
                            </div>
                            <div className="red-line" style={{ marginBottom: 20 }} />
                            <h2
                                className="display-heading"
                                style={{ fontSize: 28, marginBottom: 18 }}
                            >
                                Why This Initiative Matters
                            </h2>
                            <p
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 14,
                                    color: "#555",
                                    lineHeight: 1.8,
                                    marginBottom: 14,
                                }}
                            >
                                Under the EU-funded action on youth-led peacebuilding and social
                                cohesion in Bangladesh and Myanmar, digital platforms have been
                                identified as key drivers of misinformation, hate speech, and
                                conflict escalation.
                            </p>
                            <p
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 14,
                                    color: "#555",
                                    lineHeight: 1.8,
                                }}
                            >
                                Social media environments frequently amplify unverified information,
                                contributing to mistrust and tension among host and refugee
                                communities. This initiative draws inspiration from globally
                                recognised platforms — FactCheck.org, Snopes, and PolitiFact —
                                adapting their methods to local contexts through youth-led
                                campaigns.
                            </p>
                        </div>
                        <div>
                            <div
                                style={{
                                    background: "#0d1117",
                                    borderRadius: 16,
                                    padding: 28,
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        width: 120,
                                        height: 120,
                                        background:
                                            "radial-gradient(circle, rgba(204,0,0,0.2), transparent)",
                                        borderRadius: "50%",
                                        transform: "translate(30%, -30%)",
                                    }}
                                />
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 11,
                                        color: "#CC0000",
                                        fontWeight: 600,
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                        marginBottom: 16,
                                    }}
                                >
                                    Activity Reference
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 12,
                                        color: "rgba(255,255,255,0.5)",
                                        lineHeight: 1.7,
                                        fontStyle: "italic",
                                        marginBottom: 20,
                                    }}
                                >
                                    6.3.6.1 [3.6.1_AAUK-BD] — Launch Fact-Checking Initiatives
                                </div>
                                <div
                                    style={{
                                        borderTop: "1px solid rgba(255,255,255,0.08)",
                                        paddingTop: 16,
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 11,
                                            color: "rgba(255,255,255,0.3)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        Aligns with
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 13,
                                            color: "white",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Output 3 — Youth-Led Influence & Digital Peacebuilding
                                    </div>
                                </div>
                                <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
                                    {["#ThinkBeforeYouShare", "Year 2 · Q2"].map((tag, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: 10,
                                                padding: "4px 10px",
                                                borderRadius: 100,
                                                background:
                                                    i === 0
                                                        ? "rgba(204,0,0,0.2)"
                                                        : "rgba(255,255,255,0.06)",
                                                color:
                                                    i === 0 ? "#ff6666" : "rgba(255,255,255,0.4)",
                                                border:
                                                    i === 0
                                                        ? "1px solid rgba(204,0,0,0.4)"
                                                        : "1px solid rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── OBJECTIVES ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        02 — Objectives
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        What We Aim to Achieve
                    </h2>

                    <div
                        style={{
                            background: "#CC0000",
                            borderRadius: 16,
                            padding: "28px 32px",
                            marginBottom: 24,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                right: -20,
                                top: -20,
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.07)",
                            }}
                        />
                        <div
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: "2px",
                                color: "rgba(255,255,255,0.6)",
                                textTransform: "uppercase",
                                marginBottom: 10,
                            }}
                        >
                            Overall Objective
                        </div>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 16,
                                color: "white",
                                lineHeight: 1.7,
                                fontWeight: 400,
                                position: "relative",
                            }}
                        >
                            To design and implement a media awareness and fact-checking initiative
                            that promotes responsible use of social media, reduces misinformation,
                            and strengthens digital peacebuilding among youth and communities.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[
                            "Develop and implement a targeted media awareness campaign promoting critical thinking and responsible information sharing",
                            "Strengthen youth capacity to identify, verify, and counter misinformation",
                            "Develop accessible digital resources and tools for fact-checking",
                            "Design and launch a simple online platform for fact-checking and awareness",
                            "Contribute to reducing hate speech and conflict-triggering narratives online",
                        ].map((obj, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: 12,
                                    alignItems: "flex-start",
                                    background: "white",
                                    borderRadius: 10,
                                    padding: "16px 18px",
                                    border: "1px solid #f0ece8",
                                }}
                            >
                                <CheckIcon />
                                <span
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 13,
                                        color: "#444",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {obj}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── SCOPE OF WORK ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        03 — Scope of Work
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        What the Consultant Will Do
                    </h2>

                    <div style={{ display: "flex", gap: 20 }}>
                        {/* Tab sidebar */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                minWidth: 180,
                            }}
                        >
                            {scopeItems.map((s, i) => (
                                <button
                                    key={i}
                                    className={`scope-tab${activeScope === i ? " active" : ""}`}
                                    onClick={() => setActiveScope(i)}
                                >
                                    <span
                                        style={{
                                            opacity: 0.5,
                                            fontSize: 10,
                                            display: "block",
                                            marginBottom: 2,
                                        }}
                                    >
                                        Section {s.letter}
                                    </span>
                                    {s.title}
                                </button>
                            ))}
                        </div>

                        {/* Content panel */}
                        <div
                            style={{
                                flex: 1,
                                background: "white",
                                borderRadius: 14,
                                border: "1px solid #f0ece8",
                                padding: "28px 30px",
                                minHeight: 220,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 20,
                                }}
                            >
                                <div
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 8,
                                        background: "#CC0000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            fontSize: 16,
                                            color: "white",
                                        }}
                                    >
                                        {scopeItems[activeScope].letter}
                                    </span>
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }}
                                >
                                    {scopeItems[activeScope].title}
                                </h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {scopeItems[activeScope].points.map((p, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            gap: 12,
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                background: "#CC0000",
                                                marginTop: 6,
                                                flexShrink: 0,
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: 13.5,
                                                color: "#444",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {p}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── DELIVERABLES ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        04 — Deliverables
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        Key Outputs
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        {deliverables.map((d, i) => (
                            <div key={i} className="deliverable-card">
                                <div
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 28,
                                        fontWeight: 900,
                                        color: "#f0ece8",
                                        lineHeight: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    {d.num}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: "#1a1a1a",
                                            marginBottom: 6,
                                        }}
                                    >
                                        {d.title}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 12,
                                            color: "#777",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {d.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── TARGET GROUPS ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        05 — Target Groups
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        Who We Reach
                    </h2>
                    <div style={{ display: "flex", gap: 14 }}>
                        {targetGroups.map((tg, i) => (
                            <div key={i} className="tg-card">
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 12,
                                        background: i === 3 ? "#CC0000" : "#faf0f0",
                                        margin: "0 auto 14px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: "50%",
                                            background:
                                                i === 3 ? "rgba(255,255,255,0.3)" : "#CC0000",
                                            opacity: i === 3 ? 1 : 0.7,
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#1a1a1a",
                                        marginBottom: 4,
                                    }}
                                >
                                    {tg.label}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 11,
                                        color: "#999",
                                    }}
                                >
                                    {tg.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── TIMELINE ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        06 — Timeline
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 8 }}>
                        4-Month Delivery Plan
                    </h2>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13,
                            color: "#888",
                            marginBottom: 32,
                        }}
                    >
                        May 2026 — August 2026
                    </p>

                    <div
                        style={{
                            background: "white",
                            borderRadius: 16,
                            border: "1px solid #f0ece8",
                            padding: "32px",
                        }}
                    >
                        {timeline.map((t, i) => (
                            <div key={i} className="timeline-row">
                                <div
                                    style={{
                                        width: 8,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        paddingTop: 4,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: "50%",
                                            background: "#CC0000",
                                            flexShrink: 0,
                                        }}
                                    />
                                    {i < timeline.length - 1 && (
                                        <div
                                            style={{
                                                width: 2,
                                                flex: 1,
                                                background: "#f0ece8",
                                                minHeight: 40,
                                                marginTop: 4,
                                            }}
                                        />
                                    )}
                                </div>
                                <div
                                    style={{
                                        flex: 1,
                                        paddingBottom: i < timeline.length - 1 ? 24 : 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: 8,
                                        }}
                                    >
                                        <div>
                                            <span
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    color: "#CC0000",
                                                    letterSpacing: "1.5px",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {t.phase} · {t.month}
                                            </span>
                                            <div
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: 13,
                                                    color: "#333",
                                                    marginTop: 4,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {t.task}
                                            </div>
                                        </div>
                                        <span
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: "#CC0000",
                                                flexShrink: 0,
                                                marginLeft: 16,
                                            }}
                                        >
                                            {t.pct}%
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            height: 4,
                                            background: "#f5f5f5",
                                            borderRadius: 4,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: "100%",
                                                width: `${t.pct}%`,
                                                background:
                                                    "linear-gradient(90deg, #CC0000, #ff4444)",
                                                borderRadius: 4,
                                                transition: "width 1s",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── QUALIFICATIONS ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        07 — Required Qualifications
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        Who Should Apply
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {qualifications.map((q, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: 14,
                                    alignItems: "flex-start",
                                    padding: "18px 20px",
                                    background: "white",
                                    borderRadius: 10,
                                    border: "1px solid #f0ece8",
                                }}
                            >
                                <div
                                    style={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: 8,
                                        background: "#faf0f0",
                                        flexShrink: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: "#CC0000",
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 13,
                                        color: "#444",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {q}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── PAYMENT ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        08 — Payment Schedule
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        Milestone-Based Payments
                    </h2>
                    <div>
                        {payments.map((p, i) => (
                            <div key={i} className="payment-bar">
                                <div
                                    style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: 12,
                                        background:
                                            i === 0 ? "#CC0000" : i === 1 ? "#1a1a1a" : "#f0ece8",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 15,
                                            fontWeight: 700,
                                            color: i === 2 ? "#CC0000" : "white",
                                        }}
                                    >
                                        {p.pct}
                                    </span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 13,
                                            color: "#444",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {p.label}
                                    </div>
                                </div>
                                <div style={{ color: "#ccc", flexShrink: 0 }}>
                                    <ArrowRight />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── ETHICAL COMMITMENTS ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 0" }}>
                    <div className="section-label" style={{ marginBottom: 12 }}>
                        09 — Ethical Safeguards
                    </div>
                    <div className="red-line" style={{ marginBottom: 20 }} />
                    <h2 className="display-heading" style={{ fontSize: 28, marginBottom: 32 }}>
                        Our Commitments
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[
                            {
                                title: "Do No Harm",
                                desc: "All messaging and engagement follows a Do No Harm approach to avoid unintended negative consequences.",
                            },
                            {
                                title: "Conflict Sensitivity",
                                desc: "Maintain conflict sensitivity and avoid reinforcing harmful or divisive narratives throughout the campaign.",
                            },
                            {
                                title: "Protection of Vulnerable Groups",
                                desc: "Ensure protection of women, girls, and vulnerable groups in all digital content produced.",
                            },
                            {
                                title: "Data Protection",
                                desc: "Adhere strictly to data protection and consent protocols in all activities and digital interactions.",
                            },
                        ].map((e, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: "22px 24px",
                                    background: "white",
                                    borderRadius: 12,
                                    border: "1px solid #f0ece8",
                                    borderLeft: "4px solid #CC0000",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#1a1a1a",
                                        marginBottom: 8,
                                    }}
                                >
                                    {e.title}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 12.5,
                                        color: "#666",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {e.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── SUSTAINABILITY ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 32px 0" }}>
                    <div
                        style={{
                            background: "linear-gradient(135deg, #0d1117 0%, #1a0505 100%)",
                            borderRadius: 20,
                            padding: "36px 40px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                                width: 200,
                                height: 200,
                                background:
                                    "radial-gradient(circle, rgba(204,0,0,0.15), transparent)",
                                borderRadius: "50%",
                                transform: "translate(30%, 30%)",
                            }}
                        />
                        <div
                            className="section-label"
                            style={{ marginBottom: 12, color: "rgba(255,100,100,0.8)" }}
                        >
                            10 — Sustainability
                        </div>
                        <h2
                            className="display-heading"
                            style={{ fontSize: 26, color: "white", marginBottom: 16 }}
                        >
                            Beyond the Project Period
                        </h2>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 14,
                                color: "rgba(255,255,255,0.6)",
                                lineHeight: 1.8,
                                maxWidth: 580,
                                position: "relative",
                            }}
                        >
                            The campaign and online platform will be designed to enable continued
                            use and adaptation by youth-led organisations beyond the project period,
                            ensuring long-term impact on digital literacy and social cohesion
                            throughout Bangladesh and Myanmar.
                        </p>
                    </div>
                </div>

                {/* ── REPORTING & COORDINATION ── */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 32px 0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                        <div
                            style={{
                                background: "white",
                                borderRadius: 14,
                                padding: "28px 30px",
                                border: "1px solid #f0ece8",
                            }}
                        >
                            <div className="section-label" style={{ marginBottom: 12 }}>
                                Reporting
                            </div>
                            <div className="red-line" style={{ marginBottom: 16 }} />
                            <div
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 13,
                                    color: "#555",
                                    lineHeight: 1.8,
                                }}
                            >
                                The consultant reports to the{" "}
                                <strong style={{ color: "#1a1a1a" }}>
                                    Project Manager, ActionAid Bangladesh
                                </strong>
                                . All deliverables must be reviewed and approved by the contracting
                                authority before acceptance.
                            </div>
                        </div>
                        <div
                            style={{
                                background: "white",
                                borderRadius: 14,
                                padding: "28px 30px",
                                border: "1px solid #f0ece8",
                            }}
                        >
                            <div className="section-label" style={{ marginBottom: 12 }}>
                                Coordination
                            </div>
                            <div className="red-line" style={{ marginBottom: 16 }} />
                            <div
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 13,
                                    color: "#555",
                                    lineHeight: 1.8,
                                }}
                            >
                                Regular coordination meetings will be held with project and
                                communication teams throughout the consultancy to ensure alignment
                                with organisational and EU visibility standards.
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── FOOTER / CTA ── */}
                <div style={{ maxWidth: 900, margin: "48px auto 0", padding: "0 32px 64px" }}>
                    <div
                        style={{
                            background: "#CC0000",
                            borderRadius: 20,
                            padding: "40px 48px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 32,
                            flexWrap: "wrap",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 10,
                                    fontWeight: 600,
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.6)",
                                    marginBottom: 8,
                                }}
                            >
                                Proposal Submission Deadline
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 30,
                                    fontWeight: 700,
                                    color: "white",
                                    lineHeight: 1.2,
                                }}
                            >
                                16 May 2026
                            </div>
                            <div
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 12,
                                    color: "rgba(255,255,255,0.6)",
                                    marginTop: 8,
                                }}
                            >
                                ActionAid Bangladesh reserves the right to accept or reject any
                                application without assigning any reason thereof.
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <a
                                href="https://jobs.actionaidbd.org/consultancy"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    background: "white",
                                    color: "#CC0000",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 14,
                                    padding: "14px 28px",
                                    borderRadius: 100,
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                                }}
                            >
                                Submit Your Proposal
                                <ArrowRight />
                            </a>
                            <div
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 11,
                                    color: "rgba(255,255,255,0.5)",
                                    marginTop: 10,
                                }}
                            >
                                jobs.actionaidbd.org/consultancy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
