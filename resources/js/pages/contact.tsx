import PrincipaleLayoutSite from '@/layouts/principale-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Users,
    Briefcase,
    CheckCircle,
    ArrowRight,
    BookOpen
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        sujet: '',
        message: '',
        formation: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'envoi du formulaire
        console.log('Formulaire soumis:', formData);
    };

    const coordonnees = [
        {
            icon: MapPin,
            titre: "Notre adresse",
            contenu: "123 Avenue de la Géomatique\n75015 Paris, France",
            description: "Au cœur du pôle technologique parisien"
        },
        {
            icon: Phone,
            titre: "Téléphone",
            contenu: "+33 1 23 45 67 89",
            description: "Du lundi au vendredi, 9h-18h"
        },
        {
            icon: Mail,
            titre: "Email",
            contenu: "contact@geoformation.com",
            description: "Réponse sous 24h"
        },
        {
            icon: Clock,
            titre: "Horaires",
            contenu: "Lun - Ven: 9h00 - 18h00",
            description: "Accueil sur rendez-vous"
        }
    ];

    const sujets = [
        "Demande d'information formation",
        "Devis personnalisé",
        "Formation en entreprise",
        "Partenariat",
        "Stage/Alternance",
        "Autre demande"
    ];

    const formations = [
        "Expert en Cartographie Moderne",
        "Télépilote de Drone Professionnel",
        "Expert en Télédétection",
        "Formation sur mesure",
        "Je ne sais pas encore"
    ];

    const avantages = [
        {
            titre: "Expertise 15 ans",
            description: "Notre équipe d'experts vous accompagne"
        },
        {
            titre: "Réponse sous 24h",
            description: "Nous traitons rapidement votre demande"
        },
        {
            titre: "Devis gratuit",
            description: "Évaluation personnalisée sans engagement"
        },
        {
            titre: "Financement possible",
            description: "Solutions de financement adaptées"
        }
    ];

    return (
        <PrincipaleLayoutSite 
            title="Contact | GeoFormation - Experts en Formation Géospatiale"
            description="Contactez nos experts en formation cartographie, drone et télédétection. Devis personnalisé, renseignements et accompagnement sur mesure."
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
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Contactez-nous
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Parlons de votre{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    projet
                                </span>
                            </h1>
                            
                            <p className="text-xl text-muted-foreground mb-8">
                                Que vous soyez particulier ou entreprise, notre équipe d'experts est à votre écoute 
                                pour vous orienter vers la formation la plus adaptée à vos besoins.
                            </p>

                            {/* Avantages */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {avantages.map((avantage, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-foreground">{avantage.titre}</div>
                                            <div className="text-sm text-muted-foreground">{avantage.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Carte de visite */}
                            <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        Marie Lambert
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Responsable Commerciale & Conseillère Formation
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                        <Phone className="w-5 h-5 text-amber-600 mr-3" />
                                        <div>
                                            <div className="font-semibold dark:text-black">+33 1 23 45 67 89</div>
                                            <div className="text-sm text-muted-foreground">Direct</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                                        <div>
                                            <div className="font-semibold text-foreground dark:text-black">marie@geoformation.com</div>
                                            <div className="text-sm text-muted-foreground">Réponse rapide</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg text-white text-center">
                                    <div className="text-sm font-semibold">📅 Réunion découverte</div>
                                    <div className="text-xs opacity-90">30 minutes gratuitement</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Formulaire et Coordonnées */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Formulaire */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-foreground mb-4">
                                        Envoyez-nous votre{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                            message
                                        </span>
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Remplissez ce formulaire et nous vous recontacterons sous 24h
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
                                                Nom complet *
                                            </label>
                                            <input
                                                type="text"
                                                id="nom"
                                                name="nom"
                                                required
                                                value={formData.nom}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                placeholder="Votre nom et prénom"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-2">
                                                Téléphone
                                            </label>
                                            <input
                                                type="tel"
                                                id="telephone"
                                                name="telephone"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                placeholder="+33 1 23 45 67 89"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="entreprise" className="block text-sm font-medium text-foreground mb-2">
                                                Entreprise
                                            </label>
                                            <input
                                                type="text"
                                                id="entreprise"
                                                name="entreprise"
                                                value={formData.entreprise}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                placeholder="Nom de votre entreprise"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="sujet" className="block text-sm font-medium text-foreground mb-2">
                                                Sujet de votre demande *
                                            </label>
                                            <select
                                                id="sujet"
                                                name="sujet"
                                                required
                                                value={formData.sujet}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                {sujets.map((sujet, index) => (
                                                    <option key={index} value={sujet}>
                                                        {sujet}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="formation" className="block text-sm font-medium text-foreground mb-2">
                                                Formation intéressée
                                            </label>
                                            <select
                                                id="formation"
                                                name="formation"
                                                value={formData.formation}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                            >
                                                <option value="">Choisissez une formation</option>
                                                {formations.map((formation, index) => (
                                                    <option key={index} value={formation}>
                                                        {formation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Votre message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Décrivez votre projet, vos besoins en formation, vos questions..."
                                        />
                                    </div>

                                    <div className="flex items-center justify-between pt-6">
                                        <div className="text-sm text-muted-foreground">
                                            * Champs obligatoires
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 flex items-center"
                                        >
                                            Envoyer mon message
                                            <Send className="w-5 h-5 ml-2" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                        {/* Coordonnées */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Cartes de contact */}
                            <div className="space-y-6">
                                {coordonnees.map((coordonnee, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform">
                                                <coordonnee.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground mb-2">
                                                    {coordonnee.titre}
                                                </h3>
                                                <p className="text-foreground font-medium whitespace-pre-line mb-2">
                                                    {coordonnee.contenu}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {coordonnee.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Rapides */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-xl font-bold mb-3">
                                    📞 Appel direct
                                </h3>
                                <p className="mb-4 opacity-90">
                                    Parlez directement avec un conseiller formation
                                </p>
                                <a
                                    href="tel:+33123456789"
                                    className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Appeler maintenant
                                </a>
                            </motion.div>

                            {/* Liens rapides */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="bg-card rounded-2xl p-6 border border-border"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-4">
                                    Accès rapide
                                </h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/formations"
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center">
                                            <Briefcase className="w-5 h-5 mr-3 text-amber-600" />
                                            <span>Voir nos formations</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/catalogue"
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center">
                                            <BookOpen className="w-5 h-5 mr-3 text-amber-600" />
                                            <span>Télécharger le catalogue</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center">
                                            <MessageCircle className="w-5 h-5 mr-3 text-amber-600" />
                                            <span>FAQ</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
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
                            Prêt à démarrer votre formation ?
                        </h2>
                        <p className="text-xl mb-8 text-amber-100">
                            Rejoignez nos centaines d'apprenants et développez des compétences recherchées 
                            dans le domaine des technologies géospatiales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+33123456789"
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Nous appeler
                            </a>
                            <Link
                                href="/formations"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center"
                            >
                                <BookOpen className="w-5 h-5 mr-2" />
                                Voir les formations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PrincipaleLayoutSite>
    );
}