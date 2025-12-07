export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
            <div className="container mx-auto px-4 text-center max-w-7xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    ¿Listo para Mudarte Sin Estrés?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
                    Obtén tu presupuesto gratuito hoy y descubre por qué somos la empresa de mudanzas más confiable de Barcelona y Andorra
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <a
                        href="#quote"
                        className="bg-white text-blue-600 px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform w-full sm:w-auto"
                    >
                        📋 Solicitar Presupuesto
                    </a>
                    <a
                        href="https://wa.me/34123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-green-600 transition-all shadow-2xl hover:scale-105 transform w-full sm:w-auto"
                    >
                        💬 Chat en WhatsApp
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-5xl mb-4">⚡</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Respuesta Rápida</h3>
                        <p className="text-blue-100 text-lg">En menos de 2 horas</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-5xl mb-4">💯</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Garantía Total</h3>
                        <p className="text-blue-100 text-lg">100% satisfacción</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-5xl mb-4">🎁</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Descuento Especial</h3>
                        <p className="text-blue-100 text-lg">10% este mes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
