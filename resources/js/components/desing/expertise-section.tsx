import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function ExpertiseSection() {
    const domains = [
        {
            icon: '🗺️',
            title: 'Cartographie Moderne',
            description: 'Maîtrisez les outils SIG, la cartographie web et l\'analyse spatiale',
            color: 'from-blue-500 to-cyan-500',
            href: '/formations/cartographie'
        },
        {
            icon: '🚁',
            title: 'Pilotage de Drone',
            description: 'Formation théorique et pratique pour devenir télépilote professionnel',
            color: 'from-emerald-500 to-green-500',
            href: '/formations/drone'
        },
        {
            icon: '📡',
            title: 'Télédétection',
            description: 'Analyse d\'images satellites et traitement des données géospatiales',
            color: 'from-violet-500 to-purple-500',
            href: '/formations/teledetection'
        }
    ];

    return (
        <section className="py-20 bg-background shadow-lg shadow-amber-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Nos domaines d'
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                            expertise
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Des formations complètes et pratiques dans les technologies géospatiales les plus demandées
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Badge avec gradient amber */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    {domain.icon}
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-amber-600 transition-colors">
                                    {domain.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {domain.description}
                                </p>
                                
                                <Link
                                    href={domain.href}
                                    className="inline-flex items-center text-amber-600 font-semibold group-hover:text-orange-600 transition-colors"
                                >
                                    En savoir plus
                                    <motion.span
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </div>

                            {/* Effet de bordure au hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}