import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        formations: [
            { name: 'Cartographie', href: '/formations/cartographie' },
            { name: 'Drone', href: '/formations/drone' },
            { name: 'Télédétection', href: '/formations/teledetection' },
        ],
        entreprise: [
            { name: 'À propos', href: '/about' },
            { name: 'Actualités', href: '/blog' },
            { name: 'Témoignages', href: '/temoignages' },
            { name: 'Contact', href: '/contact' },
        ],
        legal: [
            { name: 'Mentions légales', href: '/mentions-legales' },
            { name: 'Politique de confidentialité', href: '/confidentialite' },
            { name: 'CGV', href: '/cgv' },
            { name: 'Cookies', href: '/cookies' },
        ],
    };

    const contactInfo = [
        { icon: Phone, text: '+33 1 23 45 67 89', href: 'tel:+33123456789' },
        { icon: Mail, text: 'contact@geoformation.fr', href: 'mailto:contact@geoformation.fr' },
        { icon: MapPin, text: '123 Avenue de la Géomatique, 75001 Paris', href: '#' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <footer className="">
            {/* Section principale */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* À propos */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-slate-200">
                                <span className="text-white font-bold text-lg">G</span>
                            </div>
                            <span className="font-bold text-xl text-amber-500">GeoFormation</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Expert en formations géomatiques depuis plus de 10 ans. Nous accompagnons les professionnels dans leur montée en compétences.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Formations */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold text-lg mb-4 ">Formations</h3>
                        <ul className="space-y-2">
                            {footerLinks.formations.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Entreprise */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold text-lg mb-4 ">Entreprise</h3>
                        <ul className="space-y-2">
                            {footerLinks.entreprise.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold text-lg mb-4 ">Contact</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <li key={index}>
                                    <a
                                        href={info.href}
                                        className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm flex items-start group"
                                    >
                                        <info.icon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                        <span>{info.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Séparateur */}
            <div className="border-t border-slate-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Newsletter */}
                    <motion.div
                        className="py-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="max-w-xl mx-auto text-center">
                            <h3 className="font-semibold text-lg mb-2 ">Restez informé</h3>
                            <p className="text-slate-400 text-sm mb-4">
                                Recevez nos dernières actualités et offres de formation
                            </p>
                            <form className="flex flex-col sm:flex-row gap-2">
                                <Input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    className="flex-1 px-6 py-2  rounded-lg"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-200"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    S'inscrire
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            © {currentYear} GeoFormation. Tous droits réservés.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {footerLinks.legal.map((link, index) => (
                                <React.Fragment key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                    {index < footerLinks.legal.length - 1 && (
                                        <span className="text-slate-600">•</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;