/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import HeroSection from "@/components/dashboard/home/HeroSection";
import SectionCard from "@/components/dashboard/home/SectionCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    ImageIcon,
    Loader2,
    RefreshCw,
    LayoutGrid,
    Layers,
    HelpCircle,
    Building2,
} from "lucide-react";
import { homeApi } from "@/utils/api";
import { Btn } from "@/components/ui/Btn";
import CompanySection from "@/components/dashboard/home/CompanySection";
import ServicesSection from "@/components/dashboard/home/ServicesSection";
import DifferenceSection from "@/components/dashboard/home/DifferenceSection";
import FaqSection from "@/components/dashboard/home/FaqSection";

export default function HomeManagementPage() {
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const res = await homeApi.getAll();
            setHomeData(res.data.data);
        } catch (err) {
            toast.error("Failed to load home data.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-3 text-ink-mute">
                    <Loader2 className="w-8 h-8 animate-spin text-secondary" />
                    <p className="text-sm">Loading home data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-serif text-2xl font-bold text-primary">Home Page</h1>
                    <p className="text-sm text-ink-mute mt-0.5">
                        Manage all sections of your home page
                    </p>
                </div>
                <Btn variant="outline" onClick={fetchData}>
                    <RefreshCw className="w-3.5 h-3.5" /> Refresh
                </Btn>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    {
                        label: "Company Logos",
                        value: homeData?.company?.logos?.length ?? 0,
                        icon: Building2,
                    },
                    {
                        label: "Services",
                        value: homeData?.services?.items?.length ?? 0,
                        icon: LayoutGrid,
                    },
                    {
                        label: "Difference Items",
                        value: homeData?.difference?.items?.length ?? 0,
                        icon: Layers,
                    },
                    { label: "FAQs", value: homeData?.faq?.items?.length ?? 0, icon: HelpCircle },
                ].map((s) => (
                    <div
                        key={s.label}
                        className="bg-white rounded-2xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                    >
                        <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                            <s.icon className="w-4 h-4 text-secondary" />
                        </span>
                        <div>
                            <p className="text-xl font-serif font-bold text-primary">{s.value}</p>
                            <p className="text-[10px] text-ink-mute">{s.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sections */}
            <SectionCard icon={ImageIcon} title="Hero Section" defaultOpen>
                <HeroSection data={homeData?.hero} onRefresh={fetchData} />
            </SectionCard>

            <SectionCard icon={Building2} title="Company / Logos">
                <CompanySection data={homeData?.company} onRefresh={fetchData} />
            </SectionCard>

            <SectionCard icon={LayoutGrid} title="Services Section">
                <ServicesSection data={homeData?.services} onRefresh={fetchData} />
            </SectionCard>

            <SectionCard icon={Layers} title="Difference Section">
                <DifferenceSection data={homeData?.difference} onRefresh={fetchData} />
            </SectionCard>

            <SectionCard icon={HelpCircle} title="FAQ Section">
                <FaqSection data={homeData?.faq} onRefresh={fetchData} />
            </SectionCard>
        </div>
    );
}
