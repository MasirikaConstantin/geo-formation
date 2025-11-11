import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { motion } from 'framer-motion';
import { 
    Star,
    Quote,
    Users,
    Award,
    Calendar,
    MapPin,
    Briefcase,
    Play,
    ArrowRight
} from 'lucide-react';

export default function Temoignages() {
    const temoignages = [
        {
            id: 1,
            nom: "Marc Dubois",
            poste: "Géomaticien - Bureau d'Études Topographique",
            entreprise: "Topo Solutions",
            formation: "Expert en Cartographie Moderne",
            note: 5,
            message: "La formation cartographie a complètement transformé notre façon de travailler. En 3 mois, nous sommes passés de simples utilisateurs de QGIS à de véritables experts en analyse spatiale. Les projets concrets nous ont permis d'appliquer immédiatement nos nouvelles compétences.",
            date: "Janvier 2024",
            ville: "Lyon",
            image: "/images/temoignages/marc-dubois.jpg",
            video: false
        },
        {
            id: 2,
            nom: "Élise Petit",
            poste: "Photogrammètre Indépendante",
            entreprise: "DroneVision Pro",
            formation: "Télépilote de Drone Professionnel",
            note: 5,
            message: "Grâce à la formation drone, j'ai pu lancer mon activité de photogrammétrie en seulement 2 mois. L'accompagnement personnalisé et la pratique intensive m'ont donné confiance pour démarrer. Aujourd'hui, je travaille avec des architectes et des promoteurs immobiliers.",
            date: "Décembre 2023",
            ville: "Toulouse",
            image: "/images/temoignages/elise-petit.jpg",
            video: true
        },
        {
            id: 3,
            nom: "Dr. Ahmed Khan",
            poste: "Chercheur en Environnement",
            entreprise: "CNRS",
            formation: "Expert en Télédétection",
            note: 5,
            message: "La formation télédétection a été un véritable accélérateur pour mes recherches. Les compétences en machine learning et traitement d'images satellitaires acquises ont permis de publier deux articles dans des revues scientifiques. Une formation d'excellente qualité.",
            date: "Novembre 2023",
            ville: "Paris",
            image: "/images/temoignages/ahmed-khan.jpg",
            video: false
        },
        {
            id: 4,
            nom: "Sophie Martin",
            poste: "Urbaniste",
            entreprise: "Mairie de Bordeaux",
            formation: "Expert en Cartographie Moderne",
            note: 4,
            message: "Formation parfaitement adaptée aux besoins des collectivités. J'ai appris à créer des cartes interactives pour nos projets d'aménagement et à analyser les données urbaines. L'équipe pédagogique est très réactive et compétente.",
            date: "Octobre 2023",
            ville: "Bordeaux",
            image: "/images/temoignages/sophie-martin.jpg",
            video: true
        },
        {
            id: 5,
            nom: "Thomas Leroy",
            poste: "Agriculteur",
            entreprise: "Ferme Moderne",
            formation: "Télépilote de Drone Professionnel",
            note: 5,
            message: "Incroyable comment cette formation a révolutionné mon exploitation ! Je peux maintenant analyser la santé de mes cultures, optimiser l'irrigation et détecter les maladies rapidement. Un investissement très rentable.",
            date: "Septembre 2023",
            ville: "Dijon",
            image: "/images/temoignages/thomas-leroy.jpg",
            video: false
        },
        {
            id: 6,
            nom: "Nadia Chen",
            poste: "Data Scientist",
            entreprise: "TechGeo",
            formation: "Expert en Télédétection",
            note: 5,
            message: "Le module machine learning appliqué à la télédétection est exceptionnel. J'ai pu développer des modèles de prédiction pour la déforestation qui sont maintenant utilisés par mon entreprise. Des formateurs experts et passionnants.",
            date: "Août 2023",
            ville: "Lille",
            image: "/images/temoignages/nadia-chen.jpg",
            video: false
        }
    ];

    const statistiques = [
        {
            chiffre: "98%",
            label: "de satisfaction",
            description: "Taux de recommandation"
        },
        {
            chiffre: "4.9/5",
            label: "note moyenne",
            description: "Sur tous nos témoignages"
        },
        {
            chiffre: "500+",
            label: "apprenants",
            description: "Nous ont fait confiance"
        },
        {
            chiffre: "95%",
            label: "de réussite",
            description: "Aux certifications"
        }
    ];

    const formationsAvecTemoignages = [
        {
            nom: "Expert en Cartographie Moderne",
            count: 24,
            icon: MapPin,
            couleur: "from-blue-500 to-cyan-500"
        },
        {
            nom: "Télépilote de Drone Professionnel",
            count: 18,
            icon: Briefcase,
            couleur: "from-emerald-500 to-green-500"
        },
        {
            nom: "Expert en Télédétection",
            count: 22,
            icon: Award,
            couleur: "from-violet-500 to-purple-500"
        }
    ];

    const renderStars = (note: number) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${
                            i < note 
                                ? "text-amber-400 fill-amber-400" 
                                : "text-gray-300"
                        }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <PrincipaleLayoutSite
            title="Témoignages | Retours d'Expérience de Nos Apprenants"
            description="Découvrez les retours d'expérience de nos apprenants en formation cartographie, drone et télédétection. 98% de satisfaction."
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-card via-card to-amber-50/30 overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Quote className="w-4 h-4 mr-2" />
                            Ils parlent de nous
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Ils ont transformé{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                leur carrière
                            </span>
                        </h1>
                        
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Découvrez les retours d'expérience de nos apprenants qui ont suivi 
                            nos formations en cartographie, drone et télédétection.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Statistiques */}
            <section className="py-16 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statistiques.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                                    {stat.chiffre}
                                </div>
                                <div className="text-lg font-semibold text-foreground mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Témoignages Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Retours{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                d'expérience
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Des témoignages authentiques de professionnels qui ont transformé 
                            leur pratique grâce à nos formations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temoignages.map((temoignage, index) => (
                            <motion.div
                                key={temoignage.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* En-tête avec note */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        {/* Avatar */}
                                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-3">
                                            <Users className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground">{temoignage.nom}</h3>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                {temoignage.ville}
                                            </div>
                                        </div>
                                    </div>
                                    {renderStars(temoignage.note)}
                                </div>

                                {/* Badge formation */}
                                <div className="mb-4">
                                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {temoignage.formation}
                                    </span>
                                </div>

                                {/* Message */}
                                <div className="relative mb-6">
                                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-amber-200 transform -scale-x-100" />
                                    <p className="text-foreground italic relative z-10">
                                        "{temoignage.message}"
                                    </p>
                                </div>

                                {/* Métadonnées */}
                                <div className="border-t border-border pt-4">
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {temoignage.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Briefcase className="w-3 h-3 mr-1" />
                                            {temoignage.entreprise}
                                        </div>
                                    </div>
                                </div>

                                {/* Indicateur vidéo */}
                                {temoignage.video && (
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-amber-500 text-white p-2 rounded-full">
                                            <Play className="w-4 h-4" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Répartition par Formation */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Témoignages par{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                formation
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {formationsAvecTemoignages.map((formation, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="text-center group"
                            >
                                <div className={`bg-gradient-to-br ${formation.couleur} text-white rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <formation.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {formation.nom}
                                </h3>
                                <div className="text-amber-600 font-semibold text-lg mb-2">
                                    {formation.count} témoignages
                                </div>
                                <div className="flex justify-center">
                                    {renderStars(5)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Témoignage Vedette */}
            <section className="py-20 bg-gradient-to-br from-cyan-900 to-cyan-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    Témoignage vedette
                                </div>
                                
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    "Cette formation a changé ma carrière"
                                </h2>

                                <div className="flex items-center mb-6">
                                    {renderStars(5)}
                                    <span className="ml-3 text-lg font-semibold text-foreground">5/5</span>
                                </div>

                                <p className="text-lg text-muted-foreground mb-8">
                                    "En seulement 3 mois, je suis passé de technicien SIG à expert en analyse spatiale. 
                                    Les projets concrets et l'accompagnement personnalisé ont fait toute la différence. 
                                    Aujourd'hui, je manage une équipe de géomaticiens et je participe à des projets d'envergure nationale."
                                </p>

                                <div className="space-y-2">
                                    <div className="font-bold text-foreground text-xl">Marc Dubois</div>
                                    <div className="text-amber-600 font-semibold">Géomaticien Senior</div>
                                    <div className="text-muted-foreground">Topo Solutions - Lyon</div>
                                    <div className="text-sm text-muted-foreground">
                                        Formation : <span className="font-semibold">Expert en Cartographie Moderne</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Placeholder pour vidéo ou photo */}
                                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-white" />
                                        </div>
                                        <p className="text-amber-600 font-semibold">Vidéo témoignage</p>
                                        <p className="text-amber-500 text-sm">Regarder l'interview complète</p>
                                    </div>
                                    
                                    {/* Badge durée */}
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                        3:42
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            Prêt à écrire votre propre succès ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez nos centaines d'apprenants satisfaits et transformez votre carrière 
                            dans les technologies géospatiales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                            >
                                Nous contacter
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="/formations"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center"
                            >
                                Voir les formations
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PrincipaleLayoutSite>
    );
}