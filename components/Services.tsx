export default function Services() {
    const services = [
        {
            title: 'Mudanzas Locales',
            description: 'Servicio completo de mudanzas dentro de Barcelona y alrededores con total garantía.',
            icon: '🏠',
            color: 'from-blue-50 to-blue-100',
            borderColor: 'border-blue-200',
            iconBg: 'bg-blue-500'
        },
        {
            title: 'Mudanzas de Larga Distancia',
            description: 'Transportamos tus pertenencias a cualquier destino nacional e internacional.',
            icon: '🚛',
            color: 'from-green-50 to-green-100',
            borderColor: 'border-green-200',
            iconBg: 'bg-green-500'
        },
        {
            title: 'Unidades de Almacenamiento Seguras',
            description: 'Espacios seguros y climatizados para guardar tus pertenencias el tiempo que necesites.',
            icon: '📦',
            color: 'from-purple-50 to-purple-100',
            borderColor: 'border-purple-200',
            iconBg: 'bg-purple-500'
        },
        {
            title: 'Embalaje Profesional',
            description: 'Servicio de empaquetado profesional con materiales de alta calidad para proteger tus bienes.',
            icon: '📋',
            color: 'from-orange-50 to-orange-100',
            borderColor: 'border-orange-200',
            iconBg: 'bg-orange-500'
        },
        {
            title: 'Transporte de Artículos Especiales',
            description: 'Manejo especializado de pianos, obras de arte, antigüedades y objetos delicados.',
            icon: '🎨',
            color: 'from-pink-50 to-pink-100',
            borderColor: 'border-pink-200',
            iconBg: 'bg-pink-500'
        },
    ];

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                        ¿Qué Servicios Ofrecemos?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Soluciones completas de mudanza adaptadas a tus necesidades
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 ${service.borderColor} cursor-pointer`}
                        >
                            <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="/servicios"
                        className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform"
                    >
                        Ver Todos los Servicios
                    </a>
                </div>
            </div>
        </section>
    );
}
