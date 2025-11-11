import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'À propos', href: '/about' },
        { 
            name: 'Formations', 
            href: '/formations',
            submenu: [
                { name: 'Cartographie', href: '/formations/cartographie' },
                { name: 'Drone', href: '/formations/drone' },
                { name: 'Télédétection', href: '/formations/teledetection' }
            ]
        },
        { name: 'Actualités', href: '/blog' },
        { name: 'Témoignages', href: '/temoignages' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled 
                    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
                    : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">G</span>
                            </div>
                            <span className={cn(
                                "font-bold text-xl transition-colors",
                                isScrolled ? "text-primary" : "text-amber-500 opacity-100"
                            )}>
                                GeoFormation
                            </span>
                        </Link>
                    </motion.div>

                    {/* Navigation Desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div 
                                key={item.name} 
                                className="relative"
                                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium transition-all duration-200 relative block",
                                        isScrolled 
                                            ? "text-foreground hover:text-primary" 
                                            : "text-amber-600 hover:text-primary"
                                    )}
                                >
                                    {item.name}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                                        initial={{ width: 0 }}
                                        animate={{ width: activeSubmenu === item.name || item.submenu ? "0%" : "0%" }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                                
                                {/* Sous-menu pour Formations */}
                                <AnimatePresence>
                                    {item.submenu && activeSubmenu === item.name && (
                                        <motion.div
                                            className="absolute top-full left-0 mt-0 w-56 bg-background/98 backdrop-blur-md rounded-lg shadow-xl border border-border overflow-hidden"
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ 
                                                duration: 0.2,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <div className="py-2">
                                                {item.submenu.map((subItem, index) => (
                                                    <motion.div
                                                        key={subItem.name}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ 
                                                            delay: index * 0.05,
                                                            duration: 0.2 
                                                        }}
                                                    >
                                                        <Link
                                                            href={subItem.href}
                                                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors relative group"
                                                        >
                                                            <span className="relative z-10">{subItem.name}</span>
                                                            <motion.div
                                                                className="absolute left-0 top-0 h-full w-1 bg-primary"
                                                                initial={{ scaleY: 0 }}
                                                                whileHover={{ scaleY: 1 }}
                                                                transition={{ duration: 0.2 }}
                                                            />
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        
                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg"
                            >
                                Demander un devis
                            </Link>
                        </motion.div>
                    </div>

                    {/* Menu Mobile Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                isScrolled 
                                    ? "text-foreground hover:bg-muted" 
                                    : "text-blue-950 hover:bg-blue-950/10"
                            )}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="block h-0.5 w-6 bg-current transition-all"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="block h-0.5 w-6 bg-current transition-all"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className="block h-0.5 w-6 bg-current transition-all"
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Menu Mobile */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="lg:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-4 pt-2 pb-4 space-y-1">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <div className="ml-4 mt-1 space-y-1">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-2">
                                    <Link
                                        href="/contact"
                                        className="block w-full bg-primary text-primary-foreground px-3 py-2 text-center rounded-md text-base font-medium hover:bg-primary/90 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Demander un devis
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;