import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Award, MapPin, Camera, Satellite } from 'lucide-react';

export default function Formations() {
    const formations = [
        {
            id: 1,
            title: "Expert en Cartographie Moderne",
            subtitle: "Maîtrisez les SIG et la cartographie web",
            description: "Formation complète aux Systèmes d'Information Géographique (SIG), cartographie web et analyse spatiale avec les outils professionnels.",
            duration: "3 mois",
            level: "Débutant à Avancé",
            price: "2 400 €",
            image: "/images/formations/cartographie-formation.jpg", // À remplacer
            badge: "Populaire",
            features: [
                "Maîtrise de QGIS et ArcGIS",
                "Cartographie web avec Leaflet",
                "Analyse spatiale avancée",
                "Traitement des données géographiques",
                "Projet réel en situation professionnelle"
            ],
            href: "/formations/cartographie",
            icon: MapPin,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Télépilote de Drone Professionnel",
            subtitle: "Certification DGAC et applications métier",
            description: "Devenez télépilote certifié avec formation théorique et pratique complète incluant photogrammétrie et inspections techniques.",
            duration: "2 mois",
            level: "Tous niveaux",
            price: "1 800 €",
            image: "/images/formations/drone-formation.jpg", // À remplacer
            badge: "Certifiante",
            features: [
                "Formation théorique DGAC",
                "Pratique sur drone professionnel",
                "Photogrammétrie et modélisation 3D",
                "Applications métier (BTP, agriculture)",
                "Attestation de formation reconnue"
            ],
            href: "/formations/drone",
            icon: Camera,
            color: "from-emerald-500 to-green-500"
        },
        {
            id: 3,
            title: "Spécialiste en Télédétection",
            subtitle: "Analyse d'images satellites et traitement de données",
            description: "Apprenez à exploiter les données satellitaires pour l'environnement, l'agriculture, l'urbanisme et la surveillance.",
            duration: "4 mois",
            level: "Intermédiaire",
            price: "3 200 €",
            image: "/images/formations/teledetection-formation.jpg", // À remplacer
            badge: "Expertise",
            features: [
                "Traitement d'images satellitaires",
                "Utilisation de Sentinel et Landsat",
                "Analyse multispectrale",
                "Applications environnementales",
                "Machine Learning appliqué"
            ],
            href: "/formations/teledetection",
            icon: Satellite,
            color: "from-violet-500 to-purple-500"
        }
    ];

    const stats = [
        { icon: Users, number: "500+", label: "Apprenants formés" },
        { icon: Award, number: "98%", label: "Taux de réussite" },
        { icon: CheckCircle, number: "15", label: "Formateurs experts" },
        { icon: Clock, number: "2000h+", label: "Heures de formation" }
    ];

    return (
        <PrincipaleLayoutSite 
            title="Nos Formations | Cartographie, Drone et Télédétection"
            description="Découvrez nos formations complètes en technologies géospatiales. Devenez expert en cartographie, drone professionnel et analyse de données satellitaires."
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-background via-background to-amber-50/30 overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Nos{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                Formations
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Des parcours complets et pratiques pour maîtriser les technologies géospatiales 
                            et développer des compétences recherchées sur le marché.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-card border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="w-8 h-8 text-amber-600" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formations Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Choisissez votre{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                parcours
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Des formations adaptées à tous les niveaux, avec un accompagnement personnalisé 
                            et des projets concrets pour une montée en compétences rapide.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {formations.map((formation, index) => (
                            <motion.div
                                key={formation.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border"
                            >
                                <div className="lg:flex">
                                    {/* Image Section - IMPORTANT: À remplacer par vos images */}
                                    <div className="lg:w-2/5 relative overflow-hidden">
                                        <div className="aspect-video lg:aspect-square lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                            <div className="text-center text-gray-500">
                                                <formation.icon className="w-16 h-16 mx-auto mb-4 opacity-40" />
                                                <p className="text-sm">Image: {formation.title}</p>
                                                <p className="text-xs mt-2">Dimensions recommandées: 800x600px</p>
                                            </div>
                                        </div>
                                        
                                        {/* Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                {formation.badge}
                                            </span>
                                        </div>

                                        {/* Overlay au hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <Link
                                                href={formation.href}
                                                className="bg-white text-amber-600 px-6 py-2 rounded-full font-semibold hover:bg-amber-50 transition-colors"
                                            >
                                                Voir les détails
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:w-3/5 p-8">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-amber-600 transition-colors mb-2">
                                                    {formation.title}
                                                </h3>
                                                <p className="text-muted-foreground text-lg">
                                                    {formation.subtitle}
                                                </p>
                                            </div>
                                            <formation.icon className={`w-8 h-8 text-gradient ${formation.color}`} />
                                        </div>

                                        <p className="text-foreground mb-6">
                                            {formation.description}
                                        </p>

                                        {/* Features */}
                                        <div className="grid sm:grid-cols-2 gap-2 mb-6">
                                            {formation.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-sm">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                                    <span className="text-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Infos pratiques */}
                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {formation.duration}
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Users className="w-4 h-4 mr-1" />
                                                {formation.level}
                                            </div>
                                            <div className="flex items-center text-sm font-semibold text-amber-600">
                                                <Award className="w-4 h-4 mr-1" />
                                                {formation.price}
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                href={formation.href}
                                                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                                            >
                                                Découvrir la formation
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-amber-500 hover:text-white transition-all duration-300"
                                            >
                                                Contacter un conseiller
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Méthodologie Section */}
            <section className="py-20  border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Notre{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                méthode
                            </span>{' '}
                            pédagogique
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Apprentissage Pratique",
                                description: "70% de pratique sur des cas concrets et outils professionnels",
                                image: "/images/methode/pratique.jpg" // À remplacer
                            },
                            {
                                title: "Accompagnement Personnalisé",
                                description: "Suivi individuel par des formateurs experts du métier",
                                image: "/images/methode/accompagnement.jpg" // À remplacer
                            },
                            {
                                title: "Projet de Fin de Formation",
                                description: "Réalisation d'un projet professionnel pour valider les compétences",
                                image: "/images/methode/projet.jpg" // À remplacer
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-2xl p-6 shadow-lg border border-amber-100 text-center"
                            >
                                {/* Placeholder Image */}
                                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl mb-4 flex items-center justify-center">
                                    <div className="text-amber-600 text-center">
                                        <div className="text-3xl mb-2">📸</div>
                                        <p className="text-xs text-amber-800">Image: {item.title}</p>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Prêt à commencer votre formation ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez nos apprenants et développez des compétences recherchées dans le domaine des technologies géospatiales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Parler avec un conseiller
                            </Link>
                            <Link
                                href="/catalogue"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
                            >
                                Télécharger le catalogue
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PrincipaleLayoutSite>
    );
}