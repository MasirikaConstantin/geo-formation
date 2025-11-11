import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    Calendar,
    Clock,
    User,
    ArrowRight,
    Search,
    Tag,
    Eye,
    MessageCircle,
    BookOpen,
    TrendingUp,
    MapPin,
    Camera,
    Satellite
} from 'lucide-react';

export default function Blog() {
    const articlesRecents = [
        {
            id: 1,
            titre: "Les 5 tendances de la cartographie en 2024",
            description: "Découvrez les innovations qui révolutionnent la cartographie moderne et comment elles impactent les métiers de la géomatique.",
            image: "/images/blog/tendances-cartographie-2024.jpg",
            auteur: "Pierre Martin",
            date: "15 Jan 2024",
            duree: "8 min",
            categories: ["Cartographie", "Innovation"],
            vues: 1247,
            commentaires: 23
        },
        {
            id: 2,
            titre: "Photogrammétrie par drone : Guide complet pour débuter",
            description: "Tout ce que vous devez savoir pour commencer la photogrammétrie par drone, du matériel aux bonnes pratiques.",
            image: "/images/blog/guide-photogrammetrie-drone.jpg",
            auteur: "Sophie Leroy",
            date: "12 Jan 2024",
            duree: "12 min",
            categories: ["Drone", "Photogrammétrie"],
            vues: 892,
            commentaires: 18
        },
        {
            id: 3,
            titre: "Analyse des images Sentinel-2 avec Google Earth Engine",
            description: "Tutoriel pas à pas pour exploiter les données Sentinel-2 et réaliser des analyses environnementales avancées.",
            image: "/images/blog/sentinel2-google-earth-engine.jpg",
            auteur: "Thomas Dubois",
            date: "8 Jan 2024",
            duree: "15 min",
            categories: ["Télédétection", "Tutoriel"],
            vues: 1563,
            commentaires: 31
        },
        {
            id: 4,
            titre: "QGIS vs ArcGIS : Quel logiciel choisir en 2024 ?",
            description: "Comparatif détaillé des deux leaders des SIG pour vous aider à faire le bon choix selon vos besoins.",
            image: "/images/blog/qgis-vs-arcgis-comparatif.jpg",
            auteur: "Pierre Martin",
            date: "5 Jan 2024",
            duree: "10 min",
            categories: ["SIG", "Comparatif"],
            vues: 2104,
            commentaires: 45
        },
        {
            id: 5,
            titre: "Machine Learning en télédétection : Cas d'usage concrets",
            description: "Comment l'intelligence artificielle transforme l'analyse d'images satellitaires avec des exemples pratiques.",
            image: "/images/blog/machine-learning-teledetection.jpg",
            auteur: "Thomas Dubois",
            date: "3 Jan 2024",
            duree: "18 min",
            categories: ["Télédétection", "IA"],
            vues: 1342,
            commentaires: 29
        },
        {
            id: 6,
            titre: "Devenir télépilote : Le parcours complet de certification",
            description: "Toutes les étapes pour obtenir sa certification DGAC et lancer son activité de télépilote professionnel.",
            image: "/images/blog/devenir-telepilote-certification.jpg",
            auteur: "Sophie Leroy",
            date: "28 Déc 2023",
            duree: "11 min",
            categories: ["Drone", "Certification"],
            vues: 987,
            commentaires: 22
        }
    ];

    const articlesPopulaires = [
        {
            id: 7,
            titre: "Les métiers de la géomatique qui recrutent en 2024",
            description: "Panorama des opportunités professionnelles dans le secteur géospatial et les compétences recherchées.",
            image: "/images/blog/metiers-geomatique-recrutement.jpg",
            auteur: "Marie Lambert",
            date: "20 Déc 2023",
            vues: 3247,
            categories: ["Carrière", "Géomatique"]
        },
        {
            id: 8,
            titre: "Créer des cartes interactives avec Leaflet et React",
            description: "Tutoriel technique pour intégrer des cartes dynamiques dans vos applications web modernes.",
            image: "/images/blog/cartes-interactives-leaflet-react.jpg",
            auteur: "Pierre Martin",
            date: "15 Déc 2023",
            vues: 2876,
            categories: ["Développement", "Cartographie Web"]
        },
        {
            id: 9,
            titre: "L'impact du changement climatique vu depuis l'espace",
            description: "Analyse des données satellitaires pour mesurer les effets du réchauffement climatique.",
            image: "/images/blog/changement-climatique-espace.jpg",
            auteur: "Thomas Dubois",
            date: "10 Déc 2023",
            vues: 4123,
            categories: ["Environnement", "Télédétection"]
        }
    ];

    const categories = [
        { nom: "Cartographie", count: 24, icon: MapPin, color: "from-blue-500 to-cyan-500" },
        { nom: "Drone", count: 18, icon: Camera, color: "from-emerald-500 to-green-500" },
        { nom: "Télédétection", count: 22, icon: Satellite, color: "from-violet-500 to-purple-500" },
        { nom: "SIG", count: 15, icon: BookOpen, color: "from-amber-500 to-orange-500" },
        { nom: "Tutoriel", count: 31, icon: BookOpen, color: "from-red-500 to-pink-500" },
        { nom: "Innovation", count: 12, icon: TrendingUp, color: "from-indigo-500 to-blue-500" }
    ];

    const tagsPopulaires = [
        "QGIS", "ArcGIS", "DJI", "Sentinel-2", "Landsat", "Photogrammétrie", 
        "Machine Learning", "Python", "Google Earth Engine", "DGAC", "Certification",
        "Web Mapping", "OpenStreetMap", "3D", "Lidar", "Agriculture de précision"
    ];

    return (
        <PrincipaleLayoutSite 
            title="Blog Géospatial | Actualités, Tutoriels et Conseils"
            description="Découvrez nos articles sur la cartographie, le drone et la télédétection. Tutoriels, actualités et conseils d'experts pour progresser."
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
                            <BookOpen className="w-4 h-4 mr-2" />
                            Blog Géospatial
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Actualités &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                Conseils
                            </span>
                        </h1>
                        
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Découvrez nos articles experts sur la cartographie moderne, les drones 
                            professionnels et la télédétection. Tutoriels, innovations et retours d'expérience.
                        </p>

                        {/* Barre de recherche */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un article, un tutoriel..."
                                    className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contenu Principal */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Catégories */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                                    <Tag className="w-5 h-5 mr-2 text-amber-600" />
                                    Catégories
                                </h3>
                                <div className="space-y-3">
                                    {categories.map((categorie, index) => (
                                        <Link
                                            key={index}
                                            href={`/blog/categorie/${categorie.nom.toLowerCase()}`}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 group"
                                        >
                                            <div className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categorie.color} mr-3`}></div>
                                                <span className="text-foreground group-hover:text-amber-600 transition-colors">
                                                    {categorie.nom}
                                                </span>
                                            </div>
                                            <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                                                {categorie.count}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Articles Populaires */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                                    <TrendingUp className="w-5 h-5 mr-2 text-amber-600" />
                                    Articles Populaires
                                </h3>
                                <div className="space-y-4">
                                    {articlesPopulaires.map((article, index) => (
                                        <Link
                                            key={article.id}
                                            href={`/blog/${article.id}`}
                                            className="block group"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <BookOpen className="w-6 h-6 text-gray-500" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-semibold text-foreground group-hover:text-amber-600 transition-colors line-clamp-2 mb-1">
                                                        {article.titre}
                                                    </h4>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <Eye className="w-3 h-3 mr-1" />
                                                        {article.vues} vues
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tags Populaires */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-4">
                                    Tags Populaires
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {tagsPopulaires.map((tag, index) => (
                                        <Link
                                            key={index}
                                            href={`/blog/tag/${tag.toLowerCase()}`}
                                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-amber-100 hover:text-amber-600 transition-all duration-200"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Articles Principaux */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center justify-between mb-8"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Articles Récents
                                </h2>
                                <div className="text-sm text-muted-foreground">
                                    {articlesRecents.length} articles
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {articlesRecents.map((article, index) => (
                                    <motion.article
                                        key={article.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                    >
                                        <Link href={`/blog/${article.id}`}>
                                            {/* Image de l'article */}
                                            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <BookOpen className="w-12 h-12 text-gray-500" />
                                                </div>
                                                <div className="absolute bottom-4 left-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {article.categories.map((categorie, catIndex) => (
                                                            <span
                                                                key={catIndex}
                                                                className="bg-black/70 text-white px-2 py-1 rounded text-xs backdrop-blur-sm"
                                                            >
                                                                {categorie}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                                                    {article.titre}
                                                </h3>
                                                
                                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                                    {article.description}
                                                </p>

                                                {/* Métadonnées */}
                                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center">
                                                            <User className="w-4 h-4 mr-1" />
                                                            {article.auteur}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-1" />
                                                            {article.date}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="w-4 h-4 mr-1" />
                                                            {article.duree}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Stats */}
                                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center">
                                                            <Eye className="w-4 h-4 mr-1" />
                                                            {article.vues}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MessageCircle className="w-4 h-4 mr-1" />
                                                            {article.commentaires}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-1 transition-transform">
                                                        Lire l'article
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex justify-center mt-12"
                            >
                                <nav className="flex items-center space-x-2">
                                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        Précédent
                                    </button>
                                    <button className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold">
                                        1
                                    </button>
                                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        2
                                    </button>
                                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        3
                                    </button>
                                    <span className="px-2 text-muted-foreground">...</span>
                                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        10
                                    </button>
                                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        Suivant
                                    </button>
                                </nav>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Restez informé
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Recevez nos derniers articles et tutoriels directement dans votre boîte mail.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                                S'abonner
                            </button>
                        </div>
                        
                        <p className="text-sm text-amber-200 mt-4">
                            ✨ 2 500+ professionnels déjà inscrits
                        </p>
                    </motion.div>
                </div>
            </section>
        </PrincipaleLayoutSite>
    );
}