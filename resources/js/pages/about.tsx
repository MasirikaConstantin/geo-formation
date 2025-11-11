import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CheckCircle, 
    Users, 
    Award, 
    Target,
    Eye,
    Heart,
    Globe,
    Clock,
    MapPin,
    BarChart3,
    Shield,
    Quote
} from 'lucide-react';

export default function About() {
    const valeurs = [
        {
            icon: Target,
            title: "Excellence Pédagogique",
            description: "Des formations de qualité dispensées par des experts du terrain",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Heart,
            title: "Accompagnement Personnalisé",
            description: "Suivi individuel pour la réussite de chaque apprenant",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: Eye,
            title: "Innovation Technologique",
            description: "Veille constante sur les dernières technologies géospatiales",
            color: "from-emerald-500 to-green-500"
        },
        {
            icon: Globe,
            title: "Impact Environnemental",
            description: "Formations orientées vers le développement durable",
            color: "from-violet-500 to-purple-500"
        }
    ];

    const equipe = [
        {
            nom: "Pierre Martin",
            role: "Directeur Pédagogique",
            expertise: "25 ans en cartographie et SIG",
            description: "Ancien chef de projet à l'IGN, expert QGIS et analyse spatiale",
            image: "/images/equipe/pierre-martin.jpg"
        },
        {
            nom: "Sophie Leroy",
            role: "Formatrice Drone",
            expertise: "Télépilote certifiée DGAC",
            description: "Spécialiste photogrammétrie et inspections techniques",
            image: "/images/equipe/sophie-leroy.jpg"
        },
        {
            nom: "Thomas Dubois",
            role: "Expert Télédétection",
            expertise: "Docteur en géomatique",
            description: "Chercheur en analyse d'images satellitaires et machine learning",
            image: "/images/equipe/thomas-dubois.jpg"
        },
        {
            nom: "Marie Lambert",
            role: "Responsable Commerciale",
            expertise: "10 ans en formation professionnelle",
            description: "Accompagnement des entreprises et des particuliers",
            image: "/images/equipe/marie-lambert.jpg"
        }
    ];

    const chiffres = [
        {
            nombre: "15+",
            label: "Années d'expérience",
            icon: Clock
        },
        {
            nombre: "500+",
            label: "Apprenants formés",
            icon: Users
        },
        {
            nombre: "98%",
            label: "Taux de satisfaction",
            icon: Award
        },
        {
            nombre: "50+",
            label: "Entreprises partenaires",
            icon: BarChart3
        }
    ];

    const certifications = [
        {
            organisme: "DGAC",
            certification: "Centre de Formation Télépilote",
            description: "Agrément pour la formation théorique drone"
        },
        {
            organisme: "Qualiopi",
            certification: "Certification Qualité",
            description: "Reconnaissance de la qualité de nos formations"
        },
        {
            organisme: "DataDock",
            certification: "Référencement DataDock",
            description: "Formations éligibles au financement CPF"
        },
        {
            organisme: "QGIS",
            certification: "Partner Training",
            description: "Centre de formation partenaire QGIS"
        }
    ];

    const temoignages = [
        {
            nom: "Marc D.",
            entreprise: "Bureau d'Études Topographique",
            message: "La formation cartographie a transformé notre façon de travailler. Nous sommes maintenant autonomes sur QGIS et réalisons des analyses spatiales complexes.",
            formation: "Expert en Cartographie Moderne"
        },
        {
            nom: "Élise P.",
            entreprise: "Indépendante",
            message: "Grâce à la formation drone, j'ai pu lancer mon activité de photogrammétrie. L'accompagnement personnalisé a fait toute la différence.",
            formation: "Télépilote de Drone Professionnel"
        },
        {
            nom: "Dr. Ahmed K.",
            entreprise: "Chercheur en Environnement",
            message: "Formation télédétection exceptionnelle. Les compétences en machine learning acquises ont boosté mes recherches.",
            formation: "Expert en Télédétection"
        }
    ];

    return (
        <PrincipaleLayoutSite 
            title="À Propos de GeoFormation | Expert en Formation Géospatiale"
            description="Découvrez GeoFormation : 15 ans d'expertise en formation cartographie, drone et télédétection. Notre équipe, nos valeurs et notre mission."
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
                            <div className="inline-flex items-center bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                Notre Histoire
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Expert en{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    Formation
                                </span>{' '}
                                Géospatiale
                            </h1>
                            
                            <p className="text-xl text-muted-foreground mb-8">
                                Depuis 15 ans, GeoFormation accompagne les professionnels dans leur montée 
                                en compétences sur les technologies géospatiales. Notre mission : former 
                                les experts de demain en cartographie, drone et télédétection.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg text-center hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                                >
                                    Nous contacter
                                </Link>
                                <Link
                                    href="/formations"
                                    className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg text-center hover:bg-amber-500 hover:text-white transition-all duration-300"
                                >
                                    Découvrir nos formations
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Placeholder Image */}
                            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <Globe className="w-24 h-24 text-amber-400 mx-auto mb-4" />
                                    <p className="text-amber-600 font-semibold">Image: Équipe GeoFormation</p>
                                    <p className="text-amber-500 text-sm mt-2">Nos formateurs experts</p>
                                </div>
                            </div>
                            
                            {/* Badges flottants */}
                            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center">
                                    <Award className="w-5 h-5 text-amber-500 mr-2" />
                                    <span className="font-semibold text-foreground">Depuis 2009</span>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-amber-600">15 ans</div>
                                    <div className="text-sm text-muted-foreground">d'expertise</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Chiffres Section */}
            <section className="py-16 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {chiffres.map((chiffre, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <chiffre.icon className="w-8 h-8 text-amber-600" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                    {chiffre.nombre}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {chiffre.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission et Vision */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Notre{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                                    Mission
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Former les professionnels aux technologies géospatiales les plus avancées 
                                pour répondre aux enjeux de transformation numérique des territoires et 
                                des entreprises.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Démocratiser l'accès aux technologies géospatiales",
                                    "Former aux métiers d'avenir dans la géomatique",
                                    "Accompagner la transition écologique par la data",
                                    "Développer l'expertise française à l'international"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                        <span className="text-foreground">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Notre{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    Vision
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Devenir le centre de référence en formation géospatiale en Europe, 
                                reconnu pour l'excellence de notre pédagogie et l'impact de nos 
                                formations sur les territoires.
                            </p>
                            <div className="bg-card rounded-2xl p-6 border border-border">
                                <div className="flex items-start">
                                    <Target className="w-8 h-8 text-amber-600 mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">
                                            Objectif 2025
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Former 1000 professionnels par an aux technologies géospatiales 
                                            et développer 5 nouvelles formations sur les technologies émergentes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Valeurs Section */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Nos{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                Valeurs
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valeurs.map((valeur, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`bg-gradient-to-br ${valeur.color} text-white rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <valeur.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {valeur.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {valeur.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Équipe Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Notre{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                                Équipe
                            </span>{' '}
                            d'Experts
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Des professionnels expérimentés passionnés par le partage de connaissances 
                            et l'innovation géospatiale.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {equipe.map((membre, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                            >
                                {/* Placeholder Image */}
                                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 flex items-center justify-center mx-auto w-32 h-32">
                                    <Users className="w-12 h-12 text-gray-500" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                                    {membre.nom}
                                </h3>
                                <div className="text-amber-600 font-semibold mb-2">
                                    {membre.role}
                                </div>
                                <div className="text-sm text-blue-600 mb-3">
                                    {membre.expertise}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {membre.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Nos{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                Certifications
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Des formations reconnues et éligibles aux financements pour garantir 
                            la qualité de votre investissement.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {certifications.map((certification, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                                <h3 className="font-bold text-foreground mb-2">
                                    {certification.organisme}
                                </h3>
                                <div className="text-amber-600 font-semibold mb-3 text-sm">
                                    {certification.certification}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {certification.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Témoignages Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Ils nous{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                font confiance
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {temoignages.map((temoignage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-lg"
                            >
                                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                                <p className="text-foreground mb-6 italic">
                                    "{temoignage.message}"
                                </p>
                                <div className="border-t border-border pt-4">
                                    <div className="font-semibold text-foreground">{temoignage.nom}</div>
                                    <div className="text-sm text-muted-foreground mb-2">{temoignage.entreprise}</div>
                                    <div className="text-xs text-amber-600 font-medium">{temoignage.formation}</div>
                                </div>
                            </motion.div>
                        ))}
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
                            Prêt à rejoindre l'aventure GeoFormation ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez nos centaines d'apprenants satisfaits et développez 
                            des compétences recherchées dans le domaine géospatial.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Nous rencontrer
                            </Link>
                            <Link
                                href="/formations"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
                            >
                                Voir nos formations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PrincipaleLayoutSite>
    );
}