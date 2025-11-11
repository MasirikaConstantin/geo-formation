import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, Users, Award } from 'lucide-react';

export default function CTASection() {
    const stats = [
        { icon: Users, value: "2000+", label: "Étudiants formés" },
        { icon: Award, value: "95%", label: "Taux de satisfaction" },
        { icon: Star, value: "4.9/5", label: "Note moyenne" }
    ];

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Arrière-plan dégradé principal */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/50"></div>
            
            {/* Overlay avec pattern */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20"></div>
            
            {/* Éléments décoratifs animés */}
            <motion.div 
                className="absolute top-10 md:top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-white/10 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
                className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-amber-300/20 rounded-full blur-3xl"
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />
            
            {/* Particules flottantes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 40}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                />
            ))}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Statistiques en haut */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 mb-2 group-hover:bg-white/30 transition-all duration-300">
                                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs md:text-sm text-amber-100">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contenu principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white max-w-4xl mx-auto"
                >
                    <motion.h2 
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Prêt à{" "}
                        <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                            transformer
                        </span>{" "}
                        votre carrière ?
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-amber-50 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Rejoignez nos formations d'excellence et développez des compétences recherchées 
                        dans le domaine des technologies géospatiales.
                    </motion.p>

                    {/* Boutons d'action */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="group bg-white text-amber-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center gap-2 min-w-fit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Discuter avec un expert
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            className="group border-2 border-white/80 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-amber-700 transition-all duration-300 min-w-fit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Voir le catalogue
                        </motion.button>
                    </motion.div>

                    {/* Contact info avec design amélioré */}
                    <motion.div
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 md:px-8 py-3 md:py-4 border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="bg-white/20 rounded-full p-2">
                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs md:text-sm text-amber-100">Appelez-nous</p>
                            <p className="font-bold text-sm md:text-base text-white">01 23 45 67 89</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Indicateur de scroll subtil */}
                <motion.div
                    className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-1 h-8 bg-white/30 rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
}