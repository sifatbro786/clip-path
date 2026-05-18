import FeaturedProject from "@/components/portfolio/FeaturedProject";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import Testimonials from "@/components/portfolio/Testimonials";

export default function PortfolioPage() {
    return (
        <>
            <PortfolioHero />
            <PortfolioGrid />
            <FeaturedProject />
            <Testimonials />
            <PortfolioCTA />
        </>
    );
}
