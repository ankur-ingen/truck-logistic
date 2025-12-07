import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Gemini_Generated_Image_7x1tie7x1tie7x1t (1).png"
                    alt="Mudanzas profesionales"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                {/* Promotional Banner */}
                <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-6 font-semibold animate-pulse">
                    🎉 ¡10% DE DESCUENTO en todas las mudanzas reservadas este mes!
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Servicios Profesionales de Mudanzas
                    <br />
                    en Barcelona y Andorra
                </h1>

                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    No transportamos cajas… transportamos sueños.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#quote"
                        className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 w-full sm:w-auto"
                    >
                        Solicitar Presupuesto
                    </a>
                    <a
                        href="tel:+34123456789"
                        className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 w-full sm:w-auto"
                    >
                        📞 Llamar Ahora
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
