import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background avec gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-amber-50/30"></div>
            
            {/* Éléments décoratifs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
                    >
                        Maîtrisez les{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                            technologies géospatiales
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                    >
                        Formations expertes en cartographie moderne, pilotage de drone professionnel 
                        et analyse de données par télédétection. Développez des compétences recherchées.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/formations"
                            className="group relative bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
                        >
                            Découvrir nos formations
                            <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300"></div>
                        </Link>

                        <Link
                            href="/contact"
                            className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 hover:text-white transition-all duration-300"
                        >
                            Demander un devis
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                    >
                        {[
                            { number: '500+', label: 'Apprenants formés' },
                            { number: '98%', label: 'Taux de satisfaction' },
                            { number: '15+', label: 'Années d\'expérience' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-amber-600">{stat.number}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}