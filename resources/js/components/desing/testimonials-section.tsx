import { motion } from 'framer-motion';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Marie D.',
            role: 'Cartographe - Formation Cartographie',
            content: 'La formation m\'a permis de maîtriser QGIS et les SIG en seulement 3 mois. Je suis maintenant en CDI dans un bureau d\'études.',
            avatar: '👩‍💻'
        },
        {
            name: 'Thomas L.',
            role: 'Télépilote - Formation Drone',
            content: 'Excellente formation pratique avec des formateurs experts. J\'ai obtenu mon attestation et lance mon activité de photogrammétrie.',
            avatar: '👨‍🚀'
        },
        {
            name: 'Sarah K.',
            role: 'Géomaticienne - Formation Télédétection',
            content: 'Les compétences acquises en analyse d\'images satellites sont très recherchées. J\'ai doublé mon salaire après la formation.',
            avatar: '👩‍🔬'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br border-b-2 border-amber-100 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Ils nous font 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                            {' confiance'}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-card rounded-2xl p-6 shadow-lg border border-amber-100"
                        >
                            {/* Étoiles */}
                            <div className="flex text-amber-400 mb-4">
                                {'★★★★★'.split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>

                            <p className="text-foreground mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}