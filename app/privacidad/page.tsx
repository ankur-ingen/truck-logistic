import Link from 'next/link';

export const metadata = {
    title: 'Política de Privacidad - Mudanzas Sarria',
    description: 'Política de privacidad de Mudanzas Sarria',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
                    ← Volver al inicio
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

                <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información General</h2>
                        <p className="text-gray-700 leading-relaxed">
                            En Mudanzas Sarria, nos comprometemos a proteger la privacidad de nuestros clientes. Esta política
                            explica cómo recopilamos, usamos y protegemos su información personal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Información que Recopilamos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Recopilamos la siguiente información cuando utiliza nuestros servicios:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Nombre completo y datos de contacto (teléfono, email)</li>
                            <li>Direcciones de origen y destino de la mudanza</li>
                            <li>Fecha y detalles del servicio solicitado</li>
                            <li>Información de pago para procesar transacciones</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso de la Información</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Utilizamos su información personal para:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                            <li>Proporcionar y gestionar nuestros servicios de mudanza</li>
                            <li>Comunicarnos con usted sobre su solicitud</li>
                            <li>Procesar pagos y emitir facturas</li>
                            <li>Mejorar nuestros servicios y experiencia del cliente</li>
                            <li>Cumplir con obligaciones legales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protección de Datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal
                            contra acceso no autorizado, pérdida o alteración. Sus datos se almacenan en servidores seguros
                            y se transmiten mediante conexiones cifradas (SSL/HTTPS).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartir Información</h2>
                        <p className="text-gray-700 leading-relaxed">
                            No vendemos ni compartimos su información personal con terceros, excepto cuando sea necesario
                            para proporcionar nuestros servicios (por ejemplo, proveedores de almacenamiento o transporte)
                            o cuando la ley lo requiera.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sus Derechos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Conforme al RGPD, usted tiene derecho a:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Acceder a sus datos personales</li>
                            <li>Rectificar datos incorrectos o incompletos</li>
                            <li>Solicitar la eliminación de sus datos</li>
                            <li>Oponerse al procesamiento de sus datos</li>
                            <li>Solicitar la portabilidad de sus datos</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede consultar nuestra
                            <Link href="/cookies" className="text-blue-600 hover:text-blue-700"> Política de Cookies </Link>
                            para más información.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Para cualquier consulta sobre esta política de privacidad o para ejercer sus derechos,
                            puede contactarnos en:
                        </p>
                        <div className="mt-4 text-gray-700">
                            <p><strong>Email:</strong> privacidad@mudanzassarria.com</p>
                            <p><strong>Teléfono:</strong> +34 123 456 789</p>
                            <p><strong>Dirección:</strong> Barcelona, España</p>
                        </div>
                    </section>

                    <section>
                        <p className="text-gray-600 text-sm mt-8">
                            Última actualización: Diciembre 2025
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
