import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CheckCircle, 
    Clock, 
    Users, 
    Award, 
    MapPin, 
    Calendar,
    BookOpen,
    Briefcase,
    Star,
    ArrowRight
} from 'lucide-react';

export default function CartographieFormation() {
    const programme = [
        {
            module: "Module 1",
            titre: "Fondamentaux de la Cartographie",
            duree: "40 heures",
            competences: [
                "Systèmes de coordonnées et projections",
                "Concepts de base des SIG",
                "Acquisition et traitement des données",
                "Topographie et géodésie"
            ],
            outils: ["QGIS", "Google Earth Pro"]
        },
        {
            module: "Module 2",
            titre: "Cartographie Avancée avec QGIS",
            duree: "60 heures",
            competences: [
                "Interface avancée de QGIS",
                "Gestion des bases de données spatiales",
                "Analyse spatiale et géotraitement",
                "Création de cartes thématiques"
            ],
            outils: ["QGIS", "PostGIS", "GDAL"]
        },
        {
            module: "Module 3",
            titre: "Cartographie Web et Interactive",
            duree: "50 heures",
            competences: [
                "Principes de la cartographie web",
                "Intégration Leaflet/OpenLayers",
                "Développement d'applications carto",
                "Publication en ligne"
            ],
            outils: ["Leaflet", "OpenLayers", "GeoServer"]
        },
        {
            module: "Module 4",
            titre: "Projet Professionnel",
            duree: "30 heures",
            competences: [
                "Réalisation d'un projet complet",
                "Gestion de projet cartographique",
                "Rédaction de rapports techniques",
                "Présentation des résultats"
            ],
            outils: ["Tous les outils vus"]
        }
    ];

    const objectifs = [
        "Maîtriser les concepts fondamentaux de la cartographie moderne",
        "Être autonome sur QGIS pour des analyses spatiales complexes",
        "Développer des applications cartographiques web interactives",
        "Gérer des projets cartographiques de A à Z",
        "Produire des cartes professionnelles pour différents secteurs"
    ];

    const publics = [
        {
            groupe: "Débutants",
            description: "Aucune connaissance préalable requise en cartographie"
        },
        {
            groupe: "Géomètres",
            description: "Perfectionnement aux outils numériques modernes"
        },
        {
            groupe: "Urbanistes",
            description: "Maîtrise des SIG pour l'aménagement du territoire"
        },
        {
            groupe: "Développeurs",
            description: "Intégration de composants cartographiques dans les applications"
        }
    ];

    return (
        <PrincipaleLayoutSite 
            title="Formation Expert en Cartographie Moderne | GeoFormation"
            description="Devenez expert en cartographie moderne et SIG. Formation complète QGIS, cartographie web et analyse spatiale. Certification reconnue."
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-card via-card to-amber-50/30 overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                Formation Cartographie Moderne
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Expert en{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                                    Cartographie
                                </span>{' '}
                                Moderne
                            </h1>
                            
                            <p className="text-xl text-muted-foreground mb-8">
                                Maîtrisez les outils SIG professionnels, la cartographie web interactive 
                                et l'analyse spatiale pour devenir un expert recherché sur le marché.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg text-center hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                                >
                                    S'inscrire maintenant
                                </Link>
                                <Link
                                    href="#programme"
                                    className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg text-center hover:bg-amber-500 hover:text-white transition-all duration-300"
                                >
                                    Voir le programme
                                </Link>
                            </div>

                            {/* Infos rapides */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">3 mois</div>
                                    <div className="text-sm text-muted-foreground">Durée</div>
                                </div>
                                <div className="text-center">
                                    <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">12 max</div>
                                    <div className="text-sm text-muted-foreground">Par groupe</div>
                                </div>
                                <div className="text-center">
                                    <Award className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">Certifiante</div>
                                    <div className="text-sm text-muted-foreground">Reconnue</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Placeholder Image */}
                            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-24 h-24 -blue-400 mx-auto mb-4" />
                                    <img src='/images/formations/cartographie-formation.jpg' className="text-blue-600 font-semibold w-15 h-15" alt="Image: Formation Cartographie"/>
                                    <p className="text-blue-500 text-sm mt-2">Étudiants travaillant sur QGIS</p>
                                </div>
                            </div>
                            
                            {/* Badges flottants */}
                            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 text-amber-500 mr-2" />
                                    <span className="font-semibold text-foreground">98% de satisfaction</span>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-blue-600">2 400 $</div>
                                    <div className="text-sm text-muted-foreground">Financement possible</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Objectifs Section */}
            <section className="py-16 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Objectifs de la{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                                formation
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {objectifs.map((objectif, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-foreground font-medium">{objectif}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programme Section */}
            <section id="programme" className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Programme{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                détaillé
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            180 heures de formation réparties en 4 modules progressifs pour une montée en compétences optimale.
                        </p>
                    </motion.div>

                    <div className="space-y-8 max-w-4xl mx-auto gap-2">
                        {programme.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                                    <div className="lg:w-1/4">
                                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6 text-center">
                                            <div className="text-sm font-semibold opacity-90">MODULE</div>
                                            <div className="text-2xl font-bold">{module.module}</div>
                                            <div className="text-xs mt-2 opacity-90">{module.duree}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="lg:w-3/4">
                                        <h3 className="text-2xl font-bold text-foreground mb-4">
                                            {module.titre}
                                        </h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                                    <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                                                    Compétences acquises
                                                </h4>
                                                <ul className="space-y-2">
                                                    {module.competences.map((competence, compIndex) => (
                                                        <li key={compIndex} className="flex items-start text-sm">
                                                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                            <span className="text-foreground">{competence}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                                    <Briefcase className="w-4 h-4 mr-2 text-amber-500" />
                                                    Outils utilisés
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {module.outils.map((outil, outilIndex) => (
                                                        <span
                                                            key={outilIndex}
                                                            className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                                                        >
                                                            {outil}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Public Cible Section */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            À qui s'adresse cette{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                formation
                            </span>
                            ?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {publics.map((publi, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">
                                            {publi.groupe}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {publi.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modalités Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Modalités{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    pratiques
                                </span>
                            </h2>
                            
                            <div className="space-y-6">
                                {[
                                    { icon: Calendar, text: "Prochaine session : 15 Janvier 2024" },
                                    { icon: Clock, text: "Durée : 3 mois (180 heures)" },
                                    { icon: Users, text: "12 participants maximum par session" },
                                    { icon: MapPin, text: "Formation en présentiel ou distanciel" },
                                    { icon: Award, text: "Certification délivrée en fin de formation" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <item.icon className="w-6 h-6 text-amber-600 mr-4" />
                                        <span className="text-foreground font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                                Tarif de la formation
                            </h3>
                            
                            <div className="text-center mb-6">
                                <div className="text-5xl font-bold text-amber-600 mb-2">2 400 $</div>
                                <div className="text-muted-foreground">TTC - Financement possible</div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Accès à tous les modules de formation",
                                    "Support de cours complet",
                                    "Accompagnement personnalisé",
                                    "Certification reconnue",
                                    "Accès à la communauté des alumni"
                                ].map((avantage, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                                        <span className="text-foreground">{avantage}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg text-center hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center"
                            >
                                S'inscrire maintenant
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Prêt à devenir expert en cartographie ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez notre prochaine session et transformez votre carrière dans les technologies géospatiales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Contacter un conseiller
                            </Link>
                            <Link
                                href="/formations"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
                            >
                                Voir les autres formations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PrincipaleLayoutSite>
    );
}