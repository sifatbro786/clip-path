"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

// Register plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

export default function SmoothScroll({ children }) {
    const wrapper = useRef();
    const content = useRef();

    useGSAP(
        () => {
            const smoother = ScrollSmoother.create({
                wrapper: wrapper.current,
                content: content.current,
                smooth: 1.5,
                effects: true,
                normalizeScroll: true,
            });

            return () => {
                smoother.kill();
            };
        },
        { scope: wrapper },
    );

    return (
        <div ref={wrapper} id="smooth-wrapper">
            <div ref={content} id="smooth-content">
                {children}
            </div>
        </div>
    );
}
