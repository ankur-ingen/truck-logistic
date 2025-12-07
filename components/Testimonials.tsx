'use client';

import { useState } from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'María González',
            initials: 'MG',
            rating: 5,
            comment: 'Excelente servicio. El equipo fue muy profesional y cuidadoso con todos nuestros muebles. La mudanza de Barcelona a Andorra fue perfecta.',
            location: 'Barcelona',
        },
        {
            name: 'Carlos Rodríguez',
            initials: 'CR',
            rating: 5,
            comment: 'Muy recomendable. Puntualidad, eficiencia y buen precio. No tuve ningún problema y todo llegó en perfectas condiciones.',
            location: 'Andorra',
        },
        {
            name: 'Laura Martínez',
            initials: 'LM',
            rating: 5,
            comment: 'La mejor empresa de mudanzas que he contratado. Personal amable, servicio rápido y precios competitivos. ¡Volveré a contratarlos sin duda!',
            location: 'Barcelona',
        },
        {
            name: 'Jordi Puig',
            initials: 'JP',
            rating: 5,
            comment: 'Increíble atención al cliente. Resolvieron todas mis dudas y la mudanza fue más rápida de lo esperado. Muy satisfecho con el servicio.',
            location: 'Girona',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Experiencias Reales de Clientes
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100">
                        Lo que dicen nuestros clientes satisfechos
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-6xl text-blue-200 opacity-50">"</div>

                        {/* Avatar */}
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                                {currentTestimonial.initials}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                                <p className="text-gray-600">{currentTestimonial.location}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex mb-4">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-6 h-6 text-yellow-400 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>

                        {/* Comment */}
                        <p className="text-lg leading-relaxed mb-6">
                            {currentTestimonial.comment}
                        </p>

                        {/* Navigation */}
                        <div className="flex justify-between items-center">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition"
                                aria-label="Anterior testimonio"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                            }`}
                                        aria-label={`Ir al testimonio ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition"
                                aria-label="Siguiente testimonio"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#contact"
                            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform"
                        >
                            Leer Más Opiniones
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
