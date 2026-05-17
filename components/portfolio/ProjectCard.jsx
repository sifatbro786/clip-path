import Image from "next/image";

export default function ProjectCard({ project }) {
    return (
        <div className="border-b border-rule group">
            {/* Image placeholder */}
            <Image src={project.url} width={1000} height={1000} alt="ad" />

            {/* Meta */}
            <div className="py-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-secondary mb-1.5">
                            {project.service}
                        </p>
                        <h3
                            className="text-[18px] md:text-[20px] font-normal text-foreground leading-snug"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            {project.title}
                        </h3>
                        <p className="text-[12px] text-ink-mute mt-1">{project.client}</p>
                    </div>
                    <div className="text-right shrink-0 pt-0.5">
                        <p className="text-[12px] text-foreground font-medium">{project.images}</p>
                        <p className="text-[10px] text-ink-mute mt-0.5">
                            {project.turnaround} delivery
                        </p>
                    </div>
                </div>

                {/* Challenge note */}
                <div className="border-t border-rule pt-4 mt-4">
                    <p className="text-[10px] font-medium tracking-widest uppercase text-ink-mute mb-1.5">
                        The challenge
                    </p>
                    <p className="text-[11px] md:text-[12px] text-ink-mute leading-[1.7]">
                        {project.challenge}
                    </p>
                </div>
            </div>
        </div>
    );
}
