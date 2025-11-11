import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CheckCircle, 
    Clock, 
    Users, 
    Award, 
    Satellite,
    Calendar,
    BookOpen,
    Briefcase,
    Star,
    ArrowRight,
    Globe,
    Cpu,
    Database,
    BarChart3,
    Cloud
} from 'lucide-react';

export default function TeledetectionFormation() {
    const programme = [
        {
            module: "Module 1",
            titre: "Fondamentaux de la Télédétection",
            duree: "45 heures",
            competences: [
                "Principes physiques de la télédétection",
                "Types de capteurs et plateformes",
                "Résolutions spatiale, spectrale et temporelle",
                "Interactions rayonnement-matière",
                "Corrections atmosphériques"
            ],
            outils: ["Théorie", "Documentation scientifique"]
        },
        {
            module: "Module 2",
            titre: "Traitement d'Images Satellitaires",
            duree: "55 heures",
            competences: [
                "Traitement des images Sentinel et Landsat",
                "Classification supervisée et non supervisée",
                "Indices spectraux (NDVI, NDWI, NDBI)",
                "Fusion de données multi-sources",
                "Analyse de séries temporelles"
            ],
            outils: ["QGIS", "SNAP", "ArcGIS"]
        },
        {
            module: "Module 3",
            titre: "Applications Thématiques Avancées",
            duree: "50 heures",
            competences: [
                "Suivi de l'occupation des sols",
                "Monitoring agricole et forestier",
                "Surveillance environnementale",
                "Gestion des risques naturels",
                "Urbanisme et aménagement"
            ],
            outils: ["Google Earth Engine", "ENVI", "ERDAS Imagine"]
        },
        {
            module: "Module 4",
            titre: "Machine Learning et Projet Final",
            duree: "30 heures",
            competences: [
                "Algorithmes de machine learning",
                "Deep learning pour l'imagerie",
                "Validation des résultats",
                "Projet de recherche appliquée",
                "Rédaction scientifique"
            ],
            outils: ["Python", "TensorFlow", "RStudio"]
        }
    ];

    const objectifs = [
        "Maîtriser les principes fondamentaux de la télédétection spatiale",
        "Être capable de traiter et analyser des images satellitaires multi-temporelles",
        "Développer des compétences en classification et analyse spectrale",
        "Mettre en œuvre des solutions pour le monitoring environnemental",
        "Concevoir et réaliser des projets de télédétection complets"
    ];

    const publics = [
        {
            groupe: "Géomaticiens",
            description: "Perfectionnement en analyse d'images satellitaires"
        },
        {
            groupe: "Environmentalistes",
            description: "Monitoring écologique et gestion des ressources"
        },
        {
            groupe: "Agronomes",
            description: "Agriculture de précision et suivi des cultures"
        },
        {
            groupe: "Chercheurs",
            description: "Méthodologies avancées pour la recherche"
        }
    ];

    const satellites = [
        {
            nom: "Sentinel-2 (ESA)",
            usage: "Surveillance terrestre - 10m de résolution",
            bandes: "13 bandes spectrales",
            image: "/images/teledetection/sentinel-2.jpg"
        },
        {
            nom: "Landsat 8/9 (NASA)",
            usage: "Observation terrestre historique",
            bandes: "11 bandes spectrales",
            image: "/images/teledetection/landsat.jpg"
        },
        {
            nom: "MODIS (NASA)",
            usage: "Surveillance globale quotidienne",
            bandes: "36 bandes spectrales",
            image: "/images/teledetection/modis.jpg"
        },
        {
            nom: "Pléiades (Airbus)",
            usage: "Très haute résolution - 0.5m",
            bandes: "4 bandes spectrales",
            image: "/images/teledetection/pleiades.jpg"
        }
    ];

    return (
        <PrincipaleLayoutSite 
            title="Formation Expert en Télédétection | GeoFormation"
            description="Devenez expert en analyse d'images satellitaires. Formation complète traitement Sentinel, Landsat, machine learning et applications environnementales."
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-card via-card to-violet-50/30 overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Satellite className="w-4 h-4 mr-2" />
                                Formation Télédétection Avancée
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Expert en{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                                    Télédétection
                                </span>
                            </h1>
                            
                            <p className="text-xl text-muted-foreground mb-8">
                                Maîtrisez l'analyse d'images satellitaires et le traitement de données spatiales. 
                                Devenez expert en monitoring environnemental, agriculture de précision et recherche scientifique.
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
                                    <Clock className="w-6 h-6 text-violet-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">4 mois</div>
                                    <div className="text-sm text-muted-foreground">Durée</div>
                                </div>
                                <div className="text-center">
                                    <Users className="w-6 h-6 text-violet-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">10 max</div>
                                    <div className="text-sm text-muted-foreground">Par groupe</div>
                                </div>
                                <div className="text-center">
                                    <Award className="w-6 h-6 text-violet-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">Expertise</div>
                                    <div className="text-sm text-muted-foreground">Avancée</div>
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
                            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <Globe className="w-24 h-24 text-violet-400 mx-auto mb-4" />
                                    <p className="text-violet-600 font-semibold">Image: Analyse Satellite</p>
                                    <p className="text-violet-500 text-sm mt-2">Traitement d'images Sentinel-2</p>
                                </div>
                            </div>
                            
                            {/* Badges flottants */}
                            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center">
                                    <Cpu className="w-5 h-5 text-amber-500 mr-2" />
                                    <span className="font-semibold text-foreground">Machine Learning</span>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-violet-600">3 200 €</div>
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
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
                                    <CheckCircle className="w-6 h-6 text-violet-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-foreground font-medium">{objectif}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Satellites Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Données{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                satellitaires
                            </span>{' '}
                            utilisées
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Apprenez sur les principales missions satellitaires utilisées dans l'industrie et la recherche.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {satellites.map((satellite, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Placeholder Image */}
                                <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                                    <div className="text-center text-violet-600">
                                        <Satellite className="w-12 h-12 mx-auto mb-2" />
                                        <p className="text-sm font-semibold">{satellite.nom}</p>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-600 transition-colors">
                                    {satellite.nom}
                                </h3>
                                <p className="text-muted-foreground mb-3">
                                    {satellite.usage}
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded">
                                        {satellite.bandes}
                                    </span>
                                    <span className="text-emerald-600 font-semibold flex items-center">
                                        <Database className="w-4 h-4 mr-1" />
                                        Données gratuites
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programme Section */}
            <section id="programme" className="py-20 bg-card">
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
                            180 heures de formation avancée en traitement d'images satellitaires et analyse de données spatiales.
                        </p>
                    </motion.div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {programme.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-background rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                                    <div className="lg:w-1/4">
                                        <div className="bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-2xl p-6 text-center">
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
                                                    <BookOpen className="w-4 h-4 mr-2 text-violet-500" />
                                                    Compétences acquises
                                                </h4>
                                                <ul className="space-y-2">
                                                    {module.competences.map((competence, compIndex) => (
                                                        <li key={compIndex} className="flex items-start text-sm">
                                                            <CheckCircle className="w-4 h-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />
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

            {/* Applications Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Applications{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                                concrètes
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                titre: "Agriculture de Précision",
                                description: "Suivi des cultures, stress hydrique, rendements",
                                icon: BarChart3,
                                exemples: ["NDVI", "Evapotranspiration", "Santé des cultures"]
                            },
                            {
                                titre: "Monitoring Environnemental",
                                description: "Déforestation, qualité de l'air, changement climatique",
                                icon: Globe,
                                exemples: ["Cartographie CO₂", "Suivi glaciers", "Pollution"]
                            },
                            {
                                titre: "Gestion des Risques",
                                description: "Inondations, incendies, sécheresses",
                                icon: Cloud,
                                exemples: ["Alertes précoces", "Cartographie risques", "Planification"]
                            },
                            {
                                titre: "Urbanisme et Aménagement",
                                description: "Expansion urbaine, utilisation des sols",
                                icon: Database,
                                exemples: ["Croissance villes", "Espaces verts", "Infrastructures"]
                            },
                            {
                                titre: "Recherche Scientifique",
                                description: "Études climatiques, océanographie, géologie",
                                icon: Cpu,
                                exemples: ["Modèles climat", "Courants marins", "Ressources"]
                            },
                            {
                                titre: "Sécurité et Défense",
                                description: "Surveillance, renseignement, cartographie",
                                icon: Satellite,
                                exemples: ["Monitoring zones", "Analyse changements", "Support"]
                            }
                        ].map((application, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <application.icon className="w-12 h-12 text-violet-500 mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {application.titre}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {application.description}
                                </p>
                                <div className="space-y-1">
                                    {application.exemples.map((exemple, exIndex) => (
                                        <div key={exIndex} className="flex items-center text-sm">
                                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                                            <span className="text-foreground">{exemple}</span>
                                        </div>
                                    ))}
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
                                    <div className="bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform">
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
                                    { icon: Calendar, text: "Prochaine session : 20 Mars 2024" },
                                    { icon: Clock, text: "Durée : 4 mois (180 heures)" },
                                    { icon: Users, text: "10 participants maximum par session" },
                                    { icon: Cpu, text: "Machine Learning et IA inclus" },
                                    { icon: Award, text: "Certification expert délivrée" }
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
                                <div className="text-5xl font-bold text-violet-600 mb-2">3 200 €</div>
                                <div className="text-muted-foreground">TTC - Financement possible</div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Accès à toutes les données satellitaires",
                                    "Licences logicielles professionnelles",
                                    "Formation Machine Learning incluse",
                                    "Projet de recherche personnel",
                                    "Certification expert GeoFormation",
                                    "Accès à la plateforme cloud"
                                ].map((avantage, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-violet-500 mr-3" />
                                        <span className="text-foreground">{avantage}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg text-center hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center"
                            >
                                Devenir expert
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
                            Prêt à analyser la Terre depuis l'espace ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez notre formation expert et maîtrisez les technologies de télédétection les plus avancées.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Contacter un expert
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