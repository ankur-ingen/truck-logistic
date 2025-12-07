import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Nuestros Servicios - Mudanzas Sarria',
    description: 'Todos nuestros servicios de mudanzas en Barcelona y Andorra',
};

export default function ServicesPage() {
    const services = [
        {
            title: 'Mudanzas Locales',
            description: 'Servicios de mudanza dentro de Barcelona y área metropolitana. Rápido, eficiente y profesional.',
            features: [
                'Servicio el mismo día disponible',
                'Equipo profesional experimentado',
                'Vehículos adaptados para ciudad',
                'Embalaje y desembalaje incluido',
                'Seguro de cobertura completa'
            ],
            image: '/Gemini_Generated_Image_7x1tie7x1tie7x1t (1).png'
        },
        {
            title: 'Mudanzas de Larga Distancia',
            description: 'Transportamos tus pertenencias a cualquier destino en España y Europa, especialmente Barcelona-Andorra.',
            features: [
                'Planificación detallada del traslado',
                'Seguimiento en tiempo real',
                'Embalaje especial para larga distancia',
                'Gestión de trámites aduaneros',
                'Entrega garantizada en fecha'
            ],
            image: '/Gemini_Generated_Image_avh0zwavh0zwavh0 (1).png'
        },
        {
            title: 'Almacenamiento Seguro',
            description: 'Instalaciones de almacenamiento vigiladas 24/7 para guardar tus pertenencias el tiempo que necesites.',
            features: [
                'Vigilancia 24 horas',
                'Control de clima',
                'Acceso flexible',
                'Diferentes tamaños disponibles',
                'Seguro incluido'
            ],
            image: '/Gemini_Generated_Image_bbyzc5bbyzc5bbyz (1).png'
        },
        {
            title: 'Embalaje Profesional',
            description: 'Servicio completo de embalaje con materiales de primera calidad para proteger tus objetos de valor.',
            features: [
                'Materiales de alta calidad',
                'Técnicas profesionales',
                'Etiquetado organizado',
                'Embalaje personalizado',
                'Desembalaje incluido'
            ],
            image: '/Gemini_Generated_Image_lymvfylymvfylymv.png'
        },
        {
            title: 'Transporte de Artículos Especiales',
            description: 'Especialistas en el transporte de pianos, obras de arte, antigüedades y objetos delicados.',
            features: [
                'Equipo especializado',
                'Embalaje a medida',
                'Manipulación cuidadosa',
                'Seguro premium',
                'Montaje y desmontaje'
            ],
            image: '/Gemini_Generated_Image_7x1tie7x1tie7x1t (1).png'
        },
        {
            title: 'Mudanzas de Oficinas',
            description: 'Minimizamos el tiempo de inactividad con una planificación eficiente de mudanzas comerciales.',
            features: [
                'Mudanzas fuera de horario',
                'Planificación empresarial',
                'Desmontaje de mobiliario',
                'Instalación de equipos',
                'Mínima interrupción'
            ],
            image: '/Gemini_Generated_Image_avh0zwavh0zwavh0 (1).png'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="text-white hover:text-blue-200 mb-6 inline-block">
                        ← Volver al inicio
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Nuestros Servicios</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Soluciones completas de mudanza adaptadas a tus necesidades.
                        Desde mudanzas locales hasta transporte internacional.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden`}
                        >
                            <div className="lg:w-1/2">
                                <div className="relative h-80 w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="lg:w-1/2 p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg
                                                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/#contacto"
                                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Solicitar Presupuesto
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        ¿Listo para tu Mudanza Sin Estrés?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contacta con nosotros hoy y recibe tu presupuesto personalizado en menos de 2 horas
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contacto"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Obtener Presupuesto
                        </Link>
                        <a
                            href="https://wa.me/34123456789"
                            className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
                        >
                            Chat por WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    ¿Por Qué Elegirnos?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Puntualidad Garantizada</h3>
                        <p className="text-gray-600">Respetamos tu tiempo. Siempre llegamos cuando lo prometemos.</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">100% Asegurado</h3>
                        <p className="text-gray-600">Tus pertenencias están protegidas con nuestro seguro completo.</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Equipo Profesional</h3>
                        <p className="text-gray-600">Personal capacitado y con años de experiencia en mudanzas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
