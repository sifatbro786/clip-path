"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        id: 1,
        num: "01",
        title: "Footwear Collection",
        client: "Nordic Sole Co.",
        category: "E-commerce",
        service: "Clipping Path",
        images: "1,200 images",
        turnaround: "48hr",
        challenge:
            "Rubber soles with near-identical tone to the studio floor — required retoucher to trace solely by edge tension.",
            url: "/hero1.jpg"
    },
    {
        id: 2,
        num: "02",
        title: "Fine Jewelry Lookbook",
        client: "Aurum Studio",
        category: "Jewelry",
        service: "Clipping Path + Shadow",
        images: "340 images",
        turnaround: "24hr",
        challenge:
            "Gold chains with semi-transparent links against a light marble surface — every link individually pathed.",
            url: "/hero1.jpg"
    },
    {
        id: 3,
        num: "03",
        title: "Spring / Summer Catalog",
        client: "Maison Léa",
        category: "Fashion",
        service: "Clipping Path",
        images: "800 images",
        turnaround: "72hr",
        challenge:
            "Sheer organza fabric with gradient opacity — AI tools produced visible halos. Hand paths retained the translucency.",
            url: "/hero1.jpg"
    },
    {
        id: 4,
        num: "04",
        title: "Luxury Watch Campaign",
        client: "Chrono Atelier",
        category: "E-commerce",
        service: "Clipping Path + Retouching",
        images: "60 images",
        turnaround: "24hr",
        challenge:
            "Brushed steel bezels with fine engraving detail — required sub-pixel accuracy at 300 DPI print resolution.",
            url: "/hero1.jpg"
    },
    {
        id: 5,
        num: "05",
        title: "Automotive Parts Catalog",
        client: "MotorSpec Ltd.",
        category: "Automotive",
        service: "Clipping Path",
        images: "2,400 images",
        turnaround: "5 days",
        challenge:
            "Reflective chrome finishes on white sweep — background and subject surface shared the same tone in dozens of images.",
            url: "/hero1.jpg"
    },
    {
        id: 6,
        num: "06",
        title: "Artisan Food Range",
        client: "Grove & Field",
        category: "Food & Beverage",
        service: "Clipping Path + Shadow",
        images: "180 images",
        turnaround: "48hr",
        challenge:
            "Glass jars with layered internal colors and label type — required compound path with interior transparency.",
            url: "/hero1.jpg"
    },
];
const CATEGORIES = ["All", "E-commerce", "Fashion", "Jewelry", "Automotive", "Food & Beverage"];

export default function PortfolioGrid() {
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

    return (
        <section className="bg-background border-b border-rule">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-20 pb-16 md:pb-24">
                {/* Filter tabs */}
                <div className="flex items-center border-b border-rule mb-10 overflow-x-auto">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`shrink-0 px-4 md:px-5 py-4 text-[10px] font-medium tracking-[0.14em] uppercase transition-colors duration-150 border-b-[1.5px] -mb-px cursor-pointer ${
                                active === cat
                                    ? "border-foreground text-foreground"
                                    : "border-transparent text-ink-mute hover:text-foreground"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                    <div className="ml-auto shrink-0 pl-4 py-4 text-[10px] text-ink-mute hidden md:block">
                        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
