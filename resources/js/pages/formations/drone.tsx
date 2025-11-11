import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CheckCircle, 
    Clock, 
    Users, 
    Award, 
    Camera,
    Calendar,
    BookOpen,
    Briefcase,
    Star,
    ArrowRight,
    Shield,
    Navigation,
    Video,
    Map
} from 'lucide-react';

export default function DroneFormation() {
    const programme = [
        {
            module: "Module 1",
            titre: "Théorie et Réglementation DGAC",
            duree: "30 heures",
            competences: [
                "Réglementation aérienne et DGAC",
                "Météorologie et aérologie",
                "Physique du vol et aérodynamique",
                "Sécurité et facteurs humains",
                "Procédures d'urgence"
            ],
            outils: ["Manuel DGAC", "Simulateur théorique"]
        },
        {
            module: "Module 2",
            titre: "Pilotage Pratique et Manœuvres",
            duree: "50 heures",
            competences: [
                "Maîtrise des commandes de vol",
                "Manœuvres de base et avancées",
                "Vol en immersion FPV",
                "Gestion des situations délicates",
                "Checklists pré-vol et post-vol"
            ],
            outils: ["DJI Phantom", "DJI Mavic", "Simulateur de vol"]
        },
        {
            module: "Module 3",
            titre: "Photogrammétrie et Capteurs",
            duree: "40 heures",
            competences: [
                "Principes de la photogrammétrie",
                "Capteurs et caméras professionnelles",
                "Planification de mission",
                "Traitement des données acquises",
                "Modélisation 3D et orthophotos"
            ],
            outils: ["Pix4D", "DroneDeploy", "Agisoft Metashape"]
        },
        {
            module: "Module 4",
            titre: "Applications Métier et Projet",
            duree: "60 heures",
            competences: [
                "Applications BTP et topographie",
                "Inspections techniques industrielles",
                "Agriculture de précision",
                "Cinématographie et audiovisuel",
                "Projet client réel"
            ],
            outils: ["Tous les outils vus", "Logiciels métier"]
        }
    ];

    const objectifs = [
        "Obtenir l'attestation de formation théorique DGAC",
        "Maîtriser le pilotage de drone en toutes conditions",
        "Réaliser des missions de photogrammétrie professionnelle",
        "Développer des compétences en inspection technique",
        "Gérer une activité de télépilote professionnel"
    ];

    const publics = [
        {
            groupe: "Débutants",
            description: "Aucune expérience requise en pilotage"
        },
        {
            groupe: "Photographes/Vidéastes",
            description: "Diversification vers l'audiovisuel par drone"
        },
        {
            groupe: "Techniciens BTP",
            description: "Applications en topographie et inspections"
        },
        {
            groupe: "Agriculteurs",
            description: "Maîtrise des drones pour l'agriculture de précision"
        }
    ];

    const equipements = [
        {
            nom: "DJI Mavic 3 Enterprise",
            usage: "Photogrammétrie et inspections",
            image: "/images/drone/mavic-enterprise.jpg"
        },
        {
            nom: "DJI Phantom 4 RTK",
            usage: "Topographie de précision",
            image: "/images/drone/phantom-rtk.jpg"
        },
        {
            nom: "DJI FPV Drone",
            usage: "Vol immersion et cinématographie",
            image: "/images/drone/fpv-drone.jpg"
        },
        {
            nom: "Station de traitement",
            usage: "Post-traitement des données",
            image: "/images/drone/station-traitement.jpg"
        }
    ];

    return (
        <PrincipaleLayoutSite 
            title="Formation Télépilote de Drone Professionnel | GeoFormation"
            description="Devenez télépilote certifié DGAC. Formation complète théorique et pratique drone, photogrammétrie, inspections techniques. Certification reconnue."
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-card via-card to-emerald-50/30 overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Camera className="w-4 h-4 mr-2" />
                                Formation Drone Professionnel
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Télépilote de{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">
                                    Drone
                                </span>{' '}
                                Pro
                            </h1>
                            
                            <p className="text-xl text-muted-foreground mb-8">
                                Devenez télépilote certifié DGAC avec notre formation complète théorique et pratique. 
                                Maîtrisez la photogrammétrie, les inspections techniques et lancez votre activité.
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
                                    <Clock className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">2 mois</div>
                                    <div className="text-sm text-muted-foreground">Durée</div>
                                </div>
                                <div className="text-center">
                                    <Users className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">8 max</div>
                                    <div className="text-sm text-muted-foreground">Par groupe</div>
                                </div>
                                <div className="text-center">
                                    <Award className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                    <div className="font-semibold text-foreground">Certifiante</div>
                                    <div className="text-sm text-muted-foreground">DGAC</div>
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
                            <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <img src='/images/formations/drone-formation.jpg' className="text-emerald-600 font-semibold"/>
                                    <p className="text-emerald-500 text-sm mt-2">Session pratique de pilotage</p>
                                </div>
                            </div>
                            
                            {/* Badges flottants */}
                            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center">
                                    <Shield className="w-5 h-5 text-amber-500 mr-2" />
                                    <span className="font-semibold text-foreground">Certification DGAC</span>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-emerald-600">1 800 $</div>
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">
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

            {/* Équipements Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Matériel et{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                équipements
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Apprenez sur du matériel professionnel dernier cri utilisé dans l'industrie.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {equipements.map((equipement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Placeholder Image */}
                                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl mb-4 flex items-center justify-center">
                                    <div className="text-center text-emerald-600">
                                        <Camera className="w-12 h-12 mx-auto mb-2" />
                                        <p className="text-sm font-semibold">{equipement.nom}</p>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-emerald-600 transition-colors">
                                    {equipement.nom}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {equipement.usage}
                                </p>
                                <div className="flex items-center text-sm text-emerald-600 font-semibold">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Disponible en formation
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
                            180 heures de formation réparties en 4 modules pour devenir télépilote professionnel.
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
                                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-2xl p-6 text-center">
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
                                                    <BookOpen className="w-4 h-4 mr-2 text-emerald-500" />
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
            <section className="py-20 bg-background">
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
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform">
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

            {/* Débouchés Section */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Débouchés{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">
                                professionnels
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                titre: "Télépilote Indépendant",
                                description: "Créer son activité de prestations drone",
                                salaire: "40-60k$/an",
                                icon: Navigation
                            },
                            {
                                titre: "Opérateur Drone BTP",
                                description: "Topographie et inspections chantier",
                                salaire: "30-45k$/an",
                                icon: Map
                            },
                            {
                                titre: "Technicien Inspection",
                                description: "Contrôles techniques industriels",
                                salaire: "35-50k$/an",
                                icon: Shield
                            },
                            {
                                titre: "Photogrammètre",
                                description: "Modélisation 3D et orthophotos",
                                salaire: "35-55k$/an",
                                icon: Camera
                            },
                            {
                                titre: "Vidéaste Drone",
                                description: "Audiovisuel et cinématographie",
                                salaire: "Variable selon projets",
                                icon: Video
                            },
                            {
                                titre: "Formateur Drone",
                                description: "Enseignement du télépilotage",
                                salaire: "35-50k$/an",
                                icon: Users
                            }
                        ].map((debouche, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center"
                            >
                                <debouche.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {debouche.titre}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {debouche.description}
                                </p>
                                <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                                    {debouche.salaire}
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
                                    { icon: Calendar, text: "Prochaine session : 5 Février 2024" },
                                    { icon: Clock, text: "Durée : 2 mois (180 heures)" },
                                    { icon: Users, text: "8 participants maximum par session" },
                                    { icon: Shield, text: "Attestation théorique DGAC incluse" },
                                    { icon: Award, text: "Certification GeoFormation délivrée" }
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
                                <div className="text-5xl font-bold text-emerald-600 mb-2">1 800 $</div>
                                <div className="text-muted-foreground">TTC - Financement possible</div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Formation théorique DGAC complète",
                                    "40 heures de vol pratique incluses",
                                    "Matériel professionnel fourni",
                                    "Accès aux logiciels de photogrammétrie",
                                    "Attestation et certification",
                                    "Accompagnement à l'installation"
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
                                Devenir télépilote
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
                            Prêt à décoller vers une nouvelle carrière ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez notre prochaine session et devenez télépilote professionnel certifié.
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