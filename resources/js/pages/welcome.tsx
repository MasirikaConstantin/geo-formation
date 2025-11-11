// resources/js/Pages/Home.tsx
import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { motion } from 'framer-motion';
import HeroSection from '@/components/desing/hero-section';
import ExpertiseSection from '@/components/desing/expertise-section';
import TestimonialsSection from '@/components/desing/testimonials-section';
import CTASection from '@/components/desing/cta-section';

export default function Home() {
    return (
        <PrincipaleLayoutSite 
            title="Accueil - GeoFormation"
            description="Découvrez nos formations expertes en cartographie, drone et télédétection"
        >
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center container mx-auto px-4"
                >
                    <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                        Formez-vous aux 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                          {" "}technologies géospatiales
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Devenez expert en cartographie moderne, pilotage de drone professionnel 
                        et analyse de données par télédétection.
                    </p>
                    {/* Vos autres composants... */}
                </motion.div>
            </section>

            <HeroSection />
            <ExpertiseSection />
            <TestimonialsSection />
            <CTASection />
        </PrincipaleLayoutSite>
    );
}