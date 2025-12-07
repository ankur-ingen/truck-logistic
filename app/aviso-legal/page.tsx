import Link from 'next/link';

export const metadata = {
    title: 'Aviso Legal - Mudanzas Sarria',
    description: 'Aviso legal de Mudanzas Sarria',
};

export default function LegalNoticePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
                    ← Volver al inicio
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>

                <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datos Identificativos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la
                            Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
                        </p>
                        <div className="mt-4 text-gray-700 space-y-2">
                            <p><strong>Denominación social:</strong> Mudanzas Sarria S.L.</p>
                            <p><strong>NIF:</strong> B-12345678</p>
                            <p><strong>Domicilio social:</strong> Barcelona, España</p>
                            <p><strong>Correo electrónico:</strong> info@mudanzassarria.com</p>
                            <p><strong>Teléfono:</strong> +34 123 456 789</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Objeto</h2>
                        <p className="text-gray-700 leading-relaxed">
                            El presente aviso legal regula el uso del sitio web www.mudanzassarria.com (en adelante, el Sitio Web),
                            del que es titular Mudanzas Sarria S.L. La navegación por el Sitio Web atribuye la condición de
                            usuario del mismo e implica la aceptación plena de todas las condiciones incluidas en este Aviso Legal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Servicios</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A través de este Sitio Web, Mudanzas Sarria facilita a los usuarios información sobre sus servicios
                            de mudanzas, transporte y almacenamiento. Los servicios incluyen:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                            <li>Mudanzas locales y de larga distancia</li>
                            <li>Servicios de embalaje profesional</li>
                            <li>Almacenamiento seguro</li>
                            <li>Transporte de artículos especiales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilidad</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Mudanzas Sarria no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran
                            derivarse de la falta de disponibilidad o de continuidad del funcionamiento del Sitio Web, así como
                            de los errores en el acceso a las distintas páginas web o a aquellas desde las que se prestan los servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad Intelectual e Industrial</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Todos los contenidos del Sitio Web (textos, fotografías, gráficos, imágenes, iconos, tecnología,
                            software, así como su diseño gráfico y códigos fuente) son propiedad intelectual de Mudanzas Sarria,
                            sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por
                            la normativa vigente en materia de propiedad intelectual.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Ley Aplicable y Jurisdicción</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Las presentes condiciones se regirán por la legislación española. Para la resolución de cualquier
                            controversia derivada de este Aviso Legal, las partes se someten a los Juzgados y Tribunales de Barcelona.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Enlaces</h2>
                        <p className="text-gray-700 leading-relaxed">
                            El Sitio Web puede contener enlaces a otros sitios web. Mudanzas Sarria no asume ninguna
                            responsabilidad por el contenido, política de privacidad o prácticas de sitios web de terceros.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Mudanzas Sarria se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
                            oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se
                            presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
                        </p>
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
